import { Metadata } from "next";
import WaterHeroSection from "@/components/natural-stp/WaterHeroSection";
import SolutionSection from "@/components/natural-stp/SolutionSection";
import AwardsSection from "@/components/natural-stp/AwardsSection";
import ComparisonSection from "@/components/natural-stp/ComparisonSection";
import InfrastructureSection from "@/components/natural-stp/InfrastructureSection";
import ShowcaseCarouselSection from "@/components/natural-stp/ShowcaseCarouselSection";
import WhatWeOffer from "@/components/natural-stp/WhatWeOffer";
import ContactSection from "@/components/natural-stp/ContactSection";

export const metadata: Metadata = {
  title:
    "NaturalSTP™ — Zero-Electricity Natural Sewage Treatment Plant | Ecoparadigm",
  description:
    "NaturalSTP™ by Ecoparadigm is India’s leading chemical-free, zero-electricity, zero-maintenance natural sewage treatment plant. 6-time National Award winner. Ideal for apartments, hospitals, hotels & resorts. Save up to 95% on lifetime costs.",
  keywords: [
    "NaturalSTP",
    "natural sewage treatment plant",
    "zero electricity STP",
    "zero maintenance STP",
    "chemical-free sewage treatment",
    "eco-friendly STP India",
    "NaturalSTP Ecoparadigm",
    "decentralised wastewater treatment",
    "biological wastewater treatment India",
    "STP for apartments",
    "STP for hospitals",
    "STP for hotels",
    "biomimicry water treatment",
    "national award STP India",
  ],
  alternates: {
    canonical: "https://ecoparadigm.in/natural-stp",
  },
  openGraph: {
    title:
      "NaturalSTP™ — Zero-Electricity Natural Sewage Treatment Plant | Ecoparadigm",
    description:
      "India’s most trusted natural STP technology. Zero electricity. Zero maintenance. Zero chemicals. 6-time National Award winner. Trusted by 600+ clients.",
    url: "https://ecoparadigm.in/natural-stp",
    type: "website",
  },
  twitter: {
    title: "NaturalSTP™ — Zero-Electricity Sewage Treatment Plant | Ecoparadigm",
    description:
      "Chemical-free, zero-electricity STP by Ecoparadigm. 6-time National Award winner. 600+ installations across India.",
  },
};

export default function NaturalSTPPage() {
  return (
    <>
      {/* JSON-LD: Product schema for NaturalSTP */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "NaturalSTP™",
            description:
              "A zero-electricity, chemical-free, zero-maintenance natural sewage treatment plant based on biomimicry. Ideal for apartments, hospitals, hotels, and large residential complexes.",
            brand: {
              "@type": "Brand",
              name: "Ecoparadigm",
            },
            manufacturer: {
              "@type": "Organization",
              name: "Ecoparadigm",
              url: "https://ecoparadigm.in",
            },
            award: "6-time National Award for Excellence in Water Treatment",
            offers: {
              "@type": "Offer",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
              url: "https://ecoparadigm.in/natural-stp",
            },
          }),
        }}
      />
      {/* JSON-LD: Service schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "NaturalSTP™ — Natural Sewage Treatment Plant",
            serviceType: "Wastewater Treatment",
            provider: {
              "@type": "Organization",
              name: "Ecoparadigm",
              url: "https://ecoparadigm.in",
            },
            areaServed: "IN",
            description:
              "Zero-electricity, zero-maintenance, chemical-free sewage treatment plant for apartments, hospitals, hotels, and commercial buildings.",
          }),
        }}
      />
      <WaterHeroSection />
      <SolutionSection />
      <AwardsSection />
      <ComparisonSection />
      <InfrastructureSection />
      <ShowcaseCarouselSection />
      <WhatWeOffer />
      <ContactSection />
    </>
  );
}
