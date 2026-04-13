import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { coinbaseOAuthReady } from "@/lib/auth/coinbase";
import { getTcSession } from "@/lib/auth/session";
import { completeAccountProfile } from "./actions";

export const metadata: Metadata = {
  title: "Create account | Town & Cattle",
  description:
    "Sign up with Coinbase OAuth2 and complete your Town & Cattle buyer profile.",
  alternates: { canonical: "/create-account" },
};

function errorMessage(code: string): string {
  const map: Record<string, string> = {
    oauth_not_configured:
      "Coinbase OAuth is not configured yet. Add CDP credentials to the server environment.",
    not_signed_in: "Sign in with Coinbase before completing your profile.",
    session_expired:
      "Your sign-in session expired. Please start again with Coinbase.",
    invalid_zip: "Use a valid US ZIP (12345 or 12345-6789).",
    missing_code_or_state: "Coinbase did not return a valid authorization code.",
    invalid_state: "Security check failed (state mismatch). Try signing in again.",
    missing_code_verifier: "PKCE session was lost. Clear cookies and retry.",
  };
  return map[code] ?? decodeURIComponent(code).slice(0, 200);
}

export default async function CreateAccountPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;
  const errRaw = sp.error;
  const error =
    typeof errRaw === "string" ? errRaw : Array.isArray(errRaw) ? errRaw[0] : undefined;
  const signedOut = sp.signed_out === "1";

  const session = await getTcSession();
  const oauthReady = coinbaseOAuthReady();

  if (session.user?.profileCompletedAt) {
    redirect("/market");
  }

  const showProfile = Boolean(session.user && !session.user.profileCompletedAt);

  return (
    <section className="w-full border-b border-wf-border bg-wf-cream py-14 sm:py-20 lg:py-28">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-semibold text-wf-ink sm:text-4xl">
          Create your account
        </h1>
        <p className="mt-3 text-wf-muted">
          Coinbase verifies identity; Town &amp; Cattle stores an encrypted
          session and your fulfillment preferences—never your Coinbase access
          token in the browser.
        </p>

        {signedOut && (
          <p
            className="mt-6 rounded-2xl border border-wf-border bg-wf-white px-4 py-3 text-sm text-wf-ink"
            role="status"
          >
            You are signed out.
          </p>
        )}

        {error && (
          <p
            className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900"
            role="alert"
          >
            {errorMessage(error)}
          </p>
        )}

        {!showProfile && (
          <div className="mt-10 space-y-8 rounded-3xl border border-wf-border bg-wf-white p-8 shadow-sm">
            <div>
              <h2 className="font-display text-xl font-semibold text-wf-ink">
                Step 1 — Authorize with Coinbase
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-wf-muted">
                We request the{" "}
                <code className="rounded bg-wf-cream px-1 text-xs">
                  wallet:user:read
                </code>{" "}
                scope to read your Coinbase profile ID and email. PKCE protects
                the authorization code on public clients. Tokens are exchanged
                only on the server and are not persisted in cookies.
              </p>
            </div>
            <ol className="list-decimal space-y-2 pl-5 text-sm text-wf-muted">
              <li>Redirect to Coinbase login and consent screen.</li>
              <li>Coinbase returns an authorization code to our callback URL.</li>
              <li>
                Server exchanges the code (with your client secret) and loads
                your profile.
              </li>
              <li>We seal your user id and email into an httpOnly iron-session cookie.</li>
            </ol>
            {oauthReady ? (
              <a
                href="/api/auth/coinbase"
                className="tc-tap inline-flex w-full justify-center rounded-full bg-wf-green px-8 text-sm font-semibold text-white shadow-sm transition hover:bg-wf-green-hover sm:w-auto"
              >
                Continue with Coinbase
              </a>
            ) : (
              <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">
                Set{" "}
                <code className="rounded bg-white px-1">COINBASE_CLIENT_ID</code>
                ,{" "}
                <code className="rounded bg-white px-1">
                  COINBASE_CLIENT_SECRET
                </code>
                ,{" "}
                <code className="rounded bg-white px-1">
                  IRON_SESSION_PASSWORD
                </code>{" "}
                (32+ chars), and{" "}
                <code className="rounded bg-white px-1">
                  NEXT_PUBLIC_APP_URL
                </code>{" "}
                to enable this button in production.
              </p>
            )}
            <p className="text-xs text-wf-muted">
              By continuing you agree to Coinbase&apos;s terms and acknowledge
              Town &amp; Cattle&apos;s use of your profile for account creation
              only. See also our contact section for data requests.
            </p>
          </div>
        )}

        {showProfile && (
          <div className="mt-10 space-y-6 rounded-3xl border border-wf-border bg-wf-white p-8 shadow-sm">
            <div>
              <h2 className="font-display text-xl font-semibold text-wf-ink">
                Step 2 — Fulfillment profile
              </h2>
              <p className="mt-2 text-sm text-wf-muted">
                Signed in as{" "}
                <strong className="text-wf-ink">
                  {session.user?.email ?? session.user?.name ?? "Coinbase user"}
                </strong>
                . Add logistics preferences so we can route cold-chain and
                compliance notices.
              </p>
            </div>

            <form action={completeAccountProfile} className="space-y-5">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-wf-ink"
                >
                  Mobile phone (SMS alerts)
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+1 · optional"
                  className="mt-2 w-full rounded-2xl border border-wf-border bg-wf-cream px-4 py-3 text-base text-wf-ink focus:border-wf-green focus:outline-none focus:ring-2 focus:ring-wf-green/25"
                />
              </div>
              <div>
                <label
                  htmlFor="zip"
                  className="block text-sm font-medium text-wf-ink"
                >
                  Primary fulfillment ZIP
                </label>
                <input
                  id="zip"
                  name="zip"
                  type="text"
                  inputMode="numeric"
                  autoComplete="postal-code"
                  placeholder="78624"
                  className="mt-2 w-full rounded-2xl border border-wf-border bg-wf-cream px-4 py-3 text-base text-wf-ink focus:border-wf-green focus:outline-none focus:ring-2 focus:ring-wf-green/25"
                />
              </div>
              <fieldset className="space-y-3">
                <legend className="text-sm font-medium text-wf-ink">
                  Notifications
                </legend>
                <label className="flex cursor-pointer items-start gap-3 text-sm text-wf-muted">
                  <input
                    type="checkbox"
                    name="marketingEmail"
                    className="mt-1 h-4 w-4 rounded border-wf-border text-wf-green"
                  />
                  Email me harvest windows, limited cuts, and supplier openings.
                </label>
                <label className="flex cursor-pointer items-start gap-3 text-sm text-wf-muted">
                  <input
                    type="checkbox"
                    name="smsAlerts"
                    className="mt-1 h-4 w-4 rounded border-wf-border text-wf-green"
                  />
                  SMS for order-ready and delivery exceptions only.
                </label>
              </fieldset>
              <button
                type="submit"
                className="tc-tap w-full justify-center rounded-full bg-wf-ink px-8 text-sm font-semibold text-white transition hover:bg-wf-ink-deep sm:w-auto"
              >
                Save profile &amp; open account
              </button>
            </form>
          </div>
        )}

        <p className="mt-10 text-center text-sm text-wf-muted">
          <Link href="/" className="font-semibold text-wf-green hover:underline">
            ← Back to home
          </Link>
        </p>
      </div>
    </section>
  );
}
