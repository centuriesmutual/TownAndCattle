import Image from "next/image";
import Link from "next/link";
import { HERO_CARD_IMAGE_URL, HERO_IMAGE_URL } from "@/data/site";

/** Whole Foods–style split: solid panels, crisp borders, no image gradients. */
export function Hero() {
  return (
    <section
      className="w-full border-b border-wf-border bg-wf-white"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2 lg:items-stretch">
        <div className="flex flex-col justify-center border-b border-wf-border bg-wf-cream px-4 py-14 sm:px-8 sm:py-20 lg:border-b-0 lg:border-r lg:py-24 lg:pl-10 lg:pr-12">
          <div className="mb-5 flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded border border-wf-border bg-wf-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-wf-ink sm:text-[11px]">
              USDA grading standards
            </span>
            <span className="inline-flex items-center rounded border border-wf-green bg-wf-green px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white sm:text-[11px]">
              Ranch-direct marketplace
            </span>
          </div>
          <h1
            id="hero-heading"
            className="tc-hero-title font-display font-semibold tracking-tight text-wf-ink"
          >
            Premium beef,
            <br />
            <span className="text-wf-green">graded honestly.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-wf-muted sm:text-lg">
            Shop USDA Prime and Choice cuts with lot-level traceability—fair
            per-pound pricing from verified Texas ranchers, not the middle aisle.
          </p>
          <div className="mt-10 flex w-full max-w-lg flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/commerce"
              className="tc-tap w-full justify-center rounded-md border border-wf-green bg-wf-green px-8 text-center text-sm font-semibold text-white transition hover:bg-wf-green-hover sm:w-auto"
            >
              Shop premium cuts
            </Link>
            <Link
              href="/the-ranch"
              className="tc-tap w-full justify-center rounded-md border-2 border-wf-border bg-wf-white px-8 text-center text-sm font-semibold text-wf-ink transition hover:border-wf-green sm:w-auto"
            >
              The Ranch
            </Link>
          </div>
          <p className="mt-8 text-xs font-medium uppercase tracking-wider text-wf-muted">
            No retail markup games · Cold-chain fulfillment · Coinbase or card
          </p>
        </div>

        <div className="flex min-h-[min(52vh,28rem)] flex-col bg-wf-white lg:min-h-[min(88vh,40rem)]">
          <div className="relative min-h-[240px] flex-1 lg:min-h-0">
            <Image
              src={HERO_IMAGE_URL}
              alt="USDA graded premium beef—Town and Cattle ranch-direct marketplace"
              fill
              priority
              fetchPriority="high"
              className="object-cover object-center"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
          <div className="grid shrink-0 border-t border-wf-border lg:grid-cols-2">
            <div className="relative hidden min-h-[200px] border-wf-border lg:block lg:border-r">
              <Image
                src={HERO_CARD_IMAGE_URL}
                alt="Premium raw beef cuts on butcher block—USDA graded selection"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 0px, 25vw"
              />
            </div>
            <div className="bg-wf-sage px-6 py-5 sm:px-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-wf-green">
                Catalog preview
              </p>
              <p className="mt-2 font-display text-lg font-semibold text-wf-ink">
                Ranch-labeled · Grade-stamped · Per-pound clear
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
