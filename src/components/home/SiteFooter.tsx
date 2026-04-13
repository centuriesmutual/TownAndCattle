import Link from "next/link";

const links = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Why us", href: "#why-us" },
  { label: "Shop", href: "#shop" },
  { label: "Suppliers", href: "#suppliers" },
  { label: "Contact", href: "#contact" },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-talgschwarz">
      <div className="border-b border-mesquite/25 bg-eichenbraun/30">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6 sm:py-18 lg:px-8">
          <p className="font-display text-2xl font-semibold text-mesquite sm:text-3xl">
            Bestell heute. Iss besser morgen.
          </p>
          <h2 className="mt-2 font-display text-xl font-medium text-kreide sm:text-2xl">
            Order today. Eat better tomorrow.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-kreide/65">
            Harvest alerts, limited cuts, supplier openings—one list, no noise.
          </p>
          <form
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            action="#"
            method="post"
          >
            <label htmlFor="footer-email" className="sr-only">
              Email for newsletter
            </label>
            <input
              id="footer-email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              autoComplete="email"
              className="tc-tap min-h-12 flex-1 rounded-sm border border-stahl/50 bg-talgschwarz px-4 text-base text-kreide placeholder:text-kreide/35 focus:border-mesquite focus:outline-none focus:ring-1 focus:ring-mesquite/40"
            />
            <button
              type="submit"
              className="tc-tap min-h-12 rounded-sm bg-mesquite px-6 text-sm font-bold uppercase tracking-wide text-talgschwarz transition hover:bg-mesquite/90"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-2 text-xs text-kreide/45">Demo form—connect ESP when ready.</p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 border-b border-stahl/30 pb-10 md:flex-row md:justify-between">
          <div>
            <p className="font-display text-xl font-semibold text-kreide">
              Town<span className="text-mesquite">&</span>Cattle
            </p>
            <p className="mt-2 max-w-sm text-sm text-kreide/55">
              Premium beef marketplace · Centuries Mutual, LLC
            </p>
            <p className="mt-6 inline-block border border-dashed border-mesquite/50 px-3 py-2 font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-mesquite">
              Seit 2024 · Fredericksburg, Texas
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-col gap-2 text-sm text-kreide/65 sm:flex-row sm:flex-wrap sm:gap-x-6">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="tc-tap inline-flex rounded-sm px-1 py-2 hover:text-kreide hover:underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex flex-col gap-2 pt-8 text-xs text-kreide/45 sm:flex-row sm:justify-between">
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
