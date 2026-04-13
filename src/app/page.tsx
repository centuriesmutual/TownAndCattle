import { ConsumerSection } from "@/components/home/ConsumerSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { RancherSection } from "@/components/home/RancherSection";
import { ScrollProgress } from "@/components/home/ScrollProgress";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { Testimonials } from "@/components/home/Testimonials";
import { WhySection } from "@/components/home/WhySection";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <Hero />
        <ConsumerSection />
        <RancherSection />
        <HowItWorks />
        <FeaturedProducts />
        <WhySection />
        <Testimonials />
      </main>
      <SiteFooter />
    </>
  );
}
