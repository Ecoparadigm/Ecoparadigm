import { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactSection from "@/components/contact/ContactSection";
import FaqSection from "@/components/Faq";

export const metadata: Metadata = {
  title: "Contact Us \u2014 Get a Free NaturalSTP\u2122 Consultation",
  description:
    "Get in touch with Ecoparadigm for a free consultation on NaturalSTP\u2122, wastewater treatment, rainwater harvesting, lake restoration, solid waste management, or environmental audits. Based in Bengaluru, serving all of India.",
  keywords: [
    "contact Ecoparadigm",
    "NaturalSTP enquiry",
    "wastewater treatment consultation India",
    "free STP consultation",
    "environmental engineering contact Bangalore",
    "NaturalSTP free quote",
    "water treatment company contact",
  ],
  alternates: {
    canonical: "https://ecoparadigm.in/contact",
  },
  openGraph: {
    title: "Contact Ecoparadigm | Free NaturalSTP\u2122 Consultation",
    description:
      "Reach out for a free consultation on NaturalSTP\u2122, wastewater treatment, lake restoration, rainwater harvesting or environmental audits. Bengaluru, India.",
    url: "https://ecoparadigm.in/contact",
    type: "website",
  },
  twitter: {
    title: "Contact Ecoparadigm | Free NaturalSTP\u2122 Consultation",
    description:
      "Get a free consultation on eco-friendly water & environmental solutions. 600+ clients across India.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* JSON-LD: LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Ecoparadigm",
            url: "https://ecoparadigm.in",
            telephone: "+91-9448077904",
            email: "Info@ecoparadigm.in",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Bengaluru",
              addressRegion: "Karnataka",
              addressCountry: "IN",
            },
            description:
              "6-time National Award-winning environmental engineering company. Specialists in NaturalSTP\u2122, wastewater treatment, lake restoration, rainwater harvesting and environmental audits.",
            openingHours: "Mo-Sa 09:00-18:00",
          }),
        }}
      />
      <ContactHero />
      <ContactSection />
      <FaqSection />
    </>
  );
}
