import Image from "next/image";

const steps = [
  {
    n: "I",
    title: "Browse verified cuts",
    body: "See ranch source, grade stamps, and fair unit pricing—Ordnung on every label.",
    img: "https://images.unsplash.com/photo-1603048297172-c92544798d5a?auto=format&fit=crop&w=800&q=80",
    alt: "Cattle on Texas ranch pasture—grass-fed beef direct from ranch suppliers",
  },
  {
    n: "II",
    title: "Order with confidence",
    body: "Traceable lots and butcher-paper clarity—no mystery meat, no middleman tax.",
    img: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
    alt: "Raw premium steak cuts on butcher block—order ranch beef online",
  },
  {
    n: "III",
    title: "Delivered or pickup",
    body: "Cold chain to your door, or coordinated pickup—your schedule, your call.",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    alt: "Prepared beef dinner plating—best beef delivered from Town and Cattle",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="texture-linen relative border-b border-stahl/30 bg-talgschwarz py-16 sm:py-24"
      aria-labelledby="how-heading"
    >
      <div className="relative z-[1] mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="tc-reveal-wide max-w-2xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-mesquite">
            Das Verfahren · The process
          </p>
          <h2
            id="how-heading"
            className="tc-section-title mt-3 font-display font-semibold text-kreide"
          >
            How it works
          </h2>
          <p className="mt-4 text-kreide/70">
            Three deliberate steps—Handwerk at every handoff.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {steps.map((s) => (
            <article
              key={s.n}
              className="tc-reveal-card overflow-hidden rounded-sm border border-stahl/40 bg-eichenbraun/30"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={s.img}
                  alt={s.alt}
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-talgschwarz/80 to-transparent" />
                <span className="absolute left-3 top-3 font-display text-4xl font-bold text-mesquite/90">
                  {s.n}
                </span>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="font-display text-xl font-semibold text-kreide">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-kreide/65">
                  {s.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
