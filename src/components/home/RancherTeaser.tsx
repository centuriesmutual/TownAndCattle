import Link from "next/link";

export function RancherTeaser() {
  return (
    <section
      id="ranchers"
      className="w-full border-b border-wf-border bg-wf-white py-14 sm:py-20 lg:py-24"
      aria-labelledby="ranchers-teaser-heading"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-wf-green">
            For ranchers &amp; packers
          </p>
          <h2
            id="ranchers-teaser-heading"
            className="tc-section-title mt-3 font-display font-semibold text-wf-ink"
          >
            List USDA-graded beef with modern settlement and analytics.
          </h2>
          <p className="mt-4 text-wf-muted">
            Inventory, Coinbase Commerce, Snowflake demand signals, and FSIS-aligned
            onboarding—full detail lives in Our Township.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:shrink-0">
          <Link
            href="/#contact"
            className="tc-tap justify-center rounded-full bg-wf-ink px-8 text-sm font-semibold text-white transition hover:bg-wf-ink-deep"
          >
            Apply to partner
          </Link>
          <Link
            href="/our-township"
            className="tc-tap justify-center rounded-full border-2 border-wf-border bg-wf-cream px-8 text-sm font-semibold text-wf-ink transition hover:border-wf-green hover:text-wf-green"
          >
            Our Township
          </Link>
          <Link
            href="/#contact"
            className="tc-tap justify-center rounded-full text-sm font-semibold text-wf-green underline-offset-4 hover:underline"
          >
            Schedule an intro call
          </Link>
        </div>
      </div>
    </section>
  );
}
