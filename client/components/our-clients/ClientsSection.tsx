"use client";

import React from "react";
import { motion } from "framer-motion";
import { supabase } from "@/utils/supabase";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const ClientsSection = () => {
  const [logos, setLogos] = React.useState<{id: number, src: string}[]>([]);
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

      const urls = data.map((file, i) => {
        const { data: publicUrlData } = supabase.storage
          .from("client-logos")
          .getPublicUrl(file.name);

        return {
          id: i,
          src: publicUrlData.publicUrl,
        };
      });

      setLogos(urls);
      setLoading(false);
    };

    fetchLogos();
  }, []);

  return (
    <section className="py-20 sm:py-24 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 bg-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* HEADER */}
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeUp}
        className="max-w-3xl mx-auto text-center mb-16 sm:mb-20 relative z-10"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-green-50 border border-green-100 text-green-700 font-semibold text-sm mb-4">
          Trusted Partners
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight tracking-tight mb-6">
          Our Clients
        </h1>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl font-medium leading-relaxed">
          What began in 2006 as a small practice has grown into a trusted
          partner for clients seeking reliable sustainability solutions.
        </p>
      </motion.div>

      {/* LOADING STATE */}
      {loading ? (
        <div className="flex justify-center items-center py-20 relative z-10">
          <div className="w-12 h-12 border-4 border-gray-200 border-t-green-500 rounded-full animate-spin"></div>
        </div>
      ) : (
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 relative z-10"
        >
          {logos.map((logo) => (
            <motion.div
              key={logo.id}
              variants={fadeUp}
              className="group flex items-center justify-center p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-green-500/10 transition-all duration-500 hover:-translate-y-2 cursor-pointer aspect-video"
            >
              <img
                src={logo.src}
                alt="client logo"
                className="object-contain w-full h-full max-h-[60px] md:max-h-[80px] filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default ClientsSection;
