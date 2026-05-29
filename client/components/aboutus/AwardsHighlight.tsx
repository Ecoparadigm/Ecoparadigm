"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemStagger = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } },
};

export default function AwardsHighlight() {
  return (
    <section className="px-4 sm:px-6 md:px-16 lg:px-28 xl:px-40 2xl:px-60 py-20 sm:py-24 md:py-28 bg-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-green-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center relative z-10">
        {/* 🔥 LEFT SIDE (AWARD) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex justify-center"
        >
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px]"
          >
            {/* Laurel Image */}
            <Image
              src="https://cdn.pixabay.com/photo/2014/03/25/16/32/laurel-wreath-297311_1280.png"
              alt="Award"
              fill
              className="object-contain drop-shadow-2xl opacity-90"
            />

            {/* Center Text */}
            <div className="absolute inset-0 flex items-center justify-center text-center px-4 sm:px-6 md:px-8">
              <p className="text-gray-900 font-bold text-lg sm:text-xl md:text-2xl leading-snug tracking-tight">
                6 time National <br />
                Award Winning <br />
                <span className="text-green-600">Technology</span> <br />
                Company
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* 🔥 RIGHT SIDE (POINTS) */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-6 sm:space-y-8 text-center md:text-left"
        >
          <motion.div variants={itemStagger} className="flex items-start gap-4">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full mt-2.5 shrink-0 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
            <p className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent leading-relaxed">
              20 Years of Industry Experience
            </p>
          </motion.div>

          <motion.div variants={itemStagger} className="flex items-start gap-4">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full mt-2.5 shrink-0 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
            <p className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent leading-relaxed">
              600+ Successful Installations <br className="hidden sm:block" />
              Across India and 5 countries
            </p>
          </motion.div>

          <motion.div variants={itemStagger} className="flex items-start gap-4">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full mt-2.5 shrink-0 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
            <p className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent leading-relaxed">
              Trusted by Leading Institutions <br className="hidden sm:block" />
              Companies and residences
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
