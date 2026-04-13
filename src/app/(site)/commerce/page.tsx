import type { ComponentType } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  PillarArtBoth,
  PillarArtBuyers,
  PillarArtOps,
  PillarArtRanchers,
} from "@/components/commerce/CommercePillarArt";
import { CommerceRailsIllustration } from "@/components/commerce/CommerceRailsIllustration";

export const metadata: Metadata = {
  title: "Commerce & settlement | Town & Cattle",
  description:
    "Coinbase Commerce as the professional payments layer between verified ranchers and buyers—fiat and digital assets, webhooks, and USDA-grade audit posture.",
  alternates: { canonical: "/commerce" },
};

const pillars: {
  tag: string;
  title: string;
  body: string;
  Art: ComponentType;
}[] = [
  {
    tag: "Buyers",
    title: "Dual rails at checkout",
    body: "Consumers pay the way they already trust—bank cards and ACH where offered—while crypto-native buyers can settle on the same invoice through Coinbase Commerce. One cart, two settlement cultures, reconciled for the ranch.",
    Art: PillarArtBuyers,
  },
  {
    tag: "Ranchers",
    title: "Treasury-grade settlement for suppliers",
    body: "Ranchers and packers receive payouts mapped to each fulfillment event: charge confirmation, partial shipment, or pickup completion. Webhooks and ledger exports keep your finance team out of the group chat.",
    Art: PillarArtRanchers,
  },
  {
    tag: "Both sides",
    title: "Transparent fee & FX posture",
    body: "Commerce surfaces network fees before capture, so both sides understand net proceeds. Cross-border buyers see conversion context up front—no surprise spreads after the steak is boxed.",
    Art: PillarArtBoth,
  },
  {
    tag: "Operations",
    title: "Programmatic order state",
    body: "Authorization, capture, refund, and payout hooks are first-class. That lets Town & Cattle tie USDA lot releases to payment milestones automatically—professional operations, not manual screenshots.",
    Art: PillarArtOps,
  },
];

export default function CommercePage() {
  return (
    <article className="w-full border-b border-wf-border bg-wf-white">
      <header className="texture-linen border-b border-wf-border bg-wf-cream py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-wf-green">
            Coinbase Commerce · marketplace rails
          </p>
          <h1 className="tc-section-title mt-3 font-display font-semibold text-wf-ink">
            Payments built for ranch economics
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-wf-muted">
            Town &amp; Cattle uses Coinbase Commerce as the professional payments
            fabric between verified ranchers and serious buyers—fiat and digital
            assets on shared infrastructure, with the audit trail a USDA supply
            chain deserves.
          </p>
        </div>
      </header>

      <section
        className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
        aria-labelledby="commerce-rails-heading"
      >
        <h2 id="commerce-rails-heading" className="sr-only">
          Dual rails and ranch treasury
        </h2>
        <div className="overflow-hidden rounded-3xl border border-wf-border bg-wf-white p-4 shadow-sm sm:p-8 lg:p-10">
          <CommerceRailsIllustration />
        </div>
        <p className="mt-6 text-center text-sm text-wf-muted">
          Illustrative model: traditional and digital-asset checkouts converge on
          Commerce, then reconcile to ranch-side treasury reporting.
        </p>
      </section>

      <section className="border-t border-wf-border bg-wf-cream py-16 sm:py-24">
        <div className="mx-auto max-w-6xl space-y-16 px-4 sm:px-6 lg:px-8">
          {pillars.map((p) => {
            const Fig = p.Art;
            return (
              <div
                key={p.title}
                className="grid gap-8 border-b border-wf-border pb-16 last:border-0 last:pb-0 lg:grid-cols-12 lg:items-center"
              >
                <div className="lg:col-span-4">
                  <Fig />
                </div>
                <div className="lg:col-span-8">
                  <span className="inline-flex rounded-full bg-wf-ink/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    {p.tag}
                  </span>
                  <h2 className="mt-4 font-display text-2xl font-semibold text-wf-ink sm:text-3xl">
                    {p.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-wf-muted sm:text-lg">
                    {p.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-wf-ink py-14 sm:py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
          <p className="text-lg text-white/90">
            Ready to transact? Log in to align identity with checkout and settlement
            history.
          </p>
          <div className="flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center">
            <Link
              href="/login"
              className="tc-tap justify-center rounded-full bg-wf-green px-10 text-sm font-semibold text-white transition hover:bg-wf-green-hover"
            >
              Log in
            </Link>
            <Link
              href="/create-account"
              className="tc-tap justify-center rounded-full border-2 border-white/40 px-10 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Create account
            </Link>
            <Link
              href="/#contact"
              className="tc-tap justify-center text-sm font-semibold text-wf-green-light underline-offset-4 hover:underline"
            >
              Talk to partnerships →
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
