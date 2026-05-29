"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Download,
  Zap,
  BadgeCheck,
  DollarSign,
  FlaskConical,
} from "lucide-react";

const features = [
  {
    title: "ZERO Electricity Cost",
    description:
      "Your plant keeps working even during power cuts, with minimal energy expense.",
    icon: Zap,
  },
  {
    title: "Lower Lifetime Cost",
    description: "Costs up to 90% less to operate and maintain than traditional active mechanical systems.",
    icon: Download,
  },
  {
    title: "Audited & Proven",
    description:
      "Rigorously tested to exceed national compliance standards across 350+ running installations.",
    icon: ShieldCheck,
  },
  {
    title: "No Odour & Silent",
    description:
      "Fully underground setup with naturally sealed chambers ensuring whisper-quiet operation and zero smell.",
    icon: DollarSign,
  },
  {
    title: "ZERO Maintenance",
    description:
      "No active mechanical blowers or rotating parts. Desludging required only once every 18–24 months.",
    icon: BadgeCheck,
  },
  {
    title: "No Daily Chemicals",
    description:
      "Leverages specialized bio-cultures to break down contaminants naturally without chemical additions.",
    icon: FlaskConical,
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
  },
};

const SolutionSection: React.FC = () => {
  return (
    <section className="w-full py-20 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 bg-white relative overflow-hidden">
      {/* Decorative ambient blur */}
      <div className="absolute right-0 top-1/4 w-80 h-80 bg-green-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-bold tracking-wider text-green-700 uppercase">
              The Technology
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            The Smart, Sustainable{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              NaturalSTP™ Advantage
            </span>
          </h2>
        </div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                variants={cardVariant}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl px-6 sm:px-8 py-6 sm:py-8 border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-green-500/5 group transition duration-300 hover:border-green-500/10"
              >
                {/* ICON */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl border border-green-100 bg-green-50/50 text-green-600 mb-6 group-hover:bg-green-500 group-hover:text-white group-hover:border-green-500 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-green-500/10 transition-all duration-300">
                  <Icon className="w-6 h-6 transition-transform group-hover:rotate-[6deg]" />
                </div>

                {/* TITLE */}
                <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-3 leading-snug group-hover:text-green-700 transition duration-300">
                  {feature.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
