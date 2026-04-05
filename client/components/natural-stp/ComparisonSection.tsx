// "use client";

// import { CheckCircle, XCircle } from "lucide-react";

// const leftPoints = [
//   "Electricity required & High OPEX",
//   "2-shift skilled STP operator",
//   "Motors, blowers and frequent oil change required",
//   "Dedicated STP space and operator room required",
//   "STP life just 3–5 years. Need to keep buying spares.",
//   "24x7 maintenance required",
//   "Bad odour and Noisy",
// ];

// const rightPoints = [
//   "Zero power, runs on gravity flow & Almost NIL OPEX",
//   "No operator",
//   "No motors and blowers; hence no oil change required",
//   "Operator room not required, saves on space",
//   "Lifetime product",
//   "Maintenance-free",
//   "Completely odour-free and Silent",
// ];

// const ComparisonSection: React.FC = () => {
//   return (
//     <section className="w-full bg-[#042f2e] py-24 px-6 md:px-16 text-white">
//       <div className="max-w-7xl mx-auto">
        
//         {/* HEADER */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-4">
//             Why Many Have Already Made the Shift to{" "}
//             <span className="text-cyan-400">NaturalSTP™</span>
//           </h2>

//           <p className="text-gray-300 text-sm md:text-lg max-w-lg mx-auto">
//             1KLD &gt; 60KLD &gt; 100KLD &gt; 1MLD — Tailored to any capacity.
//             Designed so you never spend an extra penny.
//           </p>
//         </div>

//         {/* LABELS */}
//         <div className="grid md:grid-cols-2 gap-8 mb-6">
//           <p className="text-gray-300 font-medium text-2xl flex justify-center">
//             Others Conventional Systems
//           </p>
//           <p className="text-cyan-400 font-medium text-2xl flex justify-center">
//             NaturalSTP
//           </p>
//         </div>

//         {/* CARDS */}
//         <div className="grid md:grid-cols-2 gap-8">
          
//           {/* LEFT CARD */}
//           <div className="border-4 border-[#1f4d4d] rounded-2xl p-8 bg-[#063737]">
//             <ul className="space-y-5">
//               {leftPoints.map((point, index) => (
//                 <li key={index} className="flex items-start gap-3">
//                   <XCircle className="w-5 h-5 text-gray-400 mt-1" />
//                   <span className="text-gray-200 text-lg">{point}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* RIGHT CARD */}
//           <div className="border-4 border-[#1f4d4d] rounded-2xl p-8 bg-gradient-to-br from-[#0b4d4d] to-[#0e6b5f]">
//             <ul className="space-y-5">
//               {rightPoints.map((point, index) => (
//                 <li key={index} className="flex items-start gap-3">
//                   <CheckCircle className="w-5 h-5 text-green-400 mt-1" />
//                   <span className="text-gray-100 text-lg">{point}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default ComparisonSection;

"use client";

import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

const leftPoints = [
  "Electricity required & High OPEX",
  "2-shift skilled STP operator",
  "Motors, blowers and frequent oil change required",
  "Dedicated STP space and operator room required",
  "STP life just 3–5 years. Need to keep buying spares.",
  "24x7 maintenance required",
  "Bad odour and Noisy",
];

const rightPoints = [
  "Zero power, runs on gravity flow & Almost NIL OPEX",
  "No operator",
  "No motors and blowers; hence no oil change required",
  "Operator room not required, saves on space",
  "Lifetime product",
  "Maintenance-free",
  "Completely odour-free and Silent",
];

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ComparisonSection: React.FC = () => {
  return (
    <section className="w-full bg-[#042f2e] py-24 px-6 md:px-16 text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-4">
            Why Many Have Already Made the Shift to{" "}
            <span className="text-cyan-400">NaturalSTP™</span>
          </h2>

          <p className="text-gray-300 text-sm md:text-lg max-w-lg mx-auto">
            1KLD &gt; 60KLD &gt; 100KLD &gt; 1MLD — Tailored to any capacity.
            Designed so you never spend an extra penny.
          </p>
        </motion.div>

        {/* LABELS */}
        <div className="grid md:grid-cols-2 gap-8 mb-6">
          <p className="text-gray-300 font-medium text-2xl flex justify-center">
            Others Conventional Systems
          </p>
          <p className="text-cyan-400 font-medium text-2xl flex justify-center">
            NaturalSTP
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="border-4 border-[#1f4d4d] rounded-2xl p-8 bg-[#063737]"
          >
            <motion.ul
              variants={containerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-5"
            >
              {leftPoints.map((point, index) => (
                <motion.li
                  key={index}
                  variants={itemVariant}
                  className="flex items-start gap-3"
                >
                  <XCircle className="w-5 h-5 text-gray-400 mt-1" />
                  <span className="text-gray-200 text-lg">{point}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="border-4 border-[#1f4d4d] rounded-2xl p-8 bg-gradient-to-br from-[#0b4d4d] to-[#0e6b5f]"
          >
            <motion.ul
              variants={containerVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-5"
            >
              {rightPoints.map((point, index) => (
                <motion.li
                  key={index}
                  variants={itemVariant}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1" />
                  <span className="text-gray-100 text-lg">{point}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ComparisonSection;