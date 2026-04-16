import WaterHeroSection from "@/components/natural-stp/WaterHeroSection";
import SolutionSection from "@/components/natural-stp/SolutionSection";
import AwardsSection from "@/components/natural-stp/AwardsSection";
import ComparisonSection from "@/components/natural-stp/ComparisonSection";
import InfrastructureSection from "@/components/natural-stp/InfrastructureSection";
import ShowcaseCarouselSection from "@/components/natural-stp/ShowcaseCarouselSection";
import WhatWeOffer from "@/components/natural-stp/WhatWeOffer";
import ContactSection from "@/components/natural-stp/ContactSection";

export default function NaturalSTPPage() {
  return (
    <>
      <WaterHeroSection />
      <SolutionSection />
      <AwardsSection />
      {/* <ComparisonSection /> */}
      <InfrastructureSection />
      <ShowcaseCarouselSection />
      <WhatWeOffer />
      {/* <ContactSection /> */}
    </>
  );
}
