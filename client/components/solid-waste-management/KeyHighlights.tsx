"use client";

import { motion } from "framer-motion";
import HighlightCard from "./HighlightCard";

const highlights = [
  {
    title: "Energy and Resource Recovery",
    description:
      "The foundational objective is to minimize waste generation at the source. This involves sophisticated waste stream auditing, lifecycle assessments, and process re-engineering to identify opportunities for material efficiency and input substitution.",
    image:
      "https://images.unsplash.com/photo-1762805544291-cb128cf5ec80?q=80&w=827&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    reverse: false,
  },
  {
    title: "CHTSDF for Goa State",
    description:
      "Ecoparadigm has been involved in the concept to commissioning of the Hazardous Waste Treatment, Storage and Disposal Facility of capacity Landfill 25,000TPA and incineration 3,000 Ton per annum.",
    image:
      "https://images.unsplash.com/photo-1695556747879-f4552b46fdbc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    reverse: true,
  },
  {
    title: "Hazardous Waste Landfill Project, Dabbaspete",
    description:
      "Ecoparadigm has been involved in the concept to commissioning of the Hazardous Waste Treatment, Storage and Disposal Facility of capacity Landfill 25,000TPA and incineration 3,000 Ton per annum.",
    image:
      "https://plus.unsplash.com/premium_photo-1663076457597-41d96c7bbafd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    reverse: false,
  },
  {
    title: "MSW Decision Support Software - SWAPT",
    description:
      "The Solid Waste Appropriate Technologies (SWAPT) tool aims to offer technical and professional resources for assessing various waste treatment options in India. This includes evaluating the economic, environmental, climatic, and social impacts of these systems.",
    image:
      "https://plus.unsplash.com/premium_photo-1663126486036-c09bf2a12811?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    reverse: true,
  },
];

export default function KeyHighlights() {
  return (
    <section className="w-full bg-gray-50/50 py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-20 xl:px-24 2xl:px-32 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-xs sm:text-sm font-extrabold tracking-wider text-green-700 uppercase">
              Core Capabilities
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
            Key Highlights
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col gap-12 md:gap-20">
          {highlights.map((item, index) => (
            <HighlightCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
