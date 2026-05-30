"use client";

import { motion } from "framer-motion";

export default function ComplianceHero() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200 mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <p className="text-xs sm:text-sm text-green-800 font-semibold tracking-wide uppercase">
              Environmental Engineering
            </p>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.05] tracking-tight mb-8">
            Every compliance problem. <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              One engineering partner.
            </span>
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-medium">
            Leading National award winning environmental engineering firm. We design, build and operate the systems your facility actually needs — decentralised wastewater treatment, ESG & BRSR audits, rainwater harvesting, lake rejuvenation, and solid waste management engineered for regulatory compliance.
          </p>
        </motion.div>
      </div>
      
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-green-500/5 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
}
