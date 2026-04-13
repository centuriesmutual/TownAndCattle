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
    <header className="sticky top-0 z-50 border-b border-wf-border bg-wf-bg/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-tight text-wf-green"
        >
          Town<span className="text-wf-text">&</span>Cattle
        </Link>
        <nav>
          <ul className="flex flex-wrap items-center gap-1 sm:gap-5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-md px-2 py-1.5 text-sm font-medium text-wf-text transition hover:bg-wf-cream hover:text-wf-green"
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
            className="inline-flex flex-1 items-center justify-center rounded-full bg-wf-green px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-wf-green-dark sm:flex-none"
          >
            Shop premium beef
          </Link>
          <Link
            href="#how-it-works"
            className="inline-flex flex-1 items-center justify-center rounded-full border border-wf-border bg-wf-bg px-5 py-2.5 text-sm font-semibold text-wf-text transition hover:border-wf-green hover:bg-wf-cream sm:flex-none"
          >
            How it works
          </Link>
        </div>
      </div>
      <p className="border-t border-wf-border-light bg-wf-cream px-4 py-2 text-center text-[11px] font-medium uppercase tracking-[0.18em] text-wf-muted sm:text-left sm:px-6 lg:px-8">
        Centuries Mutual, LLC · Quality standards you can trace
      </p>
    </header>
  );
}
