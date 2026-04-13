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
    <footer id="contact" className="bg-void">
      <div className="border-b border-amber/20 bg-gradient-to-b from-amber/10 to-transparent">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Order today. Eat better tomorrow.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-ink/60">
            Drop your email for harvest alerts, limited cuts, and supplier
            openings—no spam, just signal.
          </p>
          <form
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            action="#"
            method="post"
          >
            <label htmlFor="footer-email" className="sr-only">
              Email
            </label>
            <input
              id="footer-email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              autoComplete="email"
              className="min-h-12 flex-1 rounded-md border border-white/15 bg-elevated px-4 text-sm text-ink placeholder:text-ink/35 focus:border-amber/50 focus:outline-none focus:ring-1 focus:ring-amber/40"
            />
            <button
              type="submit"
              className="min-h-12 rounded-md bg-amber px-6 text-sm font-bold uppercase tracking-wide text-void transition hover:bg-amber/90"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-3 text-xs text-ink/40">
            Demo form—wire your email provider when ready.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 border-b border-white/10 pb-10 md:flex-row md:justify-between">
          <div>
            <p className="font-display text-xl font-semibold text-ink">
              Town<span className="text-amber">&</span>Cattle
            </p>
            <p className="mt-2 max-w-xs text-sm text-ink/55">
              Premium beef marketplace by Centuries Mutual, LLC. United States.
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink/60">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="transition hover:text-ink hover:underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex flex-col gap-2 pt-8 text-xs text-ink/45 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Centuries Mutual, LLC</p>
          <p>townandcattle.com</p>
        </div>
      </div>
    </footer>
  );
}
