import Link from "next/link";

const links = [
  { label: "For shoppers", href: "#for-shoppers" },
  { label: "For ranchers", href: "#ranchers" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Shop", href: "#shop" },
  { label: "Why us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-wf-ink-deep text-white">
      <div className="border-b border-white/10 bg-wf-ink">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 text-center sm:px-6 sm:py-18 lg:px-8">
          <h2 className="font-display text-2xl font-semibold text-wf-green-light sm:text-3xl">
            Order today. Eat better tomorrow.
          </h2>
          <p className="mt-2 font-display text-lg font-medium text-white/90 sm:text-xl">
            Harvest alerts, limited cuts, supplier openings—one list, no noise.
          </p>
          <p className="mx-auto mt-4 max-w-lg text-sm text-white/70">
            USDA-graded offerings from verified ranch partners. Unsubscribe
            anytime.
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
              className="tc-tap min-h-12 flex-1 rounded-full border border-white/20 bg-white/10 px-4 text-base text-white placeholder:text-white/40 focus:border-wf-green-light focus:outline-none focus:ring-2 focus:ring-wf-green-light/30"
            />
            <button
              type="submit"
              className="tc-tap min-h-12 rounded-full bg-wf-green px-6 text-sm font-semibold text-white transition hover:bg-wf-green-hover"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-2 text-xs text-white/45">Demo form—connect ESP when ready.</p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
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
