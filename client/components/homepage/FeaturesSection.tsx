"use client";

import { motion } from "framer-motion";

const features = [
  {
    num: ".01",
    title: "Right system, first time",
    desc: "No guesswork. Just the right design for your site and scale."
  },
  {
    num: ".02",
    title: "Engineered for real conditions",
    desc: "Handles power gaps, load fluctuations, and operational limitations with ease."
  },
  {
    num: ".03",
    title: "Performance, without effort",
    desc: "Delivers consistent results with minimal maintenance and long-term reliability."
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 bg-[#031c1c] text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left: Heading */}
        <div className="w-full lg:w-1/3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sticky top-24"
          >
            <h2 className="text-4xl sm:text-5xl font-black leading-tight text-white tracking-tight">
              Designed to turn compliance into clarity.
            </h2>
          </motion.div>
        </div>

        {/* Right: Feature List */}
        <div className="w-full lg:w-2/3 flex flex-col gap-12 sm:gap-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group border-t border-white/10 pt-8"
            >
              <span className="text-green-500 font-bold text-xl md:text-2xl mb-4 block group-hover:text-green-400 transition-colors">
                {feature.num}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-100 group-hover:text-white transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-2xl group-hover:text-gray-300 transition-colors">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
