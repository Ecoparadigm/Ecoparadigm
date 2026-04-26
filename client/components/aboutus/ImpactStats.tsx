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
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 py-14 sm:py-16 md:py-20 bg-white">
      {/* 🔥 Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-3xl mb-10 sm:mb-12"
      >
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-medium leading-snug">
          A value-driven organization working to create lasting{" "}
          <span className="text-green-500">change in environment.</span>
        </h2>
        <p className="text-gray-600 mt-4 text-lg ">
          Our innovative approaches are shaping a sustainable future. We design
          systems that deliver long-term environmental impact, focused on
          efficiency, resilience, and scalability, and built to create value for
          both people and the planet.
        </p>
      </motion.div>

      {/* 🔥 Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mb-12 sm:mb-14 md:mb-16">
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
            className="flex flex-col"
          >
            <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold text-black">
              {mounted && (
                <CountUp
                  start={0}
                  end={parseInt(item.value)}
                  duration={5}
                  delay={index * 0.2}
                />
              )}
              +
            </h3>

            <p className="text-gray-500 text-sm sm:text-base md:text-lg mt-1 leading-snug">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* 🔥 Image with scroll animation */}
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="rounded-2xl overflow-hidden"
      >
        <Image
          src="/Awards/Rectangle 5402.png"
          alt="Impact"
          width={1200}
          height={600}
          className="w-full h-[260px] sm:h-[320px] md:h-[500px] lg:h-[550px] object-cover"
        />
      </motion.div>
    </section>
  );
}
