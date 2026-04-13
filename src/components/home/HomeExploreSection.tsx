import Image from "next/image";
import Link from "next/link";

/** Full-viewport section 2 — ranchers & packers (homepage only). */
export function HomeRanchersFullSection() {
  return (
    <section
      id="ranchers"
      className="grid min-h-[100dvh] w-full scroll-mt-0 grid-cols-1 border-b border-wf-border bg-wf-white lg:grid-cols-2"
      aria-labelledby="home-ranchers-heading"
    >
      <div className="relative h-[min(45vh,28rem)] min-h-[240px] w-full min-w-0 lg:h-full lg:min-h-[100dvh]">
        <Image
          src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1600&q=80"
          alt="Cattle on Texas range—ranch and packer program at Town and Cattle"
          fill
          className="object-cover"
          sizes="(max-width:1024px) 100vw, 50vw"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col justify-center border-t border-wf-border bg-wf-cream px-6 py-16 sm:px-10 sm:py-20 lg:min-h-[100dvh] lg:border-l lg:border-t-0 lg:px-14 lg:py-24">
        <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-wf-green">
          For ranchers &amp; packers
        </p>
        <h2
          id="home-ranchers-heading"
          className="mt-4 font-display text-3xl font-semibold leading-tight text-wf-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
        >
          List USDA-graded beef with modern settlement and analytics.
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-wf-muted sm:text-lg">
          Inventory, Coinbase Commerce, demand intelligence, and FSIS-aligned
          onboarding—full diagrams and program copy on a dedicated page, or start
          here and go deeper when you are ready.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href="/ranchers"
            className="tc-tap justify-center rounded-md border border-wf-ink bg-wf-ink px-10 py-3 text-sm font-semibold text-white transition hover:bg-wf-ink-deep"
          >
            View program overview
          </Link>
          <Link
            href="/our-township"
            className="tc-tap justify-center rounded-md border-2 border-wf-border bg-wf-white px-10 py-3 text-sm font-semibold text-wf-ink transition hover:border-wf-green"
          >
            Our Township
          </Link>
          <Link
            href="/#contact"
            className="tc-tap justify-center py-3 text-sm font-semibold text-wf-green underline-offset-4 hover:underline"
          >
            Schedule an intro call
          </Link>
        </div>
      </div>
    </section>
  );
}

/** Full-viewport section 3 — commerce & settlement (homepage only). */
export function HomeCommerceFullSection() {
  return (
    <section
      id="shop"
      className="grid min-h-[100dvh] w-full scroll-mt-0 grid-cols-1 border-b border-wf-border bg-wf-white lg:grid-cols-2"
      aria-labelledby="home-commerce-heading"
    >
      <div className="order-2 flex flex-col justify-center border-t border-wf-border bg-wf-white px-6 py-16 sm:px-10 sm:py-20 lg:order-1 lg:min-h-[100dvh] lg:border-r lg:border-t-0 lg:px-14 lg:py-24">
        <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-wf-green">
          Coinbase Commerce · marketplace rails
        </p>
        <h2
          id="home-commerce-heading"
          className="mt-4 font-display text-3xl font-semibold leading-tight text-wf-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
        >
          Payments built for ranch economics.
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-wf-muted sm:text-lg">
          Town &amp; Cattle uses Coinbase Commerce as the settlement layer between
          verified ranchers and buyers—fiat and digital assets, webhooks, and the
          audit posture a USDA supply chain deserves. Full diagrams and capability
          detail on the commerce page.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href="/commerce"
            className="tc-tap justify-center rounded-md border border-wf-green bg-wf-green px-10 py-3 text-sm font-semibold text-white transition hover:bg-wf-green-hover"
          >
            View commerce &amp; settlement
          </Link>
          <Link
            href="/login"
            className="tc-tap justify-center rounded-md border-2 border-wf-border bg-wf-cream px-10 py-3 text-sm font-semibold text-wf-ink transition hover:border-wf-green"
          >
            Log in
          </Link>
          <Link
            href="/create-account"
            className="tc-tap justify-center py-3 text-sm font-semibold text-wf-green underline-offset-4 hover:underline"
          >
            Create account
          </Link>
        </div>
      </div>
      <div className="relative order-1 h-[min(45vh,28rem)] min-h-[240px] w-full min-w-0 lg:order-2 lg:h-full lg:min-h-[100dvh]">
        <Image
          src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1600&q=80"
          alt="Cattle grazing—Coinbase Commerce marketplace at Town and Cattle"
          fill
          className="object-cover"
          sizes="(max-width:1024px) 100vw, 50vw"
          loading="lazy"
        />
      </div>
    </section>
  );
}
