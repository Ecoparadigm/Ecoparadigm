"use client";

import React from "react";
import { supabase } from "@/utils/supabase";
import { motion } from "framer-motion";

const MarqueeRow = ({
  logos,
  direction = "left",
}: {
  logos: string[];
  direction?: "left" | "right";
}) => {
  return (
    <div className="overflow-hidden whitespace-nowrap mask-fade relative py-6">
      <motion.div
        className="flex gap-6 sm:gap-8 md:gap-10 w-max"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 bg-white/5 backdrop-blur-md border border-white/5 p-5 rounded-2xl flex items-center justify-center h-[80px] sm:h-[90px] w-[150px] sm:w-[170px] transition-all duration-500 hover:bg-white/10 hover:border-green-500/30 hover:shadow-[0_0_25px_rgba(34,197,94,0.15)] group cursor-pointer relative overflow-hidden"
          >
            {/* Soft inner glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <img
              src={logo}
              alt="supporter logo"
              className="object-contain max-h-full max-w-full w-auto filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 relative z-10"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function SupportersTicker() {
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

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 relative overflow-hidden bg-gradient-to-b from-[#062f2f] to-[#031c1c] border-t border-white/5">
      {/* Background spotlights */}
      <div className="absolute inset-0 bg-radial-[at_top] from-[#0f4d4d]/15 via-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Heading */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-2 mb-10 sm:mb-12">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-sm font-bold tracking-wider text-green-400 uppercase">
            Our Trusted Supporters
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
          Backed by <span className="text-green-400">Industry Leaders</span>
        </h2>
      </div>

      {/* LOADING */}
      {loading ? (
        <div className="flex justify-center items-center py-10 relative z-10">
          <div className="w-10 h-10 border-4 border-white/10 border-t-green-500 rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="relative z-10 w-full">
          <MarqueeRow logos={logos} direction="left" />
        </div>
      )}
    </section>
  );
}
