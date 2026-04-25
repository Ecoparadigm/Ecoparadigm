"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Waste Water Treatment",
    desc: "The STP that pays for itself. Zero Chemicals. Zero Hassle.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    large: true,
  },
  {
    title: "Smart, Sustainable Rainwater Solutions",
    img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
  },
  {
    title: "Expert Solid Waste Management Solutions",
    img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
  },
  {
    title: "Lake and Waterbody Rejuvenation Solutions",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    title: "Go Net Zero",
    desc: "ESG • Solar • Climate and Audits",
    img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
  },
];

// animation
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ServicesGrid() {
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 py-10 md:py-14">
      <div className="max-w-7xl mx-auto">
        
        {/* 🔥 Optional Heading */}
        <div className="mb-8 md:mb-10">
          <p className="text-lg text-gray-600 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Our Solutions
          </p>
        </div>

        {/* 🔥 GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              whileHover={{ y: -6 }}
              className={`relative rounded-xl overflow-hidden ${
                card.large
                  ? "col-span-2 md:col-span-2 h-[200px] md:h-[240px]"
                  : "h-[160px] md:h-[180px]"
              }`}
            >
              {/* Image */}
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Bottom Strip */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-[#062f2f]">
                <h3 className="text-sm sm:text-base font-semibold text-white leading-snug">
                  {card.title}
                </h3>

                {card.desc && (
                  <p className="text-xs sm:text-sm text-white/80 mt-1">
                    {card.desc}
                  </p>
                )}
              </div>

              {/* Arrow */}
              <motion.div
                whileHover={{ x: 4 }}
                className="absolute bottom-3 right-3 w-7 h-7 flex items-center justify-center border border-white rounded-full text-white text-sm z-10"
              >
                →
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}