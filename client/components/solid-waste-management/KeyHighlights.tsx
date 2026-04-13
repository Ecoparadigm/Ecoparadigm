// "use client";

// import HighlightCard from "./HighlightCard";

// export default function KeyHighlights() {
//   return (
//     <section className="w-full bg-white py-10 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-20 xl:px-24 2xl:px-32">
//       <div className="max-w-7xl mx-auto ">
//         {/* Title */}
//         <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold text-blue-900 mb-8 md:mb-12">
//           Key Highlights
//         </h2>

//         {/* Cards */}
//         <div className="flex flex-col gap-8 md:gap-10">
//           {highlights.map((item, index) => (
//             <HighlightCard key={index} {...item} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import HighlightCard from "./HighlightCard";

const highlights = [
  {
    title: "Energy and Resource Recovery",
    description:
      "The foundational objective is to minimize waste generation at the source. This involves sophisticated waste stream auditing, lifecycle assessments, and process re-engineering to identify opportunities for material efficiency and input substitution.",
    image:
      "https://images.unsplash.com/photo-1762805544291-cb128cf5ec80?q=80&w=827&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    reverse: false,
  },
  {
    title: "CHTSDF for Goa State",
    description:
      "Ecoparadigm has been involved in the concept to commissioning of the Hazardous Waste Treatment, Storage and Disposal Facility of capacity Landfill 25,000TPA and incineration 3,000 Ton per annum.",
    image:
      "https://images.unsplash.com/photo-1695556747879-f4552b46fdbc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    reverse: true,
  },
  {
    title: "Hazardous Waste Landfill Project, Dabbaspete, Bengaluru",
    description:
      "Ecoparadigm has been involved in the concept to commissioning of the Hazardous Waste Treatment, Storage and Disposal Facility of capacity Landfill 25,000TPA and incineration 3,000 Ton per annum.",
    image:
      "https://plus.unsplash.com/premium_photo-1663076457597-41d96c7bbafd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    reverse: false,
  },
  {
    title: "Ecoparadigm’s MSW decision Support Software tool - SWAPT",
    description:
      "The Solid Waste Appropriate Technologies (SWAPT) tool aims to offer technical and professional resources for assessing various waste treatment options in India. This includes evaluating the economic, environmental, climatic, and social impacts of these systems.",
    image:
      "https://plus.unsplash.com/premium_photo-1663126486036-c09bf2a12811?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    reverse: true,
  },
];

export default function KeyHighlights() {
  return (
    <section className="w-full bg-white py-10 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-20 xl:px-24 2xl:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-center text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-900 mb-8 md:mb-12">
          Key Highlights
        </h2>

        {/* Cards */}
        <div className="flex flex-col gap-8 md:gap-10">
          {highlights.map((item, index) => (
            <HighlightCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
