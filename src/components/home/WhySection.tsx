const values = [
  {
    title: "Direct ranch trade",
    body: "Short chain from pasture to pan—more margin for the ranch, more honesty for you.",
  },
  {
    title: "Graded & documented",
    body: "USDA grades and ranch stamps you can verify—not vague “natural” claims.",
  },
  {
    title: "Fair unit economics",
    body: "Prices reflect weight and grade, not end-cap placement.",
  },
  {
    title: "Built to last",
    body: "Centuries Mutual stewards the marketplace with operational discipline.",
  },
];

export function WhySection() {
  return (
    <section
      id="why-us"
      className="relative w-full border-b border-wf-border bg-wf-sage py-16 sm:py-24 lg:py-28"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.28em] text-wf-green">
          Our standards
        </p>
        <h2
          id="why-heading"
          className="tc-section-title mt-3 text-center font-display font-semibold text-wf-ink"
        >
          Why Town &amp; Cattle
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-start">
          <blockquote className="tc-reveal-wide rounded-2xl border border-wf-border bg-wf-white p-8 shadow-sm lg:border-l-4 lg:border-l-wf-green lg:border-t lg:border-r lg:border-b">
            <p className="font-display text-2xl font-medium italic leading-snug text-wf-ink sm:text-3xl">
              &ldquo;We don&apos;t need another grocery story—we need a ledger
              people trust and beef that proves it.&rdquo;
            </p>
            <footer className="mt-6 text-sm text-wf-muted">
              — Hill Country ranch partner (name withheld)
            </footer>
          </blockquote>

          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((v) => (
              <div
                key={v.title}
                className="tc-reveal-card rounded-2xl border border-wf-border bg-wf-white p-5 shadow-sm"
              >
                <h3 className="font-display text-lg font-semibold text-wf-ink">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-wf-muted">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
