const quotes = [
  {
    quote:
      "We finally move whole primals without fighting auction volatility. Buyers see our grade data and pay for quality.",
    name: "Jordan M.",
    role: "Ranch operator, West Texas",
  },
  {
    quote:
      "The strip steaks tasted like the restaurant down the street—except I knew the ranch name on the label.",
    name: "Elena R.",
    role: "Customer, Austin",
  },
  {
    quote:
      "Snowflake dashboards helped us time our spring harvest to actual demand instead of guessing from voicemails.",
    name: "Chris T.",
    role: "Supplier partner",
  },
];

export function Testimonials() {
  return (
    <section className="relative border-b border-white/10 bg-elevated py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="tc-reveal-wide text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber">
            Social proof
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            From the yard and the table
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {quotes.map((q) => (
            <blockquote
              key={q.name}
              className="tc-reveal-card rounded-2xl border border-white/10 bg-surface/80 p-8"
            >
              <p className="font-display text-lg italic leading-snug text-ink/90">
                &ldquo;{q.quote}&rdquo;
              </p>
              <footer className="mt-6 border-t border-white/10 pt-4">
                <cite className="not-italic">
                  <span className="block font-semibold text-ink">{q.name}</span>
                  <span className="text-sm text-ink/50">{q.role}</span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
