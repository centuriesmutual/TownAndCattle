import Link from "next/link";

const nav = [
  { label: "Platform", href: "#platform" },
  { label: "Domains", href: "#domains" },
  { label: "Architecture", href: "#architecture" },
  { label: "Trust & Routing", href: "#trust" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-md">
      <div className="border-b border-ink/5 bg-white/50">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-2.5 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono uppercase tracking-[0.2em] text-ink/55">
            <span className="rounded-full border border-ink/15 bg-white/70 px-2.5 py-1 text-ink/80">
              Centuries Mutual, LLC
            </span>
            <span className="hidden sm:inline">Steward-owned infrastructure</span>
          </div>
        </div>
      </div>
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-ink"
        >
          Town<span className="text-rust">&</span>Cattle
        </Link>
        <ul className="flex flex-wrap items-center gap-1 sm:gap-4">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="rounded-md px-2 py-1.5 text-sm text-ink/75 transition hover:bg-ink/5 hover:text-ink"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex w-full flex-wrap gap-2 sm:w-auto sm:justify-end">
          <Link
            href="#platform"
            className="inline-flex flex-1 items-center justify-center rounded-md border border-ink/15 bg-transparent px-4 py-2 text-sm font-medium text-ink transition hover:border-ink/30 sm:flex-none"
          >
            Technical overview
          </Link>
          <Link
            href="#contact"
            className="inline-flex flex-1 items-center justify-center rounded-md bg-ink px-4 py-2 text-sm font-medium text-paper shadow-sm transition hover:bg-slate sm:flex-none"
          >
            Request briefing
          </Link>
        </div>
      </nav>
    </header>
  );
}
