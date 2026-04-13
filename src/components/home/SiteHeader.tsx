"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useState } from "react";

const nav = [
  { label: "Shoppers", href: "#for-shoppers" },
  { label: "Ranchers", href: "#ranchers" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Shop", href: "#shop" },
  { label: "Why us", href: "#why-us" },
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
    <header className="sticky top-0 z-50 border-b border-wf-border bg-wf-white/95 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <Link
            href="/"
            className="tc-tap group relative shrink-0 font-display text-lg font-semibold tracking-tight text-wf-ink sm:text-xl"
          >
            <span className="text-wf-green">Town</span>
            <span className="text-wf-ink">&</span>
            <span className="text-wf-ink">Cattle</span>
          </Link>
        </div>

        <nav
          className="hidden items-center gap-0.5 lg:flex"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="tc-tap rounded-full px-3 py-2 text-sm font-medium text-wf-muted transition hover:bg-wf-sage hover:text-wf-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="#shop"
            className="tc-tap hidden rounded-full bg-wf-green px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-wf-green-hover sm:inline-flex"
          >
            Shop now
          </Link>
          <button
            type="button"
            className="tc-tap rounded-full border border-wf-border p-2 text-wf-ink lg:hidden"
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
          className="tc-drawer-backdrop fixed inset-0 z-40 bg-wf-ink/40 lg:hidden"
          role="presentation"
          onClick={close}
        >
          <div
            id={panelId}
            className="tc-drawer-panel border-b border-wf-border bg-wf-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex max-h-[min(70vh,28rem)] flex-col overflow-y-auto px-4 py-4 tc-scroll-touch" aria-label="Mobile">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="tc-tap rounded-xl py-3 text-base font-medium text-wf-ink"
                  onClick={close}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#shop"
                className="tc-tap mt-4 rounded-full bg-wf-green py-3 text-center text-sm font-bold text-white"
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
