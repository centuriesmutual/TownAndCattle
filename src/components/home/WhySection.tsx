const values = [
  {
    title: "Direct ranch trade",
    body: "Short chain from pasture to pan—more margin for the ranch, more honesty for you.",
  },
  {
    title: "Graded & stamped",
    body: "USDA and ranch stamps you can verify—not marketing adjectives.",
  },
  {
    title: "Fair unit economics",
    body: "Prices reflect weight and grade, not aisle placement.",
  },
  {
    title: "Built to last",
    body: "Centuries Mutual stewards the ledger—Beständigkeit over hype cycles.",
  },
];

export function WhySection() {
  return (
    <section
      id="why-us"
      className="relative border-b border-stahl/30 bg-talgschwarz py-16 sm:py-24"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[10px] font-semibold uppercase tracking-[0.35em] text-mesquite">
          Warum wir
        </p>
        <h2
          id="why-heading"
          className="tc-section-title mt-3 text-center font-display font-semibold text-kreide"
        >
          Why Town &amp; Cattle
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-start">
          <blockquote className="tc-reveal-wide border-l-4 border-mesquite pl-6">
            <p className="font-display text-2xl font-medium italic leading-snug text-kreide sm:text-3xl">
              &ldquo;We don&apos;t need another grocery story—we need a ledger
              people trust and beef that proves it.&rdquo;
            </p>
            <footer className="mt-6 text-sm text-kreide/55">
              — Hill Country ranch partner (name withheld)
            </footer>
          </blockquote>

          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((v) => (
              <div
                key={v.title}
                className="tc-reveal-card rounded-sm border border-stahl/35 bg-eichenbraun/20 p-5"
              >
                <h3 className="font-display text-lg font-semibold text-kreide">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-kreide/65">
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
