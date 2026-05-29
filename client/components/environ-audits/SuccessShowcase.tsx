"use client";

import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const projects = [
  {
    title: "Koratagere, Karnataka",
    desc: "We focus on systems that deliver predictable output, regulatory compliance, and lifecycle value—not just installation.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=870",
    tags: ["Carbon Sequestration Analysis", "Geo Tagging (Trees)"],
  },
  {
    title: "Manipal Tata Medical College",
    desc: "We focus on systems that deliver predictable output, regulatory compliance, and lifecycle value—not just installation.",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=870",
    tags: ["Campus Audits", "Green Building"],
  },
  {
    title: "Presidency University",
    desc: "We focus on systems that deliver predictable output, regulatory compliance, and lifecycle value—not just installation.",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=870",
    tags: ["Audits", "Net Zero"],
  },
];

export default function SuccessShowcaseCarousel() {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(360);

  // responsive card width
  useEffect(() => {
    const updateWidth = () => {
      const width = window.innerWidth;

      if (width < 640) setCardWidth(280);
      else if (width < 1024) setCardWidth(340);
      else setCardWidth(400); // Increased card width for premium feel
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const TOTAL_WIDTH = cardWidth * projects.length;

  // auto scroll
  useAnimationFrame((t, delta) => {
    let current = x.get();

    if (current <= -TOTAL_WIDTH) current += TOTAL_WIDTH;

    if (!isHovered) {
      current -= delta * 0.04; // speed
    }

    x.set(current);
  });

  return (
    <section className="w-full bg-gray-50/50 py-20 sm:py-24 md:py-32 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-[400px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 relative z-10">
        {/* HEADING */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-xs sm:text-sm font-extrabold tracking-wider text-green-700 uppercase">
              Proven Track Record
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Success You Can See
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-4 max-w-2xl mx-auto font-medium">
            A glimpse into our most impactful environmental projects and sustainability stories.
          </p>
        </motion.div>

        {/* CAROUSEL */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          ref={containerRef}
          className="overflow-hidden relative -mx-4 sm:mx-0 rounded-none sm:rounded-3xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 h-full w-12 sm:w-24 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-12 sm:w-24 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent z-20 pointer-events-none" />

          <motion.div className="flex gap-6 sm:gap-8 lg:gap-10 py-4 px-4 sm:px-0" style={{ x }}>
            {[...projects, ...projects, ...projects].map((item, index) => (
              <div
                key={index}
                className="min-w-[260px] sm:min-w-[320px] lg:min-w-[380px] bg-white rounded-3xl p-3 shadow-xl shadow-gray-200/50 border border-gray-100 group transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-1"
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden rounded-2xl mb-5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-[200px] sm:h-[240px] lg:h-[260px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* tags floating on image */}
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 pr-4">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-white/95 backdrop-blur-sm text-gray-900 font-bold text-[10px] sm:text-xs px-3 py-1.5 rounded-full shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* TEXT */}
                <div className="px-3 pb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 tracking-tight group-hover:text-green-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
