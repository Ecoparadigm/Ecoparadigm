"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TrustedSection() {
  return (
    <section className="w-full bg-white py-20 md:py-32 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-40 relative overflow-hidden">
      {/* Subtle Background Effect */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-xs sm:text-sm font-extrabold tracking-wider text-green-700 uppercase">
              Recognition
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.1] mb-6">
            Trusted by Reputed Companies and{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              Changemakers
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
            Our commitment to quality, innovation, and sustainable water
            management has been recognized by industry leaders and government
            bodies through prestigious awards and accolades.
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 items-center max-w-5xl w-full">
            {/* LEFT IMAGE */}
            <motion.div
              className="overflow-hidden rounded-3xl md:col-span-2 shadow-2xl shadow-gray-200/50 relative group"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none" />
              <Image
                src="/Awards/Rectangle 5402.png"
                alt="Award Ceremony"
                width={800}
                height={500}
                className="w-full h-[240px] sm:h-[300px] md:h-[360px] lg:h-[420px] object-cover group-hover:scale-105 transition-transform duration-1000"
              />
            </motion.div>

            {/* RIGHT BADGE */}
            <motion.div 
              className="flex justify-center md:justify-end"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px] hover:-translate-y-2 transition-transform duration-500">
                <div className="absolute inset-0 bg-yellow-500/10 rounded-full blur-[40px] scale-75" />
                
                {/* Laurel */}
                <Image
                  src="https://cdn.pixabay.com/photo/2014/03/25/16/32/laurel-wreath-297311_1280.png"
                  alt="Award"
                  fill
                  className="object-contain drop-shadow-xl"
                />

                {/* TEXT */}
                <div className="absolute inset-0 flex items-center justify-center text-center px-8">
                  <p className="text-gray-900 text-sm sm:text-base md:text-lg font-bold leading-snug">
                    <span className="text-xl sm:text-2xl text-yellow-600 block mb-1">6 Time</span>
                    National Award Winning Technology Company
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
