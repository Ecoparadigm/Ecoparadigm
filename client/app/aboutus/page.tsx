import AboutHero from "@/components/aboutus/AboutHero";
import ImpactStats from "@/components/aboutus/ImpactStats";
import SupportersTicker from "@/components/aboutus/SupportersTicker";
import AwardsHighlight from "@/components/aboutus/AwardsHighlight";
import TeamSection from "@/components/aboutus/TeamSection";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <ImpactStats />
      <SupportersTicker />  
      <AwardsHighlight />
      <TeamSection />
    </>
  );
}
