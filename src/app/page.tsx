import { Hero } from "@/components/home/Hero";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { NeuralArchitecture } from "@/components/home/NeuralArchitecture";
import { TechMarquee } from "@/components/home/TechMarquee";
import { IndustryTabs } from "@/components/home/IndustryTabs";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { FeaturedShowcase } from "@/components/home/FeaturedShowcase";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <div className="relative w-full">
      <Hero />
      <ServicesGrid />
      <NeuralArchitecture />
      <TechMarquee />
      <IndustryTabs />
      <ProcessTimeline />
      <WhyChooseUs />
      <FeaturedShowcase />
      <FinalCTA />
    </div>
  );
}
