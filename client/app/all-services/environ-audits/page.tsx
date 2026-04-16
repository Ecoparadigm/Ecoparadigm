import ContactSection from "@/components/environ-audits/ContactSection";
import WhatWeOffer from "@/components/environ-audits/WhatWeOffer";
import SupportersTicker from "@/components/environ-audits/SupportersTicker";
import EnergyAssessment from "@/components/environ-audits/EnergyAssessment";
import SuccessShowcase from "@/components/environ-audits/SuccessShowcase";

export default function EnvironAuditsPage() {
  return (
    <>
      <EnergyAssessment />
      <SupportersTicker />
      <WhatWeOffer />
      <SuccessShowcase />
      <ContactSection />
    </>
  );
}
