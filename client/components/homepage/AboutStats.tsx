"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  {
    title: "80+",
    subtitle: "Billion Litres Treated",
    desc: "Till Date managing industrial effluent and domestic sewage daily.",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    title: "600+",
    subtitle: "Projects delivered",
    desc: "2 decades of excellence in Environmental infrastructure.",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
  {
    title: "324+",
    subtitle: "Crores Saved",
    desc: "For our Clients.",
    img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
  },
];

// 🔥 Container stagger
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

// 🔥 Smooth fade + scale (more premium than plain fade)
const fadeUp = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AboutStats() {
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* 🔥 TOP */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-16 items-start mb-10 md:mb-12"
        >
          {/* LEFT */}
          <motion.div variants={fadeUp} className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <p className="text-sm md:text-md text-gray-600">About Us</p>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-5xl font-medium leading-[1.2] tracking-[-0.02em] max-w-3xl">
              We are a{" "}
              <span className="text-green-500">
                6-time National Award winning
              </span>{" "}
              Environmental Engineering and Sustainability consultancy.
            </h2>
          </motion.div>

          {/* RIGHT */}
          <motion.div variants={fadeUp} className="md:pt-6 lg:pt-10">
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-md">
              We engineer expert wastewater treatment solutions, rainwater
              harvesting, and sustainable solutions, save costs and ensure
              compliance for homes, industries and corporates with 20 years of
              industry experience.
            </p>
          </motion.div>
        </motion.div>

        {/* 🔥 CARDS */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 mb-10 md:mb-12"
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="relative rounded-xl overflow-hidden border border-gray-200 group"
            >
              {/* Image with subtle zoom */}
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={item.img}
                  alt={item.subtitle}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Content */}
              <div className="relative z-10 h-[200px] sm:h-[220px] md:h-[240px] flex flex-col justify-end p-4">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm md:text-base font-medium text-white mt-1">
                  {item.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-white/80 mt-1 leading-snug">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 🔥 BUTTONS */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4"
        >
          <button className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-green-500 text-gray-800 hover:bg-green-50 transition">
            What We Offer →
          </button>

          <button className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-green-500 text-white hover:bg-green-600 transition">
            Request a Free Preliminary Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
