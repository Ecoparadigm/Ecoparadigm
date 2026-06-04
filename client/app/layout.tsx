import "./globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import LayoutWrapper from "@/components/LayoutWrapper";
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
})


export const metadata: Metadata = {
  metadataBase: new URL("https://ecoparadigm.in"),
  icons: {
    icon: '/taskbarLogo.png',
  },
  title: {
    default:
      "Ecoparadigm | NaturalSTP™ — India's Award-Winning Eco-Friendly Water & Environmental Solutions",
    template: "%s | Ecoparadigm",
  },
  description:
    "Ecoparadigm is a 6-time National Award-winning environmental engineering company. Pioneers of NaturalSTP™ — a zero-electricity, zero-maintenance natural sewage treatment plant. 20+ years, 600+ projects across India.",
  keywords: [
    "NaturalSTP",
    "natural sewage treatment plant",
    "zero electricity STP",
    "Ecoparadigm",
    "wastewater treatment India",
    "lake restoration",
    "rainwater harvesting",
    "environmental audit",
    "solid waste management",
    "eco-friendly STP",
    "6 time national award environmental company",
    "sustainable water solutions India",
  ],
  authors: [{ name: "Ecoparadigm" }],
  creator: "Ecoparadigm",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: "Ecoparadigm | NaturalSTP™ — India's Award-Winning Eco-Friendly Water & Environmental Solutions",
    description: "Ecoparadigm is a 6-time National Award-winning environmental engineering company. Pioneers of NaturalSTP™ — a zero-electricity, zero-maintenance natural sewage treatment plant. 20+ years, 600+ projects across India.",
    url: "https://ecoparadigm.in",
    siteName: "Ecoparadigm",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Ecoparadigm - Sustainable Water Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecoparadigm | NaturalSTP™",
    description: "India's Award-Winning Eco-Friendly Water & Environmental Solutions",
    site: "@ecoparadigm",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ecoparadigm",
    url: "https://ecoparadigm.in",
    logo: "https://ecoparadigm.in/logo.png",
    description: "6-time National Award-winning environmental engineering company. Pioneers of NaturalSTP™.",
  };

  return (
    <html lang="en" className={inter.className}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
