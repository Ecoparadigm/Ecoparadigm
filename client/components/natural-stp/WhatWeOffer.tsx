"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

/* ---------------- ANIMATIONS ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/* ---------------- CARD ---------------- */

type CardProps = {
  title: string;
  description: string;
  points: string[];
  buttonText: string;
};

const Card: React.FC<CardProps> = ({
  title,
  description,
  points,
  buttonText,
}) => {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8 }}
      className="rounded-3xl p-6 sm:p-8 bg-white/5 backdrop-blur-md border border-white/10 text-white shadow-xl shadow-gray-900/50 flex flex-col justify-between min-h-[460px] sm:min-h-[500px] md:min-h-[540px] group transition duration-300 hover:border-green-500/30 hover:bg-white/10"
    >
      {/* Content */}
      <div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold leading-snug mb-3 text-white group-hover:text-green-300 transition duration-300 tracking-tight">
          {title}
        </h3>

        <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-6 leading-relaxed">
          {description}
        </p>

        <h4 className="text-xs sm:text-sm font-extrabold tracking-wider text-green-400 mb-4 uppercase">
          Key Advantages
        </h4>

        <ul className="space-y-3 text-xs sm:text-sm text-gray-200">
          {points.map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-0.5 flex-shrink-0 bg-green-500/20 text-green-400 p-1 rounded-full border border-green-500/20">
                <Check className="w-3.5 h-3.5" />
              </span>
              <span className="leading-relaxed font-medium">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <Link
        href="/contact"
        className="mt-8 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 transition duration-300 shadow-lg shadow-green-500/20 hover:shadow-green-500/40 hover:-translate-y-0.5"
      >
        {buttonText}
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </Link>
    </motion.div>
  );
};

/* ---------------- MAIN ---------------- */

const WhatWeOffer = () => {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 bg-gradient-to-b from-[#031c1c] to-[#062f2f] relative overflow-hidden border-t border-white/5">
      {/* Subtle top edge spotlight */}
      <div className="absolute inset-0 bg-radial-[at_top] from-[#0f4d4d]/15 via-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-xs sm:text-sm font-extrabold tracking-wider text-green-400 uppercase">
              End-To-End Services
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Comprehensive Wastewater Engineering
          </h2>

          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Engineered precisely for Indian load profiles and climates.
          </p>
        </motion.div>

        {/* CARDS */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto"
        >
          <Card
            title="STP Modernization & Upgrades"
            description="Convert your underperforming or high-cost conventional mechanical STP into an efficient NaturalSTP™ system."
            buttonText="Upgrade to NaturalSTP™"
            points={[
              "Retrofit existing tanks & structural channels seamlessly",
              "Reduce electricity consumption by 80–90%",
              "Eliminate or significantly reduce chemical usage",
              "Minimize mechanical wear and annual operating costs",
              "Transform complex STPs into silent compliance assets",
            ]}
          />

          <Card
            title="New STP Civil Construction"
            description="We conceptualize, engineer, and build future-proof NaturalSTP™ plants from the ground up, end-to-end."
            buttonText="Construct a New STP"
            points={[
              "Custom engineered specifically for your load profiles",
              "Gravity-flow hydraulic designs with zero active pumps",
              "Extremely compact underground space footprints",
              "Consistent treated water parameters meeting state boards",
            ]}
          />

          <Card
            title="Technical Audits & Maintenance"
            description="High power bills? Bad odors? We analyze and diagnose STP performance gaps to chart a path to reliability."
            buttonText="Diagnose My STP"
            points={[
              "Comprehensive biological and mechanical site inspection",
              "Real-time monitoring of key treatment metrics & load limits",
              "Preventive maintenance and biological inoculations",
              "Ongoing expert technical supervision for long-term health",
            ]}
          />
        </motion.div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-6xl mx-auto mt-20 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          {/* TEXT */}
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-lg text-center lg:text-left font-medium">
            Establishments that transition to biomimicry-based wastewater engineering experience rapid operational payback alongside complete regulatory peace of mind.
          </p>

          {/* STATS */}
          <div className="flex flex-col sm:flex-row gap-10 items-center shrink-0">
            {/* Stat 1 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-green-500/10 text-green-400 flex items-center justify-center shadow-lg border border-green-500/20 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                <Check className="w-7 h-7" />
              </div>
              <div>
                <p className="font-black text-white text-2xl sm:text-3xl tracking-tight">
                  100%
                </p>
                <p className="text-xs sm:text-sm text-green-400 font-bold uppercase tracking-wider">
                  Approval Rate
                </p>
              </div>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-4 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shadow-lg border border-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
                <Check className="w-7 h-7" />
              </div>
              <div>
                <p className="font-black text-white text-2xl sm:text-3xl tracking-tight">
                  Up to 95%
                </p>
                <p className="text-xs sm:text-sm text-cyan-400 font-bold uppercase tracking-wider">
                  Lower OPEX
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
