import type { Metadata } from "next";
import { OurTownshipContent } from "@/components/content/OurTownshipContent";

export const metadata: Metadata = {
  title: "Our Township — Supplier & rancher program | Town & Cattle",
  description:
    "USDA-graded listings, Coinbase Commerce settlement, Snowflake analytics, and FSIS-aligned onboarding for Texas ranch and packing partners.",
  alternates: {
    canonical: "/our-township",
  },
};

export default function OurTownshipPage() {
  return (
    <section
      className="w-full border-b border-wf-border bg-wf-white py-16 sm:py-24 lg:py-28"
      aria-label="Supplier and rancher marketplace program"
    >
      <OurTownshipContent />
    </section>
  );
}
