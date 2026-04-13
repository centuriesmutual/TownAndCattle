import type { ComponentType } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  PillarArtBoth,
  PillarArtBuyers,
  PillarArtOps,
  PillarArtRanchers,
} from "@/components/commerce/CommercePillarArt";
import { CommerceRailsIllustration } from "@/components/commerce/CommerceRailsIllustration";
import { HERO_IMAGE_URL } from "@/data/site";

export const metadata: Metadata = {
  title: "Marketplace | Town & Cattle",
  description:
    "Immersive look at the Town & Cattle marketplace—USDA-graded ranch inventory, Coinbase Commerce settlement, and transparent rails for buyers and producers.",
  alternates: { canonical: "/marketplace" },
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

const IMG_MARKET =
  "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=2000&q=85";

export default function MarketplacePage() {
  return (
    <article className="w-full border-b border-wf-border bg-wf-white">
      <section
        className="relative min-h-[90dvh] w-full overflow-hidden border-b border-wf-border"
        aria-labelledby="marketplace-hero-heading"
      >
        <Image
          src={HERO_IMAGE_URL}
          alt="Cattle on pasture—Town and Cattle marketplace"
          fill
          priority
          className="object-cover object-[center_40%]"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-wf-ink-deep/90 via-wf-ink-deep/65 to-wf-green/35"
          aria-hidden
        />
        <div className="relative flex min-h-[90dvh] flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20 lg:px-12 lg:pb-28">
          <div className="mx-auto w-full max-w-6xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-wf-green-light">
              Town &amp; Cattle
            </p>
            <h1
              id="marketplace-hero-heading"
              className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]"
            >
              A marketplace built for ranch truth—not shelf fiction.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/88 sm:text-xl">
              Verified producers, USDA grades you can compare, and Coinbase Commerce
              as the settlement layer between serious buyers and the people who raise
              the cattle.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/login"
                className="tc-tap justify-center rounded-xl bg-wf-green px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-wf-green-hover"
              >
                Log in to shop
              </Link>
              <Link
                href="/the-ranch"
                className="tc-tap justify-center rounded-xl border-2 border-white/45 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Read the ranch guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-wf-border bg-wf-cream py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-3 sm:px-6 lg:gap-12 lg:px-8">
          {[
            { k: "Grades", v: "Prime · Choice · Select", s: "Labeled like the USDA intended" },
            { k: "Settlement", v: "Coinbase Commerce", s: "Fiat & digital on one rail" },
            { k: "Traceability", v: "Lot & ranch IDs", s: "From cart to cold chain" },
          ].map((item) => (
            <div
              key={item.k}
              className="rounded-2xl border border-wf-border bg-wf-white px-6 py-7 text-center sm:text-left"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-wf-green">
                {item.k}
              </p>
              <p className="mt-2 font-display text-xl font-semibold text-wf-ink">{item.v}</p>
              <p className="mt-2 text-sm text-wf-muted">{item.s}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="texture-linen border-b border-wf-border py-16 sm:py-20 lg:py-28"
        aria-labelledby="marketplace-rails-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-wf-green">
              How money moves
            </p>
            <h2
              id="marketplace-rails-heading"
              className="mt-3 font-display text-3xl font-semibold text-wf-ink sm:text-4xl"
            >
              One marketplace spine. Two checkout cultures.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-wf-muted sm:text-lg">
              Traditional and crypto-native buyers meet on shared infrastructure—then
              proceeds reconcile cleanly for ranch treasury and compliance teams.
            </p>
          </div>
          <div className="mt-12 overflow-hidden rounded-2xl border border-wf-border bg-wf-white p-4 sm:p-8 lg:p-10">
            <CommerceRailsIllustration />
          </div>
        </div>
      </section>

      <section className="relative min-h-[380px] w-full border-b border-wf-border sm:min-h-[440px]">
        <Image
          src={IMG_MARKET}
          alt="Cattle herd on grassland"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-wf-ink-deep/55" aria-hidden />
        <div className="relative mx-auto flex min-h-[380px] max-w-6xl flex-col justify-center px-4 py-16 sm:min-h-[440px] sm:px-6 lg:px-8">
          <p className="max-w-xl font-display text-2xl font-semibold leading-snug text-white sm:text-3xl">
            The stall isn&apos;t a metaphor—we treat every listing like a ranch table
            with a name on it.
          </p>
        </div>
      </section>

      <section className="bg-wf-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl space-y-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-wf-green">
              Under the canopy
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-wf-ink sm:text-4xl">
              What the marketplace delivers
            </h2>
          </div>
          {pillars.map((p, i) => {
            const Fig = p.Art;
            const flip = i % 2 === 1;
            return (
              <div
                key={p.title}
                className="grid gap-10 rounded-2xl border border-wf-border bg-wf-cream/30 p-6 sm:p-10 lg:grid-cols-12 lg:items-center lg:gap-12"
              >
                <div className={flip ? "lg:order-2 lg:col-span-4" : "lg:col-span-4"}>
                  <Fig />
                </div>
                <div className={flip ? "lg:order-1 lg:col-span-8" : "lg:col-span-8"}>
                  <span className="inline-flex rounded-full border border-wf-border bg-wf-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-wf-green">
                    {p.tag}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-wf-ink sm:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-wf-muted sm:text-lg">
                    {p.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-t border-wf-border bg-wf-ink py-16 sm:py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-4 text-center sm:px-6 lg:px-8">
          <p className="font-display text-2xl font-semibold text-white sm:text-3xl">
            Step into the stalls.
          </p>
          <p className="max-w-lg text-base text-white/75">
            Sign in for the wallet-based farmers market demo, or explore the ranch
            guide to understand grades before you buy.
          </p>
          <div className="flex w-full max-w-lg flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            <Link
              href="/login"
              className="tc-tap justify-center rounded-xl bg-wf-green px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-wf-green-hover"
            >
              Log in
            </Link>
            <Link
              href="/market"
              className="tc-tap justify-center rounded-xl border-2 border-white/35 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Farmers market
            </Link>
            <Link
              href="/ranchers"
              className="tc-tap justify-center rounded-xl border-2 border-transparent px-8 py-3.5 text-sm font-semibold text-wf-green-light underline-offset-4 hover:underline"
            >
              For ranchers →
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
