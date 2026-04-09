"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div>
      <section className="relative pt-16 px-6 overflow-hidden">
        {/* Dotted Pattern */}
        <div className="absolute left-0 top-10 opacity-40">
          <div className="grid grid-cols-6 gap-2">
            {[...Array(36)].map((_, i) => (
              <div key={i} className="w-3 h-3 bg-blue-300 rounded-full" />
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold gradient-text"
          >
            Lake and Waterbody Rejuvenation
          </motion.h1>

          <p className="mt-4 text-gray-600 text-lg">
            Bringing Degraded Lakes Back to Life, Naturally
          </p>
          <p className="max-w-3xl text-md">
            We work to restore lakes as living ecosystems, using nature-based,
            low-energy solutions that heal water, revive habitats, and return
            lakes to the people, clean, resilient, and future-ready.
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <button className="px-6 py-3 border border-green-500 rounded-lg hover:bg-green-500 hover:text-white transition">
              Learn More
            </button>

            <button className="px-6 py-3 bg-green-500 text-white rounded-lg ">
              Talk to Us
            </button>
          </div>
        </div>
      </section>
      {/* Image Banner */}
      <div className="max-w-7xl mx-auto mt-12 relative rounded-2xl overflow-hidden">
        <div className="relative w-full h-[300px] md:h-[300px]">
          <Image
            src="https://images.unsplash.com/photo-1649087725626-d119235528a1?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Rainwater harvesting"
            fill
            className="object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Left Text */}
        {/* <div className="absolute left-6 top-6 max-w-md text-white text-sm md:text-base font-medium">
          Did you know? A 1,000 square foot roof can capture approximately 600
          gallons of water during just 1 inch of rainfall. A well-designed
          rainwater system can supply 20–40% of a site’s annual water demand and
          significantly reduce tanker usage.
        </div> */}

        <div
          className="absolute left-6 top-30 max-w-md p-5 rounded-xl 
                bg-black/10 backdrop-blur-md 
                text-white text-sm md:text-sm font-medium 
                shadow-lg"
        >
          <h3 className="font-semibold text-lg mb-2">The Problem</h3>

          <p>
            Across cities, lakes are degrading due to waste dumping,
            encroachment, and loss of wetlands disrupting natural drainage. Once
            self-cleaning ecosystems, they now face pollution and biodiversity
            loss.
          </p>
        </div>

        {/* Right Circle Badge */}
        <div className="absolute right-6 top-25 -translate-y-1/2">
          <div className="w-36 h-36 md:w-40 md:h-40 bg-blue-900 text-white rounded-full flex items-center justify-center text-center font-semibold p-4 text-xl">
            20 Years of Industry Experience
          </div>
        </div>
      </div>
    </div>
  );
}
