import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { coinbaseOAuthReady } from "@/lib/auth/coinbase";
import { getTcSession } from "@/lib/auth/session";
import { signInAsGuest } from "./actions";
import { EmailSignInForm } from "./EmailSignInForm";

export const metadata: Metadata = {
  title: "Log in | Town & Cattle",
  description:
    "Sign in with Coinbase, email, or browse the farmers market as a guest—then shop with your in-app wallet.",
  alternates: { canonical: "/login" },
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const session = await getTcSession();
  const sp = await searchParams;
  const signedOut = sp.signed_out === "1";

  if (session.user?.profileCompletedAt) {
    redirect("/market");
  }

  if (session.user && !session.user.profileCompletedAt) {
    redirect("/create-account?step=profile");
  }

  const oauthReady = coinbaseOAuthReady();

  return (
    <section className="w-full border-b border-wf-border bg-wf-cream py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-lg px-4 sm:px-6 lg:px-8">
        <h1 className="text-center font-display text-3xl font-semibold tracking-tight text-wf-ink sm:text-4xl">
          Welcome back
        </h1>
        <p className="mt-3 text-center text-sm leading-relaxed text-wf-muted sm:text-base">
          Choose how you want to sign in. Every path takes you to the farmers
          market with a personal wallet for checkout.
        </p>

        {signedOut ? (
          <p
            className="mt-6 rounded-xl border border-wf-border bg-wf-white px-4 py-3 text-center text-sm text-wf-ink"
            role="status"
          >
            You&apos;re signed out. Sign in again to sync carts across devices.
          </p>
        ) : null}

        <div className="mt-10 space-y-8 rounded-2xl border border-wf-border bg-wf-white p-6 sm:p-8">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-wf-green">
              Recommended
            </p>
            <p className="mt-2 text-sm text-wf-muted">
              Coinbase keeps passwords off our site; we only receive the profile
              details you approve.
            </p>
            <div className="mt-4">
              {oauthReady ? (
                <a
                  href="/api/auth/coinbase"
                  className="tc-tap flex w-full justify-center rounded-xl border border-wf-green bg-wf-green px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-wf-green-hover"
                >
                  Continue with Coinbase
                </a>
              ) : (
                <p className="rounded-xl border border-wf-border bg-wf-cream/60 px-4 py-3 text-center text-sm text-wf-muted">
                  Coinbase OAuth isn&apos;t configured on this server—use email or
                  guest below, or see <code className="text-xs">.env.example</code>.
                </p>
              )}
            </div>
          </div>

          <div className="border-t border-wf-border pt-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-wf-green">
              Email
            </p>
            <p className="mt-2 text-sm text-wf-muted">
              Any valid email creates your shopper session for this browser.
            </p>
            <div className="mt-4">
              <EmailSignInForm />
            </div>
          </div>

          <div className="border-t border-wf-border pt-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-wf-green">
              Just browsing
            </p>
            <p className="mt-2 text-sm text-wf-muted">
              Jump straight into the market with a guest session—perfect for
              trying the wallet and checkout flow.
            </p>
            <form action={signInAsGuest} className="mt-4">
              <button
                type="submit"
                className="tc-tap w-full justify-center rounded-xl border-2 border-wf-border bg-wf-white px-6 py-3.5 text-sm font-semibold text-wf-ink transition hover:border-wf-green"
              >
                Enter farmers market as guest
              </button>
            </form>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-wf-muted">
          New here?{" "}
          <Link
            href="/create-account"
            className="font-semibold text-wf-green underline-offset-4 hover:underline"
          >
            Full sign-up &amp; profile
          </Link>
        </p>

        <p className="mt-4 text-center text-sm text-wf-muted">
          <Link href="/" className="font-semibold text-wf-green underline-offset-4 hover:underline">
            ← Back to home
          </Link>
        </p>
      </div>
    </section>
  );
}
