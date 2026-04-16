"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useEffect, useState } from "react";

const stats = [
  { value: "80+", label: "Billion Litres of Water Treated" },
  { value: "200+", label: "Million Lives Impacted" },
  { value: "600+", label: "Projects Completed" },
  { value: "324+", label: "Crores Saved for Clients" },
];

export default function ImpactStats() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      {/* 🔥 SECTION 1 */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 py-14 sm:py-16 md:py-20 bg-white">
        {/* 🔹 Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-10 sm:mb-12"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium leading-snug">
            Over two decades of delivering measurable{" "}
            <span className="text-green-500">environmental </span> and{" "}
            <span className="text-green-500">economic </span> value across
            India.
          </h2>
        </motion.div>

        {/* 🔹 Stats */}
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

        {/* 🔹 Image */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden"
        >
          <Image
            src="https://plus.unsplash.com/premium_photo-1758671827607-97084cac8d24?q=80&w=870&auto=format&fit=crop"
            alt="Impact"
            width={1200}
            height={600}
            className="w-full h-[260px] sm:h-[320px] md:h-[500px] lg:h-[550px] object-cover"
          />
        </motion.div>
      </section>

      {/* 🔥 SECTION 2 */}
      <section className="w-full bg-white pb-12 sm:pb-14 md:pb-16 lg:pb-20 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            transformTemplate={({ x, y }) =>
              `translate3d(${x || 0}, ${y || 0}, 0)`
            }
            className="max-w-xl"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-3 sm:mb-4 md:mb-6">
              Kundalahalli Lake <br />
              Rejuvenation Project
            </h1>

            <p className="text-gray-700 text-sm sm:text-base md:text-lg">
              Location: Whitefield, Karnataka
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            transformTemplate={({ x, y }) =>
              `translate3d(${x || 0}, ${y || 0}, 0)`
            }
            className="space-y-3 sm:space-y-4 max-w-xl"
          >
            <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed">
              Revitalizing Kundalahalli Lake through science-led restoration,
              nature based water treatment, and native landscape regeneration to
              improve water quality, biodiversity, and community value.
            </p>

            <p className="text-blue-600 font-medium text-sm sm:text-base">
              Won 1st Prize in National Water Award 2018 conducted by Ministry
              of Water Resource, River Development and Ganga Rejuvenation. A CSR
              Initiative by United Way, GE and Qualcomm
            </p>

            {/* INFO GRID */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 pt-1 sm:pt-2">
              <div>
                <p className="text-xs sm:text-sm font-semibold">CAPACITY</p>
                <p className="text-gray-800 text-sm sm:text-base">800 KLD</p>
              </div>

              <div>
                <p className="text-xs sm:text-sm font-semibold">COMMISSION</p>
                <p className="text-gray-800 text-sm sm:text-base">2017</p>
              </div>

              <div>
                <p className="text-xs sm:text-sm font-semibold">CATEGORY</p>
                <p className="text-gray-800 text-sm sm:text-base">
                  SURFACE WATER BODY
                </p>
              </div>
            </div>

            {/* BUTTON */}
            <div className="pt-2 sm:pt-3">
              <button className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-green-500 text-white rounded-lg text-sm sm:text-base">
                Talk to Our Expert
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
