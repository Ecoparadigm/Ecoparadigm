"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useEffect, useState } from "react";

const stats = [
  { value: "80", suffix: "+", label: "Billion Litres of Water Treated" },
  { value: "200", suffix: "+", label: "Million Lives Impacted" },
  { value: "600", suffix: "+", label: "Projects Completed" },
  { value: "324", suffix: "+", label: "Crores Saved for Clients" },
];

export default function ImpactStats() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="bg-white overflow-hidden relative">
      {/* Subtle Background Effect */}
      <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

      {/* 🔥 SECTION 1: Stats */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          {/* 🔹 Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            className="max-w-4xl mb-16 md:mb-24"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-xs sm:text-sm font-extrabold tracking-wider text-green-700 uppercase">
                Measurable Impact
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight">
              Over two decades of delivering{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                environmental & economic
              </span>{" "}
              value across India.
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mt-6 font-medium leading-relaxed max-w-3xl">
              Our innovative approaches are shaping a sustainable future. We design systems that deliver long-term environmental impact, focused on efficiency, resilience, and scalability, and built to create value for both people and the planet.
            </p>
          </motion.div>

          {/* 🔹 Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-20">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.25, 1, 0.5, 1],
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative"
              >
                <div className="absolute -inset-4 bg-green-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-2">
                    {mounted && (
                      <CountUp
                        start={0}
                        end={parseInt(item.value)}
                        duration={3}
                        delay={index * 0.1}
                      />
                    )}
                    <span className="text-green-500">{item.suffix}</span>
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base font-bold tracking-wide uppercase leading-snug max-w-[160px]">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 🔹 Image */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            className="rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50"
          >
            <Image
              src="https://plus.unsplash.com/premium_photo-1758671827607-97084cac8d24?q=80&w=870&auto=format&fit=crop"
              alt="Impact"
              width={1200}
              height={600}
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover hover:scale-105 transition-transform duration-1000"
            />
          </motion.div>
        </div>
      </section>

      {/* 🔥 SECTION 2: Case Study */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 py-20 md:py-32 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-[1.1] tracking-tight mb-6">
              Kundalahalli Lake <br />
              <span className="text-green-600">Rejuvenation Project</span>
            </h1>

            <p className="text-gray-600 text-lg font-medium bg-white px-4 py-2 rounded-lg inline-block shadow-sm border border-gray-100">
              📍 Whitefield, Karnataka
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100"
          >
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 font-medium">
              Revitalizing Kundalahalli Lake through science-led restoration,
              nature based water treatment, and native landscape regeneration to
              improve water quality, biodiversity, and community value.
            </p>

            <div className="bg-blue-50 text-blue-800 p-4 rounded-xl border border-blue-100 mb-8">
              <p className="font-semibold text-sm md:text-base flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">🏆</span>
                <span>
                  Won 1st Prize in National Water Award 2018 conducted by Ministry
                  of Water Resource. A CSR Initiative by United Way, GE and Qualcomm.
                </span>
              </p>
            </div>

            {/* INFO GRID */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8 pb-8 border-b border-gray-100">
              <div>
                <p className="text-xs font-bold text-gray-400 tracking-wider mb-1">CAPACITY</p>
                <p className="text-gray-900 font-bold text-lg">800 KLD</p>
              </div>

              <div>
                <p className="text-xs font-bold text-gray-400 tracking-wider mb-1">COMMISSION</p>
                <p className="text-gray-900 font-bold text-lg">2017</p>
              </div>

              <div>
                <p className="text-xs font-bold text-gray-400 tracking-wider mb-1">CATEGORY</p>
                <p className="text-gray-900 font-bold text-lg">SURFACE WATER</p>
              </div>
            </div>

            {/* BUTTON */}
            <button className="group w-full sm:w-auto px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-green-500/20 hover:shadow-green-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-2">
              Talk to Our Expert
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
