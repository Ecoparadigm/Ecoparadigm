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
    tags: ["Carbon Sequestration Analysis", "Geo Tagging and mapping (Trees)"],
  },
  {
    title: "Manipal Tata Medical College",
    desc: "We focus on systems that deliver predictable output, regulatory compliance, and lifecycle value—not just installation.",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=870",
    tags: ["Campus Audits", "Green Building Certificate"],
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
  const [cardWidth, setCardWidth] = useState(320);

  // responsive card width
  useEffect(() => {
    const updateWidth = () => {
      const width = window.innerWidth;

      if (width < 640) setCardWidth(260);
      else if (width < 1024) setCardWidth(300);
      else setCardWidth(340);
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
    <section className="w-full pb-14 sm:pb-16 md:pb-20 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        
        {/* HEADING */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
            Success You Can See
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            A glimpse into our most impactful projects and success stories.
          </p>
        </div>

        {/* CAROUSEL */}
        <div
          ref={containerRef}
          className="overflow-hidden relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-[#f5f5f5] to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-[#f5f5f5] to-transparent z-10" />

          <motion.div
            className="flex gap-6"
            style={{ x }}
          >
            {[...projects, ...projects].map((item, index) => (
              <div
                key={index}
                className="min-w-[260px] sm:min-w-[300px] lg:min-w-[340px]"
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden rounded-2xl group">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-[220px] sm:h-[250px] lg:h-[260px] object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* tags */}
                  <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-white/90 text-gray-800 text-[10px] sm:text-xs px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* TEXT */}
                <div className="mt-4">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}