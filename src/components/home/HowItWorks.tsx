import Image from "next/image";

const steps = [
  {
    n: "01",
    title: "Browse verified ranchers",
    body: "Explore cuts and bundles from suppliers we vet—clear origins, grades, and ranch stories.",
    img: "https://images.unsplash.com/photo-1603048297172-c92544798d5a?auto=format&fit=crop&w=800&q=80",
  },
  {
    n: "02",
    title: "Buy with confidence",
    body: "Traceable lots, quality grades, and fair pricing you can see—no opaque grocery markup.",
    img: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
  },
  {
    n: "03",
    title: "Delivered to your door",
    body: "Cold-chain shipping to your home, or coordinated pickup where available—your call.",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="texture-retail relative border-b border-wf-border bg-wf-bg py-20 sm:py-28"
    >
      <div className="relative z-[1] mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="tc-reveal-wide max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-wf-green">
            Simple for buyers
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-wf-text sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-wf-muted">
            Three steps from discovery to dinner—built for trust and speed.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <article
              key={s.n}
              className="tc-reveal-card group overflow-hidden rounded-2xl border border-wf-border bg-wf-bg shadow-sm"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-wf-cream">
                <Image
                  src={s.img}
                  alt=""
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
                <span className="absolute left-3 top-3 rounded-full bg-wf-green px-3 py-1 font-mono text-xs font-semibold text-white">
                  {s.n}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-wf-text">
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
