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
    <footer id="contact" className="bg-wf-bg">
      <div className="border-b border-wf-border bg-wf-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-wf-text sm:text-4xl">
            Order today. Eat better tomorrow.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-wf-muted">
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
              className="min-h-12 flex-1 rounded-full border border-wf-border bg-wf-bg px-5 text-sm text-wf-text placeholder:text-wf-muted/70 focus:border-wf-green focus:outline-none focus:ring-2 focus:ring-wf-green/25"
            />
            <button
              type="submit"
              className="min-h-12 rounded-full bg-wf-green px-8 text-sm font-semibold text-white transition hover:bg-wf-green-dark"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-3 text-xs text-wf-muted">
            Demo form—wire your email provider when ready.
          </p>
        </div>
      </div>

      <div className="bg-wf-green text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10 border-b border-white/15 pb-10 md:flex-row md:justify-between">
            <div>
              <p className="font-display text-xl font-semibold">
                Town<span className="text-white/90">&</span>Cattle
              </p>
              <p className="mt-2 max-w-xs text-sm text-white/75">
                Premium beef marketplace by Centuries Mutual, LLC. United States.
              </p>
            </div>
            <nav aria-label="Footer">
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/85">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="transition hover:text-white hover:underline"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex flex-col gap-2 pt-8 text-xs text-white/60 sm:flex-row sm:justify-between">
            <p>© {new Date().getFullYear()} Centuries Mutual, LLC</p>
            <p>townandcattle.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
