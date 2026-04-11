// "use client";

// import { motion } from "framer-motion";
// import { useState } from "react";
// import Image from "next/image";

// const items = [
//   {
//     title: "Tailored to your needs",
//     content:
//       "The PGF/Sand filter can get integrated as a part of the Landscaping concept, adding both aesthetic and ecological value.",
//     image:
//       "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=800",
//     rightTitle: "Tailored Integration",
//     rightDesc:
//       "Seamlessly integrates into landscaping while enhancing ecological value.",
//   },
//   {
//     title: "Who is it for?",
//     content:
//       "NaturalSTP is for Residences, communities, businesses, Industries and developments that want reliable wastewater treatment that saves water, reduces costs, and works without any hassle.",
//     image:
//       "https://images.unsplash.com/photo-1529926691761-20fb82067c71?q=80&w=800",
//     rightTitle: "Ideal for All Use Cases",
//     rightDesc:
//       "From residential to industrial setups, NaturalSTP adapts to all needs.",
//   },
//   {
//     title: "How does it work?",
//     content:
//       "No pumps or mechanical movement required. Consistent performance year-round.",
//     image:
//       "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800",
//     rightTitle: "Effortless Operation",
//     rightDesc:
//       "Operates naturally without mechanical systems, ensuring long-term stability.",
//   },
//   {
//     title: "How much Space does it require?",
//     content:
//       "Entire system below ground. Use surface area for landscaping or development. It can also be retrofit into existing spaces or conventional STP spaces.",
//     image:
//       "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800",
//     rightTitle: "Space Efficient Design",
//     rightDesc:
//       "Underground system frees up valuable surface space for better use.",
//   },
// ];

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 1.1, ease: "easeOut" },
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

// const InfrastructureSection: React.FC = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const activeItem = items[activeIndex];

//   return (
//     <section className="w-full py-24 px-6 md:px-36">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">

//         {/* LEFT */}
//         <div>
//           {/* NO ANIMATION (as requested) */}
//           <p className="text-sm text-gray-600 flex items-center gap-2 mb-3">
//             <span className="w-2 h-2 bg-green-500 rounded-full"></span>
//             Adaptable Infrastructure
//           </p>

//           <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-4">
//             Underground. Out of sight. <br />
//             <span className="text-green-500">
//               Fit and Forget about it.
//             </span>
//           </h2>

//           <p className="text-gray-600 mb-8 max-w-lg text-lg">
//             NaturalSTP is an innovative, biophilic, non-electric wastewater
//             treatment system that removes the complexity and recurring headaches
//             of conventional STPs.
//           </p>

//           {/* ANIMATED BLOCK */}
//           <motion.div
//             variants={container}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             {/* ACCORDION */}
//             <motion.div className="space-y-4" variants={fadeUp}>
//               {items.map((item, index) => {
//                 const isActive = activeIndex === index;

//                 return (
//                   <div
//                     key={index}
//                     onClick={() => setActiveIndex(index)}
//                     className={`cursor-pointer rounded-xl p-5 transition ${
//                       isActive ? "bg-[#c9d8df]" : "bg-[#d9e5ea]"
//                     }`}
//                   >
//                     <div className="flex items-center gap-3">
//                       <div
//                         className={`w-[2px] h-6 ${
//                           isActive ? "bg-green-500" : "bg-black"
//                         }`}
//                       ></div>

//                       <h3 className="font-medium text-gray-900 text-lg">
//                         {item.title}
//                       </h3>
//                     </div>

//                     {isActive && (
//                       <p className="text-gray-600 mt-3 text-md leading-relaxed pl-5">
//                         {item.content}
//                       </p>
//                     )}
//                   </div>
//                 );
//               })}
//             </motion.div>

//             {/* BUTTON */}
//             <motion.button
//               variants={fadeUp}
//               className="mt-10 bg-green-500 hover:bg-green-600 transition text-white px-6 py-3 rounded-lg font-medium"
//             >
//               Request a Technical Consultation
//             </motion.button>
//           </motion.div>
//         </div>

//         {/* RIGHT */}
//         <motion.div
//           className="flex h-full items-center justify-center"
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
//             <Image
//               key={activeIndex}
//               src={activeItem.image}
//               alt="Infrastructure"
//               width={300}
//               height={500}
//               className="rounded-lg object-cover w-full h-[320px]"
//             />

//             <div className="mt-4 flex items-start gap-2">
//               <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></span>
//               <div>
//                 <h4 className="text-blue-600 font-medium">
//                   {activeItem.rightTitle}
//                 </h4>
//                 <p className="text-sm text-gray-600">
//                   {activeItem.rightDesc}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default InfrastructureSection;

"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const items = [
  {
    title: "Tailored to your needs",
    content:
      "The PGF/Sand filter can get integrated as a part of the Landscaping concept, adding both aesthetic and ecological value.",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=800",
    rightTitle: "Tailored Integration",
    rightDesc:
      "Seamlessly integrates into landscaping while enhancing ecological value.",
  },
  {
    title: "Who is it for?",
    content:
      "NaturalSTP is for Residences, communities, businesses, Industries and developments that want reliable wastewater treatment that saves water, reduces costs, and works without any hassle.",
    image:
      "https://images.unsplash.com/photo-1529926691761-20fb82067c71?q=80&w=800",
    rightTitle: "Ideal for All Use Cases",
    rightDesc:
      "From residential to industrial setups, NaturalSTP adapts to all needs.",
  },
  {
    title: "How does it work?",
    content:
      "No pumps or mechanical movement required. Consistent performance year-round.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800",
    rightTitle: "Effortless Operation",
    rightDesc:
      "Operates naturally without mechanical systems, ensuring long-term stability.",
  },
  {
    title: "How much Space does it require?",
    content:
      "Entire system below ground. Use surface area for landscaping or development. It can also be retrofit into existing spaces or conventional STP spaces.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800",
    rightTitle: "Space Efficient Design",
    rightDesc:
      "Underground system frees up valuable surface space for better use.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: "easeOut" },
  },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const InfrastructureSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex];

  return (
    <section className="w-full py-14 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
        {/* LEFT */}
        <div>
          <p className="text-xs sm:text-sm text-gray-600 flex items-center gap-2 mb-2 sm:mb-3">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Adaptable Infrastructure
          </p>

          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-3 sm:mb-4">
            Underground. Out of sight. <br />
            <span className="text-green-500">Fit and Forget about it.</span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-lg">
            NaturalSTP is an innovative, biophilic, non-electric wastewater
            treatment system that removes the complexity and recurring headaches
            of conventional STPs.
          </p>

          {/* ACCORDION */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="space-y-3 sm:space-y-4" variants={fadeUp}>
              {items.map((item, index) => {
                const isActive = activeIndex === index;

                return (
                  <div
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`cursor-pointer rounded-xl p-4 sm:p-5 transition ${
                      isActive ? "bg-[#c9d8df]" : "bg-[#d9e5ea]"
                    }`}
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div
                        className={`w-[2px] h-5 sm:h-6 ${
                          isActive ? "bg-green-500" : "bg-black"
                        }`}
                      ></div>

                      <h3 className="font-medium text-gray-900 text-sm sm:text-base md:text-lg">
                        {item.title}
                      </h3>
                    </div>

                    {isActive && (
                      <p className="text-gray-600 mt-2 sm:mt-3 text-xs sm:text-sm md:text-base leading-relaxed pl-4 sm:pl-5">
                        {item.content}
                      </p>
                    )}
                  </div>
                );
              })}
            </motion.div>

            {/* BUTTON */}
            <motion.button
              variants={fadeUp}
              className="mt-6 sm:mt-8 md:mt-10 w-full sm:w-auto bg-green-500 hover:bg-green-600 transition text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium"
            >
              Request a Technical Consultation
            </motion.button>
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          className="flex items-center justify-center mt-8 md:mt-0"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl border border-gray-200 p-3 sm:p-4 shadow-sm w-full max-w-md">
            <Image
              key={activeIndex}
              src={activeItem.image}
              alt="Infrastructure"
              width={300}
              height={500}
              className="rounded-lg object-cover w-full h-[220px] sm:h-[280px] md:h-[320px]"
            />

            <div className="mt-3 sm:mt-4 flex items-start gap-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></span>
              <div>
                <h4 className="text-blue-600 text-sm sm:text-base font-medium">
                  {activeItem.rightTitle}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600">
                  {activeItem.rightDesc}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
