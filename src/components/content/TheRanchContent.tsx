import Link from "next/link";

const benefits = [
  {
    title: "USDA grades, plainly labeled",
    body: "Prime, Choice, and Select mean something here—every listing ties to documented grading, not adjectives.",
  },
  {
    title: "Verified ranch partners",
    body: "We work with producers who can show origin, harvest windows, and consistent quality—so you know what you are buying.",
  },
  {
    title: "Transparent unit pricing",
    body: "Per-pound pricing reflects grade and cut—not shelf placement. Compare fairly across ranch offerings.",
  },
  {
    title: "Traceable lots",
    body: "Lot and ranch identifiers follow your order from checkout to delivery for accountability you can audit.",
  },
];

export function TheRanchContent() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-2xl lg:text-left">
        <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-wf-green">
          For home cooks &amp; families
        </p>
        <h1 className="tc-section-title mt-3 font-display font-semibold text-wf-ink">
          Buy beef the way a butcher explains it—by grade, ranch, and weight.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-wf-muted sm:text-lg">
          The USDA grading program evaluates marbling, maturity, and yield for
          consistent quality tiers.{" "}
          <strong className="font-semibold text-wf-ink">Prime</strong> offers
          the highest marbling for exceptional juiciness;{" "}
          <strong className="font-semibold text-wf-ink">Choice</strong> is high
          quality and widely loved for everyday cooking;{" "}
          <strong className="font-semibold text-wf-ink">Select</strong> is
          leaner with lighter marbling. Town &amp; Cattle lists grades clearly
          so you can choose like a pro—without the grocery markup.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:gap-6">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="rounded-2xl border border-wf-border bg-wf-white p-6 shadow-sm sm:p-7"
          >
            <h2 className="font-display text-lg font-semibold text-wf-ink">
              {b.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-wf-muted">
              {b.body}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
        <Link
          href="/#shop"
          className="tc-tap justify-center rounded-full bg-wf-green px-10 text-sm font-semibold text-white shadow-sm transition hover:bg-wf-green-hover"
        >
          Browse featured cuts
        </Link>
        <Link
          href="/#how-it-works"
          className="tc-tap justify-center rounded-full border-2 border-wf-green bg-transparent px-10 text-sm font-semibold text-wf-green transition hover:bg-wf-green/10"
        >
          See how ordering works
        </Link>
      </div>

      <div className="mt-10 flex flex-col gap-4 border-t border-wf-border pt-10 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-8 lg:justify-start">
        <a
          href="https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/meat/beef-grading"
          className="tc-tap text-sm font-semibold text-wf-green underline-offset-4 hover:underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          USDA beef grading overview →
        </a>
        <a
          href="https://www.usda.gov"
          className="tc-tap text-sm font-semibold text-wf-green underline-offset-4 hover:underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          USDA.gov resources →
        </a>
        <Link
          href="/#why-us"
          className="tc-tap text-sm font-semibold text-wf-muted underline-offset-4 hover:text-wf-ink hover:underline"
        >
          Why Town &amp; Cattle
        </Link>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-4 border-t border-wf-border pt-10 sm:grid-cols-4 sm:gap-6">
        {[
          { t: "Verified ranchers", s: "Vetted suppliers" },
          { t: "Direct pricing", s: "No retail markup" },
          { t: "Traceable sourcing", s: "Lot & ranch ID" },
          { t: "Coinbase + cards", s: "Flexible checkout" },
        ].map((item) => (
          <div
            key={item.t}
            className="rounded-xl border border-wf-border bg-wf-white/80 px-3 py-4 text-center sm:text-left"
          >
            <p className="text-[10px] font-bold uppercase tracking-wider text-wf-green">
              {item.t}
            </p>
            <p className="mt-1 text-xs text-wf-muted">{item.s}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
