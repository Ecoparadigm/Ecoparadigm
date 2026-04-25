"use client";
import HeroSection from "@/components/homepage/HeroSection";
import HeroSection2 from "@/components/projects/HeroSection";
import SupportersGrid from "@/components/homepage/SupportersGrid";
import Testimonials from "@/components/rainwaterharvesting/Testimonials";
import AboutStats from "@/components/homepage/AboutStats";
import ServicesGrid from "@/components/homepage/ServicesGrid";
import FAQSection from "@/components/Faq";

export default function Page() {
  return (
    <>
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
