import { Metadata } from "next";
import HeroSection from "@/components/homepage/HeroSection";
import HeroSection2 from "@/components/projects/HeroSection";
import SupportersGrid from "@/components/homepage/SupportersGrid";
import Testimonials from "@/components/rainwaterharvesting/Testimonials";
import AboutStats from "@/components/homepage/AboutStats";
import ServicesGrid from "@/components/homepage/ServicesGrid";
import FAQSection from "@/components/Faq";

export const metadata: Metadata = {
  title:
    "NaturalSTP™ | Zero-Electricity Wastewater Treatment & Environmental Solutions — Ecoparadigm",
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
      "Ecoparadigm | NaturalSTP™ — India’s Award-Winning Eco-Friendly Water Solutions",
    description:
      "6-time National Award-winning company. Pioneers of NaturalSTP™ — zero electricity, zero maintenance, chemical-free sewage treatment. 600+ projects, 200M+ lives impacted.",
    url: "https://ecoparadigm.in",
    type: "website",
  },
  twitter: {
    title:
      "Ecoparadigm | NaturalSTP™ — India’s Award-Winning Eco-Friendly Water Solutions",
    description:
      "6-time National Award-winning environmental engineering. Pioneers of NaturalSTP™ — zero electricity, zero maintenance, chemical-free STP.",
  },
};

export default function Page() {
  return (
    <>
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
      <HeroSection />
      <ServicesGrid />
      <Testimonials />
      <AboutStats />
      <SupportersGrid />
      <FAQSection />
      <HeroSection2 />
    </>
  );
}
