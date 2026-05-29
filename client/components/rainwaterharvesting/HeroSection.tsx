// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function HeroSection() {
//   return (
//     <section className="w-full min-h-[80vh] md:min-h-screen bg-[#062f2f] flex items-center px-4 sm:px-6 md:px-12 lg:px-16">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center w-full max-w-7xl mx-auto">
//         {/* LEFT CONTENT */}
//         <div>
//           {/* Tag */}
//           <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4 flex items-center gap-2">
//             <span className="w-2 h-2 bg-green-400 rounded-full"></span>
//             Rainwater Solutions
//           </p>

//           {/* Heading */}
//           <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
//             Recover Your{" "}
//             <span className="text-green-400">Wasted Potential</span>
//           </h1>

//           {/* Description */}
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-gray-300 text-sm sm:text-base mb-6 sm:mb-8 max-w-lg"
//           >
//             Turn rain into a reliable water source. Reduce dependency on tankers
//             and build a sustainable water system for long-term savings.
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
//               src="https://images.unsplash.com/photo-1762710964670-cc96a0076f25?q=80&w=1031&auto=format&fit=crop"
//               alt="Rainwater harvesting"
//               width={500}
//               height={500}
//               className="rounded-xl w-full h-[260px] sm:h-[350px] md:h-[500px] object-cover"
//             />
//           </motion.div>

//           {/* INFO CARD (LEFT) */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6 }}
//             className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-gray-800/80 backdrop-blur-md p-3 sm:p-4 rounded-lg max-w-[220px] sm:max-w-xs text-white"
//           >
//             <p className="text-xs sm:text-sm text-gray-200 leading-snug">
//               A 1,000 sq.ft roof can capture ~600 gallons per inch of rainfall,
//               reducing tanker dependency significantly.
//             </p>
//           </motion.div>

//           {/* BADGE CARD (RIGHT) */}
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

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemStagger = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } },
};

export default function HeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#062f2f] to-[#031c1c] flex items-center px-4 sm:px-6 md:px-12 lg:px-16 py-20 md:py-32 overflow-hidden border-b border-white/5">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 bg-radial-[at_top_left] from-[#0f4d4d]/30 via-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 items-center w-full max-w-7xl mx-auto">
        {/* LEFT CONTENT */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={itemStagger} className="flex items-center gap-2 mb-6">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-xs sm:text-sm font-bold tracking-wider text-green-400 uppercase">
              Rainwater Solutions
            </span>
          </motion.div>

          <motion.h1 
            variants={itemStagger}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight"
          >
            Recover Your{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
              Wasted Potential
            </span>
          </motion.h1>

          <motion.p
            variants={itemStagger}
            className="text-gray-300 text-base sm:text-lg md:text-xl max-w-lg mb-8 leading-relaxed font-medium"
          >
            Turn rain into a reliable water source. Reduce dependency on tankers
            and build a sustainable water system for long-term savings.
          </motion.p>

          <motion.div variants={itemStagger} className="flex flex-col sm:flex-row gap-4">
            <button className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 transition-all duration-300 px-8 py-4 rounded-full text-white font-bold flex items-center justify-center gap-2 shadow-xl shadow-green-500/20 hover:shadow-green-500/40 hover:-translate-y-1">
              Learn More
              <span className="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>

            <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 px-8 py-4 rounded-full font-bold">
              Talk to Us
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.4 }}
          className="relative mt-8 md:mt-0"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-green-500/10">
            <Image
              src="https://images.unsplash.com/photo-1762710964670-cc96a0076f25?q=80&w=1031&auto=format&fit=crop"
              alt="Rainwater harvesting"
              width={600}
              height={500}
              className="w-full h-[300px] sm:h-[400px] md:h-[480px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#062f2f]/80 via-transparent to-transparent"></div>
          </div>

          {/* INFO CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="absolute top-6 left-6 bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl max-w-[260px] text-white shadow-2xl shadow-black/20"
          >
            <p className="text-sm font-medium leading-relaxed">
              A 1,000 sq.ft roof can capture <span className="text-green-400 font-bold">~600 gallons</span> per inch of rainfall,
              reducing tanker dependency significantly.
            </p>
          </motion.div>

          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="absolute bottom-6 right-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl px-5 py-3 text-sm font-bold shadow-xl shadow-green-500/20"
          >
            20+ Years Experience
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
