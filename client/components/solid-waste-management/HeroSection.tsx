"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div>
      {/* 🔥 HERO SECTION */}
      <section className="relative pt-16 sm:pt-20 px-4 sm:px-6 md:px-12 overflow-hidden">
        {/* 🔹 Dotted Pattern (responsive + safe) */}
        <div className="absolute left-0 top-10 opacity-80 pointer-events-none">
          <div className="grid grid-cols-6 gap-2">
            {[...Array(36)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-300 rounded-full"
              />
            ))}
          </div>
        </div>

        {/* 🔹 Content */}
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight"
          >
            The Impact of Expert Solid Waste Management
          </motion.h1>

          <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            We provide end-to-end, sustainable waste solutions for cities and
            industries. Leveraging 20 years of expertise, we transform waste
            into resources through smart collection, segregation, and
            eco-friendly processing.
          </p>

          {/* 🔹 Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <button className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 border border-black rounded-lg hover:bg-black hover:text-white transition text-sm sm:text-base">
              Learn More
            </button>

            <button className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition text-sm sm:text-base">
              Talk to Us
            </button>
          </div>
        </div>
      </section>

      {/* 🔥 IMAGE SECTION */}
      <div className="max-w-7xl mx-auto mt-10 sm:mt-12 px-4 sm:px-6 md:px-12 relative rounded-2xl overflow-hidden">
        {/* 🔹 Image */}
        <div className="relative w-full h-[220px] sm:h-[280px] md:h-[320px] lg:h-[380px]">
          <Image
            src="https://plus.unsplash.com/premium_photo-1663099654523-d3862b7742cd?q=80&w=870&auto=format&fit=crop"
            alt="Solid Waste Management"
            fill
            className="object-cover"
          />
        </div>

        {/* 🔹 Overlay */}
        {/* <div className="absolute inset-0 bg-black/20" /> */}

        {/* 🔹 Badge */}
        <div className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2">
          <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 bg-blue-900 text-white rounded-full flex items-center justify-center text-center font-semibold p-3 sm:p-4 text-xs sm:text-sm md:text-lg">
            20 Years of Industry Experience
          </div>
        </div>
      </div>
    </div>
  );
}
