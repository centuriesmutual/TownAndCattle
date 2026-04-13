import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ScrollProgress } from "@/components/home/ScrollProgress";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { StampRule } from "@/components/home/StampRule";
import { SuppliersSection } from "@/components/home/SuppliersSection";
import { Testimonials } from "@/components/home/Testimonials";
import { TrustBar } from "@/components/home/TrustBar";
import { WhySection } from "@/components/home/WhySection";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <Hero />
        <TrustBar />
        <StampRule
          de="— Vom ranch zum tisch —"
          en="From ranch to table"
        />
        <HowItWorks />
        <StampRule />
        <FeaturedProducts />
        <WhySection />
        <SuppliersSection />
        <Testimonials />
      </main>
      <SiteFooter />
    </>
  );
}
