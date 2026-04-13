import { AccountCtaSection } from "@/components/home/AccountCtaSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { RancherTeaser } from "@/components/home/RancherTeaser";
import { WhySection } from "@/components/home/WhySection";

export default async function HomePage() {
  return (
    <>
      <Hero />
      <RancherTeaser />
      <HowItWorks />
      <FeaturedProducts />
      <WhySection />
      <AccountCtaSection />
    </>
  );
}
