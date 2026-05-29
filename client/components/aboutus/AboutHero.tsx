"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemStagger = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } },
};

export default function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#062f2f] to-[#031c1c] flex items-center px-4 sm:px-6 md:px-12 lg:px-16 py-16 md:py-24 border-b border-white/5">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 bg-radial-[at_top] from-[#0f4d4d]/30 via-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full max-w-7xl mx-auto">
        {/* LEFT CONTENT */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          <motion.div variants={itemStagger} className="flex items-center gap-2 mb-4 sm:mb-6">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-xs sm:text-sm font-bold tracking-wider text-green-400 uppercase">
              About Ecoparadigm
            </span>
          </motion.div>

          <motion.h1 variants={itemStagger} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            Driven By Purpose <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
              And Impact
            </span>
          </motion.h1>

          <motion.p
            variants={itemStagger}
            className="text-gray-300 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 leading-relaxed"
          >
            Over two decades of delivering measurable environmental and economic
            value across India through innovative and sustainable wastewater
            treatment solutions.
          </motion.p>

          <motion.div variants={itemStagger}>
            <button className="group relative bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold px-8 py-4 rounded-full hover:from-green-600 hover:to-emerald-700 transition duration-300 shadow-xl shadow-green-500/20 hover:shadow-green-500/40 hover:-translate-y-1 w-full sm:w-auto flex items-center justify-center gap-3">
              Learn Our Story
              <span className="bg-white/20 rounded-full w-6 h-6 flex items-center justify-center text-sm group-hover:bg-white/30 transition-colors">
                →
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <div className="relative mt-6 lg:mt-0 lg:ml-auto w-full max-w-md mx-auto lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            className="relative rounded-3xl overflow-hidden shadow-2xl shadow-green-900/50 border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#062f2f] via-transparent to-transparent opacity-60 z-10"></div>
            <Image
              src="https://plus.unsplash.com/premium_photo-1661825536186-19606cd9a0f1?q=80&w=419&auto=format&fit=crop"
              alt="About Ecoparadigm"
              width={600}
              height={700}
              className="w-full h-[350px] sm:h-[450px] lg:h-[550px] object-cover hover:scale-105 transition-transform duration-1000"
            />
          </motion.div>

          {/* FLOATING CARD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="absolute bottom-6 sm:bottom-10 -left-4 sm:-left-12 lg:-left-20 bg-white/10 backdrop-blur-xl border border-white/10 p-5 sm:p-6 rounded-2xl max-w-[260px] sm:max-w-xs text-white shadow-2xl z-20"
          >
            <div className="w-8 h-1 bg-green-500 rounded-full mb-3"></div>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-medium italic">
              "We combine sustainability with innovation to deliver long-term
              environmental impact across industries."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
