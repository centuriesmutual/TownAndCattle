const stats = [
  { value: "1", label: "Unified API gateway" },
  { value: "RLS", label: "Tenant isolation in PostgreSQL" },
  { value: "JSONB", label: "Deterministic rule definitions" },
  { value: "15m", label: "Price lock window (planned)" },
];

export function StatsBar() {
  return (
    <section
      id="platform"
      className="farm-band-stats scroll-reveal relative border-b border-white/10 text-paper"
    >
      <div className="relative z-[1] mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col gap-1">
            <span className="font-display text-3xl font-semibold tracking-tight">
              {s.value}
            </span>
            <span className="text-sm text-paper/70">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
