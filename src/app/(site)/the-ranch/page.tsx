import type { Metadata } from "next";
import { TheRanchContent } from "@/components/content/TheRanchContent";

export const metadata: Metadata = {
  title: "The Ranch — USDA grades & shopper guide | Town & Cattle",
  description:
    "Learn how USDA Prime, Choice, and Select apply to Town & Cattle listings. Verified ranch partners, traceable lots, and fair per-pound pricing.",
  alternates: {
    canonical: "/the-ranch",
  },
};

export default function TheRanchPage() {
  return (
    <section
      className="w-full border-b border-wf-border bg-wf-sage py-16 sm:py-24 lg:py-28"
      aria-label="Shopper guide to USDA beef grades"
    >
      <TheRanchContent />
    </section>
  );
}
