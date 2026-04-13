import type { Metadata } from "next";
import { TheRanchContent } from "@/components/content/TheRanchContent";

export const metadata: Metadata = {
  title: "The Ranch — USDA grades & shopper guide | Town & Cattle",
  description:
    "Immersive guide to USDA Prime, Choice, and Select on Town & Cattle—verified ranch partners, traceable lots, and fair per-pound pricing.",
  alternates: {
    canonical: "/the-ranch",
  },
};

export default function TheRanchPage() {
  return <TheRanchContent />;
}
