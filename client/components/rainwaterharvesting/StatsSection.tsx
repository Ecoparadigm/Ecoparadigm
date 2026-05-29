"use client";

import { ArrowDown, Droplet, Cloud, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useEffect, useState } from "react";

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } },
};

export default function StatsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    {
      title: "Waste Water Treated",
      value: 80,
      suffix: "Bn+",
      icon: <ArrowDown size={28} />,
    },
    {
      title: "Rainwater Saved",
      value: 3500,
      suffix: "MLD",
      icon: <Droplet size={28} />,
    },
    {
      title: "CO₂ Emissions Cut",
      value: 500,
      suffix: "+",
      icon: <Cloud size={28} />,
    },
    {
      title: "Groundwater Restored",
      value: 1000,
      suffix: "MLD",
      icon: <MapPin size={28} />,
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white px-4 sm:px-6 md:px-12 relative overflow-hidden">
      {/* 🔹 Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* 🔹 Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-xs sm:text-sm font-extrabold tracking-wider text-green-700 uppercase">
              SUSTAINABILITY IN NUMBERS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Proven Results.{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              Powerful Impact.
            </span>
          </h2>
        </motion.div>

        {/* 🔹 Stats Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((item, index) => (
            <motion.div
              variants={fadeUp}
              key={index}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-200/40 hover:shadow-2xl hover:shadow-green-500/10 hover:border-green-100 transition-all duration-500 group relative overflow-hidden flex flex-col items-center text-center"
            >
              {/* Card Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className="relative w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-500 group-hover:text-white transition-colors duration-500 shadow-inner shadow-green-500/10">
                {item.icon}
              </div>

              {/* Number */}
              <h3 className="relative text-4xl sm:text-5xl font-black text-gray-900 mb-2">
                {mounted && <CountUp start={0} end={item.value} duration={2.5} />}
                <span className="text-green-500">{item.suffix}</span>
              </h3>

              {/* Title */}
              <p className="relative text-gray-600 text-sm sm:text-base font-bold uppercase tracking-wider">
                {item.title}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
