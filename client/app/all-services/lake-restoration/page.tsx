import { Metadata } from "next";
import HeroSection from "@/components/lake-restoration/HeroSection";
import ImpactStats from "@/components/lake-restoration/ImpactStats";
import ShowcaseCarouselSection from "@/components/lake-restoration/ShowCarouselSection";
import FeatureSection from "@/components/lake-restoration/FeatureSection";
import CTASection from "@/components/lake-restoration/CTASection";

export const metadata: Metadata = {
  title:
    "Natural Lake Restoration & Rejuvenation Services in India | Ecoparadigm",
  description:
    "Ecoparadigm’s natural lake restoration solutions have revived 80+ billion litres of water across India. Winner of the National Water Award 2018 for Kundalahalli Lake restoration. Chemical-free, sustainable lake rejuvenation for urban and rural water bodies.",
  keywords: [
    "lake restoration India",
    "natural lake rejuvenation",
    "urban lake restoration",
    "Kundalahalli lake restoration",
    "National Water Award lake restoration",
    "water body rejuvenation India",
    "eco-friendly lake restoration",
    "Ecoparadigm lake restoration",
    "lake revival Bangalore",
    "sustainable lake management",
  ],
  alternates: {
    canonical: "https://ecoparadigm.in/all-services/lake-restoration",
  },
  openGraph: {
    title:
      "Natural Lake Restoration Services | National Water Award Winner \u2014 Ecoparadigm",
    description:
      "Award-winning natural lake restoration. Revived 80+ billion litres across India. Kundalahalli Lake National Water Award 2018 winner.",
    url: "https://ecoparadigm.in/all-services/lake-restoration",
    type: "website",
  },
  twitter: {
    title: "Lake Restoration & Rejuvenation India | Ecoparadigm",
    description:
      "Natural, chemical-free lake restoration. National Water Award 2018 winner. 80+ billion litres restored across India.",
  },
};

export default function LakeRestorationPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Natural Lake Restoration & Rejuvenation",
            serviceType: "Lake Restoration",
            provider: {
              "@type": "Organization",
              name: "Ecoparadigm",
              url: "https://ecoparadigm.in",
            },
            areaServed: "IN",
            award: "National Water Award 2018",
            description:
              "Natural, chemical-free lake restoration and rejuvenation services. Ecoparadigm has restored 80+ billion litres of water across India using sustainable bio-remediation techniques.",
          }),
        }}
      />
      <HeroSection />
      <ImpactStats />
      <ShowcaseCarouselSection />
      <FeatureSection />
      <CTASection />
    </div>
  );
}
