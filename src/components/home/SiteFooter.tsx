import Link from "next/link";

const col1 = [
  { label: "Platform overview", href: "#platform" },
  { label: "Sales router", href: "#trust" },
  { label: "Pricing engine", href: "#architecture" },
  { label: "Checkout & settlement", href: "#architecture" },
];

const col2 = [
  { label: "townandcattle.com", href: "#domains" },
  { label: "delta8.store", href: "#domains" },
  { label: "casting.adult", href: "#domains" },
  { label: "Partner onboarding", href: "#contact" },
];

const col3 = [
  { label: "Privacy (placeholder)", href: "#" },
  { label: "Terms (placeholder)", href: "#" },
  { label: "Compliance inquiries", href: "#contact" },
  { label: "Security contact", href: "#contact" },
];

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="mt-auto border-t border-ink/10 bg-[#ebe6dc] text-ink"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-display text-xl font-semibold tracking-tight">
              Town<span className="text-rust">&</span>Cattle
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink/70">
              A Centuries Mutual, LLC initiative. The digital stockyard pairs
              German-grade systems discipline with Texan straight talk: clear
              rules, visible states, and commerce that respects both community and
              compliance.
            </p>
            <div className="mt-6 space-y-2 font-mono text-xs text-ink/60">
              <p>Centuries Mutual, LLC</p>
              <p>townandcattle.com · United States</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Link
                href="#contact"
                className="rounded-md bg-ink px-4 py-2 text-sm font-medium text-paper"
              >
                Contact operations
              </Link>
              <button
                type="button"
                className="rounded-md border border-ink/20 px-4 py-2 text-sm text-ink/80"
                disabled
              >
                Press kit (soon)
              </button>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate">
                Product
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                {col1.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-ink/75 hover:text-ink hover:underline"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate">
                Domains
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                {col2.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-ink/75 hover:text-ink hover:underline"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate">
                Legal & trust
              </h3>
              <ul className="mt-4 space-y-2 text-sm">
                {col3.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-ink/75 hover:text-ink hover:underline"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-ink/10 pt-8 text-xs text-ink/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Centuries Mutual, LLC. All rights
            reserved.
          </p>
          <p className="font-mono">
            Static marketing preview · No cookies · No trackers configured
          </p>
        </div>
      </div>
    </footer>
  );
}
