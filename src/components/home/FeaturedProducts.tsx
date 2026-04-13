import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Ribeye, bone-in",
    ranch: "Llano Estacado Ranch",
    price: "$48/lb",
    grade: "USDA Prime",
    img: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Filet mignon pair",
    ranch: "Red River Cattle Co.",
    price: "$62/lb",
    grade: "Premium Choice+",
    img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Brisket whole packer",
    ranch: "Caprock Heritage Beef",
    price: "$12/lb",
    grade: "Angus verified",
    img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Strip steak bundle",
    ranch: "West Texas Prime",
    price: "$39/lb",
    grade: "Dry-aged 21d",
    img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=900&q=80",
  },
];

export function FeaturedProducts() {
  return (
    <section
      id="shop"
      className="texture-retail relative border-b border-wf-border bg-wf-cream py-20 sm:py-28"
    >
      <div className="relative z-[1] mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="tc-reveal flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-wf-green">
              The market
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-wf-text sm:text-4xl">
              Featured cuts
            </h2>
            <p className="mt-3 max-w-xl text-wf-muted">
              A taste of what verified ranchers list on Town &amp; Cattle—rotated
              seasonally with harvest windows.
            </p>
          </div>
          <Link
            href="#contact"
            className="shrink-0 text-sm font-semibold text-wf-green underline-offset-4 hover:underline"
          >
            Request inventory alerts →
          </Link>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <article
              key={p.name}
              className="tc-product tc-reveal-card overflow-hidden rounded-2xl border border-wf-border bg-wf-bg"
            >
              <div className="relative aspect-square bg-wf-cream">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover"
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                />
                <span className="absolute right-3 top-3 rounded-full bg-wf-green px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  {p.grade}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-wf-text">
                  {p.name}
                </h3>
                <p className="mt-1 text-xs text-wf-muted">{p.ranch}</p>
                <div className="mt-4 flex items-center justify-between gap-2">
                  <span className="font-mono text-sm font-semibold text-wf-green">
                    {p.price}
                  </span>
                  <button
                    type="button"
                    className="rounded-full bg-wf-green px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-wf-green-dark"
                  >
                    Add to cart
                  </button>
                </div>
                <p className="mt-3 text-[11px] text-wf-muted">
                  Checkout preview—cart connects when storefront launches.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
