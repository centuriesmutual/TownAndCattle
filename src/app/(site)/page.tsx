import { AccountCtaSection } from "@/components/home/AccountCtaSection";
import { Hero } from "@/components/home/Hero";
import { HomeExploreSection } from "@/components/home/HomeExploreSection";

export default async function HomePage() {
  return (
    <>
      <Hero />
      <HomeExploreSection />
      <AccountCtaSection />
    </>
  );
}
