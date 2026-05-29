"use client";

import { motion } from "framer-motion";

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

export default function ContactHero() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#062f2f] to-[#031c1c] px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 py-24 sm:py-28 md:py-36 overflow-hidden border-b border-white/5">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 bg-radial-[at_top_right] from-[#0f4d4d]/30 via-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div variants={itemStagger} className="flex items-center gap-2 mb-6">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-xs sm:text-sm font-bold tracking-wider text-green-400 uppercase">
              Get in Touch
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemStagger}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 tracking-tight max-w-4xl"
          >
            Whatever the size of your challenge, <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
              we’re built to solve it.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemStagger}
            className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed font-medium"
          >
            Have questions, ideas, or need support? Connect with us — we’re ready
            to listen, analyze, and build the right environmental solution for you.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
