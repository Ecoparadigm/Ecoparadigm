"use client";

import React from "react";
import { motion } from "framer-motion";
import { supabase } from "@/utils/supabase";

/* 🔹 MARQUEE ROW WITH INTERACTIVE GLASS LOGOS & GLOW EFFECTS */
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

  const midpoint = Math.ceil(logos.length / 2);
  const logosRow1 = logos.slice(0, midpoint);
  const logosRow2 = logos.slice(midpoint);

  return (
    <section className="w-full py-20 sm:py-24 bg-gradient-to-b from-[#062f2f] to-[#031c1c] border-t border-white/5 relative overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute inset-0 bg-radial-[at_top] from-[#0f4d4d]/15 via-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center relative z-10 px-4 sm:px-6">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-bold tracking-wider text-green-400 uppercase">
              Proven Excellence
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 text-white tracking-tight">
            <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
              6x National Award-Winning
            </span>{" "}
            Technology
          </h2>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Pioneering natural wastewater systems in India, backed by multi-sector experience delivering reliable treatment solutions.
          </p>
        </motion.div>

        {/* LOADING / MARQUEE SHOWCASE */}
        {loading ? (
          <div className="flex justify-center py-16">
            <div className="w-10 h-10 border-4 border-white/10 border-t-green-500 rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="space-y-2">
            {/* ROW 1 */}
            {logosRow1.length > 0 && <MarqueeRow logos={logosRow1} direction="left" />}

            {/* ROW 2 */}
            {logosRow2.length > 0 && <MarqueeRow logos={logosRow2} direction="right" />}
          </div>
        )}
      </div>
    </section>
  );
};

export default AwardsSection;
