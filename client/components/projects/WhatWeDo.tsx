"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Waste Water Treatment",
    img: "https://plus.unsplash.com/premium_photo-1682144318933-fcab743fb527?q=80&w=871&auto=format&fit=crop",
  },
  {
    title: "Rainwater Harvesting",
    img: "https://plus.unsplash.com/premium_photo-1661825536186-19606cd9a0f1?q=80&w=419&auto=format&fit=crop",
  },
  {
    title: "Lake and Waterbody Restoration",
    img: "https://plus.unsplash.com/premium_photo-1661962514374-442d58a10c91?q=80&w=846&auto=format&fit=crop",
  },
  {
    title: "Solid Waste Management",
    img: "https://images.unsplash.com/photo-1690730685007-c253cb2a5f44?q=80&w=774&auto=format&fit=crop",
  },
  {
    title: "Biodiversity Assessment",
    img: "https://i.ytimg.com/vi/LWq-aLhbil4/maxresdefault.jpg",
  },
  {
    title: "Audits, Awareness and Training",
    img: "https://images.unsplash.com/photo-1608441877519-7aa279de3e7d?q=80&w=387&auto=format&fit=crop",
  },
  {
    title: "Climate Change and Sustainability",
    img: "https://i.ytimg.com/vi/LWq-aLhbil4/maxresdefault.jpg",
  },
  {
    title: "Consulting and Implementation",
    img: "https://plus.unsplash.com/premium_photo-1679862571153-04959fa9411d?q=80&w=869&auto=format&fit=crop",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] } },
};

export default function WhatWeDo() {
  return (
    <section className="pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-10 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 bg-white text-center">
      {/* 🔥 Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
      >
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 sm:mb-4 tracking-tight 
          bg-gradient-to-r from-gray-900 to-green-700 
          bg-clip-text text-transparent"
        >
          What We Do
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 max-w-3xl md:max-w-4xl mx-auto mb-10 sm:mb-12 md:mb-16 text-sm sm:text-base md:text-lg leading-relaxed">
          We design solutions for the toughest environmental problems, sustainably
          and optimally
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-y-10 sm:gap-y-12 md:gap-y-16 gap-x-6 sm:gap-x-10 md:gap-x-16 lg:gap-x-20"
      >
        {services.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex flex-col items-center group cursor-pointer"
          >
            {/* 🔥 Circle */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full mb-4 sm:mb-5 transition-all duration-500 group-hover:-translate-y-2">
              <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-green-400/30 transition-colors duration-500 z-10 pointer-events-none shadow-[0_0_0_0_rgba(34,197,94,0)] group-hover:shadow-[0_0_30px_0_rgba(34,197,94,0.2)]" />
              <div className="w-full h-full rounded-full overflow-hidden border border-gray-100 shadow-xl shadow-gray-200/50">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={160}
                  height={160}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>

            {/* 🔥 Title */}
            <p className="text-xs sm:text-sm md:text-base font-bold text-gray-800 max-w-[140px] sm:max-w-[160px] md:max-w-[200px] leading-snug group-hover:text-green-600 transition-colors duration-300">
              {item.title}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
