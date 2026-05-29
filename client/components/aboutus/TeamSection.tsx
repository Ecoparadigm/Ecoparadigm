// "use client";

// import Image from "next/image";
// import { FaFacebookF, FaInstagram } from "react-icons/fa";
// import { motion } from "framer-motion";

// const team = [
//   {
//     name: "Pravinjith KP",
//     role: "Managing Director",
//     img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
//   },
//   {
//     name: "Naina Shah",
//     role: "Director",
//     img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
//   },
//   {
//     name: "Padma Rao",
//     role: "HR and Training",
//     img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
//   },
//   {
//     name: "Sangeetha Venkatesh",
//     role: "Corporate Communication",
//     img: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
//   },
// ];

// export default function TeamSection() {
//   return (
//     <section className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 py-10 sm:py-12 md:py-14">
//       {/* Heading */}
//       <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-medium text-center mb-10 sm:mb-12">
//         The Team
//       </h2>

//       {/* Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
//         {team.map((member, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: 0.6,
//               delay: index * 0.15,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             viewport={{ once: true }}
//             className="relative bg-gray-200 rounded-2xl p-5 sm:p-6 pt-8 sm:pt-10 text-center"
//           >
//             {/* Profile Image */}
//             <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden mb-4 sm:mb-6">
//               <Image
//                 src={member.img}
//                 alt={member.name}
//                 width={150}
//                 height={150}
//                 className="w-full h-full object-cover grayscale"
//               />
//             </div>

//             {/* Name */}
//             <h3 className="text-lg sm:text-xl md:text-xl font-semibold text-gray-800">
//               {member.name}
//             </h3>

//             {/* Role */}
//             <p className="text-sm sm:text-md text-gray-600 mt-1">
//               {member.role}
//             </p>

//             {/* Social Badge */}
//             <div className="absolute bottom-0 right-0 bg-black text-green-300 px-3 sm:px-4 py-2 sm:py-3 rounded-tl-2xl flex gap-2 sm:gap-3 items-center">
//               <FaFacebookF className="text-sm sm:text-md cursor-pointer hover:scale-110 transition" />
//               <FaInstagram className="text-sm sm:text-md cursor-pointer hover:scale-110 transition" />
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const team = [
  {
    name: "Pravinjith KP",
    role: "Managing Director",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    name: "Naina Shah",
    role: "Director",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    name: "Padma Rao",
    role: "HR and Training",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  },
  {
    name: "Sangeetha Venkatesh",
    role: "Corporate Communication",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } },
};

export default function TeamSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#062f2f] to-[#031c1c] px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 py-20 md:py-28 overflow-hidden border-t border-white/5">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 bg-radial-[at_bottom] from-[#0f4d4d]/20 via-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-green-500/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 flex flex-col items-center justify-center mb-16 md:mb-20"
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-sm font-bold tracking-wider text-green-400 uppercase">
            Leadership
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
          Meet Our Team
        </h2>
      </motion.div>

      {/* Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10"
      >
        {team.map((member, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 pt-12 text-center hover:bg-white/10 hover:border-green-400/30 hover:shadow-[0_0_40px_rgba(34,197,94,0.15)] transition-all duration-500 overflow-hidden"
          >
            {/* Subtle inner hover glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-green-500/0 via-transparent to-transparent group-hover:from-green-500/10 transition-colors duration-500"></div>

            {/* Profile Image */}
            <div className="relative w-36 h-36 sm:w-40 sm:h-40 mx-auto rounded-full mb-6 p-1 bg-gradient-to-br from-white/10 to-white/0 group-hover:from-green-400/50 group-hover:to-emerald-600/50 transition-all duration-500">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={160}
                  height={160}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
              </div>
            </div>

            {/* Name */}
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-green-300 transition-colors duration-300">
              {member.name}
            </h3>

            {/* Role */}
            <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              {member.role}
            </p>

            {/* Social Badge */}
            <div className="absolute bottom-0 right-0 bg-white/10 backdrop-blur-md text-white px-4 py-3 rounded-tl-3xl flex gap-3 items-center group-hover:bg-green-500 group-hover:text-black transition-all duration-500">
              <FaFacebookF className="text-sm cursor-pointer hover:scale-125 transition-transform" />
              <FaInstagram className="text-sm cursor-pointer hover:scale-125 transition-transform" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
