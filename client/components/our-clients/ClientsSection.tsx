"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

/* ---------------- ANIMATION ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05 },
  },
};

/* ---------------- DATA ---------------- */

const logos = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  src: `https://picsum.photos/200/100?random=${i}`,
}));

/* ---------------- COMPONENT ---------------- */

const ClientsSection = () => {
  return (
    <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 lg:px-20">
      {/* HEADER */}
      <div className="max-w-5xl mx-auto text-center mb-8 sm:mb-10">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
          Our Clients
        </h1>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-5 sm:mb-6">
          What began in 2006 as a small practice has grown into a trusted
          partner for clients seeking reliable sustainability solutions.
        </p>
      </div>

      {/* GRID */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
      >
        {logos.map((logo) => (
          <motion.div
            key={logo.id}
            variants={fadeUp}
            className="flex items-center justify-center"
          >
            <Image
              src={logo.src}
              alt="client logo"
              width={120}
              height={60}
              className="object-contain w-[100px] md:w-[120px] h-auto"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ClientsSection;
