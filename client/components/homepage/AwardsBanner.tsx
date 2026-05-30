"use client";

import { motion } from "framer-motion";
import { Award, Star } from "lucide-react";

export default function AwardsBanner() {
  const awards = [
    "6-Time National Award Winner",
    "Pioneers of NaturalSTP™",
    "200M+ Lives Impacted",
    "Zero OPEX Solutions",
    "600+ Projects Completed",
  ];

  return (
    <div className="w-full bg-[#031c1c] border-y border-white/10 py-4 overflow-hidden flex items-center relative z-20">
      <div className="absolute left-0 w-16 md:w-32 h-full bg-gradient-to-r from-[#031c1c] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 w-16 md:w-32 h-full bg-gradient-to-l from-[#031c1c] to-transparent z-10 pointer-events-none" />
      
      <motion.div
        className="flex whitespace-nowrap gap-8 md:gap-16 items-center"
        animate={{ x: [0, -1000] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {/* Render twice for seamless loop */}
        {[...awards, ...awards, ...awards].map((award, index) => (
          <div key={index} className="flex items-center gap-3 text-white/70">
            {index % 2 === 0 ? (
              <Award className="w-4 h-4 text-green-400" />
            ) : (
              <Star className="w-4 h-4 text-green-400 fill-green-400/20" />
            )}
            <span className="font-semibold text-sm tracking-widest uppercase">{award}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
