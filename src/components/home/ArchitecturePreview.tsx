const layers = [
  { name: "Browser", detail: "Next.js storefront per domain" },
  { name: "Gateway", detail: "FastAPI · JWT + domain context" },
  { name: "Services", detail: "Identity · Router · Pricing · Checkout" },
  { name: "Data plane", detail: "PostgreSQL OLTP · Redis sessions" },
  { name: "Settlement", detail: "Coinbase Commerce + signed webhooks" },
  { name: "Analytics", detail: "Kafka → Snowflake-style marts" },
];

export function ArchitecturePreview() {
  return (
    <section
      id="architecture"
      className="farm-bg-night scroll-reveal-wide relative border-b border-white/10 py-16 text-paper sm:py-20"
    >
      <div className="relative z-[1] mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-sand">
            System architecture
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Horizontal scale, vertical clarity.
          </h2>
          <p className="mt-4 text-paper/75">
            The stack reads like a workshop drawing: every layer has a single job,
            and the seams are visible on purpose. This page is static UI only; the
            diagram describes the intended production topology.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 font-mono text-xs leading-relaxed text-paper/85">
            <pre className="overflow-x-auto whitespace-pre">
{`User Browser
    │
    ▼
Domain Frontend (Vercel / Netlify)
    │  X-Domain-Slug
    ▼
FastAPI Gateway ──► Identity (trust score)
    │                      │
    ▼                      ▼
Sales Router ◄─────── User context
    │
    ├─► APPROVE ──► Pricing ──► Order (pending)
    │                      │
    │                      ▼
    │              Coinbase charge + hosted_url
    │                      │
    ▼                      ▼
VERIFY / BLOCK      Webhook → PAID → Fulfillment
    │
    └──► Events ──► Kafka ──► Warehouse raw → marts`}
            </pre>
          </div>
          <ul className="space-y-3">
            {layers.map((l) => (
              <li
                key={l.name}
                className="flex gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-sand">
                  {l.name}
                </span>
                <span className="text-sm text-paper/80">{l.detail}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <button
            type="button"
            className="rounded-md border border-white/20 px-4 py-2 text-sm text-paper/80"
            disabled
          >
            OpenAPI (stub)
          </button>
          <button
            type="button"
            className="rounded-md border border-white/20 px-4 py-2 text-sm text-paper/80"
            disabled
          >
            Postman collection (stub)
          </button>
          <button
            type="button"
            className="rounded-md bg-rust px-4 py-2 text-sm font-medium text-white opacity-80"
            disabled
          >
            Deploy target: AWS (planned)
          </button>
        </div>
      </div>
    </section>
  );
}
