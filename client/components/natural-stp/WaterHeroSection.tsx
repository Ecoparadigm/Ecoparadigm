"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const WaterHeroSection: React.FC = () => {
  return (
    <section className="w-full min-h-screen bg-[#062f2f] flex items-center px-6 md:px-16">
      <div className="grid md:grid-cols-2 gap-10 items-center w-full max-w-7xl mx-auto">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-md text-gray-300 mb-4">
            ● Easiest to maintain. Easiest on your budget
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Water Treatment does not have to be{" "}
            <span className="text-green-400">Expensive or Complicated</span>
          </h1>

          {/* ✅ ONLY FADE-IN TEXT */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 mb-8 max-w-lg"
          >
            Eliminate electricity bills, regulatory fines, and operational
            stress with India's most reliable underground, non-electric
            wastewater treatment system.
          </motion.p>

          <button className="bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-full text-white font-medium flex items-center gap-2">
            Get a Free Consultation
            <span className="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center text-sm">
              →
            </span>
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          {/* ✅ ONLY FADE-IN IMAGE */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1533163238111-4a7ced54f2e4?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Water Treatment"
              width={500}
              height={500}
              className="rounded-xl w-full h-[500px] object-cover"
            />
          </motion.div>

          {/* ✅ REVIEW CARD (UNCHANGED - PERFECT) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-6 right-6 bg-gray-800/80 backdrop-blur-md p-4 rounded-lg max-w-xs text-white"
          >
            <div className="flex mb-2 text-yellow-400">★★★★★</div>
            <p className="text-sm text-gray-200">
              “No odors, no operators, and zero power. NaturalSTP™ is the first
              wastewater system that actually lets our facility management team
              sleep at night.”
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WaterHeroSection;
