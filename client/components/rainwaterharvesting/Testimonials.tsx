// "use client";

// import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
// import Image from "next/image";
// import { useState } from "react";

// const testimonials = [
//   {
//     name: "Arvind Keerthy",
//     role: "Urban Environmentalist",
//     text: `"When we took up the challenge of rejuvenating Kundalahalli Lake, we needed a nearly unbreakable treatment system with nearly zero maintenance costs. Ecoparadigm successfully solved this challenge with DTS technology."`,
//     image: "https://randomuser.me/api/portraits/men/4.jpg",
//   },
//   {
//     name: "Manish Michael",
//     role: "CEO, United Way Bengaluru",
//     text: `"The technical competencies provided for all our initiatives by Ecoparadigm was above board. Ability to understand the ground issues and work out unconventional solutions clearly stands out."`,
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     name: "Raj Bhagat",
//     role: "Holycross Hospital",
//     text: `"We are happy with the service provided for the Holy Cross Hospital STP Tank using the NaturalSTP system. The engineers were quick to handle issues on site."`,
//     image: "https://randomuser.me/api/portraits/men/6.jpg",
//   },
//   {
//     name: "Prashant Palanisamy",
//     role: "General Manager, Good Earth",
//     text: `"We have been using NaturalSTP in all our properties since 10+ years."`,
//     image: "https://randomuser.me/api/portraits/men/1.jpg",
//   },
// ];

// export default function Testimonials() {
//   const [isHovered, setIsHovered] = useState(false);

//   const x = useMotionValue(0);

//   // 🔥 IMPORTANT: match your actual card + gap
//   const CARD_WIDTH = 340 + 32; // max-w-[340px] + gap-8 (~32px)
//   const TOTAL_WIDTH = CARD_WIDTH * testimonials.length;

//   useAnimationFrame((t, delta) => {
//     let current = x.get();

//     // 🔁 ALWAYS wrap (even during drag)
//     if (current <= -TOTAL_WIDTH) {
//       current += TOTAL_WIDTH;
//     } else if (current >= 0) {
//       current -= TOTAL_WIDTH;
//     }

//     // ▶️ Move only when not hovered
//     if (!isHovered) {
//       current -= delta * 0.05;
//     }

//     x.set(current);
//   });

//   return (
//     <section className="relative py-24 overflow-hidden text-white">
//       {/* Background */}
//       <div className="absolute inset-0 -z-10">
//         <Image
//           src="https://images.unsplash.com/photo-1495774539583-885e02cca8c2?q=80&w=870"
//           alt="background"
//           fill
//           className="object-cover"
//         />
//         <div className="absolute inset-0 bg-black/60" />
//       </div>

//       {/* Heading */}
//       <div className="text-center mb-14">
//         <h2 className="text-3xl md:text-4xl font-semibold">
//           What our <span className="text-green-400">clients say</span>
//         </h2>
//         <p className="text-lg text-gray-300 mt-2">
//           Trusted by reputed companies and changemakers globally
//         </p>
//       </div>

//       {/* Container */}
//       <div
//         className="overflow-hidden relative"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         {/* Fade edges */}
//         <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent z-10" />
//         <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-10" />

//         <motion.div
//           className="flex gap-8 cursor-grab active:cursor-grabbing"
//           style={{ x }}
//           drag="x"
//           dragElastic={0.1}
//         >
//           {[...testimonials, ...testimonials].map((item, index) => (
//             <div
//               key={index}
//               className="min-w-[320px] max-w-[340px] bg-white text-black p-5 shadow-xl"
//               style={{
//                 borderRadius: "20px",
//                 clipPath: `
//       path('
//         M20 0
//         H300
//         Q320 0 320 20
//         V90
//         Q320 110 340 110
//         Q360 110 360 130
//         Q360 150 340 150
//         Q320 150 320 170
//         V220
//         Q320 240 300 240
//         H20
//         Q0 240 0 220
//         V20
//         Q0 0 20 0
//         Z
//       ')
//     `,
//               }}
//             >
//               {/* Header */}
//               <div className="flex items-center gap-3 mb-4">
//                 <Image
//                   src={item.image}
//                   alt={item.name}
//                   width={45}
//                   height={45}
//                   className="rounded-full object-cover"
//                 />
//                 <div>
//                   <h4 className="font-semibold text-lg">{item.name}</h4>
//                   <p className="text-md text-gray-500">{item.role}</p>
//                 </div>
//               </div>

//               {/* Text */}
//               <p className="text-md text-gray-700 leading-relaxed">
//                 {item.text}
//               </p>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const testimonials = [
  {
    name: "Arvind Keerthy",
    role: "Urban Environmentalist",
    text: `"When we took up the challenge of rejuvenating Kundalahalli Lake, we needed a nearly unbreakable treatment system with nearly zero maintenance costs. Ecoparadigm successfully solved this challenge with DTS technology."`,
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Manish Michael",
    role: "CEO, United Way Bengaluru",
    text: `"The technical competencies provided for all our initiatives by Ecoparadigm was above board. Ability to understand the ground issues and work out unconventional solutions clearly stands out."`,
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Raj Bhagat",
    role: "Holycross Hospital",
    text: `"We are happy with the service provided for the Holy Cross Hospital STP Tank using the NaturalSTP system. The engineers were quick to handle issues on site."`,
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    name: "Prashant Palanisamy",
    role: "General Manager, Good Earth",
    text: `"We have been using NaturalSTP in all our properties since 10+ years."`,
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
];

export default function Testimonials() {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(360);

  // 🔥 Dynamically calculate card width (FIXES hydration + responsiveness)
  useEffect(() => {
    const updateWidth = () => {
      if (!containerRef.current) return;

      const width = window.innerWidth;

      if (width < 640)
        setCardWidth(260); // mobile
      else if (width < 1024)
        setCardWidth(300); // tablet
      else setCardWidth(360); // desktop
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const TOTAL_WIDTH = cardWidth * testimonials.length;

  useAnimationFrame((t, delta) => {
    let current = x.get();

    if (current <= -TOTAL_WIDTH) current += TOTAL_WIDTH;
    else if (current >= 0) current -= TOTAL_WIDTH;

    if (!isHovered) {
      current -= delta * 0.04; // smoother speed
    }

    x.set(current);
  });

  return (
    <section className="relative py-14 sm:py-16 md:py-20 lg:py-24 overflow-hidden text-white">
      {/* 🔥 Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1495774539583-885e02cca8c2?q=80&w=870"
          alt="background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* 🔥 Heading */}
      <div className="text-center mb-10 sm:mb-12 md:mb-14 px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
          What our <span className="text-green-400">clients say</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-2">
          Trusted by reputed companies and changemakers globally
        </p>
      </div>

      {/* 🔥 Carousel */}
      <div
        ref={containerRef}
        className="overflow-hidden relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-8 sm:w-12 md:w-20 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-8 sm:w-12 md:w-20 bg-gradient-to-l from-black to-transparent z-10" />

        <motion.div
          className="flex gap-4 sm:gap-6 md:gap-8 px-4"
          style={{ x }}
          drag="x"
          dragElastic={0.1}
        >
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="min-w-[240px] sm:min-w-[280px] md:min-w-[320px] max-w-[260px] sm:max-w-[300px] md:max-w-[340px] bg-white text-black p-4 sm:p-5 shadow-xl"
              style={{
                borderRadius: "20px",
                clipPath: `
                  path('
                    M20 0 
                    H300 
                    Q320 0 320 20 
                    V90
                    Q320 110 340 110
                    Q360 110 360 130
                    Q360 150 340 150
                    Q320 150 320 170
                    V220 
                    Q320 240 300 240 
                    H20 
                    Q0 240 0 220 
                    V20 
                    Q0 0 20 0 
                    Z
                  ')
                `,
              }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-sm sm:text-base md:text-lg">
                    {item.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Text */}
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
