"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div>
      {/* 🔥 HERO */}
      <section className="relative pt-16 sm:pt-20 px-4 sm:px-6 md:px-12 overflow-hidden">
        {/* 🔹 Dotted Pattern */}
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
            Recover your Wasted Potential.
          </motion.h1>

          <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base md:text-lg">
            Turn Rain Into a Reliable Water Source
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
            src="https://images.unsplash.com/photo-1762710964670-cc96a0076f25?q=80&w=1031&auto=format&fit=crop"
            alt="Rainwater harvesting"
            fill
            className="object-cover"
          />
        </div>

        {/* 🔹 Overlay */}
        {/* <div className="absolute inset-0 bg-black/20" /> */}

        {/* 🔹 Left Text */}
        <div className="absolute left-6 sm:left-8 md:left-14 lg:left-16 top-3 sm:top-6 max-w-[85%] sm:max-w-md text-white text-xs sm:text-sm md:text-base font-medium leading-relaxed">
          Did you know? A 1,000 square foot roof can capture approximately 600
          gallons of water during just 1 inch of rainfall. A well-designed
          rainwater system can supply 20–40% of a site’s annual water demand and
          significantly reduce tanker usage.
        </div>

        {/* 🔹 Right Badge */}
        <div className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2">
          <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 bg-blue-900 text-white rounded-full flex items-center justify-center text-center font-semibold p-2 sm:p-3 md:p-4 text-[10px] sm:text-sm md:text-lg">
            20 Years of Industry Experience
          </div>
        </div>
      </div>
    </div>
  );
}
