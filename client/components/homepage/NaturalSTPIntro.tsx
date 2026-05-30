"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Zap, Droplets, Leaf, ShieldCheck, RefreshCw, Maximize } from "lucide-react";

const features = [
  { icon: Zap, label: "Zero Power" },
  { icon: RefreshCw, label: "Low Maintainence" },
  { icon: Leaf, label: "Zero Chemicals" },
  { icon: ShieldCheck, label: "100% CPCB Compliant" },
  { icon: Droplets, label: "ZLD-compatible" },
  { icon: Maximize, label: "10 KLD → 5 MLD" },
];

export default function NaturalSTPIntro() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 bg-gradient-to-b from-[#062f2f] to-[#031c1c] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-green-400 font-bold uppercase tracking-wider mb-4">A modern urban era</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-6">
            NaturalSTP — The anaerobic decentralised wastewater treatment system that pays for itself.
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Most aerobic STPs fail in India due to power dependency, skilled operation needs, chemicals, and fragile systems. Our Flagship NaturalSTP is built for real Indian conditions—intermittent power, untrained operators, high loads, and zero downtime.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/natural-stp"
              className="px-8 py-3.5 rounded-full bg-green-500 hover:bg-green-400 transition duration-300 text-white font-bold text-center shadow-lg shadow-green-500/20"
            >
              Learn More
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full border border-white/20 hover:bg-white/10 transition duration-300 text-white font-bold text-center"
            >
              Get a Free Site Assessment
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6"
        >
          {features.map((item, index) => (
            <div key={index} className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-5 flex flex-col items-center justify-center text-center hover:bg-white/10 transition duration-300 group">
              <item.icon className="w-8 h-8 text-green-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-semibold text-sm sm:text-base text-gray-200">{item.label}</span>
            </div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
