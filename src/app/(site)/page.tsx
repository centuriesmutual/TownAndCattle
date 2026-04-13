import { AccountCtaSection } from "@/components/home/AccountCtaSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Hero } from "@/components/home/Hero";
import { RancherTeaser } from "@/components/home/RancherTeaser";

export default async function HomePage() {
  return (
    <>
      <Hero />
      <RancherTeaser />
      <FeaturedProducts />
      <AccountCtaSection />
    </>
  );
}
