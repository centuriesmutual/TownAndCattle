const steps = [
  {
    n: "01",
    title: "Identity & trust",
    body: "JWT session context, device fingerprinting, and a transparent trust score—admission to the yard, documented once.",
  },
  {
    n: "02",
    title: "Sales router",
    body: "Prioritized rules evaluate the cart before money moves. Outcomes are explicit, logged, and audit-friendly.",
  },
  {
    n: "03",
    title: "Dynamic pricing",
    body: "JSONB conditions apply in strict priority order. Quotes are deterministic and time-bounded at checkout.",
  },
  {
    n: "04",
    title: "Coinbase charge",
    body: "Metadata carries domain_id, order_id, and user_id so settlement reconciles cleanly across storefronts.",
  },
  {
    n: "05",
    title: "Warehouse events",
    body: "Kafka-anchored ingestion into a Snowflake-style pipeline: raw capture first, curated marts second.",
  },
];

export function FlowSteps() {
  return (
    <section className="border-b border-ink/10 bg-paper py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate">
            End-to-end trace
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            From credential to ledger, without ambiguity.
          </h2>
          <p className="mt-4 text-ink/70">
            The flow is intentionally linear—German in its sequencing, Texan in
            its blunt transparency. Each gate exists for a reason you can explain
            to a regulator, a partner, or your own team.
          </p>
        </div>
        <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <li
              key={s.n}
              className="group relative rounded-xl border border-ink/10 bg-white/70 p-6 shadow-sm transition hover:border-rust/30 hover:shadow-md"
            >
              <span className="font-mono text-xs text-rust">{s.n}</span>
              <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
