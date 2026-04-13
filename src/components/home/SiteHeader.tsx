import Link from "next/link";

const nav = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Why Town & Cattle", href: "#why-us" },
  { label: "Shop", href: "#shop" },
  { label: "For suppliers", href: "#suppliers" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-void/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-tight text-ink"
        >
          Town<span className="text-amber">&</span>Cattle
        </Link>
        <nav>
          <ul className="flex flex-wrap items-center gap-1 sm:gap-5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-md px-2 py-1.5 text-sm text-ink/70 transition hover:bg-white/5 hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex w-full gap-2 sm:w-auto">
          <Link
            href="#shop"
            className="inline-flex flex-1 items-center justify-center rounded-md border border-amber/40 bg-amber/10 px-4 py-2.5 text-sm font-semibold text-amber transition hover:bg-amber/20 sm:flex-none"
          >
            Shop premium beef
          </Link>
          <Link
            href="#how-it-works"
            className="inline-flex flex-1 items-center justify-center rounded-md border border-white/15 px-4 py-2.5 text-sm font-medium text-ink transition hover:border-white/25 hover:bg-white/5 sm:flex-none"
          >
            How it works
          </Link>
        </div>
      </div>
      <p className="border-t border-white/5 bg-elevated/80 px-4 py-1.5 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-ink/45 sm:text-left sm:px-6 lg:px-8">
        Centuries Mutual, LLC · Premium beef marketplace
      </p>
    </header>
  );
}
