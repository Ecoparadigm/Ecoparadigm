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
//     <section className="px-8 md:px-20 py-10">
//       {/* Heading */}
//       <h2 className="text-2xl md:text-4xl font-medium text-center mb-12">
//         The Team
//       </h2>

//       {/* Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
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
//             className="relative bg-gray-200 rounded-2xl p-6 pt-10 text-center"
//           >
//             {/* Profile Image */}
//             <div className="w-54 h-54 mx-auto rounded-full overflow-hidden mb-6">
//               <Image
//                 src={member.img}
//                 alt={member.name}
//                 width={150}
//                 height={150}
//                 className="w-full h-full object-cover grayscale"
//               />
//             </div>

//             {/* Name */}
//             <h3 className="text-xl font-semibold text-gray-800">
//               {member.name}
//             </h3>

//             {/* Role */}
//             <p className="text-md text-gray-600">{member.role}</p>

//             {/* Social Badge */}
//             <div className="absolute bottom-0 right-0 bg-black text-green-300 px-4 py-3 rounded-tl-2xl flex gap-3 items-center">
//               <FaFacebookF className="text-md cursor-pointer hover:scale-110 transition" />
//               <FaInstagram className="text-md cursor-pointer hover:scale-110 transition" />
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

export default function TeamSection() {
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 py-10 sm:py-12 md:py-14">
      {/* Heading */}
      <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-medium text-center mb-10 sm:mb-12">
        The Team
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            className="relative bg-gray-200 rounded-2xl p-5 sm:p-6 pt-8 sm:pt-10 text-center"
          >
            {/* Profile Image */}
            <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden mb-4 sm:mb-6">
              <Image
                src={member.img}
                alt={member.name}
                width={150}
                height={150}
                className="w-full h-full object-cover grayscale"
              />
            </div>

            {/* Name */}
            <h3 className="text-lg sm:text-xl md:text-xl font-semibold text-gray-800">
              {member.name}
            </h3>

            {/* Role */}
            <p className="text-sm sm:text-md text-gray-600 mt-1">
              {member.role}
            </p>

            {/* Social Badge */}
            <div className="absolute bottom-0 right-0 bg-black text-green-300 px-3 sm:px-4 py-2 sm:py-3 rounded-tl-2xl flex gap-2 sm:gap-3 items-center">
              <FaFacebookF className="text-sm sm:text-md cursor-pointer hover:scale-110 transition" />
              <FaInstagram className="text-sm sm:text-md cursor-pointer hover:scale-110 transition" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
