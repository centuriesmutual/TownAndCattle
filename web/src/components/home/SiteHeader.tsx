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
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono uppercase tracking-[0.2em] text-ink/55">
          <span className="rounded-full border border-ink/15 bg-white/60 px-2.5 py-1 text-ink/80">
            Centuries Mutual, LLC
          </span>
          <span className="hidden sm:inline">Steward-owned infrastructure</span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {["townandcattle.com", "delta8.store", "casting.adult"].map((d) => (
            <span
              key={d}
              className="rounded-md border border-slate/20 bg-slate/5 px-2 py-0.5 font-mono text-[10px] text-slate"
            >
              {d}
            </span>
          ))}
        </div>
      </div>
      <div className="border-t border-ink/5 bg-white/40">
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
      </div>
    </header>
  );
}
