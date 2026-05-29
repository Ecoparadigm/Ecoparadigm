// "use client";

// import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
// import Image from "next/image";
// import { useState, useRef, useEffect } from "react";

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

//   const containerRef = useRef<HTMLDivElement>(null);
//   const [cardWidth, setCardWidth] = useState(360);

//   // 🔥 Dynamically calculate card width (FIXES hydration + responsiveness)
//   useEffect(() => {
//     const updateWidth = () => {
//       if (!containerRef.current) return;

//       const width = window.innerWidth;

//       if (width < 640)
//         setCardWidth(260); // mobile
//       else if (width < 1024)
//         setCardWidth(300); // tablet
//       else setCardWidth(360); // desktop
//     };

//     updateWidth();
//     window.addEventListener("resize", updateWidth);
//     return () => window.removeEventListener("resize", updateWidth);
//   }, []);

//   const TOTAL_WIDTH = cardWidth * testimonials.length;

//   useAnimationFrame((t, delta) => {
//     let current = x.get();

//     if (current <= -TOTAL_WIDTH) current += TOTAL_WIDTH;
//     else if (current >= 0) current -= TOTAL_WIDTH;

//     if (!isHovered) {
//       current -= delta * 0.04; // smoother speed
//     }

//     x.set(current);
//   });

//   return (
//     <section className="relative py-14 sm:py-16 md:py-20 lg:py-24 overflow-hidden text-white">
//       {/* 🔥 Background */}
//       <div className="absolute inset-0 -z-10">
//         <Image
//           src="https://images.unsplash.com/photo-1495774539583-885e02cca8c2?q=80&w=870"
//           alt="background"
//           fill
//           className="object-cover"
//         />
//         <div className="absolute inset-0 bg-black/60" />
//       </div>

//       {/* 🔥 Heading */}
//       <div className="text-center mb-10 sm:mb-12 md:mb-14 px-4">
//         <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
//           What our <span className="text-green-400">clients say</span>
//         </h2>
//         <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-2">
//           Trusted by reputed companies and changemakers globally
//         </p>
//       </div>

//       {/* 🔥 Carousel */}
//       <div
//         ref={containerRef}
//         className="overflow-hidden relative"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         {/* Fade edges */}
//         <div className="absolute left-0 top-0 h-full w-8 sm:w-12 md:w-20 bg-gradient-to-r from-black to-transparent z-10" />
//         <div className="absolute right-0 top-0 h-full w-8 sm:w-12 md:w-20 bg-gradient-to-l from-black to-transparent z-10" />

//         <motion.div
//           className="flex gap-4 sm:gap-6 md:gap-8 px-4"
//           style={{ x }}
//           drag="x"
//           dragElastic={0.1}
//         >
//           {[...testimonials, ...testimonials].map((item, index) => (
//             <div
//               key={index}
//               className="min-w-[240px] sm:min-w-[280px] md:min-w-[320px] max-w-[260px] sm:max-w-[300px] md:max-w-[340px] bg-white text-black p-4 sm:p-5 shadow-xl"
//               style={{
//                 borderRadius: "20px",
//                 clipPath: `
//                   path('
//                     M20 0 
//                     H300 
//                     Q320 0 320 20 
//                     V90
//                     Q320 110 340 110
//                     Q360 110 360 130
//                     Q360 150 340 150
//                     Q320 150 320 170
//                     V220 
//                     Q320 240 300 240 
//                     H20 
//                     Q0 240 0 220 
//                     V20 
//                     Q0 0 20 0 
//                     Z
//                   ')
//                 `,
//               }}
//             >
//               {/* Header */}
//               <div className="flex items-center gap-3 mb-3 sm:mb-4">
//                 <Image
//                   src={item.image}
//                   alt={item.name}
//                   width={40}
//                   height={40}
//                   className="rounded-full object-cover"
//                 />
//                 <div>
//                   <h4 className="font-semibold text-sm sm:text-base md:text-lg">
//                     {item.name}
//                   </h4>
//                   <p className="text-xs sm:text-sm text-gray-500">
//                     {item.role}
//                   </p>
//                 </div>
//               </div>

//               {/* Text */}
//               <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
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

import { supabase } from "@/utils/supabase";

type Testimonial = {
  id: string;
  name: string;
  company: string;
  testimonial: string;
  image_url?: string;
};

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const { data } = await supabase.from("testimonials").select("*").order("created_at", { ascending: false });
      if (data) {
        setTestimonials(data);
      }
      setLoading(false);
    };
    fetchTestimonials();
  }, []);
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(360);

  useEffect(() => {
    const updateWidth = () => {
      const width = window.innerWidth;
      if (width < 640) setCardWidth(260);
      else if (width < 1024) setCardWidth(300);
      else setCardWidth(360);
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

    if (!isHovered) current -= delta * 0.04;

    x.set(current);
  });

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-[#031c1c] to-[#062f2f] text-white">
      
      {/* 🔥 Subtle Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] bg-green-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-80px] right-[-80px] w-[300px] h-[300px] bg-emerald-400/10 blur-[120px] rounded-full pointer-events-none" />
      </div>

      {/* 🔥 Heading */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        viewport={{ once: true, margin: "-50px" }}
        className="text-center mb-16 md:mb-20 px-4"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-xs sm:text-sm font-extrabold tracking-wider text-green-400 uppercase">
            Testimonials
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
          What our <span className="text-green-400">clients say</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 mt-4 font-medium max-w-2xl mx-auto">
          Trusted by reputed companies and changemakers globally
        </p>
      </motion.div>

      {/* 🔥 Carousel */}
      <div
        ref={containerRef}
        className="overflow-hidden relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-8 sm:w-16 md:w-32 bg-gradient-to-r from-[#031c1c] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-8 sm:w-16 md:w-32 bg-gradient-to-l from-[#062f2f] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-4 sm:gap-6 md:gap-8 px-4"
          style={{ x }}
          drag="x"
          dragElastic={0.1}
        >
          {loading ? (
            <div className="flex justify-center w-full">Loading...</div>
          ) : (
            [...(testimonials.length > 0 ? testimonials : []), ...(testimonials.length > 0 ? testimonials : [])].map((item, index) => (
              <div
                key={index}
                className="min-w-[240px] sm:min-w-[280px] md:min-w-[320px] max-w-[260px] sm:max-w-[300px] md:max-w-[340px] bg-white/5 backdrop-blur-xl border border-white/10 p-6 shadow-2xl hover:bg-white/10 transition-colors duration-300 flex flex-col"
                style={{
                  borderRadius: "24px",
                  clipPath: `
                    path('
                      M24 0 H300 Q324 0 324 24 V90
                      Q324 110 344 110 Q364 110 364 130
                      Q364 150 344 150 Q324 150 324 170
                      V220 Q324 244 300 244 H24
                      Q0 244 0 220 V24 Q0 0 24 0 Z
                    ')
                  `,
                }}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-5">
                  <img
                    src={item.image_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=16a34a&color=fff`}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover border-2 border-white/10"
                  />
                  <div>
                    <h4 className="font-bold text-base sm:text-lg text-white">
                      {item.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-green-400 font-medium line-clamp-1">
                      {item.company}
                    </p>
                  </div>
                </div>

                {/* Text */}
                <p className="text-sm md:text-base text-gray-300 leading-relaxed font-medium">
                  "{item.testimonial}"
                </p>
              </div>
            ))
          )}
        </motion.div>
      </div>
    </section>
  );
}