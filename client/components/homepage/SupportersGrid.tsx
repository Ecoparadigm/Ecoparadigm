"use client";

import React from "react";
import { motion } from "framer-motion";
import { supabase } from "@/utils/supabase";

export default function SupportersGrid() {
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

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] },
    },
  };

  // pagination logic
  const [page, setPage] = React.useState(0);
  const itemsPerPage = 10;
  const start = page * itemsPerPage;
  const currentLogos = logos.slice(start, start + itemsPerPage);
  const totalPages = Math.ceil(logos.length / itemsPerPage);

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 overflow-hidden bg-gradient-to-b from-[#062f2f] to-[#031c1c] border-t border-white/5 relative">
      <div className="absolute inset-0 bg-radial-[at_bottom] from-[#0f4d4d]/10 via-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex items-center gap-2 mb-10 md:mb-12">
          <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
          <h2 className="text-base sm:text-lg md:text-xl font-semibold tracking-wide text-gray-200 uppercase">
            Trusted by 600+ Leading Corporates & Municipalities
          </h2>
        </div>

        {loading ? (
          <div className="flex justify-center py-16">
            <div className="w-10 h-10 border-4 border-white/10 border-t-green-500 rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            <motion.div
              key={page}
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-8 sm:gap-y-12 gap-x-6 sm:gap-x-8 items-center justify-items-center min-h-[160px]"
            >
              {currentLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  variants={itemVariant}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center justify-center bg-white/5 backdrop-blur-md border border-white/5 p-4 rounded-xl w-full h-[80px] sm:h-[90px] transition-all duration-300 hover:bg-white/10 hover:border-white/10 hover:shadow-xl hover:shadow-green-500/5 group"
                >
                  <img
                    src={logo}
                    alt="client supporter logo"
                    className="object-contain max-h-full max-w-full w-auto filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>

            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-6 mt-12">
                <button
                  onClick={() => setPage((p) => Math.max(p - 1, 0))}
                  disabled={page === 0}
                  className="px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 disabled:border-white/5 text-white text-sm font-semibold rounded-full transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none hover:scale-[1.03]"
                >
                  ← Previous
                </button>
                <span className="text-sm font-medium text-gray-400">
                  Page <strong className="text-white">{page + 1}</strong> of {totalPages}
                </span>
                <button
                  onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
                  disabled={page === totalPages - 1}
                  className="px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 disabled:border-white/5 text-white text-sm font-semibold rounded-full transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none hover:scale-[1.03]"
                >
                  Next →
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
