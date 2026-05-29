"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function WasteHeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#062f2f] to-[#031c1c] overflow-hidden flex items-center px-4 sm:px-6 md:px-12 lg:px-16 py-16 md:py-28 min-h-[90vh]">
      {/* 🍃 Subtle background light / spotlights */}
      <div className="absolute inset-0 bg-radial-[at_top_right] from-green-500/10 via-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center w-full max-w-7xl mx-auto z-10 relative">
        {/* LEFT CONTENT */}
        <div>
          {/* Badge Tag */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4 sm:mb-6"
          >
            <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></span>
            <p className="text-xs sm:text-sm text-gray-200 font-medium tracking-wide">
              Solid Waste Management
            </p>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight"
          >
            Transform Waste Into{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
              Valuable Resources
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-lg leading-relaxed font-medium"
          >
            We deliver end-to-end sustainable waste solutions for cities and
            industries, turning waste into reusable resources through smart
            collection, segregation, and eco-friendly processing.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="group w-full sm:w-auto bg-green-500 hover:bg-green-600 transition duration-300 px-6 sm:px-8 py-3.5 rounded-full text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-green-500/20 hover:scale-[1.02]"
            >
              Learn More
              <span className="bg-white text-green-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold group-hover:translate-x-1 transition duration-300">
                →
              </span>
            </Link>

            <Link
              href="/contact"
              className="group w-full sm:w-auto border border-white/30 text-white hover:bg-white hover:text-gray-900 transition duration-300 px-6 sm:px-8 py-3.5 rounded-full font-bold text-center"
            >
              Talk to Us
            </Link>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative mt-8 md:mt-0 flex justify-center">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="relative w-full max-w-[500px]"
          >
            <div className="absolute inset-0 bg-green-500/5 blur-3xl rounded-full scale-90" />
            
            <Image
              src="https://plus.unsplash.com/premium_photo-1663099654523-d3862b7742cd?q=80&w=870&auto=format&fit=crop"
              alt="Solid Waste Management"
              width={600}
              height={600}
              className="rounded-3xl w-full h-[280px] sm:h-[380px] md:h-[480px] object-cover shadow-2xl border border-white/10 relative z-10"
              priority
            />

            {/* INFO CARD */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -top-4 sm:-top-6 -left-4 sm:-left-8 bg-white/5 backdrop-blur-xl border border-white/10 p-4 sm:p-5 rounded-2xl max-w-[240px] sm:max-w-xs text-white shadow-2xl z-20"
            >
              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-medium">
                Efficient waste segregation and processing can reduce landfill
                usage by <span className="text-green-400 font-bold">up to 70%</span>, significantly lowering environmental impact.
              </p>
            </motion.div>

            {/* EXPERIENCE BADGE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl px-5 py-4 shadow-xl z-20 border border-green-400/30"
            >
              <p className="text-lg sm:text-xl font-black leading-none mb-1">20+ Years</p>
              <p className="text-xs sm:text-sm font-semibold tracking-wider text-green-100 uppercase">Experience</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
