import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getTcSession } from "@/lib/auth/session";

export const metadata: Metadata = {
  title: "Your account | Town & Cattle",
  robots: { index: false, follow: false },
  alternates: { canonical: "/account" },
};

export default async function AccountPage() {
  const session = await getTcSession();

  if (!session.user?.coinbaseId) {
    redirect("/create-account");
  }

  if (!session.user.profileCompletedAt) {
    redirect("/create-account");
  }

  const { user, profile } = session;

  return (
    <section className="w-full border-b border-wf-border bg-wf-cream py-14 sm:py-20 lg:py-28">
      <div className="mx-auto w-full max-w-2xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-semibold text-wf-ink">
          Your account
        </h1>
        <p className="mt-2 text-sm text-wf-muted">
          Session is sealed in an httpOnly cookie. Sign out clears it on this
          device.
        </p>

        <dl className="mt-10 space-y-4 rounded-3xl border border-wf-border bg-wf-white p-8 shadow-sm">
          <div>
            <dt className="text-xs font-bold uppercase tracking-wider text-wf-muted">
              Coinbase user ID
            </dt>
            <dd className="mt-1 font-mono text-sm text-wf-ink">{user.coinbaseId}</dd>
          </div>
          {user.email && (
            <div>
              <dt className="text-xs font-bold uppercase tracking-wider text-wf-muted">
                Email
              </dt>
              <dd className="mt-1 text-wf-ink">{user.email}</dd>
            </div>
          )}
          {user.name && (
            <div>
              <dt className="text-xs font-bold uppercase tracking-wider text-wf-muted">
                Name
              </dt>
              <dd className="mt-1 text-wf-ink">{user.name}</dd>
            </div>
          )}
          {profile?.phone && (
            <div>
              <dt className="text-xs font-bold uppercase tracking-wider text-wf-muted">
                Phone
              </dt>
              <dd className="mt-1 text-wf-ink">{profile.phone}</dd>
            </div>
          )}
          {profile?.zip && (
            <div>
              <dt className="text-xs font-bold uppercase tracking-wider text-wf-muted">
                ZIP
              </dt>
              <dd className="mt-1 text-wf-ink">{profile.zip}</dd>
            </div>
          )}
          <div>
            <dt className="text-xs font-bold uppercase tracking-wider text-wf-muted">
              Marketing email
            </dt>
            <dd className="mt-1 text-wf-ink">
              {profile?.marketingEmail ? "Opted in" : "Opted out"}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-bold uppercase tracking-wider text-wf-muted">
              SMS alerts
            </dt>
            <dd className="mt-1 text-wf-ink">
              {profile?.smsAlerts ? "Opted in" : "Opted out"}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-bold uppercase tracking-wider text-wf-muted">
              Profile completed
            </dt>
            <dd className="mt-1 font-mono text-sm text-wf-ink">
              {user.profileCompletedAt}
            </dd>
          </div>
        </dl>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <Link
            href="/market"
            className="tc-tap justify-center rounded-full bg-wf-green px-8 text-sm font-semibold text-white transition hover:bg-wf-green-hover"
          >
            Farmers market
          </Link>
          <Link
            href="/marketplace"
            className="tc-tap justify-center rounded-full border-2 border-wf-border px-8 text-sm font-semibold text-wf-ink transition hover:border-wf-green"
          >
            Marketplace
          </Link>
          <form action="/api/auth/logout" method="post">
            <button
              type="submit"
              className="tc-tap w-full justify-center rounded-full border-2 border-wf-border px-8 text-sm font-semibold text-wf-ink transition hover:border-red-300 hover:text-red-800 sm:w-auto"
            >
              Sign out
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
