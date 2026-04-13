import Image from "next/image";
import Link from "next/link";

const cols = [
  {
    title: "How you sell",
    body: "List primals, bundles, and harvest windows. We route demand to your inventory with clear fulfillment windows.",
  },
  {
    title: "Coinbase Commerce",
    body: "Crypto-native and international settlement beside fiat—faster access to buyers who don’t stop at the county line.",
  },
  {
    title: "Snowflake analytics",
    body: "Demand curves, price bands, and inventory signals in one backbone—Qualität in your data, not just your herd.",
  },
];

export function SuppliersSection() {
  return (
    <section
      id="suppliers"
      className="relative border-b border-stahl/30 bg-eichenbraun/40 py-16 sm:py-24"
      aria-labelledby="suppliers-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="tc-reveal-wide grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-stahl/40 lg:min-h-[22rem]">
            <Image
              src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=80"
              alt="Texas longhorn cattle on open range—ranch suppliers for Town and Cattle marketplace"
              fill
              loading="lazy"
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-mesquite">
              Lieferanten &amp; Züchter
            </p>
            <h2
              id="suppliers-heading"
              className="tc-section-title mt-2 font-display font-semibold text-kreide"
            >
              Suppliers &amp; ranchers
            </h2>
            <p className="mt-3 text-kreide/70">
              For producers who want Präzision in contracts and warmth in the
              handshake—German-Texan butcher-shop standards, digital scale.
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cols.map((c) => (
            <div
              key={c.title}
              className="tc-reveal-card rounded-sm border border-stahl/40 bg-talgschwarz/40 p-6"
            >
              <h3 className="font-display text-lg font-semibold text-mesquite">
                {c.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-kreide/70">
                {c.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="#contact"
            className="tc-tap inline-flex rounded-sm border-2 border-mesquite bg-mesquite/10 px-8 text-sm font-bold uppercase tracking-wide text-mesquite transition hover:bg-mesquite hover:text-talgschwarz"
          >
            Apply to partner
          </Link>
        </div>
      </div>
    </section>
  );
}
