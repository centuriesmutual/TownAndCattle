import type { Metadata } from "next";
import Link from "next/link";
import { RanchersProgramIllustration } from "@/components/ranchers/RanchersProgramIllustration";

export const metadata: Metadata = {
  title: "For ranchers & packers | Town & Cattle",
  description:
    "List USDA-graded beef with Coinbase Commerce settlement, demand intelligence, and FSIS-aligned onboarding. Full program detail in Our Township.",
  alternates: { canonical: "/ranchers" },
};

export default function RanchersPage() {
  return (
    <article className="w-full border-b border-wf-border bg-wf-white">
      <header className="border-b border-wf-border bg-wf-cream py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-wf-green">
            For ranchers &amp; packers
          </p>
          <h1 className="tc-section-title mt-3 font-display font-semibold text-wf-ink">
            List USDA-graded beef with modern settlement and analytics.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-wf-muted">
            Inventory, Coinbase Commerce, modeled demand signals, and FSIS-aligned
            onboarding—this page is the program overview; deep legal, ops, and
            pillar detail lives in{" "}
            <Link href="/our-township" className="font-semibold text-wf-green underline-offset-2 hover:underline">
              Our Township
            </Link>
            .
          </p>
        </div>
      </header>

      <section
        className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
        aria-labelledby="ranchers-illustration"
      >
        <h2 id="ranchers-illustration" className="sr-only">
          Program flow illustration
        </h2>
        <div className="overflow-hidden rounded-3xl border border-wf-border bg-wf-white p-4 shadow-sm sm:p-8 lg:p-10">
          <RanchersProgramIllustration />
        </div>
        <p className="mt-6 text-center text-sm text-wf-muted">
          From graded listings through settlement rails and demand intelligence into
          partner onboarding—one continuous operating picture.
        </p>
      </section>

      <section className="border-t border-wf-border bg-wf-cream py-16 sm:py-24">
        <div className="mx-auto max-w-3xl space-y-8 px-4 sm:px-6 lg:px-8">
          <p className="text-base leading-relaxed text-wf-muted sm:text-lg">
            <strong className="font-semibold text-wf-ink">Listings stay honest.</strong>{" "}
            We mirror the documentation you already maintain—grades, lots, harvest
            windows, and cut sheets—so buyers never see a prettier story than your
            crew can fulfill.
          </p>
          <p className="text-base leading-relaxed text-wf-muted sm:text-lg">
            <strong className="font-semibold text-wf-ink">Settlement matches events.</strong>{" "}
            Coinbase Commerce gives you webhook-driven charges, captures, and
            payouts aligned to shipment or pickup milestones, with exports your
            finance team can reconcile without chasing screenshots.
          </p>
          <p className="text-base leading-relaxed text-wf-muted sm:text-lg">
            <strong className="font-semibold text-wf-ink">Demand is measured, not guessed.</strong>{" "}
            Regional velocity, price bands, and cut-level pull-through feed the same
            catalog your customers see—so you list what the market is actually buying,
            not last quarter’s habit.
          </p>
        </div>

        <div className="mx-auto mt-14 flex max-w-3xl flex-col items-stretch gap-4 px-4 sm:flex-row sm:flex-wrap sm:justify-center sm:px-6 lg:px-8">
          <Link
            href="/#contact"
            className="tc-tap justify-center rounded-full bg-wf-ink px-10 text-sm font-semibold text-white transition hover:bg-wf-ink-deep"
          >
            Apply to partner
          </Link>
          <Link
            href="/our-township"
            className="tc-tap justify-center rounded-full border-2 border-wf-green bg-white px-10 text-sm font-semibold text-wf-green transition hover:bg-wf-green/10"
          >
            Our Township — full program
          </Link>
          <Link
            href="/#contact"
            className="tc-tap justify-center rounded-full border-2 border-wf-border px-10 text-sm font-semibold text-wf-ink transition hover:border-wf-green"
          >
            Schedule an intro call
          </Link>
        </div>
      </section>
    </article>
  );
}
