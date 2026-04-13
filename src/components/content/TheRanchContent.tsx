import Image from "next/image";
import Link from "next/link";

const IMG_HERO =
  "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=2400&q=85";
const IMG_FIELD =
  "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=2000&q=85";
const IMG_HERD =
  "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1800&q=85";

const grades = [
  {
    name: "Prime",
    hook: "Peak marbling",
    copy: "Abundant intramuscular fat for exceptional juiciness—ideal when you want a steak that carries restaurant presence on the plate.",
    accent: "border-wf-ink bg-wf-ink text-white",
  },
  {
    name: "Choice",
    hook: "Everyday excellence",
    copy: "High quality with slightly less marbling than Prime—versatile for grilling, roasting, and the meals your household repeats every week.",
    accent: "border-wf-green bg-wf-green text-white",
  },
  {
    name: "Select",
    hook: "Leaner profile",
    copy: "Uniform quality with lighter marbling—perfect when you want predictable texture and a cleaner nutritional label without mystery sourcing.",
    accent: "border-wf-border bg-wf-cream text-wf-ink",
  },
] as const;

const pillars = [
  {
    title: "Grades you can compare",
    body: "Listings spell out USDA grade, cut, and ranch so you are never decoding marketing adjectives at the cooler.",
  },
  {
    title: "Ranch identity, not a logo slapped on",
    body: "Partners are vetted for origin documentation, harvest windows, and repeatable quality—so the story behind the lot matches the label.",
  },
  {
    title: "Per-pound honesty",
    body: "Unit pricing is tied to grade and weight—not end-cap placement or shrink-wrapped bundles designed to confuse.",
  },
  {
    title: "Lots that stay traceable",
    body: "Identifiers follow your order from cart to doorstep, giving you an audit path that respects serious food safety culture.",
  },
] as const;

export function TheRanchContent() {
  return (
    <>
      <section
        className="relative min-h-[92dvh] w-full overflow-hidden border-b border-wf-border"
        aria-labelledby="ranch-hero-heading"
      >
        <Image
          src={IMG_HERO}
          alt="Cattle on open range at golden hour"
          fill
          priority
          className="object-cover object-[center_35%]"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-wf-ink-deep/95 via-wf-ink-deep/55 to-wf-ink-deep/25"
          aria-hidden
        />
        <div className="relative flex min-h-[92dvh] flex-col justify-end px-4 pb-16 pt-32 sm:px-6 sm:pb-20 lg:px-12 lg:pb-28">
          <div className="mx-auto w-full max-w-6xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-wf-green-light">
              The Ranch · Shopper studio
            </p>
            <h1
              id="ranch-hero-heading"
              className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Buy beef with the confidence of a Saturday market—only the labels are
              USDA-official.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
              Prime, Choice, and Select are not vibes here. They are documented
              quality tiers you can weigh against ranch, cut, and fair per-pound
              pricing—without the retail middle aisle.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/market"
                className="tc-tap justify-center rounded-xl bg-wf-green px-10 py-3.5 text-sm font-semibold text-white transition hover:bg-wf-green-hover"
              >
                Enter the farmers market
              </Link>
              <Link
                href="/the-range"
                className="tc-tap justify-center rounded-xl border-2 border-white/50 bg-white/10 px-10 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                How we operate — The Range
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-wf-border bg-wf-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-wf-border lg:aspect-square">
            <Image
              src={IMG_FIELD}
              alt="Cattle grazing green pasture"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-wf-green">
              Why grading still matters
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-wf-ink sm:text-4xl">
              USDA graders evaluate marbling, maturity, and yield—the same language
              professionals use in the packing plant.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-wf-muted sm:text-lg">
              Town &amp; Cattle lists those tiers plainly so families can choose like a
              skilled butcher: match the grade to the cooking method, compare price
              per pound across ranches, and understand what you are paying for before
              you thaw the first steak.
            </p>
            <blockquote className="mt-8 border-l-4 border-wf-green pl-6 font-display text-lg italic text-wf-ink sm:text-xl">
              “We built this aisle for people who read the fine print—and for everyone
              who wishes fine print were actually fine.”
            </blockquote>
          </div>
        </div>
      </section>

      <section className="texture-linen border-b border-wf-border bg-wf-cream py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-wf-green">
              Grade guide
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-wf-ink sm:text-4xl">
              Three tiers, one honest shelf
            </h2>
            <p className="mt-4 text-base text-wf-muted sm:text-lg">
              Use this as a tasting compass—not a rulebook. Your grill, oven, and
              family preferences still lead.
            </p>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {grades.map((g) => (
              <article
                key={g.name}
                className={`flex flex-col rounded-2xl border-2 p-7 ${g.accent}`}
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-90">
                  USDA {g.name}
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold">{g.hook}</h3>
                <p className="mt-4 text-sm leading-relaxed opacity-95">{g.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-wf-border bg-wf-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-wf-border bg-wf-cream/40 p-7 sm:p-8"
              >
                <h3 className="font-display text-xl font-semibold text-wf-ink">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-wf-muted sm:text-base">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[420px] w-full border-b border-wf-border sm:min-h-[480px]">
        <Image
          src={IMG_HERD}
          alt="Herd on Texas grassland"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-wf-ink-deep/70" aria-hidden />
        <div className="relative mx-auto flex min-h-[420px] max-w-6xl flex-col justify-center px-4 py-16 sm:min-h-[480px] sm:px-6 lg:px-8">
          <p className="max-w-2xl font-display text-2xl font-semibold leading-snug text-white sm:text-3xl lg:text-4xl">
            From verified pasture partners to your kitchen table—every listing is a
            handshake you can trace.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/commerce"
              className="tc-tap justify-center rounded-xl bg-wf-green px-10 py-3.5 text-sm font-semibold text-white transition hover:bg-wf-green-hover"
            >
              Commerce &amp; settlement
            </Link>
            <a
              href="https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/meat/beef-grading"
              className="tc-tap justify-center rounded-xl border-2 border-white/50 px-10 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              rel="noopener noreferrer"
              target="_blank"
            >
              USDA beef grading overview
            </a>
          </div>
        </div>
      </section>

      <section className="bg-wf-sage py-14 sm:py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-wf-green">
              Next step
            </p>
            <p className="mt-2 font-display text-2xl font-semibold text-wf-ink">
              Ready to shop the stalls?
            </p>
            <p className="mt-2 max-w-xl text-sm text-wf-muted sm:text-base">
              Pair this guide with the farmers market experience—wallet, cart, and
              ranch-labeled inventory in one flow.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/market"
              className="tc-tap justify-center rounded-xl border border-wf-green bg-wf-green px-8 py-3 text-sm font-semibold text-white transition hover:bg-wf-green-hover"
            >
              Open farmers market
            </Link>
            <Link
              href="/our-township"
              className="tc-tap justify-center rounded-xl border-2 border-wf-border bg-wf-white px-8 py-3 text-sm font-semibold text-wf-ink transition hover:border-wf-green"
            >
              Supplier program
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
