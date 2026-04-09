"use client";

import { ArrowDown, Droplet, Cloud, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useEffect, useState } from "react";

export default function StatsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    {
      title: "Waste Water treated",
      value: 80,
      suffix: "Bn",
      icon: <ArrowDown size={28} />,
    },
    {
      title: "Rainwater saved",
      value: 3500,
      suffix: "MLD",
      icon: <Droplet size={28} />,
    },
    {
      title: "CO₂ emissions cut",
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
    <section className="py-20 px-6 bg-gray-50">
      {/* Label */}
      <div className="text-center mb-6">
        <span className="text-xs px-4 py-1 border rounded-full text-gray-500 tracking-wide">
          SUSTAINABILITY IN NUMBERS
        </span>
      </div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center text-3xl md:text-4xl font-semibold mb-12"
      >
        Proven Results. <span className="text-green-600">Powerful Impact.</span>
      </motion.h2>

      {/* Stats Box */}
      <div className="max-w-6xl mx-auto border border-dashed border-gray-300 rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-4">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
            className={`flex flex-col items-center justify-center py-12 px-6 text-center
              ${index !== stats.length - 1 ? "md:border-r border-dashed border-gray-300" : ""}
            `}
          >
            {/* Title */}
            <p className="text-gray-500 text-sm mb-6">{item.title}</p>

            {/* Icon */}
            <div className="text-gray-400 mb-4">{item.icon}</div>

            {/* Animated Number */}
            <h3 className="text-3xl font-semibold text-gray-900">
              {mounted && <CountUp start={0} end={item.value} duration={2.5} />}
              {item.suffix}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
