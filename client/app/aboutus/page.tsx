import { Metadata } from "next";

import AboutHero from "@/components/aboutus/AboutHero";
import ImpactStats from "@/components/aboutus/ImpactStats";
import SupportersTicker from "@/components/aboutus/SupportersTicker";
import AwardsHighlight from "@/components/aboutus/AwardsHighlight";
import TeamSection from "@/components/aboutus/TeamSection";
import VisionMissionHeader from "@/components/aboutus/VisionMissionHeader";
import CTASection from "@/components/aboutus/CTASection";

export const metadata: Metadata = {
  title: "About Us | EcoParadigm – Environmental & Sustainability Solutions",
  description:
    "EcoParadigm is a 6-time national award-winning environmental engineering company with 20+ years of experience delivering sustainable solutions like wastewater treatment, energy audits, biodiversity assessment, and carbon footprint reduction.",

  keywords: [
    "EcoParadigm",
    "Environmental Engineering India",
    "Sustainability Solutions",
    "Wastewater Treatment",
    "Energy Audits",
    "Net Zero Solutions",
    "Carbon Footprint Reduction",
    "Biodiversity Assessment",
    "Water Treatment Systems",
    "Green Building Solutions",
  ],

  authors: [{ name: "EcoParadigm" }],
  creator: "EcoParadigm",

  metadataBase: new URL("https://ecoparadigm.com"),

  openGraph: {
    title: "About EcoParadigm | 20+ Years of Environmental Impact",
    description:
      "Delivering measurable environmental and economic value across India and beyond. 600+ projects, 200M+ lives impacted, and billions of litres of water treated.",
    url: "https://ecoparadigm.com/about",
    siteName: "EcoParadigm",
    images: [
      {
        url: "/og-about.jpg", // 👉 put inside /public
        width: 1200,
        height: 630,
        alt: "EcoParadigm Environmental Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "EcoParadigm – Environmental Impact & Sustainability Leaders",
    description:
      "Award-winning environmental solutions company transforming water, energy, and sustainability across industries.",
    images: ["/og-about.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return (
    <>
      {/* ✅ STRUCTURED DATA (SEO BOOST) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "EcoParadigm",
            url: "https://ecoparadigm.com",
            logo: "https://ecoparadigm.com/logo.png", // 👉 replace with your logo
            description:
              "Award-winning environmental engineering company specializing in sustainable solutions.",
            foundingDate: "2000",
            sameAs: ["https://www.linkedin.com/", "https://www.instagram.com/"],
          }),
        }}
      />

      {/* ✅ PAGE CONTENT */}
      <AboutHero />
      <ImpactStats />
      <SupportersTicker />
      <AwardsHighlight />
      <TeamSection />
      <VisionMissionHeader />
      <CTASection />
    </>
  );
}
