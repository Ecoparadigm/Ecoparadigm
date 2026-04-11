// "use client";

// import ProjectCard from "@/components/projects/ProjectCard";
// import WhatWeDo from "@/components/projects/WhatWeDo";
// import HeroSection from "@/components/projects/HeroSection";

// export default function ProjectsPage() {
//   return (
//     <div>
//       <section className="px-8 md:px-20 py-20 bg-gray-50">
//         {/* 🔹 TOP CONTENT */}
//         <div className="grid md:grid-cols-2 gap-10 items-center">
//           {/* LEFT */}
//           <div>
//             <div className="flex items-center gap-2 mb-4">
//               <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
//               <p className="text-lg">Proof Of Impact</p>
//             </div>

//             <h1 className="text-2xl md:text-[2.5rem] font-bold leading-tight">
//               Projects that <span className="text-green-500">changed</span>
//               <br />
//               the outcome
//             </h1>
//           </div>

//           {/* RIGHT */}
//           <div className="flex items-center justify-end">
//             <p className="text-gray-600 text-base leading-relaxed max-w-sm">
//               From reviving a dying lake to treating disease filled hospital
//               wastewater, our work is measurable, documented, and award winning.
//             </p>
//           </div>
//         </div>

//         {/* 🔥 IMAGE CARDS SECTION */}
//         <div className="mt-20 flex flex-col gap-6">
//           {/* ROW 1 → 4:2 */}
//           <div className="grid md:grid-cols-6 gap-6">
//             <ProjectCard
//               title="Waste Water Treatment"
//               desc="Sustainable and efficient treatment solutions"
//               img="https://plus.unsplash.com/premium_photo-1682144318933-fcab743fb527?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               span="col-span-4"
//             />

//             <ProjectCard
//               title="Lake Restoration"
//               desc="Bringing ecosystems back to life"
//               img="https://plus.unsplash.com/premium_photo-1661825536186-19606cd9a0f1?q=80&w=419&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               span="col-span-2"
//             />
//           </div>

//           {/* ROW 2 → 2:4 */}
//           <div className="grid md:grid-cols-6 gap-6">
//             <ProjectCard
//               title="Energy Systems"
//               desc="Innovative energy solutions"
//               img="https://plus.unsplash.com/premium_photo-1661962514374-442d58a10c91?q=80&w=846&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               span="col-span-2"
//             />

//             <ProjectCard
//               title="Solid Waste Management"
//               desc="Efficient waste handling"
//               img="https://i.ytimg.com/vi/LWq-aLhbil4/maxresdefault.jpg"
//               span="col-span-4"
//             />
//           </div>

//           {/* ROW 3 → 4:2 */}
//           <div className="grid md:grid-cols-6 gap-6">
//             <ProjectCard
//               title="Climate Solutions"
//               desc="Driving sustainability"
//               img="https://images.unsplash.com/photo-1690730685007-c253cb2a5f44?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               span="col-span-4"
//             />

//             <ProjectCard
//               title="Water Recycling"
//               desc="Reuse and sustainability"
//               img="https://images.unsplash.com/photo-1608441877519-7aa279de3e7d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               span="col-span-2"
//             />
//           </div>

//           {/* ROW 4 → 2:4 */}
//           <div className="grid md:grid-cols-6 gap-6">
//             <ProjectCard
//               title="Urban Water"
//               desc="Smart city water systems"
//               img="https://plus.unsplash.com/premium_photo-1679862571153-04959fa9411d?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               span="col-span-2"
//             />

//             <ProjectCard
//               title="Green Energy"
//               desc="Future-ready solutions"
//               img="https://i.ytimg.com/vi/LWq-aLhbil4/maxresdefault.jpg"
//               span="col-span-4"
//             />
//           </div>
//         </div>
//         <WhatWeDo />
//       </section>
//       <HeroSection />
//     </div>
//   );
// }

"use client";

import ProjectCard from "@/components/projects/ProjectCard";
import WhatWeDo from "@/components/projects/WhatWeDo";
import HeroSection from "@/components/projects/HeroSection";

export default function ProjectsPage() {
  return (
    <div>
      <section className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 py-14 sm:py-16 md:py-20 bg-gray-50">
        {/* 🔹 TOP CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          {/* LEFT */}
          <div>
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-500 rounded-full"></div>
              <p className="text-sm sm:text-base md:text-lg">Proof Of Impact</p>
            </div>

            <h1 className="text-xl sm:text-2xl md:text-[2.5rem] lg:text-[3rem] font-bold leading-tight">
              Projects that <span className="text-green-500">changed</span>
              <br className="hidden sm:block" />
              the outcome
            </h1>
          </div>

          {/* RIGHT */}
          <div className="flex items-start md:items-center justify-start md:justify-end">
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-sm">
              From reviving a dying lake to treating disease filled hospital
              wastewater, our work is measurable, documented, and award winning.
            </p>
          </div>
        </div>

        {/* 🔥 IMAGE CARDS SECTION */}
        <div className="mt-12 sm:mt-16 md:mt-20 flex flex-col gap-5 sm:gap-6">
          {/* ROW 1 → 4:2 */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-5 sm:gap-6">
            <ProjectCard
              title="Waste Water Treatment"
              desc="Sustainable and efficient treatment solutions"
              img="https://plus.unsplash.com/premium_photo-1682144318933-fcab743fb527?q=80&w=871&auto=format&fit=crop"
              span="md:col-span-4"
            />

            <ProjectCard
              title="Lake Restoration"
              desc="Bringing ecosystems back to life"
              img="https://plus.unsplash.com/premium_photo-1661825536186-19606cd9a0f1?q=80&w=419&auto=format&fit=crop"
              span="md:col-span-2"
            />
          </div>

          {/* ROW 2 → 2:4 */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-5 sm:gap-6">
            <ProjectCard
              title="Energy Systems"
              desc="Innovative energy solutions"
              img="https://plus.unsplash.com/premium_photo-1661962514374-442d58a10c91?q=80&w=846&auto=format&fit=crop"
              span="md:col-span-2"
            />

            <ProjectCard
              title="Solid Waste Management"
              desc="Efficient waste handling"
              img="https://i.ytimg.com/vi/LWq-aLhbil4/maxresdefault.jpg"
              span="md:col-span-4"
            />
          </div>

          {/* ROW 3 → 4:2 */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-5 sm:gap-6">
            <ProjectCard
              title="Climate Solutions"
              desc="Driving sustainability"
              img="https://images.unsplash.com/photo-1690730685007-c253cb2a5f44?q=80&w=774&auto=format&fit=crop"
              span="md:col-span-4"
            />

            <ProjectCard
              title="Water Recycling"
              desc="Reuse and sustainability"
              img="https://images.unsplash.com/photo-1608441877519-7aa279de3e7d?q=80&w=387&auto=format&fit=crop"
              span="md:col-span-2"
            />
          </div>

          {/* ROW 4 → 2:4 */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-5 sm:gap-6">
            <ProjectCard
              title="Urban Water"
              desc="Smart city water systems"
              img="https://plus.unsplash.com/premium_photo-1679862571153-04959fa9411d?q=80&w=869&auto=format&fit=crop"
              span="md:col-span-2"
            />

            <ProjectCard
              title="Green Energy"
              desc="Future-ready solutions"
              img="https://i.ytimg.com/vi/LWq-aLhbil4/maxresdefault.jpg"
              span="md:col-span-4"
            />
          </div>
        </div>

        <div className="mt-12 sm:mt-16">
          <WhatWeDo />
        </div>
      </section>

      <HeroSection />
    </div>
  );
}
