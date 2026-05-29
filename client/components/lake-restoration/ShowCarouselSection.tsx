"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Residential Apartments",
    desc: "Decreased reliance on tanker water & Reduced maintenance costs for residents",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
    badge1: "99.9% System Uptime",
    badge2: "Silent, Natural Integration",
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
    badge1: "70% Water Bill Reduction",
    badge2: "Zero Odour",
  },
  {
    title: "Residential Apartments",
    desc: "Reduced maintenance costs for residents",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
    badge1: "99.9% System Uptime",
    badge2: "Silent, Natural Integration",
  },
  {
    title: "Hotels & Resorts",
    desc: "Supports green certifications & Silent operation",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800",
    badge1: "70% Water Bill Reduction",
    badge2: "Zero Odour",
  },
  {
    title: "Residential Apartments",
    desc: "Reduced maintenance costs for residents",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
    badge1: "99.9% System Uptime",
    badge2: "Silent, Natural Integration",
  },
];

/* 🔥 COUNTER */
const Counter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
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
  }, [value]);

  return <>{count}</>;
};

export default function ShowcaseCarouselSection() {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  /* ✅ FIX HYDRATION */
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = cards.length - visibleCount;

  const next = () => {
    if (index < maxIndex) setIndex((prev) => prev + 1);
  };

  const prev = () => {
    if (index > 0) setIndex((prev) => prev - 1);
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-[#031c1c] to-[#062f2f] py-20 md:py-32 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 text-white overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-green-500/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-xs sm:text-sm font-extrabold tracking-wider text-green-400 uppercase">
              Showcase
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">Net Zero</span>{" "}
            NaturalSTP in Action
          </h2>

          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            From large-scale manufacturers to boutique eco resorts, we help
            sectors meet environmental compliance.
          </p>
        </motion.div>

        {/* CAROUSEL */}
        <div className="relative group">
          <button
            onClick={prev}
            disabled={index === 0}
            className={`absolute left-0 md:-left-8 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-110 shadow-xl ${index === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-0 group-hover:opacity-100'}`}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={next}
            disabled={index >= maxIndex}
            className={`absolute right-0 md:-right-8 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-110 shadow-xl ${index >= maxIndex ? 'opacity-50 cursor-not-allowed' : 'opacity-0 group-hover:opacity-100'}`}
          >
            <ChevronRight size={24} />
          </button>

          <div className="overflow-hidden rounded-3xl mx-1 md:mx-4">
            {/* 🔥 TRACK */}
            <motion.div
              className="flex gap-6"
              animate={{
                x: `calc(-${index * (100 / visibleCount)}% - ${index * (24 / visibleCount)}px)`, // 24px is the gap
              }}
              transition={{
                type: "spring",
                stiffness: 70,
                damping: 20,
              }}
            >
              {cards.map((card, i) => (
                <div
                  key={i}
                  className="min-w-full sm:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-colors duration-500"
                >
                  {/* IMAGE */}
                  <div className="relative h-[240px] sm:h-[300px] md:h-[340px] overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#062f2f] via-transparent to-transparent flex flex-col justify-end p-5">
                      <div className="flex gap-2 flex-wrap">
                        <span className="text-xs font-bold bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                          {card.badge1}
                        </span>
                        <span className="text-xs font-bold bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                          {card.badge2}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* TEXT */}
                  <div className="p-6 md:p-8">
                    <h3 className="font-bold text-xl md:text-2xl mb-3 leading-tight">{card.title}</h3>
                    <p className="text-sm md:text-base text-gray-300 font-medium leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* STATS */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-24 text-center border-t border-white/10 pt-16"
        >
          <div>
            <h3 className="text-5xl md:text-6xl font-black mb-2 text-white">
              <Counter value={80} />
            </h3>
            <p className="text-green-400 font-bold tracking-wider uppercase text-sm">Billion Litres Treated</p>
          </div>

          <div>
            <h3 className="text-5xl md:text-6xl font-black mb-2 text-white">
              <Counter value={600} />+
            </h3>
            <p className="text-green-400 font-bold tracking-wider uppercase text-sm">Projects Executed</p>
          </div>

          <div>
            <h3 className="text-5xl md:text-6xl font-black mb-2 text-white">
              <Counter value={20} />
            </h3>
            <p className="text-green-400 font-bold tracking-wider uppercase text-sm">Years Experience</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
