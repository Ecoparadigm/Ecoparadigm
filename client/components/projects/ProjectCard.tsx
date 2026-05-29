"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  desc: string;
  img: string;
  span?: string;
};

export default function ProjectCard({
  title,
  desc,
  img,
  span = "",
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
      viewport={{ once: true, margin: "-50px" }}
      className={`relative rounded-3xl overflow-hidden group cursor-pointer shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 border border-gray-100 ${span}`}
    >
      <Image
        src={img}
        alt={title}
        width={800}
        height={500}
        className="w-full h-[220px] sm:h-[260px] md:h-[320px] lg:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Persistent subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
      
      {/* Dynamic hover glass overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-emerald-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px]"></div>

      {/* Text Container */}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 lg:p-8 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <div className="w-8 h-1 bg-green-500 rounded-full mb-3 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0"></div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold leading-tight mb-2">
          {title}
        </h3>
        <p className="text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed max-w-[90%] opacity-80 group-hover:opacity-100 transition-opacity duration-500">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}
