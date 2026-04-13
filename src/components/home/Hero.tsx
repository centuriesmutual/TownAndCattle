import Image from "next/image";
import Link from "next/link";
import { HERO_CARD_IMAGE_URL, HERO_IMAGE_URL } from "@/data/site";

export function Hero() {
  return (
    <section
      className="relative min-h-[min(92vh,56rem)] w-full overflow-hidden border-b border-wf-border"
      aria-labelledby="hero-heading"
    >
      <Image
        src={HERO_IMAGE_URL}
        alt="USDA graded premium ribeye steak with rosemary on slate—buy grass-fed beef online direct from verified Texas ranchers at Town and Cattle"
        fill
        priority
        fetchPriority="high"
        className="object-cover object-center sm:object-[center_40%]"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-wf-ink-deep/95 via-wf-ink-deep/88 to-wf-ink/25 sm:via-wf-ink-deep/82 sm:to-wf-ink/15"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-t from-wf-ink-deep/50 via-transparent to-wf-ink-deep/20 sm:from-wf-ink-deep/35" aria-hidden />

      <div className="relative z-[1] mx-auto flex min-h-[min(92vh,56rem)] w-full max-w-7xl items-center px-4 py-28 sm:px-6 sm:py-24 lg:px-10 lg:py-20">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl lg:max-w-none">
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm sm:text-[11px]">
                USDA grading standards
              </span>
              <span className="inline-flex items-center rounded-full bg-wf-green px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white sm:text-[11px]">
                Ranch-direct marketplace
              </span>
            </div>
            <h1
              id="hero-heading"
              className="tc-hero-title font-display font-semibold tracking-tight text-white"
            >
              Premium beef,
              <br />
              <span className="text-wf-green-light">graded honestly.</span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/90 sm:text-lg">
              Shop USDA Prime and Choice cuts with lot-level traceability—fair
              per-pound pricing from verified Texas ranchers, not the middle aisle.
            </p>
            <div className="mt-10 flex w-full max-w-lg flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/commerce"
              className="tc-tap w-full justify-center rounded-full bg-wf-green px-8 text-center text-sm font-semibold text-white shadow-md transition hover:bg-wf-green-hover sm:w-auto"
            >
              Shop premium cuts
            </Link>
              <Link
                href="/the-ranch"
                className="tc-tap w-full justify-center rounded-full border-2 border-white/50 bg-white/10 px-8 text-center text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white hover:bg-white/20 sm:w-auto"
              >
                The Ranch
              </Link>
            </div>
            <p className="mt-8 text-xs font-medium uppercase tracking-wider text-white/55">
              No retail markup games · Cold-chain fulfillment · Coinbase or card
            </p>
          </div>

          <div className="relative mx-auto hidden w-full max-w-md lg:mx-0 lg:block lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border-4 border-white/25 bg-white/5 shadow-2xl ring-1 ring-white/20">
              <Image
                src={HERO_CARD_IMAGE_URL}
                alt="Premium raw beef cuts on butcher block—USDA graded selection at Town and Cattle marketplace"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 0px, 50vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-wf-ink-deep/90 to-transparent px-6 py-8 pt-24">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-wf-green-light">
                  Catalog preview
                </p>
                <p className="mt-1 font-display text-lg font-semibold text-white">
                  Ranch-labeled · Grade-stamped · Per-pound clear
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
