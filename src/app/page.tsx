import { ArchitecturePreview } from "@/components/home/ArchitecturePreview";
import { CTASection } from "@/components/home/CTASection";
import { DomainCorrals } from "@/components/home/DomainCorrals";
import { FlowSteps } from "@/components/home/FlowSteps";
import { Hero } from "@/components/home/Hero";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { StatsBar } from "@/components/home/StatsBar";
import { TrustSection } from "@/components/home/TrustSection";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <StatsBar />
        <FlowSteps />
        <DomainCorrals />
        <ArchitecturePreview />
        <TrustSection />
        <CTASection />
      </main>
      <SiteFooter />
    </>
  );
}
