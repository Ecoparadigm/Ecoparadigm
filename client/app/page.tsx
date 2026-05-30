import { Metadata } from "next";
import HeroSection from "@/components/homepage/HeroSection";
import ComplianceHero from "@/components/homepage/ComplianceHero";
import AwardsBanner from "@/components/homepage/AwardsBanner";
import NaturalSTPIntro from "@/components/homepage/NaturalSTPIntro";
import DetailedServices from "@/components/homepage/DetailedServices";
import FeaturesSection from "@/components/homepage/FeaturesSection";
import WhoWeServe from "@/components/homepage/WhoWeServe";
import WhyChooseUs from "@/components/homepage/WhyChooseUs";
import WhyNaturalSTP from "@/components/homepage/WhyNaturalSTP";
import MediaMentions from "@/components/homepage/MediaMentions";
import ServicesGrid from "@/components/homepage/ServicesGrid";
import AboutStats from "@/components/homepage/AboutStats";
import Testimonials from "@/components/rainwaterharvesting/Testimonials";
import ESGDeepDive from "@/components/homepage/ESGDeepDive";
import SupportersGrid from "@/components/homepage/SupportersGrid";
import FAQSection from "@/components/Faq";
import HeroSection2 from "@/components/projects/HeroSection";
import PopupLeadForm from "@/components/homepage/PopupLeadForm";

export const metadata: Metadata = {
  title:
    "Zero OPEX STP's & Environmental Infrastructure | Ecoparadigm",
  description:
    "Ecoparadigm is India’s 6-time National Award-winning pioneer of NaturalSTP™ — a chemical-free, zero-electricity sewage treatment plant. Trusted by 600+ clients for wastewater treatment, lake restoration, rainwater harvesting, solid waste management and environmental audits.",
  keywords: [
    "NaturalSTP",
    "natural sewage treatment plant India",
    "zero electricity STP",
    "eco-friendly wastewater treatment",
    "Ecoparadigm",
    "lake restoration India",
    "rainwater harvesting Bangalore",
    "environmental audit India",
    "6 time national award water treatment",
    "chemical-free STP",
    "sustainable water management",
    "solid waste management India",
  ],
  alternates: {
    canonical: "https://ecoparadigm.in",
  },
  openGraph: {
    title:
      "Zero OPEX STP's & Environmental Infrastructure | Ecoparadigm",
    description:
      "6-time National Award-winning company. Pioneers of NaturalSTP™ — zero electricity, zero maintenance, chemical-free sewage treatment. 600+ projects, 200M+ lives impacted.",
    url: "https://ecoparadigm.in",
    type: "website",
  },
  twitter: {
    title:
      "Zero OPEX STP's & Environmental Infrastructure | Ecoparadigm",
    description:
      "6-time National Award-winning environmental engineering. Pioneers of NaturalSTP™ — zero electricity, zero maintenance, chemical-free STP.",
  },
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* JSON-LD: Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Ecoparadigm",
            url: "https://ecoparadigm.in",
            logo: "https://ecoparadigm.in/logo.png",
            description:
              "India’s 6-time National Award-winning environmental engineering company. Pioneers of NaturalSTP™ — a zero-electricity, chemical-free, natural sewage treatment plant.",
            foundingDate: "2004",
            areaServed: "IN",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-9448077904",
              contactType: "customer service",
              email: "Info@ecoparadigm.in",
              areaServed: "IN",
            },
            sameAs: [
              "https://www.linkedin.com/company/ecoparadigm",
              "https://www.instagram.com/ecoparadigm",
              "https://www.youtube.com/@ecoparadigm",
            ],
          }),
        }}
      />
      {/* JSON-LD: WebSite with SearchAction */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Ecoparadigm",
            url: "https://ecoparadigm.in",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://ecoparadigm.in/resources/blogs?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
      
      {/* Layout Flow */}
      <HeroSection />
      <ComplianceHero />
      <AwardsBanner />
      <NaturalSTPIntro />
      <DetailedServices />
      <FeaturesSection />
      <WhoWeServe />
      <WhyChooseUs />
      <WhyNaturalSTP />
      <MediaMentions />
      <ServicesGrid />
      <AboutStats />
      <Testimonials />
      <ESGDeepDive />
      <SupportersGrid />
      <FAQSection />
      <HeroSection2 />
      <PopupLeadForm />
    </div>
  );
}
