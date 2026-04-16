// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { delay, motion } from "framer-motion";

// const cards = [
//   {
//     title: "Residential Apartments",
//     desc: "Decreased reliance on tanker water & Reduced maintenance costs for residents",
//     image:
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
//     badge1: "99.9% System Uptime",
//     badge2: "Silent, Natural Integration",
//   },
//   {
//     title: "Hospitals & Healthcare Facilities",
//     desc: "Hygienic, odour-controlled system operation & PCB Compliant",
//     image:
//       "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800",
//     badge1: "24/7 Reliability",
//     badge2: "PCB Compliant",
//   },
//   {
//     title: "Hotels & Resorts",
//     desc: "Supports green certifications & eco & Silent operation that preserves guest experience",
//     image:
//       "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800",
//     badge1: "70% Water Bill Reduction",
//     badge2: "Zero Odour and No Aesthetic disturbance",
//   },
//   {
//     title: "Residential Apartments",
//     desc: "Decreased reliance on tanker water & Reduced maintenance costs for residents",
//     image:
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
//     badge1: "99.9% System Uptime",
//     badge2: "Silent, Natural Integration",
//   },
// ];

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5, delay: 0.4, ease: "easeOut" },
//   },
// };

// const container = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// // 🔥 COUNTING COMPONENT
// const Counter = ({ value }: { value: number }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const duration = 1200;
//     const increment = value / (duration / 16);

//     const counter = setInterval(() => {
//       start += increment;
//       if (start >= value) {
//         setCount(value);
//         clearInterval(counter);
//       } else {
//         setCount(Math.floor(start));
//       }
//     }, 16);

//     return () => clearInterval(counter);
//   }, [value]);

//   return <>{count}</>;
// };

// const ShowcaseCarouselSection: React.FC = () => {
//   const [index, setIndex] = useState(0);
//   const visibleCards = cards.slice(index, index + 3);

//   const next = () => {
//     if (index < cards.length - 3) setIndex(index + 1);
//   };

//   const prev = () => {
//     if (index > 0) setIndex(index - 1);
//   };

//   return (
//     <section className="w-full bg-gradient-to-b from-[#042f2e] to-[#021f1f] py-24 px-6 md:px-36 text-white">
//       <div className="max-w-7xl mx-auto">
//         {/* HEADER */}
//         <motion.div
//           className="text-center mb-16"
//           variants={container}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           <motion.h2
//             variants={fadeUp}
//             className="text-3xl md:text-5xl font-semibold mb-4 text-white"
//           >
//             Award Winning Technology and Service
//           </motion.h2>

//           <motion.p
//             variants={fadeUp}
//             className="text-gray-300 max-w-xl text-lg mx-auto"
//           >
//             From large-scale manufacturers to boutique eco resorts, we're
//             dedicated to helping a wide range of sectors meet environmental
//             compliance.
//           </motion.p>
//         </motion.div>

//         {/* CAROUSEL */}
//         <div className="relative">
//           {/* BUTTONS */}
//           <button
//             onClick={prev}
//             className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur"
//           >
//             <ChevronLeft />
//           </button>

//           <button
//             onClick={next}
//             className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur"
//           >
//             <ChevronRight />
//           </button>

//           {/* CARDS */}
//           <div className="grid md:grid-cols-3 gap-6">
//             {visibleCards.map((card, i) => (
//               <div
//                 key={i}
//                 className="bg-[#063737] rounded-2xl overflow-hidden transition hover:shadow-[0_0_30px_rgba(0,255,200,0.2)]"
//               >
//                 {/* IMAGE (ZOOM EFFECT) */}
//                 <div className="relative h-[320px] overflow-hidden">
//                   <Image
//                     src={card.image}
//                     alt={card.title}
//                     fill
//                     className="object-cover transition-transform duration-500 hover:scale-110"
//                   />

//                   <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4">
//                     <div className="flex flex-wrap gap-2 mb-2">
//                       <span className="text-xs bg-white/20 px-3 py-1 rounded-full backdrop-blur">
//                         {card.badge1}
//                       </span>
//                       <span className="text-xs bg-white/20 px-3 py-1 rounded-full backdrop-blur">
//                         {card.badge2}
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* TEXT */}
//                 <motion.div
//                   variants={fadeUp}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: true }}
//                   className="p-5"
//                 >
//                   <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
//                   <p className="text-sm text-gray-300 leading-relaxed">
//                     {card.desc}
//                   </p>
//                 </motion.div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* STATS */}
//         <motion.div
//           className="grid md:grid-cols-3 gap-8 mt-20 px-36 text-center"
//           variants={container}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           <motion.div variants={fadeUp}>
//             <h3 className="text-4xl font-bold mb-2">
//               <Counter value={80} />
//             </h3>
//             <p className="text-gray-400 text-md">
//               Billion Litres of Waste water Treated till date
//             </p>
//           </motion.div>

//           <motion.div variants={fadeUp}>
//             <h3 className="text-5xl font-bold mb-2">
//               <Counter value={600} />+
//             </h3>
//             <p className="text-gray-400 text-md">Projects Executed</p>
//           </motion.div>

//           <motion.div variants={fadeUp}>
//             <h3 className="text-4xl font-bold mb-2">
//               <Counter value={20} />
//             </h3>
//             <p className="text-gray-400 text-md">
//               Years of Industry Experience
//             </p>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ShowcaseCarouselSection;

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
    <section className="w-full bg-gradient-to-b from-[#042f2e] to-[#021f1f] py-14 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 text-white">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            <span className="text-green-400">Net Zero</span>{" "}
            <span className="text-cyan-400">NaturalSTP</span> in Action
          </h2>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
            From large-scale manufacturers to boutique eco resorts, we help
            sectors meet environmental compliance.
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="relative">
          <button
            onClick={prev}
            className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={next}
            className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur"
          >
            <ChevronRight />
          </button>
          <div className=" overflow-hidden">
            {/* BUTTONS */}
            {/* <button
            onClick={prev}
            className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={next}
            className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur"
          >
            <ChevronRight />
          </button> */}

            {/* 🔥 TRACK */}
            <motion.div
              className="flex gap-4 sm:gap-6"
              animate={{
                x: `-${index * (100 / visibleCount)}%`,
              }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 20,
              }}
            >
              {cards.map((card, i) => (
                <div
                  key={i}
                  className="min-w-full sm:min-w-[50%] lg:min-w-[33.333%] bg-[#063737] rounded-2xl overflow-hidden"
                >
                  {/* IMAGE */}
                  <div className="relative h-[220px] sm:h-[280px] md:h-[320px]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4">
                      <div className="flex gap-2 flex-wrap">
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
                  <div className="p-4 sm:p-5">
                    <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                    <p className="text-sm text-gray-300">{card.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 text-center">
          <div>
            <h3 className="text-3xl font-bold">
              <Counter value={80} />
            </h3>
            <p className="text-gray-400 text-sm">Billion Litres Treated</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">
              <Counter value={600} />+
            </h3>
            <p className="text-gray-400 text-sm">Projects Executed</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">
              <Counter value={20} />
            </h3>
            <p className="text-gray-400 text-sm">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
