"use client";

import React from "react";
import { supabase } from "@/utils/supabase";

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
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 overflow-hidden bg-gradient-to-b from-[#031c1c] to-[#062f2f] relative border-t border-white/5 border-b border-white/5">
      {/* Subtle Glow */}
      <div className="absolute inset-0 bg-radial-[at_top] from-green-500/5 via-transparent pointer-events-none" />

      {/* Heading */}
      <div className="flex flex-col items-center justify-center text-center mb-10 sm:mb-12 md:mb-16 relative z-10 max-w-2xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-xs sm:text-sm font-extrabold tracking-wider text-green-400 uppercase">
            Our Ecosystem
          </span>
        </div>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 font-medium leading-relaxed">
          Trusted globally by State Governments, Fortune 500 companies, and <span className="text-white font-bold">500+ clients</span> across 23 Indian states and 12 countries.
        </p>
      </div>

      {/* LOADING */}
      {loading ? (
        <div className="flex justify-center py-10">
          <div className="w-10 h-10 border-4 border-white/10 border-t-green-500 rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="relative w-full overflow-hidden mask-fade">
          <div className="flex gap-12 sm:gap-16 md:gap-20 lg:gap-24 animate-marquee hover:[animation-play-state:paused] items-center">
            {/* Duplicate for infinite loop */}
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[100px] sm:min-w-[120px] md:min-w-[140px] opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <img
                  src={logo}
                  alt="supporter"
                  className="object-contain w-[90px] sm:w-[110px] md:w-[130px] h-auto filter grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
