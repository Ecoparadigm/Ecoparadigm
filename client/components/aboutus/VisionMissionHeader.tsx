"use client";

import { motion } from "framer-motion";

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemStagger = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } },
};

export default function VisionMissionHeader() {
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2" />

      {/* 🔥 HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-4xl mb-12 sm:mb-16 md:mb-20 relative z-10"
      >
        <div className="flex items-center gap-2 mb-4 sm:mb-6">
          <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-xs sm:text-sm font-extrabold tracking-wider text-green-700 uppercase">
            Our Core Purpose
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-gray-900">
          Committed to an eco-friendly world: <br className="hidden lg:block" />
          <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">our vision & mission</span>{" "}
          explained
        </h2>
      </motion.div>

      {/* 🔥 CONTAINER */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12"
      >
        {/* 🔹 LEFT - MISSION */}
        <motion.div
          variants={itemStagger}
          className="p-8 sm:p-10 lg:p-12 bg-white border border-gray-100 rounded-3xl shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:border-green-100 transition-all duration-500 group relative overflow-hidden"
        >
          {/* Subtle neon edge */}
          <div className="absolute top-0 left-0 w-[4px] h-full bg-gradient-to-b from-green-400 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <h3 className="text-2xl sm:text-3xl font-black mb-4 sm:mb-6 text-gray-900 flex items-center gap-3">
            <span className="text-green-500">01.</span> Mission
          </h3>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 font-medium">
            We thrive on establishing new paradigms, developing unconventional
            technologies mimicking nature’s own environmental processes, and
            pushing the envelope on environmental engineering - simple and
            elegant solutions that are good for the client, and good for the
            planet.
          </p>

          {/* Quote Box */}
          <div className="bg-gray-50 border border-gray-100 p-5 sm:p-6 rounded-2xl relative">
            <div className="absolute top-4 left-4 text-4xl text-green-500/20 font-serif leading-none">"</div>
            <p className="text-gray-700 italic text-sm sm:text-base leading-relaxed relative z-10 font-medium">
              We innovate to safeguard the Earth’s resources as a sacred trust,
              ensuring our closed-loop solutions leave a flourishing planet for
              future generations.
            </p>
            <p className="mt-4 text-gray-900 font-bold text-xs uppercase tracking-wider">
              — MD of Ecoparadigm
            </p>
          </div>
        </motion.div>

        {/* 🔹 RIGHT - VISION */}
        <motion.div
          variants={itemStagger}
          className="p-8 sm:p-10 lg:p-12 bg-white border border-gray-100 rounded-3xl shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:border-cyan-100 transition-all duration-500 group relative overflow-hidden"
        >
          {/* Subtle neon edge */}
          <div className="absolute top-0 left-0 w-[4px] h-full bg-gradient-to-b from-cyan-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <h3 className="text-2xl sm:text-3xl font-black mb-4 sm:mb-6 text-gray-900 flex items-center gap-3">
            <span className="text-cyan-500">02.</span> Vision
          </h3>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 font-medium">
            Our self-sustaining environmental strategies will lead to a
            significant enhancement in our quality of life, in terms of improved
            health, value for money and aesthetics. We will mentor and nurture a
            cadre of passionate environmentalists and their ideas, to be worthy
            custodians of our planet.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {[
              "Waste Water Treatment",
              "Rainwater Harvesting",
              "NaturalSTP",
              "Solid Waste Management",
              "Energy Audits",
              "Waterbody Restoration",
              "Biodiversity Assessment",
              "Clean air",
              "Carbon footprint",
            ].map((tag, index) => (
              <span
                key={index}
                className="bg-gray-50 border border-gray-200 text-gray-700 font-medium text-xs sm:text-sm px-4 py-2 rounded-xl hover:bg-green-50 hover:border-green-200 hover:text-green-700 transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
