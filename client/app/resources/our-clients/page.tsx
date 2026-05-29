import { Metadata } from "next";
import ClientsSection from "@/components/our-clients/ClientsSection";
import CTASection from "@/components/our-clients/CTASection";

export const metadata: Metadata = {
  title:
    "Our Clients \u2014 600+ Trusted Partners Across India | Ecoparadigm",
  description:
    "Ecoparadigm is trusted by 600+ clients across India including hospitals, hotels, residential complexes, government bodies and industries for NaturalSTP\u2122, wastewater treatment, lake restoration, rainwater harvesting and environmental audits.",
  keywords: [
    "Ecoparadigm clients",
    "NaturalSTP trusted clients",
    "wastewater treatment clients India",
    "environmental engineering clients",
    "600 clients Ecoparadigm",
    "NaturalSTP partners",
    "environmental audit clients India",
  ],
  alternates: {
    canonical: "https://ecoparadigm.in/resources/our-clients",
  },
  openGraph: {
    title: "Our Clients | 600+ Trusted Partners Across India \u2014 Ecoparadigm",
    description:
      "Trusted by 600+ hospitals, hotels, residential complexes and industries across India for NaturalSTP\u2122 and environmental solutions.",
    url: "https://ecoparadigm.in/resources/our-clients",
    type: "website",
  },
  twitter: {
    title: "Ecoparadigm Clients | 600+ Trusted Partners India",
    description:
      "600+ hospitals, hotels, apartments and industries trust Ecoparadigm for NaturalSTP\u2122 and environmental solutions.",
  },
};

export default function OurClientsPage() {
  return (
    <>
      <ClientsSection />
      <CTASection />
    </>
  );
}
