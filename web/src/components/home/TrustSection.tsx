const pillars = [
  {
    title: "Deterministic rules",
    text: "No silent exceptions. The sales router walks ordered predicates and stops at the first match.",
  },
  {
    title: "Evidence in the database",
    text: "Routing decisions, pricing applications, and payment events are persisted for audit and replay.",
  },
  {
    title: "Least-privilege tenancy",
    text: "Domain context flows through the request and aligns with row-level security on OLTP tables.",
  },
];

export function TrustSection() {
  return (
    <section id="trust" className="border-b border-ink/10 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate">
              Trust posture
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Built for operators who sleep better with receipts.
            </h2>
            <p className="mt-4 text-ink/70">
              The aesthetic here is Mittelstand sobriety meets South Plains
              plain speech: conservative claims, explicit states, and interfaces
              that do not pretend to be smarter than your compliance counsel.
            </p>
            <ul className="mt-8 space-y-4">
              {pillars.map((p) => (
                <li
                  key={p.title}
                  className="border-l-2 border-rust/70 pl-4"
                >
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/70">
                    {p.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-2xl border border-ink/10 bg-white/60 p-8 shadow-inner">
            <div className="absolute right-6 top-6 h-14 w-14 rounded-full border border-ink/10 bg-paper" />
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate">
              Sample router outcome
            </p>
            <dl className="mt-6 space-y-4 font-mono text-sm">
              <div className="flex justify-between gap-4 border-b border-ink/10 pb-3">
                <dt className="text-ink/50">decision</dt>
                <dd className="text-ink">VERIFY</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-ink/10 pb-3">
                <dt className="text-ink/50">domain_id</dt>
                <dd className="text-ink">casting</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-ink/10 pb-3">
                <dt className="text-ink/50">trust_score</dt>
                <dd className="text-ink">44</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-ink/50">next_action</dt>
                <dd className="text-right text-ink">Open KYC provider modal</dd>
              </div>
            </dl>
            <p className="mt-6 text-xs text-ink/50">
              Illustrative JSON-shaped summary only. No live evaluation on this
              static preview.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
