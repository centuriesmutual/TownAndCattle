import Image from "next/image";
import Link from "next/link";
import { HERO_IMAGE_URL } from "@/data/site";

export function Hero() {
  return (
    <section
      className="texture-linen relative min-h-[min(90vh,52rem)] overflow-hidden border-b border-stahl/30"
      aria-labelledby="hero-heading"
    >
      <div className="ledger-grid pointer-events-none absolute inset-0 opacity-[0.12]" />
      <Image
        src={HERO_IMAGE_URL}
        alt="Marbled premium ribeye on dark wood—buy premium beef online from ranch-direct Texas suppliers at Town and Cattle"
        fill
        priority
        fetchPriority="high"
        className="object-cover object-center opacity-55"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-talgschwarz via-talgschwarz/88 to-talgschwarz/65"
        aria-hidden
      />

      <div className="relative z-[1] mx-auto flex min-h-[min(90vh,52rem)] max-w-6xl flex-col justify-end px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28 lg:px-8 lg:pb-20">
        <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-mesquite sm:text-xs">
          — Hill Country · German craft —
        </p>
        <h1
          id="hero-heading"
          className="tc-hero-title font-display font-semibold text-kreide"
        >
          Ranch to table.
          <br />
          <span className="text-mesquite">No middleman.</span> No compromise.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-kreide/80 sm:text-lg">
          Buy premium beef online—grass-fed and ranch-direct. Best beef prices
          through straight trade with verified ranchers. Precision you can taste.
        </p>
        <div className="mt-10 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:items-center">
          <Link
            href="#shop"
            className="tc-tap w-full justify-center rounded-sm border-2 border-mesquite bg-mesquite px-6 text-center text-sm font-bold uppercase tracking-wide text-talgschwarz transition hover:bg-mesquite/90 sm:w-auto"
          >
            Shop premium cuts
          </Link>
          <Link
            href="#how-it-works"
            className="tc-tap w-full justify-center rounded-sm border-2 border-kreide/40 bg-transparent px-6 text-center text-sm font-semibold uppercase tracking-wide text-kreide transition hover:border-mesquite hover:text-mesquite sm:w-auto"
          >
            How it works
          </Link>
        </div>
      </div>
    </section>
  );
}
