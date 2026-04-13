import Link from "next/link";
import { coinbaseOAuthReady } from "@/lib/auth/coinbase";

const benefits = [
  "Shop verified ranch inventory with clear grades and pricing",
  "Track orders and messages in one secure dashboard",
  "Sign in with Coinbase when you want the fastest path to checkout",
];

/** Full-viewport section 4 — member access (homepage only). */
export async function AccountCtaSection() {
  const oauthReady = coinbaseOAuthReady();

  return (
    <section
      className="flex min-h-[100dvh] w-full flex-col justify-center border-b border-wf-border bg-wf-sage py-16 sm:py-20"
      aria-labelledby="account-cta-heading"
    >
      <div className="mx-auto w-full max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="border border-wf-border bg-wf-white px-8 py-12 text-center sm:px-12 sm:py-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-wf-green">
            Ready when you are
          </p>
          <h2
            id="account-cta-heading"
            className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-wf-ink sm:text-4xl"
          >
            Start buying and selling on Town &amp; Cattle
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-wf-muted sm:text-lg">
            Create a free account to unlock the marketplace, save your fulfillment
            details, and stay in sync with the ranches you trust.
          </p>

          <ul className="mx-auto mt-10 max-w-md space-y-3 text-left text-sm leading-relaxed text-wf-ink sm:text-base">
            {benefits.map((line) => (
              <li key={line} className="flex gap-3">
                <span
                  className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-wf-green"
                  aria-hidden
                />
                <span>{line}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-col items-stretch gap-3 sm:items-center">
            {oauthReady ? (
              <>
                <a
                  href="/api/auth/coinbase"
                  className="tc-tap w-full justify-center rounded-md border border-wf-green bg-wf-green px-8 py-4 text-center text-base font-semibold text-white transition hover:bg-wf-green-hover sm:w-full sm:max-w-md"
                >
                  Sign in with Coinbase
                </a>
                <Link
                  href="/create-account"
                  className="tc-tap w-full justify-center rounded-md border-2 border-wf-border bg-wf-white px-8 py-3.5 text-center text-base font-semibold text-wf-ink transition hover:border-wf-green sm:w-full sm:max-w-md"
                >
                  Create account
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/create-account"
                  className="tc-tap w-full justify-center rounded-md border border-wf-green bg-wf-green px-8 py-4 text-center text-base font-semibold text-white transition hover:bg-wf-green-hover sm:w-full sm:max-w-md"
                >
                  Create account
                </Link>
                <Link
                  href="/login"
                  className="tc-tap w-full justify-center rounded-md border-2 border-wf-border bg-wf-white px-8 py-3.5 text-center text-base font-semibold text-wf-ink transition hover:border-wf-green sm:w-full sm:max-w-md"
                >
                  Log in
                </Link>
                <p className="mt-2 max-w-md text-sm text-wf-muted">
                  One-tap Coinbase sign-in is not enabled on this deployment yet—you
                  can still register and sign in here.
                </p>
              </>
            )}
          </div>

          {oauthReady && (
            <p className="mt-8 text-sm text-wf-muted">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-wf-green underline-offset-4 hover:underline"
              >
                Log in
              </Link>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
