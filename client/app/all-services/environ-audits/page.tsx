import { Metadata } from "next";
import ContactSection from "@/components/environ-audits/ContactSection";
import WhatWeOffer from "@/components/environ-audits/WhatWeOffer";
import SupportersTicker from "@/components/environ-audits/SupportersTicker";
import EnergyAssessment from "@/components/environ-audits/EnergyAssessment";
import SuccessShowcase from "@/components/environ-audits/SuccessShowcase";

export const metadata: Metadata = {
  title:
    "Environmental & Energy Audits \u2014 Net Zero, ESG Advisory & Carbon Footprint | Ecoparadigm",
  description:
    "Ecoparadigm offers comprehensive environmental audits, energy audits, ESG advisory, carbon footprint assessments, net zero readiness planning and biodiversity assessments for industries and institutions across India.",
  keywords: [
    "environmental audit India",
    "energy audit services India",
    "ESG advisory India",
    "carbon footprint assessment",
    "net zero readiness India",
    "biodiversity assessment",
    "accessibility audit",
    "sustainability audit Bangalore",
    "Ecoparadigm environmental audits",
    "green building audit India",
  ],
  alternates: {
    canonical: "https://ecoparadigm.in/all-services/environ-audits",
  },
  openGraph: {
    title:
      "Environmental & Energy Audits | ESG Advisory & Net Zero Planning \u2014 Ecoparadigm",
    description:
      "Comprehensive environmental audits, energy assessments, ESG advisory and carbon footprint audits by Ecoparadigm. Trusted by 600+ clients across India.",
    url: "https://ecoparadigm.in/all-services/environ-audits",
    type: "website",
  },
  twitter: {
    title: "Environmental & Energy Audits | ESG & Net Zero \u2014 Ecoparadigm",
    description:
      "Energy audits, ESG advisory, carbon footprint assessments & net zero readiness by award-winning Ecoparadigm.",
  },
};

export default function EnvironAuditsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Environmental & Energy Audits",
            serviceType: "Environmental Audit",
            provider: {
              "@type": "Organization",
              name: "Ecoparadigm",
              url: "https://ecoparadigm.in",
            },
            areaServed: "IN",
            description:
              "Comprehensive environmental audits, energy audits, ESG advisory, carbon footprint assessments and net zero readiness planning for industries across India.",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Environmental Audit Services",
              itemListElement: [
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Energy Audits" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "ESG Advisory" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Carbon Footprint Assessment" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Net Zero Readiness" } },
                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Biodiversity Assessment" } },
              ],
            },
          }),
        }}
      />
      <EnergyAssessment />
      <WhatWeOffer />
      <SupportersTicker />
      <SuccessShowcase />
      <ContactSection />
    </>
  );
}
