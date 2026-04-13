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
    <section className="relative border-b border-wf-border bg-wf-sage py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="tc-reveal-wide text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-wf-green">
            Social proof
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-wf-text sm:text-4xl">
            From the yard and the table
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {quotes.map((q) => (
            <blockquote
              key={q.name}
              className="tc-reveal-card rounded-2xl border border-wf-border bg-wf-bg p-8 shadow-sm"
            >
              <p className="font-display text-lg italic leading-snug text-wf-text">
                &ldquo;{q.quote}&rdquo;
              </p>
              <footer className="mt-6 border-t border-wf-border-light pt-4">
                <cite className="not-italic">
                  <span className="block font-semibold text-wf-text">
                    {q.name}
                  </span>
                  <span className="text-sm text-wf-muted">{q.role}</span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
