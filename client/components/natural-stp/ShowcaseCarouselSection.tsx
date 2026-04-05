"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    desc: "Supports green certifications & eco & Silent operation that preserves guest experience",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800",
    badge1: "70% Water Bill Reduction",
    badge2: "Zero Odour and No Aesthetic disturbance",
  },
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
    desc: "Supports green certifications & eco & Silent operation that preserves guest experience",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800",
    badge1: "70% Water Bill Reduction",
    badge2: "Zero Odour and No Aesthetic disturbance",
  },
];

const ShowcaseCarouselSection: React.FC = () => {
  const [index, setIndex] = useState(0);

  const visibleCards = cards.slice(index, index + 3);

  const next = () => {
    if (index < cards.length - 3) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-[#042f2e] to-[#021f1f] py-24 px-6 md:px-36 text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            <span className="text-green-400">Net Zero</span>{" "}
            <span className="text-cyan-400">NaturalSTP</span> in Action
          </h2>

          <p className="text-gray-300 max-w-xl text-lg mx-auto">
            From large-scale manufacturers to boutique eco resorts, we're
            dedicated to helping a wide range of sectors meet environmental
            compliance.
          </p>
        </div>

        {/* CAROUSEL WRAPPER */}
        <div className="relative">
          
          {/* LEFT BUTTON */}
          <button
            onClick={prev}
            className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur"
          >
            <ChevronLeft />
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={next}
            className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur"
          >
            <ChevronRight />
          </button>

          {/* CARDS */}
          <div className="grid md:grid-cols-3 gap-6">
            {visibleCards.map((card, i) => (
              <div
                key={i}
                className="bg-[#063737] rounded-2xl overflow-hidden"
              >
                {/* IMAGE */}
                <div className="relative h-[320px]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="text-xs bg-white/20 px-3 py-1 rounded-full">
                        {card.badge1}
                      </span>
                      <span className="text-xs bg-white/20 px-3 py-1 rounded-full">
                        {card.badge2}
                      </span>
                    </div>
                  </div>
                </div>

                {/* TEXT */}
                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 px-36 text-center">
          <div>
            <h3 className="text-4xl font-bold mb-2">80</h3>
            <p className="text-gray-400 text-md">
              Billion Litres of Waste water Treated till date
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-bold mb-2">600+</h3>
            <p className="text-gray-400 text-md">Projects Executed</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold mb-2">20</h3>
            <p className="text-gray-400 text-md">
              Years of Industry Experience
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ShowcaseCarouselSection;