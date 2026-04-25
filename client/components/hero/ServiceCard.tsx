"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ServiceCard({ service }: any) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="relative rounded-xl overflow-hidden cursor-pointer group"
    >
      {/* Image */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/10]">
        <Image
          src={service.img}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* Overlay */}
      <div className="absolute bottom-0 left-0 w-full bg-blue-700 text-white p-3 sm:p-4 flex justify-between items-center gap-3">
        <div>
          <h3 className="text-sm sm:text-base font-semibold">
            {service.title}
          </h3>
          {service.desc && (
            <p className="text-xs sm:text-sm opacity-80 mt-1">{service.desc}</p>
          )}
        </div>

        <div className="w-8 h-8 sm:w-10 sm:h-10 border border-white rounded-full flex items-center justify-center text-sm sm:text-base">
          →
        </div>
      </div>
    </motion.div>
  );
}
