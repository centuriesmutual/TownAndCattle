import Image from "next/image";

const steps = [
  {
    n: "1",
    title: "Browse verified cuts",
    body: "Filter by USDA grade, ranch, and price per pound—every listing shows source and stamp clarity.",
    img: "https://images.unsplash.com/photo-1603048297172-c92544798d5a?auto=format&fit=crop&w=800&q=80",
    alt: "Cattle on Texas ranch pasture—grass-fed beef direct from ranch suppliers",
  },
  {
    n: "2",
    title: "Order with confidence",
    body: "Traceable lots and clear fulfillment windows—checkout with card or Coinbase where enabled.",
    img: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
    alt: "Raw premium steak cuts on butcher block—order ranch beef online",
  },
  {
    n: "3",
    title: "Delivered or pickup",
    body: "Cold chain to your door or coordinated pickup—your schedule, professionally handled.",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    alt: "Prepared beef dinner plating—best beef delivered from Town and Cattle",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="texture-linen relative w-full border-b border-wf-border bg-wf-cream py-16 sm:py-24 lg:py-28"
      aria-labelledby="how-heading"
    >
      <div className="relative z-[1] mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="tc-reveal-wide max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-wf-green">
            Simple process
          </p>
          <h2
            id="how-heading"
            className="tc-section-title mt-3 font-display font-semibold text-wf-ink"
          >
            How it works
          </h2>
          <p className="mt-4 text-wf-muted">
            Three steps from catalog to table—transparent, graded, and
            ranch-backed.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
          {steps.map((s) => (
            <article
              key={s.n}
              className="tc-reveal-card overflow-hidden rounded-2xl border border-wf-border bg-wf-white shadow-sm"
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
                <div className="absolute inset-0 bg-gradient-to-t from-wf-ink/75 to-transparent" />
                <span className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-wf-green font-display text-xl font-bold text-white shadow-md">
                  {s.n}
                </span>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="font-display text-xl font-semibold text-wf-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-wf-muted">
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
