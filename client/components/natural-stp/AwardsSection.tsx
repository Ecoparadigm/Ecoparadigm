// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// const logosRow1 = [
//   "https://images.unsplash.com/photo-1496200186974-4293800e2c20?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1760138270903-d95903188730?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1659893982146-b5151a13f1ff?q=80&w=862&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1662052955098-042b46e60c2b?q=80&w=862&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://plus.unsplash.com/premium_photo-1669075651475-5cba57c03b8c?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1496200186974-4293800e2c20?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// ];

// const logosRow2 = [
//   "https://images.unsplash.com/photo-1496200186974-4293800e2c20?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1760138270903-d95903188730?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1659893982146-b5151a13f1ff?q=80&w=862&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1662052955098-042b46e60c2b?q=80&w=862&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://plus.unsplash.com/premium_photo-1669075651475-5cba57c03b8c?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1496200186974-4293800e2c20?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// ];

// // reusable marquee row
// const MarqueeRow = ({
//   logos,
//   direction = "left",
// }: {
//   logos: string[];
//   direction?: "left" | "right";
// }) => {
//   return (
//     <div className="overflow-hidden whitespace-nowrap">
//       <motion.div
//         className="flex gap-16"
//         animate={{
//           x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
//         }}
//         transition={{
//           duration: 20,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//       >
//         {[...logos, ...logos].map((logo, index) => (
//           <div key={index} className="flex-shrink-0">
//             <Image
//               src={logo}
//               alt="logo"
//               width={120}
//               height={60}
//               className="object-contain"
//             />
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// const AwardsSection: React.FC = () => {
//   return (
//     <section className="w-full py-2 pb-24 px-6 md:px-36">
//       <div className="max-w-7xl mx-auto text-center">
//         {/* HEADING */}
//         <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-4">
//           <span className="text-green-500">6x National Award-winning</span>{" "}
//           <br />
//           technology and service
//         </h2>

//         {/* SUBTEXT */}
//         <p className="text-gray-600 text-lg max-w-lg mx-auto mb-16">
//           Pioneering natural wastewater systems in India, backed by multi-sector
//           experience delivering reliable treatment solutions.
//         </p>

//         {/* MARQUEE ROW 1 (LEFT) */}
//         <MarqueeRow logos={logosRow1} direction="left" />

//         {/* MARQUEE ROW 2 (RIGHT) */}
//         <div className="mt-10">
//           <MarqueeRow logos={logosRow2} direction="right" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AwardsSection;

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logosRow1 = [
  "https://images.unsplash.com/photo-1496200186974-4293800e2c20?q=80&w=1032&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1760138270903-d95903188730?q=80&w=870&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1659893982146-b5151a13f1ff?q=80&w=862&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1662052955098-042b46e60c2b?q=80&w=862&auto=format&fit=crop",
  "https://plus.unsplash.com/premium_photo-1669075651475-5cba57c03b8c?q=80&w=580&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1496200186974-4293800e2c20?q=80&w=1032&auto=format&fit=crop",
];

const logosRow2 = [...logosRow1];

/* 🔥 MARQUEE ROW */
const MarqueeRow = ({
  logos,
  direction = "left",
}: {
  logos: string[];
  direction?: "left" | "right";
}) => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        className="flex gap-8 sm:gap-12 md:gap-16"
        animate={{
          x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="flex-shrink-0">
            <Image
              src={logo}
              alt="logo"
              width={120}
              height={60}
              className="object-contain w-[80px] sm:w-[100px] md:w-[120px] h-auto"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const AwardsSection: React.FC = () => {
  return (
    <section className="w-full py-10 sm:py-12 md:py-16 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28">
      <div className="max-w-7xl mx-auto text-center">
        {/* HEADING */}
        <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-3 sm:mb-4">
          <span className="text-green-500">6x National Award-winning</span>{" "}
          <br className="hidden sm:block" />
          technology and service
        </h2>

        {/* SUBTEXT */}
        <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-md sm:max-w-lg mx-auto mb-10 sm:mb-12 md:mb-16">
          Pioneering natural wastewater systems in India, backed by multi-sector
          experience delivering reliable treatment solutions.
        </p>

        {/* MARQUEE ROW 1 */}
        <MarqueeRow logos={logosRow1} direction="left" />

        {/* MARQUEE ROW 2 */}
        <div className="mt-6 sm:mt-8 md:mt-10">
          <MarqueeRow logos={logosRow2} direction="right" />
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
