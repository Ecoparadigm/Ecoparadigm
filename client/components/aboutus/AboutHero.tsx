"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="w-full bg-[#062f2f] flex items-center px-4 sm:px-6 md:px-12 lg:px-16 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center w-full max-w-7xl mx-auto">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            About Us
          </p>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
            Driven By Purpose <span className="text-green-400">And Impact</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 text-sm sm:text-base mb-6 sm:mb-8 max-w-lg"
          >
            Over two decades of delivering measurable environmental and economic
            value across India through innovative and sustainable wastewater
            treatment solutions.
          </motion.p>

          <button className="w-full sm:w-auto bg-green-500 hover:bg-green-600 transition px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-white font-medium flex items-center justify-center sm:justify-start gap-2">
            Learn More
            <span className="bg-white text-black rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm">
              →
            </span>
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative mt-6 md:mt-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://plus.unsplash.com/premium_photo-1661825536186-19606cd9a0f1?q=80&w=419&auto=format&fit=crop"
              alt="About"
              width={500}
              height={500}
              className="rounded-xl w-full h-[220px] sm:h-[280px] md:h-[360px] lg:h-[420px] object-cover"
            />
          </motion.div>

          {/* FLOATING CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 bg-gray-800/80 backdrop-blur-md p-3 sm:p-4 rounded-lg max-w-[220px] sm:max-w-xs text-white"
          >
            <p className="text-xs sm:text-sm text-gray-200 leading-snug">
              “We combine sustainability with innovation to deliver long-term
              environmental impact across industries.”
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
