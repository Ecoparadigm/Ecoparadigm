// "use client";

// import Image from "next/image";

// export default function FeaturesSection() {
//   return (
//     <section className="py-20 px-20">
//       <h1 className="text-4xl text-center text-blue-600 pb-20">Tailored Solutions to revolutionise the way you harvest rain</h1>
//       <div className="max-w-4xl mx-auto space-y-20">
//         {features.map((item, index) => {
//           const isReverse = index % 2 !== 0;

//           return (
//             <div
//               key={index}
//               className={`flex flex-col md:flex-row items-center gap-10 ${
//                 isReverse ? "md:flex-row-reverse" : ""
//               }`}
//             >
//               {/* TEXT */}
//               <div className="flex-1">
//                 <h2 className="text-2xl md:text-3xl font-bold text-black">
//                   {item.title}
//                 </h2>

//                 <p className="mt-4 text-gray-600 text-lg">{item.description}</p>

//                 {/* Bullet Points (only if exists) */}
//                 {item.points && (
//                   <ul className="mt-4 text-lg space-y-2 text-gray-700 list-disc list-inside">
//                     {item.points.map((point, i) => (
//                       <li key={i}>{point}</li>
//                     ))}
//                   </ul>
//                 )}

//                 {/* Button (only if exists) */}
//                 {item.button && (
//                   <button className="mt-6 px-5 py-3 bg-green-500 text-white text-lg rounded-lg hover:bg-green-600 transition">
//                     {item.button}
//                   </button>
//                 )}
//               </div>

//               {/* IMAGE */}
//               <div className="flex-1">
//                 <div className="relative w-full h-[250px] md:h-[450px] rounded-2xl overflow-hidden">
//                   <Image
//                     src={item.image}
//                     alt={item.title}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";

const features = [
  {
    title: "Make your site self-sufficient and water-smart",
    description:
      "Tailored rainwater harvesting systems for your site, budget, and water goals delivering maximum capture, clean storage, and long-term performance.",
    points: [
      "Reduce dependence on tanker water",
      "Lower water bills year",
      "Prevent flooding and water stagnation",
      "Recharge groundwater naturally",
      "Improve site sustainability rating",
    ],
    button: "Get a Free Site Assessment",
    image:
      "https://plus.unsplash.com/premium_photo-1661825536186-19606cd9a0f1?q=80&w=419&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title:
      "Prevent failures, Data-backed groundwater insights for reliable planning",
    description:
      "See your underground water before you invest in it. Whether you're tackling water scarcity or reducing utility costs, Ecoparadigm delivers smart rainwater management solutions tailored to your site.",
    image:
      "https://plus.unsplash.com/premium_photo-1723983555317-4431f5fcc867?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Providing custom solutions tailored to your needs.",
    description:
      "We offer end-to-end rainwater management systems that include:",
    points: [
      "Rooftop collection networks",
      "Multi-stage filtration units",
      "Recharge wells / percolation pits",
      "Underground storage tanks",
      "Overflow and flood-control pathways",
    ],
    button: "Get a Custom Proposal Today",
    image:
      "https://images.unsplash.com/photo-1632898631773-cf6299c04fa6?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "What makes Us Different",
    points: [
      "Gravity-based wherever possible",
      "No gimmicky filters",
      "Easy access for cleaning",
      "Designed for decades of performance",
      "Long-term operation & maintenance support",
    ],
    image:
      "https://images.unsplash.com/photo-1720942975041-c74637bacef8?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32">
      {/* 🔥 Heading */}
      <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-center text-blue-600 mb-10 sm:mb-16 md:mb-20 leading-tight">
        Tailored Solutions to revolutionise the way you harvest rain
      </h1>

      <div className="max-w-6xl lg:max-w-7xl mx-auto space-y-12 sm:space-y-16 md:space-y-20">
        {features.map((item, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12 ${
                isReverse ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* 🔹 TEXT */}
              <div className="flex-1">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black leading-snug">
                  {item.title}
                </h2>

                {item.description && (
                  <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                    {item.description}
                  </p>
                )}

                {/* Points */}
                {item.points && (
                  <ul className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg space-y-1.5 sm:space-y-2 text-gray-700 list-disc list-inside">
                    {item.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}

                {/* Button */}
                {item.button && (
                  <button className="mt-5 sm:mt-6 w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-green-500 text-white text-sm sm:text-base md:text-lg rounded-lg hover:bg-green-600 transition">
                    {item.button}
                  </button>
                )}
              </div>

              {/* 🔹 IMAGE */}
              <div className="flex-1 w-full">
                <div className="relative w-full h-[200px] sm:h-[250px] md:h-[320px] lg:h-[400px] rounded-2xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
