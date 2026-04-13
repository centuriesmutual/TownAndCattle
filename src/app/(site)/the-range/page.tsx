import type { Metadata } from "next";
import Link from "next/link";
import { RangeDataIllustration } from "@/components/the-range/RangeDataIllustration";

export const metadata: Metadata = {
  title: "The Range — Data-backed marketplace | Town & Cattle",
  description:
    "How Town & Cattle turns ranch operations and market signals into a transparent, graded catalog—without middlemen.",
  alternates: { canonical: "/the-range" },
};

const pillars = [
  {
    title: "Ingest what the ranch already proves",
    body: "Lot IDs, grade stamps, harvest windows, and fulfillment capacity flow into a single operational layer. Nothing is double-entered—your paperwork stays the system of record; we mirror it for buyers.",
  },
  {
    title: "Model demand, not guesses",
    body: "Order cadence, regional pull-through, and price bands are continuously reconciled so listings reflect what the market is actually paying—not last season’s spreadsheet tab.",
  },
  {
    title: "Publish listings that stay honest",
    body: "When signals shift, the catalog is designed to adjust: availability windows tighten, bundles re-balance, and buyers see the same facts your crew sees on the fulfillment side.",
  },
];

export default function TheRangePage() {
  return (
    <article className="w-full border-b border-wf-border bg-wf-cream">
      <header className="border-b border-wf-border bg-wf-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-wf-green">
            The Range
          </p>
          <h1 className="tc-section-title mt-3 font-display font-semibold text-wf-ink">
            From pasture signals to a catalog you can trust.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-wf-muted">
            We combine ranch-origin data with marketplace demand analytics in one
            pipeline—so USDA-graded inventory, pricing, and fulfillment windows stay
            aligned without naming noise or black-box hype.
          </p>
        </div>
      </header>

      <section
        className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-start lg:gap-12 lg:px-8 lg:py-20"
        aria-label="Data flow illustration"
      >
        <div className="w-full flex-1 rounded-3xl border border-wf-border bg-wf-white p-6 shadow-sm sm:p-10">
          <RangeDataIllustration />
          <p className="mt-6 text-center text-sm text-wf-muted">
            Illustrative model: operational ranch data and live demand intelligence
            converge before anything is shown to shoppers.
          </p>
        </div>
      </section>

      <section className="border-t border-wf-border bg-wf-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-2xl font-semibold text-wf-ink sm:text-3xl">
            How intelligence shows up in the product
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-wf-border bg-wf-cream/60 p-6 sm:p-8"
              >
                <h3 className="font-display text-lg font-semibold text-wf-ink">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-wf-muted">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-14 flex flex-wrap justify-center gap-4">
            <Link
              href="/#shop"
              className="tc-tap rounded-full bg-wf-green px-8 text-sm font-semibold text-white transition hover:bg-wf-green-hover"
            >
              Explore marketplace capabilities
            </Link>
            <Link
              href="/the-ranch"
              className="tc-tap rounded-full border-2 border-wf-green px-8 text-sm font-semibold text-wf-green transition hover:bg-wf-green/10"
            >
              USDA shopper guide
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
