import Image from "next/image";
import Link from "next/link";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2000&q=80";

export function Hero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden border-b border-white/10">
      <Image
        src={HERO_IMAGE}
        alt="Premium beef on the grill—hero imagery for Town and Cattle"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-void via-void/90 to-void/55"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-void/80 via-transparent to-void/40" />

      <div className="relative z-[1] mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20 lg:px-8 lg:pb-28">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber">
            Direct from the ranch
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Premium beef from ranchers, at prices that cut out the middleman.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink/75">
            Better quality, traceable sourcing, and competitive pricing—because
            we connect you straight to producers who stand behind every cut.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#shop"
              className="inline-flex items-center justify-center rounded-md bg-amber px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-void shadow-lg shadow-amber/20 transition hover:bg-amber/90"
            >
              Browse the market
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-md border border-white/25 bg-white/5 px-8 py-3.5 text-sm font-semibold text-ink backdrop-blur-sm transition hover:border-amber/40 hover:bg-white/10"
            >
              How it works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
