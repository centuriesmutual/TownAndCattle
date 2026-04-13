const quotes = [
  {
    quote:
      "The marbling was ridiculous. I ordered ranch beef once and canceled my grocery subscription.",
    name: "Marcus V.",
    role: "Customer, San Antonio",
  },
  {
    quote:
      "Finally a platform that speaks ranch and spreadsheet. Coinbase settlement landed before the truck did.",
    name: "Helena K.",
    role: "Customer, Dallas",
  },
  {
    quote:
      "Snowflake showed us when to move brisket—demand signals we could actually trade on.",
    name: "Walt B.",
    role: "Rancher, Edwards Plateau",
  },
];

export function Testimonials() {
  return (
    <section
      className="relative w-full border-b border-wf-border bg-wf-cream py-16 sm:py-24 lg:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="tc-reveal-wide text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-wf-green">
            Testimonials
          </p>
          <h2
            id="testimonials-heading"
            className="tc-section-title mt-3 font-display font-semibold text-wf-ink"
          >
            What buyers and ranchers say
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
          {quotes.map((q) => (
            <blockquote
              key={q.name}
              className="tc-reveal-card relative rounded-2xl border border-wf-border bg-wf-white p-6 pt-10 shadow-sm sm:p-8 sm:pt-12"
            >
              <span
                className="pointer-events-none absolute left-5 top-4 font-display text-6xl leading-none text-wf-green/25 sm:left-7 sm:text-7xl"
                aria-hidden
              >
                &ldquo;
              </span>
              <p className="relative z-[1] text-base leading-relaxed text-wf-text sm:text-lg">
                {q.quote}
              </p>
              <footer className="relative z-[1] mt-6 border-t border-wf-border pt-4">
                <cite className="not-italic">
                  <span className="block font-semibold text-wf-ink">
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
