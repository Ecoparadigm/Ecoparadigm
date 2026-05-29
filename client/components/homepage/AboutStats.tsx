"use client";

import Image from "next/image";
import Link from "next/link";
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
      staggerChildren: 0.12,
    },
  },
};

// 🔥 Signature cubic-bezier transition curve
const fadeUp = {
  hidden: { opacity: 0, y: 35, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
  },
};

export default function AboutStats() {
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Subtle ambient blur light */}
      <div className="absolute -left-20 top-1/3 w-72 h-72 bg-green-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* 🔥 TOP */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-16 items-start mb-12 md:mb-16"
        >
          {/* LEFT */}
          <motion.div variants={fadeUp} className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
              <p className="text-sm font-bold tracking-wider text-green-700 uppercase">
                About Us
              </p>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-[1.15] tracking-tight text-gray-900 max-w-3xl">
              We are a{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
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
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 md:mb-16"
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-lg shadow-gray-200/50 group h-[220px] sm:h-[240px] md:h-[260px]"
            >
              {/* Image with subtle zoom */}
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={item.img}
                  alt={item.subtitle}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Signature Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#031c1c]/95 via-[#031c1c]/50 to-transparent" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-5 sm:p-6 pointer-events-none">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-green-400">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base font-bold text-white mt-1 leading-snug">
                  {item.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed opacity-95">
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
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/natural-stp"
            className="group px-6 sm:px-8 py-3.5 rounded-full border border-green-500 text-green-700 hover:bg-green-50 transition duration-300 font-semibold text-center flex items-center justify-center gap-2"
          >
            What We Offer
            <span className="group-hover:translate-x-0.5 transition duration-300">→</span>
          </Link>

          <Link
            href="/contact"
            className="px-6 sm:px-8 py-3.5 rounded-full bg-green-500 hover:bg-green-600 transition duration-300 text-white font-semibold text-center shadow-lg shadow-green-500/20 hover:scale-[1.01]"
          >
            Request a Free Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
