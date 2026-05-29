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

      <section className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          {/* 🔥 Heading */}
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
              Designing the Infrastructure for a{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                Zero-Waste Future
              </span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mt-6 font-medium leading-relaxed max-w-3xl">
              Our innovative approaches are shaping a sustainable tomorrow by transforming waste into valuable resources, minimizing environmental impact and generating economic value.
            </p>
          </motion.div>

          {/* 🔥 Stats Row */}
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

          {/* 🔥 Image with scroll animation */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            className="rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50"
          >
            <Image
              src="/Awards/Picture3.jpg"
              alt="Impact"
              width={1200}
              height={600}
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover hover:scale-105 transition-transform duration-1000"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
