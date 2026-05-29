"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useEffect, useState } from "react";

const stats = [
  {
    value: "80+",
    label: "Billion Litres of Water Treated",
  },
  {
    value: "200+",
    label: "Million Lives Impacted",
  },
  {
    value: "600+",
    label: "Projects Completed",
  },
  {
    value: "324+",
    label: "Crores Saved for Clients",
  },
];

export default function ImpactStats() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* 🔥 Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-4xl mb-16 sm:mb-20 relative z-10"
      >
        <div className="flex items-center gap-2 mb-4 sm:mb-6">
          <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-xs sm:text-sm font-extrabold tracking-wider text-green-700 uppercase">
            Measurable Impact
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-gray-900">
          A value-driven organization working to create lasting{" "}
          <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
            change in environment.
          </span>
        </h2>
        <p className="text-gray-600 mt-6 text-lg sm:text-xl leading-relaxed max-w-3xl font-medium">
          Our innovative approaches are shaping a sustainable future. We design
          systems that deliver long-term environmental impact, focused on
          efficiency, resilience, and scalability, and built to create value for
          both people and the planet.
        </p>
      </motion.div>

      {/* 🔥 Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 md:gap-16 mb-20 sm:mb-24 relative z-10">
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
            className="flex flex-col group"
          >
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-500">
              {mounted && (
                <CountUp
                  start={0}
                  end={parseInt(item.value)}
                  duration={4}
                  delay={index * 0.1}
                  separator=","
                />
              )}
              <span className="text-green-500 ml-1">+</span>
            </h3>

            <div className="w-12 h-1 bg-green-500 rounded-full mb-3 group-hover:w-full transition-all duration-700 ease-out opacity-20 group-hover:opacity-100"></div>

            <p className="text-gray-600 font-semibold text-sm sm:text-base md:text-lg leading-snug">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* 🔥 Image with scroll animation */}
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
        viewport={{ once: true, margin: "-100px" }}
        className="rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50 border border-gray-100 relative group"
      >
        <div className="absolute inset-0 bg-green-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none mix-blend-overlay"></div>
        <Image
          src="/Awards/Rectangle 5402.png"
          alt="Impact"
          width={1200}
          height={600}
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover group-hover:scale-105 transition-transform duration-1000"
        />
      </motion.div>
    </section>
  );
}
