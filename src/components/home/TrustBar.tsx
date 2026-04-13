const items = [
  {
    title: "Verified ranchers",
    sub: "Vetted suppliers",
  },
  {
    title: "Direct pricing",
    sub: "No retail markup",
  },
  {
    title: "Traceable sourcing",
    sub: "Lot & ranch ID",
  },
  {
    title: "Coinbase + fiat",
    sub: "Flexible settlement",
  },
];

export function TrustBar() {
  return (
    <section
      className="border-b border-stahl/30 bg-eichenbraun/50 py-8 sm:py-10"
      aria-label="Trust and standards"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 sm:grid-cols-4 sm:gap-8 sm:px-6 lg:px-8">
        {items.map((item) => (
          <div
            key={item.title}
            className="border-l-2 border-mesquite/60 pl-3 sm:pl-4"
          >
            <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-mesquite">
              {item.title}
            </p>
            <p className="mt-1 text-sm text-kreide/70">{item.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
