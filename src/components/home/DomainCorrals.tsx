import Link from "next/link";

const domains = [
  {
    slug: "townandcattle.com",
    name: "Town square",
    desc: "General marketplace presence and brand home. The public face of the herd management system.",
    tag: "Primary",
  },
  {
    slug: "delta8.store",
    name: "Regulated corral",
    desc: "Additional compliance fencing for category-specific inventory, geo rules, and verification hooks.",
    tag: "Specialty",
  },
  {
    slug: "casting.adult",
    name: "Identity-gated corral",
    desc: "Verification-first commerce where entry is earned, not assumed—router returns VERIFY until cleared.",
    tag: "Restricted",
  },
];

export function DomainCorrals() {
  return (
    <section
      id="domains"
      className="farm-bg-pasture scroll-reveal relative border-b border-ink/10 py-16 sm:py-20"
    >
      <div className="relative z-[1] mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate">
              Multi-domain tenancy
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              One backend. Distinct corrals.
            </h2>
            <p className="mt-4 text-ink/70">
              Frontends resolve tenant context through a declared domain slug
              (for example via{" "}
              <code className="rounded bg-ink/5 px-1.5 py-0.5 font-mono text-xs">
                X-Domain-Slug
              </code>
              ). Row-level security keeps datasets separated while shared services
              stay maintainable.
            </p>
          </div>
          <Link
            href="#architecture"
            className="inline-flex w-fit items-center rounded-md border border-ink/15 px-4 py-2 text-sm font-medium text-ink transition hover:bg-white/80"
          >
            View request path
          </Link>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {domains.map((d) => (
            <article
              key={d.slug}
              className="scroll-reveal-card flex flex-col rounded-2xl border border-ink/10 bg-gradient-to-b from-white/90 to-paper/95 p-6 shadow-sm backdrop-blur-[2px]"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs text-slate">{d.slug}</span>
                <span className="rounded-full border border-ink/10 bg-paper px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ink/70">
                  {d.tag}
                </span>
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                {d.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">
                {d.desc}
              </p>
              <button
                type="button"
                className="mt-6 w-full rounded-md bg-ink py-2.5 text-sm font-medium text-paper opacity-60"
                disabled
              >
                Storefront preview (coming soon)
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
