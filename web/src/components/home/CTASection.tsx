import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-ink/10 bg-gradient-to-br from-slate via-slate to-ink px-8 py-12 text-paper shadow-xl sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-rust/40 blur-3xl" />
          <div className="relative max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-sand">
              Centuries Mutual, LLC
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready when your team is—start with the yard, not the hype.
            </h2>
            <p className="mt-4 text-paper/75">
              This site is a visual and structural preview of Town &amp; Cattle.
              Backend services, webhooks, and warehouse pipelines are specified in
              the technical blueprint and can be implemented behind this interface.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-paper px-6 py-3 text-sm font-semibold text-ink transition hover:bg-white"
              >
                Schedule a walkthrough
              </Link>
              <Link
                href="#platform"
                className="inline-flex items-center justify-center rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-paper transition hover:bg-white/10"
              >
                Review MVP scope
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
