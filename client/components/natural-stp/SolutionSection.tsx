// "use client";

// import {
//   ShieldCheck,
//   Download,
//   Zap,
//   BadgeCheck,
//   DollarSign,
//   FlaskConical,
// } from "lucide-react";

// const features = [
//   {
//     title: "ZERO Electricity Cost",
//     description:
//       "Your plant keeps working even during power cuts, with minimal energy expense.",
//     icon: Zap,
//   },
//   {
//     title: "Lower Lifetime Cost, Long-Term Savings",
//     description:
//       "Costs 90% lesser to run than other treatment systems",
//     icon: Download,
//   },
//   {
//     title: "Audited & tested",
//     description:
//       "Tested to meet compliance requirements and proven over 350 installations.",
//     icon: ShieldCheck,
//   },
//   {
//     title: "No Odour. No Complaints",
//     description:
//       "Fully underground system with silent operation and no smell, ensuring zero disturbance.",
//     icon: DollarSign,
//   },
//   {
//     title: "ZERO Maintenance",
//     description:
//       "No Frequent Maintenance or Breakdowns. Desludging required only once every 18–24 months compared to other weekly systems",
//     icon: BadgeCheck,
//   },
//   {
//     title: "No Daily Chemical Dosing",
//     description:
//       "No need to purchase or handle chemicals. Our unique microbes treat wastewater without chemicals",
//     icon: FlaskConical,
//   },
// ];

// const SolutionSection: React.FC = () => {
//   return (
//     <section className="w-full py-24 px-6 md:px-36">
//       <div className="max-w-7xl mx-auto">

//         {/* HEADER */}
//         <div className="mb-8">
//           <p className="text-lg text-black flex items-center gap-2 mb-3">
//             <span className="w-2 h-2 bg-green-500 rounded-full font-bold"></span>
//             The Solution
//           </p>

//           {/* ✅ GRADIENT TEXT */}
//           <h2 className="text-4xl text-blue-600 font-semibold">
//             Natural<span className="text-cyan-400">STP</span>
//           </h2>
//         </div>

//         {/* GRID */}
//         <div className="grid md:grid-cols-3 gap-4">
//           {features.map((feature, index) => {
//             const Icon = feature.icon;

//             return (
//               <div
//                 key={index}
//                 className="bg-[#c9d8df] rounded-2xl px-8 py-4 border border-[#b8c7cf] hover:shadow-md transition duration-300"
//               >
//                 {/* ICON */}
//                 <div className="w-18 h-18 flex items-center justify-center rounded-full border border-black bg-[#eaf1f4] mb-6">
//                   <Icon className="w-6 h-6 text-blue-600" />
//                 </div>

//                 {/* TITLE */}
//                 <h3 className="font-semibold text-2xl text-bold text-black mb-3">
//                   {feature.title}
//                 </h3>

//                 {/* DESCRIPTION */}
//                 <p className="text-sm text-gray-700 leading-relaxed">
//                   {feature.description}
//                 </p>
//               </div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default SolutionSection;

"use client";

import {
  ShieldCheck,
  Download,
  Zap,
  BadgeCheck,
  DollarSign,
  FlaskConical,
} from "lucide-react";

const features = [
  {
    title: "ZERO Electricity Cost",
    description:
      "Your plant keeps working even during power cuts, with minimal energy expense.",
    icon: Zap,
  },
  {
    title: "Lower Lifetime Cost, Long-Term Savings",
    description: "Costs 90% lesser to run than other treatment systems",
    icon: Download,
  },
  {
    title: "Audited & tested",
    description:
      "Tested to meet compliance requirements and proven over 350 installations.",
    icon: ShieldCheck,
  },
  {
    title: "No Odour. No Complaints",
    description:
      "Fully underground system with silent operation and no smell, ensuring zero disturbance.",
    icon: DollarSign,
  },
  {
    title: "ZERO Maintenance",
    description:
      "No Frequent Maintenance or Breakdowns. Desludging required only once every 18–24 months compared to other weekly systems",
    icon: BadgeCheck,
  },
  {
    title: "No Daily Chemical Dosing",
    description:
      "No need to purchase or handle chemicals. Our unique microbes treat wastewater without chemicals",
    icon: FlaskConical,
  },
];

const SolutionSection: React.FC = () => {
  return (
    <section className="w-full py-14 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="mb-6 sm:mb-8">
          <p className="text-sm sm:text-base md:text-lg text-black flex items-center gap-2 mb-2 sm:mb-3">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            The Solution
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
            <span className="text-blue-600">Natural</span>
            <span className="text-cyan-400">STP</span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="bg-[#c9d8df] rounded-2xl px-5 sm:px-6 md:px-8 py-4 sm:py-5 border border-[#b8c7cf] hover:shadow-md transition duration-300"
              >
                {/* ICON */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full border border-black bg-[#eaf1f4] mb-4 sm:mb-5 md:mb-6">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>

                {/* TITLE */}
                <h3 className="font-semibold text-lg sm:text-xl md:text-2xl text-black mb-2 sm:mb-3 leading-snug">
                  {feature.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
