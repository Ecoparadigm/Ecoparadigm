"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Wastewater Treatment",
    desc: "The NaturalSTP™ that pays for itself. Zero electricity. Zero chemicals.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    large: true,
    link: "/natural-stp",
  },
  {
    title: "Rainwater Harvesting",
    desc: "Smart recharge systems.",
    img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    large: false,
    link: "/all-services/rainwater-harvesting",
  },
  {
    title: "Solid Waste Management",
    desc: "Municipal & industrial waste solutions.",
    img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
    large: false,
    link: "/all-services/solid-waste-management",
  },
  {
    title: "Lake Rejuvenation",
    desc: "Award-winning biological restoration.",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    large: false,
    link: "/all-services/lake-restoration",
  },
  {
    title: "Environmental Audits",
    desc: "ESG • Solar • Climate & Net Zero Audits.",
    img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
    large: false,
    link: "/all-services/environ-audits",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
  },
};

export default function ServicesGrid() {
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 py-16 md:py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        {/* 🔥 Optional Heading */}
        <div className="mb-10 md:mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping"></span>
            <span className="text-sm font-bold tracking-wider text-green-700 uppercase">
              Our Core Expertise
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Pioneering Sustainable Engineering
          </h2>
        </div>

        {/* 🔥 GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8"
        >
          {cards.map((card, index) => (
            <Link key={index} href={card.link} className="block group">
              <motion.div
                variants={cardVariant}
                whileHover={{ y: -8 }}
                className={`relative rounded-3xl overflow-hidden p-8 flex flex-col justify-between transition-all duration-300 shadow-xl ${
                  index % 2 === 0
                    ? "bg-gradient-to-br from-[#062f2f] to-[#031c1c] text-white border border-white/10"
                    : "bg-white text-gray-900 border border-gray-100"
                } ${
                  card.large
                    ? "md:col-span-2 min-h-[300px]"
                    : "min-h-[300px]"
                }`}
              >
                {/* Content Overlay */}
                <div className="z-10 relative">
                  <h3 className={`text-2xl sm:text-3xl font-black leading-tight mb-4 transition duration-300 ${
                    index % 2 === 0 ? "text-white" : "text-gray-900"
                  }`}>
                    {card.title}
                  </h3>

                  {card.desc && (
                    <p className={`text-sm sm:text-base leading-relaxed ${
                      index % 2 === 0 ? "text-gray-300" : "text-gray-600"
                    }`}>
                      {card.desc}
                    </p>
                  )}
                </div>

                {/* Arrow & Image Hint */}
                <div className="flex justify-between items-end mt-8 relative z-10">
                  <div className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 ${
                    index % 2 === 0
                      ? "bg-green-500 text-white shadow-lg shadow-green-500/30 group-hover:bg-green-400"
                      : "bg-gray-100 text-green-700 group-hover:bg-green-100 group-hover:text-green-800"
                  }`}>
                    <span className="text-xl font-bold transition duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                  
                  {/* Subtle Image Hint */}
                  <div className="w-24 h-24 rounded-2xl overflow-hidden relative opacity-80 group-hover:opacity-100 transition-opacity">
                     <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}