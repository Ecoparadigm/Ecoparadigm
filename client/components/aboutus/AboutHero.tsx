// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function AboutHero() {
//   return (
//     <section className="relative w-full min-h-[70vh] flex items-center px-8 md:px-20 text-white overflow-hidden">

//       {/* 🔥 Background Image */}
//       <Image
//         src="https://images.unsplash.com/photo-1697898783638-d1e81c7ebab1?q=80&w=1032&auto=format&fit=crop"
//         alt="About Background"
//         fill
//         priority
//         className="object-cover"
//       />

//       {/* 🔥 Dark overlay */}
//       <div className="absolute inset-0 bg-black/70" />

//       {/* 🔥 Content */}
//       <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center w-full">

//         {/* LEFT CONTENT */}
//         <motion.div
//           className="max-w-xl"
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
//         >

//           {/* Tag */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="inline-block border border-green-400 text-green-400 text-xs px-3 py-1 rounded-full mb-4"
//           >
//             About us
//           </motion.div>

//           {/* Heading */}
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className="text-3xl md:text-5xl font-semibold leading-tight mb-4"
//           >
//             Driven By Purpose <br /> And Impact
//           </motion.h1>

//           {/* Description */}
//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//             className="text-gray-300 text-sm md:text-base max-w-md"
//           >
//             Over two decades of delivering measurable environmental and economic
//             value across India.
//           </motion.p>
//         </motion.div>

//         {/* RIGHT SIDE (ROTATION ANIMATION) */}
//         <div className="flex justify-center md:justify-end">

//           <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">

//             <motion.div
//               initial={{ rotate: 0, opacity: 0, scale: 0.8 }}
//               animate={{ rotate: 360, opacity: 1, scale: 1 }}
//               transition={{
//                 duration: 3,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//               className="w-24 h-24 flex items-center justify-center"
//             >
//               {/* Radial shape */}
//               <div className="w-20 h-20 relative">
//                 {[...Array(6)].map((_, i) => (
//                   <div
//                     key={i}
//                     className="absolute w-2 h-6 bg-white/40 rounded-full"
//                     style={{
//                       transform: `rotate(${i * 60}deg) translateY(-20px)`
//                     }}
//                   />
//                 ))}
//               </div>
//             </motion.div>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 text-white overflow-hidden">
      {/* 🔥 Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1697898783638-d1e81c7ebab1?q=80&w=1032&auto=format&fit=crop"
        alt="About Background"
        fill
        priority
        className="object-cover"
      />

      {/* 🔥 Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* 🔥 Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center w-full">
        {/* LEFT CONTENT */}
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block border border-green-400 text-green-400 text-[10px] sm:text-xs px-3 py-1 rounded-full mb-3 sm:mb-4"
          >
            About us
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-3 sm:mb-4"
          >
            Driven By Purpose <br /> And Impact
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-300 text-xs sm:text-sm md:text-base max-w-md"
          >
            Over two decades of delivering measurable environmental and economic
            value across India.
          </motion.p>
        </motion.div>

        {/* RIGHT SIDE (ROTATION ANIMATION) */}
        <div className="flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
            <motion.div
              initial={{ rotate: 0, opacity: 0, scale: 0.8 }}
              animate={{ rotate: 360, opacity: 1, scale: 1 }}
              transition={{
                duration: 3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center"
            >
              {/* Radial shape */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 relative">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1.5 sm:w-2 h-5 sm:h-6 bg-white/40 rounded-full"
                    style={{
                      transform: `rotate(${i * 60}deg) translateY(-20px)`,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
