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
      "Snowflake showed us when to move brisket—not guesswork, just demand. That’s Handwerk with data.",
    name: "Walt B.",
    role: "Rancher, Edwards Plateau",
  },
];

export function Testimonials() {
  return (
    <section
      className="relative border-b border-stahl/30 bg-talgschwarz py-16 sm:py-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="tc-reveal-wide text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-mesquite">
            Stimmen · Voices
          </p>
          <h2
            id="testimonials-heading"
            className="tc-section-title mt-3 font-display font-semibold text-kreide"
          >
            What people say
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {quotes.map((q) => (
            <blockquote
              key={q.name}
              className="tc-reveal-card relative rounded-sm border border-stahl/35 bg-eichenbraun/15 p-6 pt-10 sm:p-8 sm:pt-12"
            >
              <span
                className="pointer-events-none absolute left-4 top-4 font-display text-6xl leading-none text-mesquite/35 sm:left-6 sm:text-7xl"
                aria-hidden
              >
                &ldquo;
              </span>
              <p className="relative z-[1] text-base leading-relaxed text-kreide/90 sm:text-lg">
                {q.quote}
              </p>
              <footer className="relative z-[1] mt-6 border-t border-stahl/30 pt-4">
                <cite className="not-italic">
                  <span className="block font-semibold text-kreide">
                    {q.name}
                  </span>
                  <span className="text-sm text-kreide/50">{q.role}</span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
