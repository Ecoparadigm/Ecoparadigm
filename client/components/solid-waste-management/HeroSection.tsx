// // "use client";

// // import { motion } from "framer-motion";
// // import Image from "next/image";

// // export default function HeroSection() {
// //   return (
// //     <div>
// //       {/* 🔥 HERO SECTION */}
// //       <section className="relative pt-16 sm:pt-20 px-4 sm:px-6 md:px-12 overflow-hidden">
// //         {/* 🔹 Dotted Pattern (responsive + safe) */}
// //         <div className="absolute left-0 top-10 opacity-80 pointer-events-none">
// //           <div className="grid grid-cols-6 gap-2">
// //             {[...Array(36)].map((_, i) => (
// //               <div
// //                 key={i}
// //                 className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-300 rounded-full"
// //               />
// //             ))}
// //           </div>
// //         </div>

// //         {/* 🔹 Content */}
// //         <div className="max-w-5xl mx-auto text-center relative z-10">
// //           <motion.h1
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ duration: 0.6 }}
// //             className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight"
// //           >
// //             The Impact of Expert Solid Waste Management
// //           </motion.h1>

// //           <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
// //             We provide end-to-end, sustainable waste solutions for cities and
// //             industries. Leveraging 20 years of expertise, we transform waste
// //             into resources through smart collection, segregation, and
// //             eco-friendly processing.
// //           </p>

// //           {/* 🔹 Buttons */}
// //           <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
// //             <button className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 border border-black rounded-lg hover:bg-black hover:text-white transition text-sm sm:text-base">
// //               Learn More
// //             </button>

// //             <button className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition text-sm sm:text-base">
// //               Talk to Us
// //             </button>
// //           </div>
// //         </div>
// //       </section>

// //       {/* 🔥 IMAGE SECTION */}
// //       <div className="max-w-7xl mx-auto mt-10 sm:mt-12 px-4 sm:px-6 md:px-12 relative rounded-2xl overflow-hidden">
// //         {/* 🔹 Image */}
// //         <div className="relative w-full h-[220px] sm:h-[280px] md:h-[320px] lg:h-[380px]">
// //           <Image
// //             src="https://plus.unsplash.com/premium_photo-1663099654523-d3862b7742cd?q=80&w=870&auto=format&fit=crop"
// //             alt="Solid Waste Management"
// //             fill
// //             className="object-cover"
// //           />
// //         </div>

// //         {/* 🔹 Overlay */}
// //         {/* <div className="absolute inset-0 bg-black/20" /> */}

// //         {/* 🔹 Badge */}
// //         <div className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2">
// //           <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 bg-blue-900 text-white rounded-full flex items-center justify-center text-center font-semibold p-3 sm:p-4 text-xs sm:text-sm md:text-lg">
// //             20 Years of Industry Experience
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function WasteHeroSection() {
//   return (
//     <section className="w-full min-h-[80vh] md:min-h-screen bg-[#062f2f] flex items-center px-4 sm:px-6 md:px-12 lg:px-16 py-12 md:py-20">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center w-full max-w-7xl mx-auto">
//         {/* LEFT CONTENT */}
//         <div>
//           {/* Tag */}
//           <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4 flex items-center gap-2">
//             <span className="w-2 h-2 bg-green-400 rounded-full"></span>
//             Solid Waste Management
//           </p>

//           {/* Heading */}
//           <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
//             Transform Waste Into{" "}
//             <span className="text-green-400">Valuable Resources</span>
//           </h1>

//           {/* Description */}
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-gray-300 text-sm sm:text-base mb-6 sm:mb-8 max-w-lg"
//           >
//             We deliver end-to-end sustainable waste solutions for cities and
//             industries, turning waste into reusable resources through smart
//             collection, segregation, and eco-friendly processing.
//           </motion.p>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
//             <button className="w-full sm:w-auto bg-green-500 hover:bg-green-600 transition px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-white font-medium flex items-center justify-center gap-2">
//               Learn More
//               <span className="bg-white text-black rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm">
//                 →
//               </span>
//             </button>

//             <button className="w-full sm:w-auto border border-gray-400 text-white hover:bg-white hover:text-black transition px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium">
//               Talk to Us
//             </button>
//           </div>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="relative mt-8 md:mt-0">
//           {/* IMAGE */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             <Image
//               src="https://plus.unsplash.com/premium_photo-1663099654523-d3862b7742cd?q=80&w=870&auto=format&fit=crop"
//               alt="Solid Waste Management"
//               width={500}
//               height={500}
//               className="rounded-xl w-full h-[260px] sm:h-[350px] md:h-[500px] object-cover"
//             />
//           </motion.div>

//           {/* INFO CARD */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6 }}
//             className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-gray-800/80 backdrop-blur-md p-3 sm:p-4 rounded-lg max-w-[220px] sm:max-w-xs text-white"
//           >
//             <p className="text-xs sm:text-sm text-gray-200 leading-snug">
//               Efficient waste segregation and processing can reduce landfill
//               usage by up to 70%, significantly lowering environmental impact.
//             </p>
//           </motion.div>

//           {/* EXPERIENCE BADGE */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.9 }}
//             className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 bg-green-500 text-white rounded-lg px-4 py-3 text-sm sm:text-base font-semibold"
//           >
//             20+ Years Experience
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WasteHeroSection() {
  return (
    <section className="w-full bg-[#062f2f] flex items-center px-4 sm:px-6 md:px-12 lg:px-16 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center w-full max-w-7xl mx-auto">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            Solid Waste Management
          </p>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
            Transform Waste Into{" "}
            <span className="text-green-400">Valuable Resources</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 text-sm sm:text-base mb-6 sm:mb-8 max-w-lg"
          >
            We deliver end-to-end sustainable waste solutions for cities and
            industries, turning waste into reusable resources through smart
            collection, segregation, and eco-friendly processing.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button className="w-full sm:w-auto bg-green-500 hover:bg-green-600 transition px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-white font-medium flex items-center justify-center gap-2">
              Learn More
              <span className="bg-white text-black rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm">
                →
              </span>
            </button>

            <button className="w-full sm:w-auto border border-gray-400 text-white hover:bg-white hover:text-black transition px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium">
              Talk to Us
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative mt-6 md:mt-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://plus.unsplash.com/premium_photo-1663099654523-d3862b7742cd?q=80&w=870&auto=format&fit=crop"
              alt="Solid Waste Management"
              width={500}
              height={500}
              className="rounded-xl w-full h-[220px] sm:h-[280px] md:h-[360px] lg:h-[420px] object-cover"
            />
          </motion.div>

          {/* INFO CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-gray-800/80 backdrop-blur-md p-3 sm:p-4 rounded-lg max-w-[220px] sm:max-w-xs text-white"
          >
            <p className="text-xs sm:text-sm text-gray-200 leading-snug">
              Efficient waste segregation and processing can reduce landfill
              usage by up to 70%, significantly lowering environmental impact.
            </p>
          </motion.div>

          {/* EXPERIENCE BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 bg-green-500 text-white rounded-lg px-4 py-3 text-sm sm:text-base font-semibold"
          >
            20+ Years Experience
          </motion.div>
        </div>
      </div>
    </section>
  );
}
