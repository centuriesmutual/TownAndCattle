"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useState } from "react";

const nav = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Why us", href: "#why-us" },
  { label: "Shop", href: "#shop" },
  { label: "Suppliers", href: "#suppliers" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <header className="sticky top-0 z-50 border-b border-stahl/40 bg-talgschwarz/95 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo + horizontal rules (Ordnung) */}
        <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
          <span
            className="hidden h-px flex-1 bg-gradient-to-r from-transparent to-stahl/50 sm:block sm:max-w-[4rem] lg:max-w-[6rem]"
            aria-hidden
          />
          <Link
            href="/"
            className="tc-tap group relative shrink-0 font-display text-lg font-semibold tracking-tight text-kreide sm:text-xl"
          >
            <span className="text-mesquite">Town</span>
            <span className="text-kreide">&</span>
            <span className="text-kreide">Cattle</span>
          </Link>
          <span
            className="hidden h-px flex-1 bg-gradient-to-l from-transparent to-stahl/50 sm:block sm:max-w-[4rem] lg:max-w-[6rem]"
            aria-hidden
          />
        </div>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="tc-tap rounded-md px-3 py-2 text-sm font-medium text-kreide/80 transition hover:bg-eichenbraun/40 hover:text-kreide"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="#shop"
            className="tc-tap hidden rounded-md bg-mesquite px-5 text-sm font-semibold text-talgschwarz transition hover:bg-mesquite/90 sm:inline-flex"
          >
            Shop now
          </Link>
          <button
            type="button"
            className="tc-tap rounded-md border border-stahl/50 p-2 text-kreide lg:hidden"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            {open ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" aria-hidden>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" aria-hidden>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div
          className="tc-drawer-backdrop fixed inset-0 z-40 bg-talgschwarz/80 lg:hidden"
          role="presentation"
          onClick={close}
        >
          <div
            id={panelId}
            className="tc-drawer-panel border-b border-stahl/40 bg-eichenbraun shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex max-h-[min(70vh,28rem)] flex-col overflow-y-auto px-4 py-4 tc-scroll-touch" aria-label="Mobile">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="tc-tap border-b border-stahl/20 py-3 text-base font-medium text-kreide"
                  onClick={close}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#shop"
                className="tc-tap mt-4 rounded-md bg-mesquite py-3 text-center text-sm font-bold text-talgschwarz"
                onClick={close}
              >
                Shop now
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
