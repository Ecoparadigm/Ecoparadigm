// "use client";

// import React from "react";

// type CardProps = {
//   title: string;
//   description: string;
//   points: string[];
//   buttonText: string;
// };

// const Card: React.FC<CardProps> = ({
//   title,
//   description,
//   points,
//   buttonText,
// }) => {
//   return (
//     <div className="rounded-2xl p-6 md:p-7 bg-gradient-to-b from-blue-500 to-blue-600 text-white shadow-lg flex flex-col justify-between min-h-[520px]">
//       {/* Content */}
//       <div>
//         <h3 className="text-2xl font-semibold leading-snug mb-3">{title}</h3>

//         <p className="text-lg text-blue-100 mb-6 leading-relaxed">
//           {description}
//         </p>

//         <h4 className="text-lg font-semibold text-blue-100 mb-3">
//           Key Advantages
//         </h4>

//         <ul className="space-y-3 text-md text-blue-50">
//           {points.map((point, index) => (
//             <li key={index} className="flex items-start gap-3">
//               {/* Bullet */}
//               <div className="mt-1.5 w-4 h-4 rounded-full bg-black flex items-center justify-center flex-shrink-0">
//                 <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
//               </div>

//               <span className="leading-relaxed">{point}</span>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Button */}
//       <button className="mt-8 w-fit bg-white text-gray-800 px-4 py-2 rounded-md text-md font-medium hover:bg-gray-100 transition">
//         {buttonText}
//       </button>
//     </div>
//   );
// };

// const WhatWeOffer = () => {
//   return (
//     <section className="py-16 px-6">
//       <div className="max-w-7xl mx-auto text-center mb-10">
//         <h2 className="text-4xl font-bold">What we offer</h2>
//         <p className="mt-2 text-gray-600 text-lg">
//           <span className="text-green-600 font-semibold">End-to-end</span>{" "}
//           wastewater engineering for Indian Conditions.
//         </p>
//       </div>

//       <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
//         <Card
//           title="Upgrade existing STPs to our NaturalSTP system"
//           description="Convert your underperforming or high-cost conventional STP into an efficient NaturalSTP system."
//           buttonText="Upgrade to NaturalSTP"
//           points={[
//             "Retrofit existing tanks and infrastructure with optimized treatment method",
//             "Up to 80–90% lower electricity consumption",
//             "Eliminate or significantly reduce chemical dependency",
//             "Extend plant lifespan while reducing annual operating costs",
//             "Convert STP into a reliable, low-maintenance asset",
//           ]}
//         />

//         <Card
//           title="New STP Construction (NaturalSTP® Systems)"
//           description="We design and build a future-ready NaturalSTP from the ground up, End to End."
//           buttonText="Get started now"
//           highlight
//           points={[
//             "Custom-designed for your load and site conditions",
//             "Up to 80–90% lower electricity consumption",
//             "Minimal equipment, fewer failures, and lower maintenance",
//             "Consistent treated water quality and regulatory compliance",
//           ]}
//         />

//         <Card
//           title="STP Audit and Maintenance"
//           description="High bills? Bad odors? Your STP is underperforming. Get a free audit for a roadmap to zero-maintenance reliability."
//           buttonText="Diagnose my plant"
//           points={[
//             "Detailed system inspection to identify performance gaps",
//             "Monitoring of key treatment parameters and water quality",
//             "Preventive maintenance, cleaning, and equipment servicing",
//             "Ongoing monthly maintenance for reliable operation",
//             "Operator training",
//           ]}
//         />
//       </div>
//       {/* Stats Section */}
//       <div className="max-w-6xl mx-auto mt-16 rounded-xl py-6 flex flex-col md:flex-row items-center justify-between gap-6">
//         {/* Left Text */}
//         <p className="text-gray-600 text-sm max-w-sm">
//           Companies that switch to NaturalSTP systems have seen huge benefits
//           and improvements in ROI and Hasslefree experience.
//         </p>

//         {/* Stats */}
//         <div className="flex flex-col sm:flex-row gap-8 items-center">
//           {/* Stat 1 */}
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center shadow-md">
//               {/* Icon (simple circle for now) */}
//               <div className="w-4 h-4 border-2 border-white rounded-full"></div>
//             </div>
//             <div>
//               <p className="font-semibold text-gray-900">100%</p>
//               <p className="text-xs text-gray-500">
//                 Adoption Rate after Preliminary audit and consultation
//               </p>
//             </div>
//           </div>

//           {/* Stat 2 */}
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center shadow-md">
//               {/* Icon placeholder */}
//               <div className="w-4 h-4 bg-white rounded-sm"></div>
//             </div>
//             <div>
//               <p className="font-semibold text-gray-900">95%</p>
//               <p className="text-xs text-gray-500">
//                 Lower operational costs compared to traditional STP's
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhatWeOffer;


"use client";

import React from "react";
import { motion } from "framer-motion";

/* ---------------- ANIMATIONS ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

/* ---------------- CARD ---------------- */

type CardProps = {
  title: string;
  description: string;
  points: string[];
  buttonText: string;
};

const Card: React.FC<CardProps> = ({
  title,
  description,
  points,
  buttonText,
}) => {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="rounded-2xl p-6 md:p-7 bg-gradient-to-b from-blue-500 to-blue-600 text-white shadow-lg flex flex-col justify-between min-h-[520px]"
    >
      {/* Content */}
      <div>
        <h3 className="text-2xl font-semibold leading-snug mb-3">
          {title}
        </h3>

        <p className="text-lg text-blue-100 mb-6 leading-relaxed">
          {description}
        </p>

        <h4 className="text-lg font-semibold text-blue-100 mb-3">
          Key Advantages
        </h4>

        <ul className="space-y-3 text-md text-blue-50">
          {points.map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              {/* Bullet */}
              <div className="mt-1.5 w-4 h-4 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>

              <span className="leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <button className="mt-8 w-fit bg-white text-gray-800 px-4 py-2 rounded-md text-md font-medium hover:bg-gray-100 transition">
        {buttonText}
      </button>
    </motion.div>
  );
};

/* ---------------- MAIN COMPONENT ---------------- */

const WhatWeOffer = () => {
  return (
    <section className="py-16 px-6">
      
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center mb-10"
      >
        <h2 className="text-4xl font-bold">What we offer</h2>
        <p className="mt-2 text-gray-600 text-lg">
          <span className="text-green-600 font-semibold">End-to-end</span>{" "}
          wastewater engineering for Indian Conditions.
        </p>
      </motion.div>

      {/* CARDS */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto"
      >
        <Card
          title="Upgrade existing STPs to our NaturalSTP system"
          description="Convert your underperforming or high-cost conventional STP into an efficient NaturalSTP system."
          buttonText="Upgrade to NaturalSTP"
          points={[
            "Retrofit existing tanks and infrastructure with optimized treatment method",
            "Up to 80–90% lower electricity consumption",
            "Eliminate or significantly reduce chemical dependency",
            "Extend plant lifespan while reducing annual operating costs",
            "Convert STP into a reliable, low-maintenance asset",
          ]}
        />

        <Card
          title="New STP Construction (NaturalSTP® Systems)"
          description="We design and build a future-ready NaturalSTP from the ground up, End to End."
          buttonText="Get started now"
          points={[
            "Custom-designed for your load and site conditions",
            "Up to 80–90% lower electricity consumption",
            "Minimal equipment, fewer failures, and lower maintenance",
            "Consistent treated water quality and regulatory compliance",
          ]}
        />

        <Card
          title="STP Audit and Maintenance"
          description="High bills? Bad odors? Your STP is underperforming. Get a free audit for a roadmap to zero-maintenance reliability."
          buttonText="Diagnose my plant"
          points={[
            "Detailed system inspection to identify performance gaps",
            "Monitoring of key treatment parameters and water quality",
            "Preventive maintenance, cleaning, and equipment servicing",
            "Ongoing monthly maintenance for reliable operation",
            "Operator training",
          ]}
        />
      </motion.div>

      {/* STATS SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mt-16 rounded-xl py-6 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        {/* Left Text */}
        <p className="text-gray-600 text-sm max-w-sm">
          Companies that switch to NaturalSTP systems have seen huge benefits
          and improvements in ROI and Hasslefree experience.
        </p>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row gap-8 items-center">
          
          {/* Stat 1 */}
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center shadow-md">
              <div className="w-4 h-4 border-2 border-white rounded-full"></div>
            </div>
            <div>
              <p className="font-semibold text-gray-900">100%</p>
              <p className="text-xs text-gray-500">
                Adoption Rate after Preliminary audit and consultation
              </p>
            </div>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center shadow-md">
              <div className="w-4 h-4 bg-white rounded-sm"></div>
            </div>
            <div>
              <p className="font-semibold text-gray-900">95%</p>
              <p className="text-xs text-gray-500">
                Lower operational costs compared to traditional STP's
              </p>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default WhatWeOffer;