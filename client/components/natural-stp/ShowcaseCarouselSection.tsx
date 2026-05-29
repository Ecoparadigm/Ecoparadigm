"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const cards = [
  {
    title: "Residential Apartments",
    desc: "Decreased reliance on tanker water & Reduced maintenance costs for residents",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
    badge1: "99.9% Uptime",
    badge2: "Silent & Natural",
  },
  {
    title: "Hospitals & Healthcare Facilities",
    desc: "Hygienic, odour-controlled system operation & PCB Compliant",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800",
    badge1: "24/7 Reliability",
    badge2: "PCB Compliant",
  },
  {
    title: "Hotels & Resorts",
    desc: "Supports green certifications & Silent operation",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800",
    badge1: "70% Bill Reduction",
    badge2: "Zero Odour",
  },
  {
    title: "Industrial Setups",
    desc: "Robust treatment of industrial domestic sewage with zero operational hassle",
    image:
      "https://images.unsplash.com/photo-1530631673369-bc20fdb3228d?q=80&w=800",
    badge1: "Heavy Load Ready",
    badge2: "Low Footprint",
  },
  {
    title: "Educational Campuses",
    desc: "Eco-friendly sewage solution supporting carbon neutral institute goals",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800",
    badge1: "100% Water Recycle",
    badge2: "Educational Value",
  },
  {
    title: "Commercial Workspaces",
    desc: "Premium office complexes requiring hassle-free water reuse infrastructure",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800",
    badge1: "LEED Points",
    badge2: "Premium Aesthetic",
  },
];

/* 🔥 COUNTER WITH VIEWPORT TRIGGER */
const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500;
    const increment = value / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [value, isInView]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
};

export default function ShowcaseCarouselSection() {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  /* ✅ FIX HYDRATION & RESPONSIVENESS */
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = cards.length - visibleCount;

  const next = () => {
    if (index < maxIndex) {
      setIndex((prev) => prev + 1);
    } else {
      setIndex(0); // Loop back
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    } else {
      setIndex(maxIndex); // Loop to end
    }
  };

  const statVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.15, duration: 0.5, ease: [0.25, 1, 0.5, 1] }
    })
  };

  return (
    <section className="w-full bg-white py-20 sm:py-24 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 text-gray-900 relative overflow-hidden border-t border-gray-100">
      <div className="absolute inset-0 bg-radial-[at_bottom_left] from-green-500/5 via-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-3"
          >
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-bold tracking-wider text-green-700 uppercase">
              Proven Installations
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              Net Zero
            </span>{" "}
            NaturalSTP™ in Action
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            viewport={{ once: true }}
            className="text-gray-600 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed"
          >
            From large-scale industrial setups to premium residential developments, we help diverse sectors meet environmental compliance seamlessly.
          </motion.p>
        </div>

        {/* CAROUSEL */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          viewport={{ once: true }}
          className="relative px-2"
        >
          {/* NAVIGATION BUTTONS */}
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute -left-2 sm:-left-6 lg:-left-10 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 active:scale-95 transition-all duration-300 shadow-lg text-green-600"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute -right-2 sm:-right-6 lg:-right-10 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 active:scale-95 transition-all duration-300 shadow-lg text-green-600"
          >
            <ChevronRight size={24} />
          </button>

          {/* WINDOW */}
          <div className="overflow-hidden rounded-3xl p-1">
            <motion.div
              className="flex gap-6"
              animate={{
                x: `-${index * (100 / visibleCount)}%`,
              }}
              transition={{
                type: "spring",
                stiffness: 70,
                damping: 18,
              }}
            >
              {cards.map((card, i) => (
                <div
                  key={i}
                  style={{
                    minWidth: `calc(${100 / visibleCount}% - ${((visibleCount - 1) * 24) / visibleCount}px)`,
                  }}
                  className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-green-500/10 hover:border-green-500/20 transition-all duration-500 flex flex-col group"
                >
                  {/* IMAGE */}
                  <div className="relative h-[240px] sm:h-[280px] md:h-[320px] overflow-hidden shrink-0">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* OVERLAY WITH PREMIUM GLASS BADGES */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-black/20 to-transparent flex flex-col justify-end p-5">
                      <div className="flex gap-2 flex-wrap">
                        <span className="text-xs font-semibold bg-white/10 border border-white/20 text-white px-3 py-1 rounded-full backdrop-blur-md">
                          {card.badge1}
                        </span>
                        <span className="text-xs font-semibold bg-green-500/20 border border-green-500/30 text-green-100 px-3 py-1 rounded-full backdrop-blur-md">
                          {card.badge2}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* TEXT */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-bold text-lg sm:text-xl mb-2 text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* DOTS INDICATORS */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, dIndex) => (
            <button
              key={dIndex}
              onClick={() => setIndex(dIndex)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === dIndex
                  ? "w-8 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]"
                  : "w-2.5 bg-gray-200 hover:bg-gray-300"
              }`}
              aria-label={`Go to slide ${dIndex + 1}`}
            />
          ))}
        </div>

        {/* STATS - DASHBOARD PANELS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20">
          <motion.div 
            custom={0}
            variants={statVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="bg-white border border-gray-100 shadow-xl shadow-gray-200/50 p-6 rounded-2xl transition hover:border-green-500/20 hover:shadow-green-500/10 group"
          >
            <h3 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-1 group-hover:text-green-600 transition-colors">
              <Counter value={80} suffix="B+" />
            </h3>
            <p className="text-green-600 text-xs font-bold tracking-wider uppercase mb-1">Litres Treated</p>
            <p className="text-gray-500 text-xs sm:text-sm">Total cumulative wastewater purified naturally</p>
          </motion.div>

          <motion.div 
            custom={1}
            variants={statVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="bg-white border border-gray-100 shadow-xl shadow-gray-200/50 p-6 rounded-2xl transition hover:border-cyan-500/20 hover:shadow-cyan-500/10 group"
          >
            <h3 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-1 group-hover:text-cyan-600 transition-colors">
              <Counter value={600} suffix="+" />
            </h3>
            <p className="text-cyan-600 text-xs font-bold tracking-wider uppercase mb-1">Projects Executed</p>
            <p className="text-gray-500 text-xs sm:text-sm">Successful decentralised systems countrywide</p>
          </motion.div>

          <motion.div 
            custom={2}
            variants={statVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="bg-white border border-gray-100 shadow-xl shadow-gray-200/50 p-6 rounded-2xl transition hover:border-emerald-500/20 hover:shadow-emerald-500/10 group"
          >
            <h3 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-1 group-hover:text-emerald-600 transition-colors">
              <Counter value={20} suffix="+" />
            </h3>
            <p className="text-emerald-600 text-xs font-bold tracking-wider uppercase mb-1">Years Experience</p>
            <p className="text-gray-500 text-xs sm:text-sm">Pioneering ecological sanitation solutions</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
