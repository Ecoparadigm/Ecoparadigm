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
    <section className="py-14 sm:py-14 md:py-18 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 overflow-hidden bg-[#062f2f]">
      {/* Heading */}
      <div className="flex items-center gap-2 mb-6 sm:mb-8 md:mb-10">
        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-500 rounded-full"></div>
        <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-200">
          Our Trusted Supporters
        </p>
      </div>

      {/* LOADING */}
      {loading ? (
        <div className="flex justify-center items-center py-10">
          <div className="w-8 h-8 border-4 border-gray-300 border-t-white rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="relative w-full overflow-hidden mask-fade">
          <div className="flex gap-10 sm:gap-14 md:gap-20 lg:gap-24 animate-marquee hover:[animation-play-state:paused]">
            {/* Duplicate for infinite loop */}
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[90px] sm:min-w-[110px] md:min-w-[120px]"
              >
                <img
                  src={logo}
                  alt="supporter"
                  className="object-contain w-[80px] sm:w-[100px] md:w-[120px] h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
