import Link from "next/link";

type SiteHeaderProps = {
  isLoggedIn: boolean;
  displayName?: string;
};

export function SiteHeader({ isLoggedIn, displayName }: SiteHeaderProps) {
  return (
    <header className="border-b border-wf-border bg-wf-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="tc-tap font-display text-lg font-semibold tracking-tight text-wf-ink sm:text-xl"
        >
          <span className="text-wf-green">Town</span>
          <span className="text-wf-ink">&</span>
          <span className="text-wf-ink">Cattle</span>
        </Link>

        <nav
          aria-label="Primary"
          className="flex flex-wrap items-center justify-end gap-2 sm:gap-3"
        >
          <Link
            href="/market"
            className="tc-tap rounded-md border border-transparent px-3 py-2 text-sm font-semibold text-wf-ink transition hover:border-wf-border hover:text-wf-green"
          >
            Farmers market
          </Link>
          <Link
            href="/the-ranch"
            className="tc-tap hidden rounded-md px-3 py-2 text-sm font-semibold text-wf-muted transition hover:text-wf-green sm:inline-flex"
          >
            The Ranch
          </Link>

          {isLoggedIn ? (
            <>
              <Link
                href="/account"
                className="tc-tap max-w-[10rem] truncate rounded-md border border-wf-border bg-wf-cream/60 px-3 py-2 text-sm font-semibold text-wf-ink transition hover:border-wf-green"
                title={displayName ? `Account (${displayName})` : "Account"}
              >
                {displayName ? displayName.split(" ")[0] ?? "Account" : "Account"}
              </Link>
              <form action="/api/auth/logout" method="post">
                <button
                  type="submit"
                  className="tc-tap rounded-md border border-wf-border bg-wf-white px-3 py-2 text-sm font-semibold text-wf-muted transition hover:border-red-200 hover:text-red-800"
                >
                  Sign out
                </button>
              </form>
            </>
          ) : (
            <Link
              href="/login"
              className="tc-tap rounded-md border border-wf-border bg-wf-white px-4 py-2 text-sm font-semibold text-wf-ink transition hover:border-wf-green hover:text-wf-green"
            >
              Log in
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
