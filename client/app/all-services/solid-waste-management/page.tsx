import { Metadata } from "next";
import HeroSection from "@/components/solid-waste-management/HeroSection";
import ImpactStats from "@/components/solid-waste-management/ImpactStats";
import SupportersTicker from "@/components/solid-waste-management/SupportersTicker";
import CTASection from "@/components/solid-waste-management/CTASection";
import KeyHighlights from "@/components/solid-waste-management/KeyHighlights";

export const metadata: Metadata = {
  title:
    "Solid Waste Management & Hazardous Waste Solutions in India | Ecoparadigm",
  description:
    "Ecoparadigm provides integrated solid waste management solutions including energy recovery, hazardous waste landfill design, CHTSDF systems for Goa, and the SWAPT software tool. Sustainable waste-to-resource solutions for industries and municipalities across India.",
  keywords: [
    "solid waste management India",
    "hazardous waste management India",
    "waste to energy India",
    "CHTSDF solid waste",
    "integrated solid waste management",
    "municipal solid waste solutions",
    "SWAPT waste management software",
    "industrial waste management Bangalore",
    "Ecoparadigm solid waste",
    "sustainable waste management India",
  ],
  alternates: {
    canonical: "https://ecoparadigm.in/all-services/solid-waste-management",
  },
  openGraph: {
    title:
      "Solid Waste & Hazardous Waste Management Solutions | Ecoparadigm",
    description:
      "Integrated solid waste management \u2014 energy recovery, hazardous waste landfills, CHTSDF, SWAPT tool. Trusted by 600+ clients across India.",
    url: "https://ecoparadigm.in/all-services/solid-waste-management",
    type: "website",
  },
  twitter: {
    title: "Solid Waste Management India | Ecoparadigm",
    description:
      "Energy recovery, hazardous waste, CHTSDF & SWAPT tool. Sustainable waste management by 6-time award-winning Ecoparadigm.",
  },
};

export default function SolidWasteManagement() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Solid Waste Management",
            serviceType: "Solid Waste Management",
            provider: {
              "@type": "Organization",
              name: "Ecoparadigm",
              url: "https://ecoparadigm.in",
            },
            areaServed: "IN",
            description:
              "Integrated solid waste management solutions including energy recovery, hazardous waste landfill design, CHTSDF systems, and the SWAPT software tool.",
          }),
        }}
      />
      <HeroSection />
      <ImpactStats />
      <SupportersTicker />
      <KeyHighlights />
      <CTASection />
    </>
  );
}
