import Image from "next/image";
import Link from "next/link";

type Pillar = {
  title: string;
  body: string;
  linkHref?: string;
  linkLabel?: string;
};

const pillars: Pillar[] = [
  {
    title: "List primals, bundles & harvest windows",
    body: "Publish USDA-stamped grades, cut sheets, and fulfillment windows in one catalog. Buyers see exactly what is on offer—no ambiguous “premium” labels. Inventory syncs to demand so you are not guessing what moves each week.",
  },
  {
    title: "Coinbase Commerce + fiat settlement",
    body: "Accept crypto through Coinbase Commerce alongside traditional card and ACH paths. International buyers and domestic ranch partners can settle in the rail that matches their operation—without forcing a one-size checkout.",
    linkHref: "https://www.coinbase.com/commerce",
    linkLabel: "Coinbase Commerce →",
  },
  {
    title: "Snowflake-backed demand analytics",
    body: "Pipe marketplace signals into Snowflake for price bands, regional velocity, and cut-level demand. Use the same rigor you apply to herd genetics—forecast what to push, when to harvest, and where margins hold.",
    linkHref: "https://www.snowflake.com",
    linkLabel: "Snowflake platform →",
  },
  {
    title: "Compliance & documentation",
    body: "We expect suppliers to maintain FSIS-aligned documentation, lot traceability, and grade verification consistent with USDA market standards. Our onboarding reviews your program before the first listing goes live.",
    linkHref: "https://www.fsis.usda.gov/wps/portal/fsis/topics/regulations",
    linkLabel: "FSIS regulations →",
  },
];

export function RancherSection() {
  return (
    <section
      id="ranchers"
      className="w-full border-b border-wf-border bg-wf-white py-16 sm:py-24 lg:py-28"
      aria-labelledby="ranchers-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="tc-reveal-wide">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-wf-green">
              For ranchers, packers &amp; suppliers
            </p>
            <h2
              id="ranchers-heading"
              className="tc-section-title mt-3 font-display font-semibold text-wf-ink"
            >
              A professional channel for USDA-graded beef—built for scale and
              settlement flexibility.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-wf-muted sm:text-lg">
              Town &amp; Cattle is a Texas-headquartered marketplace connecting
              verified producers with consumers who want real grades, real
              origins, and real unit economics. You keep your brand on the
              label—we provide structured listings, payments infrastructure, and
              analytics so your operation runs with grocery-grade discipline
              without grocery-chain terms.
            </p>
            <p className="mt-4 text-base leading-relaxed text-wf-muted">
              Whether you run a Hill Country cow-calf program, a regional
              packing partnership, or a direct-to-consumer expansion of an
              existing USDA facility, we align onboarding to how you already
              document grades and lots.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="#contact"
                className="tc-tap justify-center rounded-full bg-wf-ink px-8 text-sm font-semibold text-white transition hover:bg-wf-ink-deep"
              >
                Apply to partner
              </Link>
              <a
                href="mailto:partners@townandcattle.com?subject=Supplier%20program%20%E2%80%94%20one-pager%20request"
                className="tc-tap justify-center rounded-full border-2 border-wf-border bg-wf-cream px-8 text-sm font-semibold text-wf-ink transition hover:border-wf-green hover:text-wf-green"
              >
                Request partner one-pager
              </a>
              <Link
                href="#contact"
                className="tc-tap justify-center rounded-full border-2 border-transparent px-4 text-sm font-semibold text-wf-green underline-offset-4 hover:underline"
              >
                Schedule an intro call
              </Link>
            </div>

            <ul className="mt-10 space-y-3 border-t border-wf-border pt-8 text-sm text-wf-muted">
              <li>
                <Link
                  href="#contact"
                  className="font-semibold text-wf-green hover:underline"
                >
                  Supplier terms &amp; onboarding checklist
                </Link>
                <span className="text-wf-muted"> — legal and ops packet</span>
              </li>
              <li>
                <Link
                  href="https://www.fsis.usda.gov/wps/portal/fsis/topics/inspection"
                  className="font-semibold text-wf-green hover:underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  USDA inspection &amp; grading references
                </Link>
              </li>
              <li>
                <Link href="#shop" className="font-semibold text-wf-green hover:underline">
                  Preview the shopper experience
                </Link>
                <span className="text-wf-muted"> — see live cut cards</span>
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-wf-border shadow-md lg:sticky lg:top-28">
              <Image
                src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=80"
                alt="Texas cattle on open range—ranch suppliers partner with Town and Cattle for USDA-graded beef marketplace"
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {pillars.map((p) => (
            <article
              key={p.title}
              className="tc-reveal-card rounded-2xl border border-wf-border bg-wf-sage/50 p-6 sm:p-8"
            >
              <h3 className="font-display text-xl font-semibold text-wf-ink">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-wf-muted sm:text-base">
                {p.body}
              </p>
              {p.linkHref && p.linkLabel && (
                <p className="mt-4">
                  <a
                    href={p.linkHref}
                    className="inline-flex text-sm font-semibold text-wf-green underline-offset-4 hover:underline"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {p.linkLabel}
                  </a>
                </p>
              )}
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-wf-ink px-6 py-10 text-center sm:px-10 sm:py-12">
          <p className="font-display text-xl font-semibold text-white sm:text-2xl">
            Ready to list graded inventory with modern settlement and analytics?
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/75 sm:text-base">
            Our team reviews facility documentation, grade verification, and
            fulfillment capacity before launch—usually within two business weeks
            of a complete application.
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="#contact"
              className="tc-tap justify-center rounded-full bg-wf-green px-10 text-sm font-semibold text-white transition hover:bg-wf-green-hover"
            >
              Start supplier application
            </Link>
            <a
              href="mailto:partners@townandcattle.com"
              className="tc-tap justify-center rounded-full border-2 border-white/40 px-10 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Email partnerships
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
