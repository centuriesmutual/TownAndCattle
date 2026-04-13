import Image from "next/image";
import Link from "next/link";

export function HomeExploreSection() {
  return (
    <section
      className="w-full border-b border-wf-border bg-wf-sage/40 py-16 sm:py-24 lg:py-28"
      aria-label="Explore ranch program and commerce"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <article
          id="ranchers"
          className="scroll-mt-28 overflow-hidden rounded-3xl border border-wf-border bg-wf-white shadow-sm"
        >
          <div className="relative aspect-[21/9] sm:aspect-[2/1]">
            <Image
              src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=80"
              alt="Cattle on Texas range—ranch and packer program at Town and Cattle"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-wf-ink-deep/85 via-wf-ink-deep/25 to-transparent" />
          </div>
          <div className="p-6 sm:p-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-wf-green">
              For ranchers &amp; packers
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-wf-ink sm:text-3xl">
              Program overview &amp; illustrations
            </h2>
            <p className="mt-3 text-wf-muted">
              USDA listings, Commerce settlement, demand intelligence, and FSIS-aligned
              onboarding—full visual walkthrough on a dedicated page.
            </p>
            <Link
              href="/ranchers"
              className="tc-tap mt-6 inline-flex rounded-full bg-wf-ink px-8 text-sm font-semibold text-white transition hover:bg-wf-ink-deep"
            >
              Open full page →
            </Link>
          </div>
        </article>

        <article
          id="shop"
          className="scroll-mt-28 overflow-hidden rounded-3xl border border-wf-border bg-wf-white shadow-sm"
        >
          <div className="relative aspect-[21/9] sm:aspect-[2/1]">
            <Image
              src="https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1200&q=80"
              alt="Premium beef cuts—Coinbase Commerce marketplace settlement at Town and Cattle"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-wf-ink-deep/85 via-wf-ink-deep/25 to-transparent" />
          </div>
          <div className="p-6 sm:p-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-wf-green">
              Coinbase Commerce · marketplace rails
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-wf-ink sm:text-3xl">
              Payments &amp; settlement
            </h2>
            <p className="mt-3 text-wf-muted">
              Dual rails, ranch treasury, fees, and programmatic order state—diagrams
              and deep copy on a full production page.
            </p>
            <Link
              href="/commerce"
              className="tc-tap mt-6 inline-flex rounded-full bg-wf-green px-8 text-sm font-semibold text-white transition hover:bg-wf-green-hover"
            >
              Open full page →
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
