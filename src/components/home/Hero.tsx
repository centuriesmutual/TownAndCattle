import Link from "next/link";

export function Hero() {
  return (
    <section className="farm-hero relative overflow-hidden">
      <div className="farm-scene" aria-hidden="true">
        <div className="farm-sun" />
        <div className="farm-cloud farm-cloud-1" />
        <div className="farm-cloud farm-cloud-2" />
        <div className="farm-cloud farm-cloud-3" />
        <div className="farm-grass-strip" />
      </div>

      <div className="relative z-[1] mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="noise hero-animate max-w-3xl rounded-2xl border border-ink/10 bg-white/60 p-8 shadow-[0_1px_0_rgba(255,255,255,0.65)_inset] backdrop-blur-sm sm:p-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-slate">
            Flagship domain · Multi-tenant commerce
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            The digital stockyard for modern trade.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/75">
            TownAndCattle.com is the town square of a rule-driven ecosystem: one
            disciplined backend, many branded storefronts, and the same ledger-grade
            rigor you expect from precision engineering—carried out with the
            handshake clarity of a Texas cattle market.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#architecture"
              className="inline-flex items-center justify-center rounded-md bg-rust px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-rust/90"
            >
              See the system map
            </Link>
            <Link
              href="#domains"
              className="inline-flex items-center justify-center rounded-md border border-ink/15 bg-paper/90 px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink/25"
            >
              Explore domain corrals
            </Link>
            <span className="hidden font-mono text-[11px] text-ink/45 sm:ml-2 sm:inline">
              Frontend preview · API not connected
            </span>
          </div>
        </div>

        <dl className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            {
              k: "Routing decisions",
              v: "APPROVE · BLOCK · VERIFY · REDIRECT_PRODUCT",
            },
            { k: "Settlement", v: "Coinbase Commerce · hosted checkout" },
            { k: "Analytics posture", v: "Event stream → warehouse marts" },
          ].map((row) => (
            <div
              key={row.k}
              className="scroll-reveal-card rounded-xl border border-ink/10 bg-white/50 p-4 shadow-sm backdrop-blur-sm"
            >
              <dt className="font-mono text-[10px] uppercase tracking-widest text-slate">
                {row.k}
              </dt>
              <dd className="mt-2 text-sm font-medium leading-snug text-ink">
                {row.v}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
