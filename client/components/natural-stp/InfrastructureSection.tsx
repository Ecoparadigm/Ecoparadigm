"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const items = [
  {
    title: "Tailored to your needs",
    content:
      "The PGF/Sand filter can get integrated as a part of the Landscaping concept, adding both aesthetic and ecological value.",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=800",
    rightTitle: "Tailored Integration",
    rightDesc:
      "Seamlessly integrates into landscaping while enhancing ecological value.",
  },
  {
    title: "Who is it for?",
    content:
      "NaturalSTP is for Residences, communities, businesses, Industries and developments that want reliable wastewater treatment that saves water, reduces costs, and works without any hassle.",
    image:
      "https://images.unsplash.com/photo-1529926691761-20fb82067c71?q=80&w=800",
    rightTitle: "Ideal for All Use Cases",
    rightDesc:
      "From residential to industrial setups, NaturalSTP adapts to all needs.",
  },
  {
    title: "How does it work?",
    content:
      "No pumps or mechanical movement required. Consistent performance year-round.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800",
    rightTitle: "Effortless Operation",
    rightDesc:
      "Operates naturally without mechanical systems, ensuring long-term stability.",
  },
  {
    title: "How much Space does it require?",
    content:
      "Entire system below ground. Use surface area for landscaping or development. It can also be retrofit into existing spaces or conventional STP spaces.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800",
    rightTitle: "Space Efficient Design",
    rightDesc:
      "Underground system frees up valuable surface space for better use.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
  },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const InfrastructureSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex];

  const handleConsultationClick = () => {
    const contactSec = document.getElementById("contact-section");
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-20 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 bg-gradient-to-b from-[#031c1c] to-[#062f2f] relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-radial-[at_top_right] from-[#0f4d4d]/15 via-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-bold tracking-wider text-green-400 uppercase">
              Adaptable Infrastructure
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 text-white tracking-tight">
            Underground. Out of sight. <br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
              Fit and Forget.
            </span>
          </h2>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-8 max-w-xl leading-relaxed">
            NaturalSTP™ is an innovative, biophilic, non-electric wastewater
            treatment system that removes the complexity and recurring headaches
            of conventional mechanical STPs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* LEFT: ACCORDIONS */}
          <div className="lg:col-span-7">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {items.map((item, index) => {
                const isActive = activeIndex === index;

                return (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    onClick={() => setActiveIndex(index)}
                    className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 ${
                      isActive
                        ? "bg-white/10 border-white/15 shadow-[0_0_30px_rgba(34,197,94,0.08)] scale-[1.01]"
                        : "bg-white/5 border-white/5 opacity-70 hover:opacity-100 hover:bg-white/8 hover:border-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-1 h-6 rounded-full transition-all duration-300 ${
                            isActive
                              ? "bg-gradient-to-b from-green-400 to-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"
                              : "bg-gray-600"
                          }`}
                        />
                        <h3 className="font-semibold text-white text-base sm:text-lg">
                          {item.title}
                        </h3>
                      </div>
                      <span
                        className={`text-xs transition-transform duration-300 ${
                          isActive ? "rotate-180 text-green-400" : "text-gray-400"
                        }`}
                      >
                        ▼
                      </span>
                    </div>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="text-gray-300 mt-4 text-sm sm:text-base leading-relaxed pl-5 border-l border-white/5">
                            {item.content}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}

              <motion.button
                variants={fadeUp}
                onClick={handleConsultationClick}
                className="group mt-8 w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold px-8 py-3.5 rounded-full shadow-[0_4px_20px_rgba(34,197,94,0.25)] hover:shadow-[0_4px_25px_rgba(34,197,94,0.4)] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                Request a Technical Consultation
                <span className="group-hover:translate-x-0.5 transition duration-300">→</span>
              </motion.button>
            </motion.div>
          </div>

          {/* RIGHT: PHOTO DISPLAY */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full max-w-md"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl relative overflow-hidden group">
                {/* Glow ring behind image */}
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
                
                <div className="relative h-[250px] sm:h-[300px] md:h-[350px] rounded-xl overflow-hidden mb-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={activeItem.image}
                        alt={activeItem.rightTitle}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="flex items-start gap-3 relative z-10 px-1 py-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 animate-pulse shrink-0" />
                  <div>
                    <h4 className="text-green-400 text-sm sm:text-base font-bold">
                      {activeItem.rightTitle}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-300 mt-1 leading-relaxed">
                      {activeItem.rightDesc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
