import HeroSection from "@/components/lake-restoration/HeroSection";
import ImpactStats from "@/components/lake-restoration/ImpactStats";
import ShowcaseCarouselSection from "@/components/lake-restoration/ShowCarouselSection";
import FeatureSection from "@/components/lake-restoration/FeatureSection";
import CTASection from "@/components/lake-restoration/CTASection";

export default function LakeRestorationPage() {
  return (
    <div>
      <HeroSection />
      <ImpactStats />
      <ShowcaseCarouselSection />
      <FeatureSection />
      <CTASection />
    </div>
  );
}
