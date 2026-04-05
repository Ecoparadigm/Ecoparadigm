"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative px-8 md:px-20 py-20 overflow-hidden">

      {/* 🔥 Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-teal-500 to-blue-600" />

      {/* 🔥 Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto text-white">

        {/* 🔥 HEADING (Text Effect Animation) */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-2xl md:text-[44px] font-normal leading-[1.2] tracking-[-0.03em] mb-4"
        >
          Capture, conserve, and reuse rainwater
        </motion.h2>

        {/* 🔥 SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-sm md:text-base text-white/80 mb-8"
        >
          Planning a new building or struggling with an existing rainwater system?Get a site-specific rainwater management plan from our experts.
        </motion.p>

        {/* 🔥 BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button className="px-6 py-3 rounded-lg border border-white text-white hover:bg-white hover:text-black transition">
            Our Services
          </button>

          <button className="px-6 py-3 rounded-lg bg-white text-black hover:bg-gray-200 transition">
            Talk to our Expert
          </button>
        </motion.div>

      </div>

    </section>
  );
}