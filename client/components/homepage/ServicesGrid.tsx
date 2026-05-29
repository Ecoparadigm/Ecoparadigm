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
                className={`relative rounded-2xl overflow-hidden border border-gray-100 shadow-lg shadow-gray-200/50 ${
                  card.large
                    ? "md:col-span-2 h-[260px] md:h-[320px]"
                    : "h-[220px] md:h-[320px]"
                }`}
              >
                {/* Image with subtle zoom */}
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:opacity-90 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#031c1c]/95 via-[#031c1c]/60 to-transparent" />
                </motion.div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 flex flex-col justify-end h-full z-10 pointer-events-none">
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-tight group-hover:text-green-300 transition duration-300">
                    {card.title}
                  </h3>

                  {card.desc && (
                    <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed opacity-90">
                      {card.desc}
                    </p>
                  )}
                </div>

                {/* Arrow */}
                <div className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center border border-white/20 rounded-full text-white bg-white/5 backdrop-blur-md transition-all duration-300 group-hover:bg-green-500 group-hover:border-green-500 group-hover:scale-110 z-20">
                  <span className="text-base font-bold transition duration-300 group-hover:translate-x-0.5">
                    →
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}