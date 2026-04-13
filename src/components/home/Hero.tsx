import Image from "next/image";
import Link from "next/link";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2000&q=80";

export function Hero() {
  return (
    <section className="relative min-h-[78vh] overflow-hidden border-b border-wf-border bg-wf-cream">
      <Image
        src={HERO_IMAGE}
        alt="Premium beef on the grill—hero imagery for Town and Cattle"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Light retail fade: readable type over fresh photography */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-wf-bg via-wf-bg/92 to-wf-bg/25"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-wf-bg/90 via-transparent to-transparent sm:from-wf-bg/75" />

      <div className="relative z-[1] mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-end px-4 pb-14 pt-24 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="max-w-xl rounded-2xl border border-wf-border-light bg-wf-bg/90 p-8 shadow-lg backdrop-blur-sm sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-wf-green">
            Direct from the ranch
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold leading-[1.12] tracking-tight text-wf-text sm:text-4xl lg:text-[2.75rem]">
            Premium beef from ranchers, at prices that cut out the middleman.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-wf-muted sm:text-lg">
            Better quality, traceable sourcing, and fair pricing—because we connect
            you straight to producers who stand behind every cut.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#shop"
              className="inline-flex items-center justify-center rounded-full bg-wf-green px-8 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-wf-green-dark"
            >
              Browse the market
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-full border-2 border-wf-green bg-transparent px-8 py-3.5 text-sm font-semibold text-wf-green transition hover:bg-wf-green-soft"
            >
              How it works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
