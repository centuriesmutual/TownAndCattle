import { AccountCtaSection } from "@/components/home/AccountCtaSection";
import { Hero } from "@/components/home/Hero";
import {
  HomeCommerceFullSection,
  HomeRanchersFullSection,
} from "@/components/home/HomeExploreSection";

export default async function HomePage() {
  return (
    <>
      <Hero />
      <HomeRanchersFullSection />
      <HomeCommerceFullSection />
      <AccountCtaSection />
    </>
  );
}
