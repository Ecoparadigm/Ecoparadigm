// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// const logosRow1 = [
//   "https://images.unsplash.com/photo-1496200186974-4293800e2c20?q=80&w=1032&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1760138270903-d95903188730?q=80&w=870&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1659893982146-b5151a13f1ff?q=80&w=862&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1662052955098-042b46e60c2b?q=80&w=862&auto=format&fit=crop",
//   "https://plus.unsplash.com/premium_photo-1669075651475-5cba57c03b8c?q=80&w=580&auto=format&fit=crop",
//   "https://images.unsplash.com/photo-1496200186974-4293800e2c20?q=80&w=1032&auto=format&fit=crop",
// ];

// const logosRow2 = [...logosRow1];

// /* 🔥 MARQUEE ROW */
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
//         className="flex gap-8 sm:gap-12 md:gap-16"
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
//               className="object-contain w-[80px] sm:w-[100px] md:w-[120px] h-auto"
//             />
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// const AwardsSection: React.FC = () => {
//   return (
//     <section className="w-full py-10 sm:py-12 md:py-16 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28">
//       <div className="max-w-7xl mx-auto text-center">
//         {/* HEADING */}
//         <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-3 sm:mb-4">
//           <span className="text-green-500">6x National Award-winning</span>{" "}
//           <br className="hidden sm:block" />
//           technology and service
//         </h2>

//         {/* SUBTEXT */}
//         <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-md sm:max-w-lg mx-auto mb-10 sm:mb-12 md:mb-16">
//           Pioneering natural wastewater systems in India, backed by multi-sector
//           experience delivering reliable treatment solutions.
//         </p>

//         {/* MARQUEE ROW 1 */}
//         <MarqueeRow logos={logosRow1} direction="left" />

//         {/* MARQUEE ROW 2 */}
//         <div className="mt-6 sm:mt-8 md:mt-10">
//           <MarqueeRow logos={logosRow2} direction="right" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AwardsSection;

"use client";

import React from "react";
import { motion } from "framer-motion";
import { supabase } from "@/utils/supabase";

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
            <img
              src={logo}
              alt="logo"
              className="object-contain w-[80px] sm:w-[100px] md:w-[120px] h-auto"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const AwardsSection: React.FC = () => {
  const [logos, setLogos] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchLogos = async () => {
      const { data, error } = await supabase.storage
        .from("client-logos")
        .list("", { limit: 100 });

      if (error) {
        console.error(error);
        setLoading(false);
        return;
      }

      const urls = data.map((file) => {
        const { data: publicUrlData } = supabase.storage
          .from("client-logos")
          .getPublicUrl(file.name);

        return publicUrlData.publicUrl;
      });

      setLogos(urls);
      setLoading(false);
    };

    fetchLogos();
  }, []);

  // Split logos into 2 rows
  const midpoint = Math.ceil(logos.length / 2);
  const logosRow1 = logos.slice(0, midpoint);
  const logosRow2 = logos.slice(midpoint);

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

        {/* LOADING */}
        {loading ? (
          <div className="flex justify-center py-10">
            <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            {/* ROW 1 */}
            <MarqueeRow logos={logosRow1} direction="left" />

            {/* ROW 2 */}
            <div className="mt-6 sm:mt-8 md:mt-10">
              <MarqueeRow logos={logosRow2} direction="right" />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default AwardsSection;
