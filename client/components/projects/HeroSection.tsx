// "use client";

// import Image from "next/image";

// export default function HeroSection() {
//   return (
//     <section className="relative w-full h-[90vh] flex items-center justify-center text-center text-white">

//       {/* Background Image */}
//       <Image
//         src="https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // put your image in public folder
//         alt="Hero Background"
//         fill
//         priority
//         className="object-cover"
//       />

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/50" />

//       {/* Content */}
//       <div className="relative z-10 max-w-3xl px-6">

//         {/* Heading */}
//         <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
//           <span className="text-white">Full-Spectrum</span>
//           <br />
//           <span className="text-green-300">
//             Environmental Solutions
//           </span>
//         </h1>

//         {/* Description */}
//         <p className="text-gray-200 text-base md:text-lg mb-6 leading-relaxed">
//           From DTS installation to ESG strategy, climate consulting to solid waste,
//           we handle every dimension of your environmental compliance and sustainability journey.
//         </p>

//         {/* Subtext */}
//         <p className="text-gray-300 mb-6">
//           Get a Preliminary Audit of your challenge.
//         </p>

//         {/* Button */}
//         <button className="bg-green-300 text-black font-medium px-6 py-3 rounded-lg hover:bg-green-400 transition">
//           Talk to Our Expert
//         </button>

//       </div>

//     </section>
//   );
// }

"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[70vh] sm:min-h-[80vh] md:h-[90vh] flex items-center justify-center text-center text-white">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=870&auto=format&fit=crop"
        alt="Hero Background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-4 sm:px-6 md:px-8">
        {/* Heading */}
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-semibold leading-tight mb-4 sm:mb-6">
          <span className="text-white">Full-Spectrum</span>
          <br className="hidden sm:block" />
          <span className="text-green-300">Environmental Solutions</span>
        </h1>

        {/* Description */}
        <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed">
          From DTS installation to ESG strategy, climate consulting to solid
          waste, we handle every dimension of your environmental compliance and
          sustainability journey.
        </p>

        {/* Subtext */}
        <p className="text-gray-300 text-sm sm:text-base mb-5 sm:mb-6">
          Get a Preliminary Audit of your challenge.
        </p>

        {/* Button */}
        <button className="w-full sm:w-auto bg-green-300 text-black font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-green-400 transition">
          Talk to Our Expert
        </button>
      </div>
    </section>
  );
}
