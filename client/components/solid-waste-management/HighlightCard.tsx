"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

export default function HighlightCard({
  title,
  description,
  image,
  reverse = false,
}: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-shadow duration-500"
    >
      <div
        className={`grid grid-cols-1 md:grid-cols-2 h-full ${
          reverse
            ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1"
            : ""
        }`}
      >
        {/* 🔹 TEXT */}
        <div className="flex flex-col justify-center p-8 sm:p-10 md:p-12 lg:p-16 h-full">
          <div className="w-12 h-1 bg-green-500 rounded-full mb-6"></div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-4 sm:mb-6 tracking-tight leading-tight">
            {title}
          </h3>

          <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed font-medium">
            {description}
          </p>
        </div>

        {/* 🔹 IMAGE */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-full min-h-[300px] overflow-hidden group">
          <Image 
            src={image} 
            alt={title} 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>
      </div>
    </motion.div>
  );
}
