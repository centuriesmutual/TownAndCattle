import Image from "next/image";
import Link from "next/link";
import { MARKET_PRODUCTS } from "@/data/site";

export function FeaturedProducts() {
  return (
    <section
      id="shop"
      className="texture-linen relative w-full border-b border-wf-border bg-wf-white py-16 sm:py-24 lg:py-28"
      aria-labelledby="shop-heading"
    >
      <div className="relative z-[1] mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="tc-reveal flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-wf-green">
              USDA-graded selection
            </p>
            <h2
              id="shop-heading"
              className="tc-section-title mt-2 font-display font-semibold text-wf-ink"
            >
              Featured cuts
            </h2>
            <p className="mt-3 max-w-xl text-wf-muted">
              Buy premium beef online—each card lists ranch origin, USDA grade,
              and price per pound. Professional labeling, marketplace pricing.
            </p>
          </div>
          <Link
            href="#contact"
            className="tc-tap shrink-0 rounded-full text-sm font-semibold text-wf-green underline-offset-4 hover:underline"
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
              className="tc-butcher-card tc-wax tc-reveal-card relative overflow-hidden rounded-2xl border border-wf-border bg-wf-cream shadow-sm"
            >
              <meta itemProp="sku" content={p.sku} />
              <meta itemProp="image" content={p.image} />
              <div className="relative aspect-square bg-wf-sage">
                <Image
                  src={p.image}
                  alt={`${p.name} — ${p.grade} beef from ${p.ranch}, buy beef direct from rancher`}
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width:480px) 100vw, (max-width:1024px) 50vw, 25vw"
                />
                <div
                  className="tc-wax-seal pointer-events-none absolute right-3 top-3 opacity-50"
                  aria-hidden
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-dashed border-wf-green text-[7px] font-bold uppercase leading-tight text-wf-green">
                    USDA
                  </span>
                </div>
              </div>
              <div className="border-t border-wf-border p-4 sm:p-5">
                <h3
                  itemProp="name"
                  className="font-display text-xl font-semibold text-wf-ink"
                >
                  {p.name}
                </h3>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-wf-muted">
                  <span itemProp="brand" itemScope itemType="https://schema.org/Brand" className="sr-only">
                    <span itemProp="name">Town &amp; Cattle</span>
                  </span>
                  {p.ranch} ·{" "}
                  <span className="rounded-full bg-wf-green/15 px-2 py-0.5 text-[10px] font-bold text-wf-green">
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
                    className="font-mono text-lg font-bold text-wf-price"
                  >
                    ${p.price}
                    <span className="text-sm font-medium text-wf-muted">/lb</span>
                  </span>
                  <link itemProp="availability" href="https://schema.org/PreOrder" />
                  <meta itemProp="priceValidUntil" content="2027-12-31" />
                  <button
                    type="button"
                    className="tc-tap rounded-full bg-wf-ink px-4 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-wf-ink-deep"
                    aria-label={`Add ${p.name} to cart`}
                  >
                    Add
                  </button>
                </div>
                <p className="mt-2 text-[10px] text-wf-muted">
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
