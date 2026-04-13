import Link from "next/link";
import { coinbaseOAuthReady } from "@/lib/auth/coinbase";

const btnPrimary =
  "tc-tap justify-center rounded-xl border border-wf-green bg-wf-green px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-wf-green-hover sm:px-8 sm:py-4 sm:text-base";

const btnOutline =
  "tc-tap justify-center rounded-xl border-2 border-wf-border bg-wf-white px-6 py-3.5 text-center text-sm font-semibold text-wf-ink transition hover:border-wf-green hover:bg-wf-cream/40 sm:px-8 sm:py-3.5 sm:text-base";

/** Full-viewport section 4 — member access (homepage only). */
export async function AccountCtaSection() {
  const oauthReady = coinbaseOAuthReady();

  return (
    <section
      className="flex min-h-[100dvh] w-full flex-col justify-center border-b border-wf-border bg-wf-sage py-16 sm:py-20"
      aria-labelledby="account-cta-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-wf-border bg-wf-white">
          <div className="grid grid-cols-1 items-center gap-0 lg:grid-cols-2">
            <div className="px-6 py-10 text-left sm:px-10 sm:py-12 lg:px-12 lg:py-14">
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-wf-green">
                Ready when you are
              </p>
              <h2
                id="account-cta-heading"
                className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-wf-ink sm:text-4xl lg:text-[2.35rem] lg:leading-[1.12]"
              >
                Start buying and selling on Town &amp; Cattle
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-wf-muted sm:text-lg">
                Create a free account to unlock the marketplace, save your fulfillment
                details, and stay in sync with the ranches you trust.
              </p>
            </div>

            <div className="flex min-w-0 flex-col gap-5 border-t border-wf-border bg-wf-cream/50 px-6 py-10 sm:px-10 sm:py-12 lg:border-l lg:border-t-0 lg:px-12 lg:py-14">
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
                  <p className="text-center text-sm text-wf-muted sm:text-left">
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
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
