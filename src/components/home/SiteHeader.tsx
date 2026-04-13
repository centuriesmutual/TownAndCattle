import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-wf-border bg-wf-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="tc-tap font-display text-lg font-semibold tracking-tight text-wf-ink sm:text-xl"
        >
          <span className="text-wf-green">Town</span>
          <span className="text-wf-ink">&</span>
          <span className="text-wf-ink">Cattle</span>
        </Link>
        <Link
          href="/login"
          className="tc-tap rounded-md border border-wf-border bg-wf-white px-5 text-sm font-semibold text-wf-ink transition hover:border-wf-green hover:text-wf-green"
        >
          Log in
        </Link>
      </div>
    </header>
  );
}
