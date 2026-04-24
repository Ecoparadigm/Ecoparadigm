"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LakeHeroSection() {
  return (
    <section className="w-full bg-[#062f2f] flex items-center px-4 sm:px-6 md:px-12 lg:px-16 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center w-full max-w-7xl mx-auto">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            Lake Rejuvenation
          </p>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
            Restore Lakes <span className="text-green-400">Naturally</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 text-sm sm:text-base mb-6 sm:mb-8 max-w-lg"
          >
            We bring degraded lakes back to life using nature-based, low-energy
            solutions that restore ecosystems, improve water quality, and create
            long-term resilience.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button className="w-full sm:w-auto bg-green-500 hover:bg-green-600 transition px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-white font-medium flex items-center justify-center gap-2">
              Learn More
              <span className="bg-white text-black rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm">
                →
              </span>
            </button>

            <button className="w-full sm:w-auto border border-gray-400 text-white hover:bg-white hover:text-black transition px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium">
              Talk to Us
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative mt-6 md:mt-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1649087725626-d119235528a1?q=80&w=1032&auto=format&fit=crop"
              alt="Lake rejuvenation"
              width={500}
              height={500}
              className="rounded-xl w-full h-[220px] sm:h-[280px] md:h-[360px] lg:h-[420px] object-cover"
            />
          </motion.div>

          {/* PROBLEM CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-gray-800/80 backdrop-blur-md p-3 sm:p-4 rounded-lg max-w-[220px] sm:max-w-xs text-white"
          >
            <p className="text-xs sm:text-sm text-gray-200 leading-snug">
              Urban lakes are degrading due to waste dumping, encroachment, and
              ecosystem loss, turning once self-cleaning systems into polluted
              water bodies.
            </p>
          </motion.div>

          {/* EXPERIENCE BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 bg-green-500 text-white rounded-lg px-4 py-3 text-sm sm:text-base font-semibold"
          >
            20+ Years Experience
          </motion.div>
        </div>
      </div>
    </section>
  );
}
