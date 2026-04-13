import Link from "next/link";

const capabilities = [
  {
    title: "Dual rails at checkout",
    body: "Consumers pay the way they already trust—bank cards and ACH where offered—while crypto-native buyers can settle on the same invoice through Coinbase Commerce. One cart, two settlement cultures, reconciled for the ranch.",
    tag: "Buyers",
  },
  {
    title: "Treasury-grade settlement for suppliers",
    body: "Ranchers and packers receive payouts mapped to each fulfillment event: charge confirmation, partial shipment, or pickup completion. Webhooks and ledger exports keep your finance team out of the group chat.",
    tag: "Ranchers",
  },
  {
    title: "Transparent fee & FX posture",
    body: "Commerce surfaces network fees before capture, so both sides understand net proceeds. Cross-border buyers see conversion context up front—no surprise spreads after the steak is boxed.",
    tag: "Both sides",
  },
  {
    title: "Programmatic order state",
    body: "Authorization, capture, refund, and payout hooks are first-class. That lets Town & Cattle tie USDA lot releases to payment milestones automatically—professional operations, not manual screenshots.",
    tag: "Operations",
  },
];

export function FeaturedProducts() {
  return (
    <section
      id="shop"
      className="texture-linen relative w-full border-b border-wf-border bg-wf-white py-16 sm:py-24 lg:py-28"
      aria-labelledby="shop-heading"
    >
      <div className="relative z-[1] mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-wf-green">
            Coinbase Commerce · marketplace rails
          </p>
          <h2
            id="shop-heading"
            className="tc-section-title mt-2 font-display font-semibold text-wf-ink"
          >
            Payments built for ranch economics
          </h2>
          <p className="mt-4 text-base leading-relaxed text-wf-muted sm:text-lg">
            Town &amp; Cattle uses Coinbase Commerce as the professional payments
            fabric between verified ranchers and serious buyers—fiat and digital
            assets on shared infrastructure, with the audit trail a USDA supply
            chain deserves.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {capabilities.map((c) => (
            <article
              key={c.title}
              className="tc-reveal-card flex flex-col rounded-2xl border border-wf-border bg-wf-cream/50 p-6 shadow-sm sm:p-8"
            >
              <span className="inline-flex w-fit rounded-full bg-wf-ink/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                {c.tag}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-wf-ink">
                {c.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-wf-muted">
                {c.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-stretch gap-4 border-t border-wf-border pt-10 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <p className="text-sm text-wf-muted">
            Ready to transact? Log in to align identity with checkout and
            settlement history.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/login"
              className="tc-tap justify-center rounded-full bg-wf-green px-8 text-sm font-semibold text-white transition hover:bg-wf-green-hover"
            >
              Log in
            </Link>
            <Link
              href="/create-account"
              className="tc-tap justify-center rounded-full border-2 border-wf-border px-8 text-sm font-semibold text-wf-ink transition hover:border-wf-green"
            >
              Create account
            </Link>
            <Link
              href="/#contact"
              className="tc-tap justify-center text-sm font-semibold text-wf-green underline-offset-4 hover:underline"
            >
              Talk to partnerships →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
