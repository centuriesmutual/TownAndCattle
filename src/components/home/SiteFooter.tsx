import Link from "next/link";

const links = [
  { label: "The Ranch", href: "/the-ranch" },
  { label: "Farmers market", href: "/market" },
  { label: "The Range", href: "/the-range" },
  { label: "Ranchers", href: "/ranchers" },
  { label: "Our Township", href: "/our-township" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "Log in", href: "/login" },
  { label: "Create account", href: "/create-account" },
  { label: "Contact", href: "/#contact" },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-wf-ink-deep text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 border-b border-white/10 pb-10 md:flex-row md:justify-between">
          <div>
            <p className="font-display text-xl font-semibold text-white">
              Town<span className="text-wf-green-light">&</span>Cattle
            </p>
            <p className="mt-2 max-w-sm text-sm text-white/65">
              USDA-graded beef marketplace · Centuries Mutual, LLC
            </p>
            <p className="mt-6 inline-block rounded-full border border-white/25 bg-white/5 px-4 py-2 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-wf-green-light">
              Est. 2024 · Fredericksburg, Texas
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-col gap-2 text-sm text-white/70 sm:flex-row sm:flex-wrap sm:gap-x-6">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="tc-tap inline-flex rounded-full px-1 py-2 hover:text-white hover:underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex flex-col gap-2 pt-8 text-xs text-white/45 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Centuries Mutual, LLC</p>
          <p>
            <a
              href="https://townandcattle.com"
              className="underline-offset-2 hover:underline"
            >
              townandcattle.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
