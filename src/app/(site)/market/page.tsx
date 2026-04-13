import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { FarmersMarketClient } from "@/components/market/FarmersMarketClient";
import { MARKET_PRODUCTS } from "@/data/site";
import { getTcSession } from "@/lib/auth/session";

export const metadata: Metadata = {
  title: "Farmers market | Town & Cattle",
  description:
    "Browse USDA-graded ranch stalls, fund your shopper wallet, and simulate checkout—the consumer vantage on Town & Cattle.",
  alternates: { canonical: "/market" },
};

export default async function MarketPage() {
  const session = await getTcSession();
  if (!session.user?.profileCompletedAt) {
    redirect("/login");
  }

  return (
    <article className="w-full border-b border-wf-border bg-wf-cream">
      <FarmersMarketClient products={MARKET_PRODUCTS} />
    </article>
  );
}
