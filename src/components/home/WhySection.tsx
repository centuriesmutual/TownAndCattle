const signals = [
  {
    title: "Direct from ranch sourcing",
    body: "Know where your beef was raised. We prioritize producers who document herd health, feed, and handling.",
    icon: "ranch",
  },
  {
    title: "No middleman markup",
    body: "Competitive pricing by shortening the chain—more value to you and fair returns to the ranch.",
    icon: "price",
  },
  {
    title: "Verified supplier network",
    body: "Suppliers pass our onboarding and ongoing checks so you are not guessing at the label.",
    icon: "shield",
  },
  {
    title: "Grades & transparency",
    body: "Quality markers, cut specs, and clear packaging—so you get what you paid for, every time.",
    icon: "grade",
  },
];

function Icon({ name }: { name: string }) {
  const common = "h-8 w-8 text-amber";
  switch (name) {
    case "ranch":
      return (
        <svg className={common} fill="none" viewBox="0 0 32 32" aria-hidden>
          <path
            stroke="currentColor"
            strokeWidth="1.5"
            d="M4 24h24M8 24V14l4-4h8l4 4v10M12 10V8h8v2"
          />
          <path
            stroke="currentColor"
            strokeWidth="1.5"
            d="M16 6v4M10 18h12"
          />
        </svg>
      );
    case "price":
      return (
        <svg className={common} fill="none" viewBox="0 0 32 32" aria-hidden>
          <path
            stroke="currentColor"
            strokeWidth="1.5"
            d="M16 4v24M20 8a4 4 0 00-8 0 4 4 0 008 0 4 4 0 00-8 0"
          />
        </svg>
      );
    case "shield":
      return (
        <svg className={common} fill="none" viewBox="0 0 32 32" aria-hidden>
          <path
            stroke="currentColor"
            strokeWidth="1.5"
            d="M16 4l10 4v8c0 6-4 10-10 12-6-2-10-6-10-12V8l10-4z"
          />
        </svg>
      );
    default:
      return (
        <svg className={common} fill="none" viewBox="0 0 32 32" aria-hidden>
          <path
            stroke="currentColor"
            strokeWidth="1.5"
            d="M6 26l6-8 4 4 6-10 4 6M6 10h6M10 6v8"
          />
        </svg>
      );
  }
}

export function WhySection() {
  return (
    <section
      id="why-us"
      className="relative border-b border-white/10 bg-void py-20 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4a24a' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative z-[1] mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="tc-reveal-wide mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber">
            Why not the grocery aisle?
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Why Town &amp; Cattle
          </h2>
          <p className="mt-4 text-ink/65">
            We built this for people who want steakhouse quality with farmers-market
            honesty—without the retail middle taking the first cut.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {signals.map((s) => (
            <div
              key={s.title}
              className="tc-reveal-card rounded-2xl border border-white/10 bg-elevated/80 p-6 backdrop-blur-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber/10">
                <Icon name={s.icon} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
