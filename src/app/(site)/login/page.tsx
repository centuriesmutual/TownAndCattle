import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { coinbaseOAuthReady } from "@/lib/auth/coinbase";
import { getTcSession } from "@/lib/auth/session";

export const metadata: Metadata = {
  title: "Log in | Town & Cattle",
  description: "Sign in with Coinbase to access your Town & Cattle account.",
  alternates: { canonical: "/login" },
};

export default async function LoginPage() {
  const session = await getTcSession();

  if (session.user?.profileCompletedAt) {
    redirect("/account");
  }

  if (session.user && !session.user.profileCompletedAt) {
    redirect("/create-account?step=profile");
  }

  const oauthReady = coinbaseOAuthReady();

  return (
    <section className="w-full border-b border-wf-border bg-wf-cream py-14 sm:py-20 lg:py-28">
      <div className="mx-auto w-full max-w-md px-4 sm:px-6 lg:px-8">
        <h1 className="text-center font-display text-3xl font-semibold text-wf-ink sm:text-4xl">
          Log in
        </h1>
        <p className="mt-3 text-center text-sm text-wf-muted">
          Use your Coinbase account. We never see your password—only the profile
          scopes you approve.
        </p>

        <div className="mt-10 space-y-6 rounded-3xl border border-wf-border bg-wf-white p-8 shadow-sm">
          {oauthReady ? (
            <a
              href="/api/auth/coinbase"
              className="tc-tap flex w-full justify-center rounded-full bg-wf-green px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-wf-green-hover"
            >
              Continue with Coinbase
            </a>
          ) : (
            <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-center text-sm text-amber-950">
              OAuth is not configured. Add Coinbase CDP credentials and session
              secrets per <code className="text-xs">.env.example</code>.
            </p>
          )}
          <p className="text-center text-xs text-wf-muted">
            New here?{" "}
            <Link href="/create-account" className="font-semibold text-wf-green hover:underline">
              Create an account
            </Link>{" "}
            (same Coinbase sign-in, then complete your profile).
          </p>
        </div>

        <p className="mt-10 text-center text-sm text-wf-muted">
          <Link href="/" className="font-semibold text-wf-green hover:underline">
            ← Back to home
          </Link>
        </p>
      </div>
    </section>
  );
}
