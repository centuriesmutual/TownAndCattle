import Link from "next/link";
import { coinbaseOAuthReady } from "@/lib/auth/coinbase";

const benefits = [
  "Shop verified ranch inventory with clear grades and pricing",
  "Track orders and messages in one secure dashboard",
  "Sign in with Coinbase when you want the fastest path to checkout",
];

const btnPrimary =
  "tc-tap justify-center rounded-md border border-wf-green bg-wf-green px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-wf-green-hover sm:px-8 sm:py-4 sm:text-base";

const btnOutline =
  "tc-tap justify-center rounded-md border-2 border-wf-border bg-wf-white px-6 py-3.5 text-center text-sm font-semibold text-wf-ink transition hover:border-wf-green sm:px-8 sm:py-3.5 sm:text-base";

/** Full-viewport section 4 — member access (homepage only). */
export async function AccountCtaSection() {
  const oauthReady = coinbaseOAuthReady();

  return (
    <section
      className="flex min-h-[100dvh] w-full flex-col justify-center border-b border-wf-border bg-wf-sage py-16 sm:py-20"
      aria-labelledby="account-cta-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="border border-wf-border bg-wf-white px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14 lg:items-center">
            <div className="text-left">
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-wf-green">
                Ready when you are
              </p>
              <h2
                id="account-cta-heading"
                className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-wf-ink sm:text-4xl"
              >
                Start buying and selling on Town &amp; Cattle
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-wf-muted sm:text-lg">
                Create a free account to unlock the marketplace, save your fulfillment
                details, and stay in sync with the ranches you trust.
              </p>

              <ul className="mt-8 max-w-xl space-y-3 text-sm leading-relaxed text-wf-ink sm:text-base">
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
            </div>

            <div className="flex min-w-0 flex-col gap-4 lg:max-w-none">
              {oauthReady ? (
                <>
                  <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a href="/api/auth/coinbase" className={`${btnPrimary} sm:min-w-[200px] sm:flex-1`}>
                      Sign in with Coinbase
                    </a>
                    <Link
                      href="/create-account"
                      className={`${btnOutline} sm:min-w-[200px] sm:flex-1`}
                    >
                      Create account
                    </Link>
                  </div>
                  <p className="text-sm text-wf-muted">
                    Already have an account?{" "}
                    <Link
                      href="/login"
                      className="font-semibold text-wf-green underline-offset-4 hover:underline"
                    >
                      Log in
                    </Link>
                  </p>
                </>
              ) : (
                <>
                  <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <Link
                      href="/create-account"
                      className={`${btnPrimary} sm:min-w-[200px] sm:flex-1`}
                    >
                      Create account
                    </Link>
                    <Link href="/login" className={`${btnOutline} sm:min-w-[200px] sm:flex-1`}>
                      Log in
                    </Link>
                  </div>
                  <p className="max-w-md text-sm leading-relaxed text-wf-muted">
                    One-tap Coinbase sign-in is not enabled on this deployment yet—you
                    can still register and sign in here.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
