import { Metadata } from "next";
import HeroSection from "@/components/rainwaterharvesting/HeroSection";
import FeaturesSection from "@/components/rainwaterharvesting/FeaturesSection";
import Testimonials from "@/components/rainwaterharvesting/Testimonials";
import StatsSection from "@/components/rainwaterharvesting/StatsSection";
import CTASection from "@/components/rainwaterharvesting/CTASection";

export const metadata: Metadata = {
  title:
    "Rainwater Harvesting Solutions for Homes, Apartments & Industries | Ecoparadigm",
  description:
    "Ecoparadigm designs and installs custom rainwater harvesting systems for residential complexes, commercial buildings and industries across India. Capture 3500 MLD of unused rainwater. Reduce water bills. Recharge groundwater. Trusted by 600+ clients.",
  keywords: [
    "rainwater harvesting India",
    "rainwater harvesting system",
    "commercial rainwater harvesting Bangalore",
    "rainwater harvesting for apartments",
    "groundwater recharge systems India",
    "rooftop rainwater harvesting",
    "smart city water solutions",
    "water conservation India",
    "Ecoparadigm rainwater harvesting",
    "rainwater collection system",
    "sustainable water management India",
  ],
  alternates: {
    canonical: "https://ecoparadigm.in/all-services/rainwater-harvesting",
  },
  openGraph: {
    title:
      "Rainwater Harvesting Systems for Homes & Industries | Ecoparadigm",
    description:
      "Custom rainwater harvesting solutions by Ecoparadigm. Capture, conserve and reuse rainwater. Reduce water bills. Recharge groundwater. 600+ clients across India.",
    url: "https://ecoparadigm.in/all-services/rainwater-harvesting",
    type: "website",
  },
  twitter: {
    title: "Rainwater Harvesting Solutions India | Ecoparadigm",
    description:
      "Custom rainwater harvesting systems for apartments, industries and smart cities. Trusted by 600+ clients across India.",
  },
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Rainwater Harvesting Solutions",
            serviceType: "Rainwater Harvesting",
            provider: {
              "@type": "Organization",
              name: "Ecoparadigm",
              url: "https://ecoparadigm.in",
            },
            areaServed: "IN",
            description:
              "Custom rainwater harvesting systems for residential complexes, commercial buildings and industries. Capture, conserve and reuse rainwater to reduce water bills and recharge groundwater.",
          }),
        }}
      />
      <HeroSection />
      <FeaturesSection />
      <Testimonials />
      <StatsSection />
      <CTASection />
    </main>
  );
}
