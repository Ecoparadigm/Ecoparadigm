"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EnergyAssessment = () => {
  return (
    <section className="w-full bg-[#062f2f] flex items-center px-4 sm:px-6 md:px-12 lg:px-16 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center w-full max-w-7xl mx-auto">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
            Get an Energy & <br />
            Accessibility <span className="text-green-400">Assessment</span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 text-sm sm:text-base mb-6 sm:mb-8 max-w-lg"
          >
            We identify inefficiencies, reduce costs, and help you build a
            compliant, future-ready facility.
          </motion.p>

          <div className="flex flex-wrap gap-4">
            <button className="w-full sm:w-auto bg-green-500 hover:bg-green-600 transition px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-white font-medium flex items-center justify-center sm:justify-start gap-2">
              Book a call
              <span className="bg-white text-black rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm">
                →
              </span>
            </button>

            <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 transition px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-white font-medium">
              Learn more
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative mt-6 md:mt-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1413882353314-73389f63b6fd?q=80&w=870&auto=format&fit=crop"
              alt="Energy Tower"
              width={500}
              height={600}
              className="rounded-xl w-full h-[220px] sm:h-[280px] md:h-[360px] lg:h-[420px] object-cover"
            />
          </motion.div>

          {/* FLOATING CARD 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-16 sm:bottom-20 left-4 sm:left-6 bg-gray-800/80 backdrop-blur-md p-3 sm:p-4 rounded-lg text-white text-xs sm:text-sm"
          >
            ⚡ 20 Years of Industry Experience
          </motion.div>

          {/* FLOATING CARD 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="absolute bottom-4 right-4 sm:right-6 bg-gray-800/80 backdrop-blur-md p-3 sm:p-4 rounded-lg text-white text-xs sm:text-sm"
          >
            <p className="text-gray-300">Tailored Strategies</p>
            <p className="text-green-400 mt-1">↗ +30% Energy saving</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnergyAssessment;
