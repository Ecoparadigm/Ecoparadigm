"use client";

import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

const leftPoints = [
  "Electricity required & High OPEX",
  "2-shift skilled STP operator required",
  "Motors, blowers and frequent oil changes required",
  "Dedicated STP space and operator room required",
  "STP life just 3–5 years. Need to keep buying spares.",
  "24x7 heavy maintenance required",
  "Bad odour and high noise pollution",
];

const rightPoints = [
  "Zero power, runs on gravity flow & Almost NIL OPEX",
  "No operator required — fully automated natural cycle",
  "No motors or blowers; hence no mechanical wear or oil changes",
  "Operator room not required, saves premium real estate",
  "Lifetime structural durability",
  "Maintenance-free biomimicry solution",
  "Completely odour-free and whisper silent",
];

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemLeftVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] },
  },
};

const itemRightVariant = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] },
  },
};

const ComparisonSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 sm:py-28 px-4 sm:px-6 md:px-12 lg:px-16 text-gray-900 relative overflow-hidden">
      {/* Decorative Light Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-extrabold tracking-wider text-green-700 uppercase">
              Technology Matchup
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-5 tracking-tight text-gray-900">
            Why Many Have Already Made the Shift to{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              NaturalSTP™
            </span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            1KLD &gt; 60KLD &gt; 100KLD &gt; 1MLD — Tailored to any capacity.
            Designed so you never spend an extra penny on operations.
          </p>
        </motion.div>

        {/* LABELS AND COLUMNS */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          
          {/* MIDDLE VS BADGE FOR DESKTOP */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-white border border-gray-100 rounded-full shadow-xl items-center justify-center text-gray-400 font-black text-xl italic tracking-tighter">
            VS
          </div>

          {/* LEFT COLUMN: CONVENTIONAL */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-4 sm:gap-6 relative"
          >
            <div className="text-center bg-gray-200/50 py-3 rounded-xl border border-gray-200 mx-auto w-full max-w-sm">
              <p className="text-gray-600 font-bold text-lg sm:text-xl tracking-wide uppercase">
                Conventional Systems
              </p>
            </div>

            <div className="border border-gray-200 rounded-3xl p-6 sm:p-10 bg-white shadow-xl shadow-gray-200/50 relative overflow-hidden group hover:border-gray-300 transition-colors duration-500">
              <motion.ul
                variants={containerVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-5 sm:space-y-6"
              >
                {leftPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    variants={itemLeftVariant}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                      <XCircle className="w-5 h-5 text-red-500" />
                    </div>
                    <span className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed pt-0.5 group-hover:text-gray-900 transition-colors">
                      {point}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: NATURAL STP */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-4 sm:gap-6 relative mt-8 lg:mt-0"
          >
            <div className="text-center bg-green-50 py-3 rounded-xl border border-green-100 mx-auto w-full max-w-sm">
              <p className="text-green-700 font-bold text-lg sm:text-xl tracking-wide uppercase">
                NaturalSTP™
              </p>
            </div>

            <div className="border border-green-200 rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-white to-green-50/30 shadow-2xl shadow-green-500/10 relative overflow-hidden group hover:shadow-green-500/20 transition-all duration-500">
              {/* Soft decorative glow behind the card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500/5 to-cyan-500/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
              
              <motion.ul
                variants={containerVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-5 sm:space-y-6 relative z-10"
              >
                {rightPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    variants={itemRightVariant}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0 shadow-inner">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-gray-900 text-sm sm:text-base md:text-lg leading-relaxed font-semibold">
                      {point}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
