import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { SuppliersSection } from "@/components/home/SuppliersSection";
import { Testimonials } from "@/components/home/Testimonials";
import { WhySection } from "@/components/home/WhySection";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <WhySection />
        <FeaturedProducts />
        <SuppliersSection />
        <Testimonials />
      </main>
      <SiteFooter />
    </>
  );
}
