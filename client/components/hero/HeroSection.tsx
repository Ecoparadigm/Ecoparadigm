// "use client"

// import HeroText from "./HeroText"
// import ServiceGrid from "./ServiceGrid"

// export default function HeroSection() {
//   return (
//     <section className="px-6 md:px-16 py-10 grid md:grid-cols-2 gap-10 items-start">

//       <HeroText />
//       <ServiceGrid />

//     </section>
//   )
// }
"use client";

import HeroText from "./HeroText";
import ServiceGrid from "./ServiceGrid";

export default function HeroSection() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-10 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-start">
        <HeroText />
        <ServiceGrid />
      </div>
    </section>
  );
}