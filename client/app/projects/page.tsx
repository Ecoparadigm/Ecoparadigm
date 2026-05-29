import { Metadata } from "next";
import ProjectCard from "@/components/projects/ProjectCard";
import WhatWeDo from "@/components/projects/WhatWeDo";
import HeroSection from "@/components/projects/HeroSection";

export const metadata: Metadata = {
  title: "Our Projects — 600+ Environmental Engineering Projects Across India",
  description:
    "Explore Ecoparadigm’s portfolio of 600+ impactful projects — from NaturalSTP™ wastewater treatment installations to lake restoration, rainwater harvesting, solid waste management and energy audits across India.",
  keywords: [
    "Ecoparadigm projects",
    "NaturalSTP installations",
    "wastewater treatment projects India",
    "lake restoration projects",
    "rainwater harvesting projects",
    "environmental engineering portfolio India",
    "solid waste management projects",
    "600 water treatment projects",
  ],
  alternates: {
    canonical: "https://ecoparadigm.in/projects",
  },
  openGraph: {
    title: "Our Projects | 600+ Environmental Engineering Projects — Ecoparadigm",
    description:
      "From reviving dying lakes to treating hospital wastewater with NaturalSTP™ — Ecoparadigm’s work is measurable, documented, and award-winning.",
    url: "https://ecoparadigm.in/projects",
    type: "website",
  },
  twitter: {
    title: "Ecoparadigm Projects | 600+ Environmental Wins Across India",
    description:
      "Explore our portfolio: NaturalSTP™, lake restoration, rainwater harvesting, solid waste management and more.",
  },
};

import { supabase } from "@/utils/supabase";

export default async function ProjectsPage() {
  const { data: projects, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: true });

  const safeProjects = projects || [];

  return (
    <div className="bg-white min-h-screen">
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 py-16 sm:py-20 md:py-28 max-w-[1600px] mx-auto">
        {/* 🔹 TOP CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center mb-16 sm:mb-20">
          {/* LEFT */}
          <div>
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
              <p className="text-sm sm:text-base font-extrabold tracking-wider text-green-700 uppercase">
                Proof Of Impact
              </p>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-black leading-[1.1] tracking-tight text-gray-900">
              Projects that <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                changed the outcome
              </span>
            </h1>
          </div>

          {/* RIGHT */}
          <div className="flex items-start md:items-center justify-start md:justify-end border-l-4 border-green-500/20 pl-6 md:pl-8">
            <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-lg font-medium">
              From reviving a dying lake to treating disease-filled hospital
              wastewater, our work is measurable, documented, and award-winning.
            </p>
          </div>
        </div>

        {/* 🔥 DYNAMIC IMAGE CARDS SECTION */}
        <div className="mt-8 sm:mt-12 flex flex-col gap-6 sm:gap-8">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 sm:gap-8">
            {safeProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                desc={project.description}
                img={project.image_url}
                span={project.layout_span || "md:col-span-3"}
              />
            ))}
            
            {safeProjects.length === 0 && (
              <div className="col-span-1 md:col-span-6 text-center py-20 text-gray-500">
                No projects found. Check back later!
              </div>
            )}
          </div>
        </div>

        <div className="mt-16 sm:mt-24">
          <WhatWeDo />
        </div>
      </section>

      <HeroSection />
    </div>
  );
}
