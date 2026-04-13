import Image from "next/image";
import Link from "next/link";

export function SuppliersSection() {
  return (
    <section
      id="suppliers"
      className="relative border-b border-wf-border bg-wf-bg py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="tc-reveal-wide grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-wf-border shadow-md lg:aspect-auto lg:min-h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=80"
              alt="Cattle on open range"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-wf-green">
              For ranchers &amp; suppliers
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-wf-text sm:text-4xl">
              Built for serious producers
            </h2>
            <p className="mt-4 text-wf-muted">
              List inventory on a marketplace designed for premium beef—reach
              buyers who care about provenance, not just lowest bid.
            </p>

            <ul className="mt-8 space-y-5 text-sm leading-relaxed text-wf-muted">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-wf-green" />
                <span>
                  <strong className="text-wf-text">List &amp; fulfill:</strong>{" "}
                  upload cuts, bundles, and harvest windows; we match you with
                  buyers ready to commit.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-wf-green" />
                <span>
                  <strong className="text-wf-text">
                    Payments with Coinbase Commerce:
                  </strong>{" "}
                  crypto-native and international settlement options alongside
                  traditional rails—faster access to capital and a wider buyer
                  pool.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-wf-green" />
                <span>
                  <strong className="text-wf-text">Analytics on Snowflake:</strong>{" "}
                  demand trends, pricing benchmarks, and inventory signals—so you
                  decide what to raise, when to sell, and how to price.
                </span>
              </li>
            </ul>

            <Link
              href="#contact"
              className="mt-10 inline-flex items-center justify-center rounded-full border-2 border-wf-green bg-wf-green-soft px-6 py-3 text-sm font-semibold text-wf-green transition hover:bg-wf-green hover:text-white"
            >
              Partner with us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
