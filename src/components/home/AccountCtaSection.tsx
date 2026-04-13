import Link from "next/link";
import { coinbaseOAuthReady } from "@/lib/auth/coinbase";

export async function AccountCtaSection() {
  const oauthReady = coinbaseOAuthReady();

  return (
    <section
      className="w-full border-b border-wf-border bg-wf-sage-deep/40 py-16 sm:py-20 lg:py-28"
      aria-labelledby="account-cta-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-wf-border bg-wf-white p-8 shadow-sm sm:p-12 lg:p-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-wf-green">
            Member access
          </p>
          <h2
            id="account-cta-heading"
            className="tc-section-title mt-3 font-display font-semibold text-wf-ink"
          >
            Create your Town &amp; Cattle account
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-wf-muted sm:text-lg">
            Sign in with Coinbase to align checkout, payouts, and identity in one
            place. We use Coinbase App OAuth2 with{" "}
            <strong className="font-semibold text-wf-ink">PKCE</strong>, store an
            encrypted session cookie only (no access tokens in the browser), and
            ask for a short fulfillment profile so we can route orders and
            compliance notices correctly.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "OAuth2 authorization via Coinbase (CDP-registered app)",
              "Server-side token exchange; session sealed with iron-session",
              "Profile capture: contact, ZIP, marketing & SMS preferences",
              "Sign out revokes the sealed session cookie immediately",
            ].map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-2xl border border-wf-border bg-wf-cream/80 px-4 py-3 text-sm text-wf-muted"
              >
                <span
                  className="mt-0.5 inline-block h-2 w-2 shrink-0 rounded-full bg-wf-green"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            {oauthReady ? (
              <a
                href="/api/auth/coinbase"
                className="tc-tap justify-center rounded-full bg-wf-green px-10 text-sm font-semibold text-white shadow-sm transition hover:bg-wf-green-hover"
              >
                Continue with Coinbase
              </a>
            ) : (
              <span className="tc-tap cursor-not-allowed justify-center rounded-full bg-wf-muted/30 px-10 text-sm font-semibold text-wf-muted">
                Continue with Coinbase (configure OAuth)
              </span>
            )}
            <Link
              href="/create-account"
              className="tc-tap justify-center rounded-full border-2 border-wf-green px-10 text-sm font-semibold text-wf-green transition hover:bg-wf-green/10"
            >
              Open full sign-up workflow
            </Link>
            <Link
              href="/login"
              className="tc-tap justify-center rounded-full border-2 border-wf-border px-10 text-sm font-semibold text-wf-ink transition hover:border-wf-green"
            >
              Log in
            </Link>
          </div>

          {!oauthReady && (
            <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-950">
              <p className="font-semibold text-amber-950">
                Production checklist — Coinbase CDP
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-amber-900/90">
                <li>
                  Create an OAuth2 client in Coinbase Developer Platform and set
                  the redirect URI to{" "}
                  <code className="rounded bg-white/80 px-1 py-0.5 text-xs">
                    {"{NEXT_PUBLIC_APP_URL}/api/auth/coinbase/callback"}
                  </code>
                  .
                </li>
                <li>
                  Add{" "}
                  <code className="rounded bg-white/80 px-1 py-0.5 text-xs">
                    COINBASE_CLIENT_ID
                  </code>{" "}
                  and{" "}
                  <code className="rounded bg-white/80 px-1 py-0.5 text-xs">
                    COINBASE_CLIENT_SECRET
                  </code>{" "}
                  to your environment (never commit secrets).
                </li>
                <li>
                  Set{" "}
                  <code className="rounded bg-white/80 px-1 py-0.5 text-xs">
                    IRON_SESSION_PASSWORD
                  </code>{" "}
                  (32+ characters) and{" "}
                  <code className="rounded bg-white/80 px-1 py-0.5 text-xs">
                    NEXT_PUBLIC_APP_URL
                  </code>{" "}
                  to your public site origin.
                </li>
              </ol>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
