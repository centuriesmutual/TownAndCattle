import Image from "next/image";
import Link from "next/link";
import { MARKET_PRODUCTS } from "@/data/site";

export function FeaturedProducts() {
  return (
    <section
      id="shop"
      className="texture-linen relative border-b border-stahl/30 bg-eichenbraun/25 py-16 sm:py-24"
      aria-labelledby="shop-heading"
    >
      <div className="relative z-[1] mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="tc-reveal flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-mesquite">
              Auswahl · Featured cuts
            </p>
            <h2
              id="shop-heading"
              className="tc-section-title mt-2 font-display font-semibold text-kreide"
            >
              Butcher counter
            </h2>
            <p className="mt-3 max-w-xl text-kreide/65">
              Buy premium beef online—each card lists ranch origin, grade stamp,
              and price per pound. Hand-labeled, digitally exact.
            </p>
          </div>
          <Link
            href="#contact"
            className="tc-tap shrink-0 text-sm font-semibold text-mesquite underline-offset-4 hover:underline"
          >
            Inventory alerts →
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {MARKET_PRODUCTS.map((p) => (
            <article
              key={p.sku}
              itemScope
              itemType="https://schema.org/Product"
              className="tc-butcher-card tc-wax tc-reveal-card relative overflow-hidden rounded-sm border-2 border-kreide/15 bg-[#ebe4d4] shadow-md"
            >
              <meta itemProp="sku" content={p.sku} />
              <meta itemProp="image" content={p.image} />
              <div className="relative aspect-square bg-talgschwarz/10">
                <Image
                  src={p.image}
                  alt={`${p.name} — ${p.grade} beef from ${p.ranch}, buy beef direct from rancher`}
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width:480px) 100vw, (max-width:1024px) 50vw, 25vw"
                />
                <div
                  className="tc-wax-seal pointer-events-none absolute right-2 top-2 opacity-40"
                  aria-hidden
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-dashed border-mesquite/80 text-[8px] font-bold uppercase leading-tight text-mesquite">
                    TX
                  </span>
                </div>
              </div>
              <div className="border-t border-talgschwarz/10 p-4 sm:p-5">
                <h3
                  itemProp="name"
                  className="font-display text-xl font-semibold text-talgschwarz"
                >
                  {p.name}
                </h3>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-stahl">
                  <span itemProp="brand" itemScope itemType="https://schema.org/Brand" className="sr-only">
                    <span itemProp="name">Town &amp; Cattle</span>
                  </span>
                  {p.ranch} ·{" "}
                  <span className="rounded-sm bg-talgschwarz/10 px-1.5 py-0.5 text-[10px] text-talgschwarz">
                    {p.grade}
                  </span>
                </div>
                <p itemProp="description" className="sr-only">
                  {p.description}
                </p>
                <div
                  itemProp="offers"
                  itemScope
                  itemType="https://schema.org/Offer"
                  className="mt-4 flex items-center justify-between gap-2"
                >
                  <meta itemProp="priceCurrency" content={p.priceCurrency} />
                  <span
                    itemProp="price"
                    className="font-mono text-lg font-bold text-blutrot"
                  >
                    ${p.price}
                    <span className="text-sm font-medium text-stahl">/lb</span>
                  </span>
                  <link itemProp="availability" href="https://schema.org/PreOrder" />
                  <meta itemProp="priceValidUntil" content="2027-12-31" />
                  <button
                    type="button"
                    className="tc-tap rounded-sm bg-talgschwarz px-4 text-xs font-bold uppercase tracking-wide text-kreide"
                    aria-label={`Add ${p.name} to cart`}
                  >
                    Add
                  </button>
                </div>
                <p className="mt-2 text-[10px] text-stahl">
                  Checkout preview—cart when live.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
