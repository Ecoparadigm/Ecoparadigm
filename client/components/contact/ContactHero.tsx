"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative w-full bg-[#062f2f] px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 py-16 sm:py-20 md:py-24 overflow-hidden text-white">
      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-100px] left-[20%] w-[400px] h-[400px] bg-green-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-80px] right-[10%] w-[300px] h-[300px] bg-emerald-400/10 blur-[100px] rounded-full" />
      </div>

      {/* 🔥 Decorative Right Shapes */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-6 opacity-20">
        <div className="w-16 h-16 bg-white rotate-45 rounded-md" />
        <div className="w-20 h-20 bg-white rotate-45 rounded-md" />
      </div>

      {/* 🔥 Content */}
      <div className="max-w-5xl">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 border border-white/20 rounded-full px-3 py-1 mb-6"
        >
          <span className="text-xs sm:text-sm text-white/80">Contact</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-semibold leading-[1.1] tracking-[-0.02em] max-w-4xl"
        >
          Whatever the size of your challenge, we’re built to solve it.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-sm sm:text-base md:text-lg text-white/70 mt-5 max-w-xl"
        >
          Have questions, ideas, or need support? Connect with us — we’re ready
          to listen & help.
        </motion.p>
      </div>
    </section>
  );
}
