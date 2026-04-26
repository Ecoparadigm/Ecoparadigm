"use client";

import React from "react";
import { motion } from "framer-motion";
import { supabase } from "@/utils/supabase";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05 },
  },
};

const ClientsSection = () => {
  const [logos, setLogos] = React.useState([]);
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
    <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 lg:px-20">
      {/* HEADER */}
      <div className="max-w-5xl mx-auto text-center mb-8 sm:mb-10">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
          Our Clients
        </h1>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-5 sm:mb-6">
          What began in 2006 as a small practice has grown into a trusted
          partner for clients seeking reliable sustainability solutions.
        </p>
      </div>

      {/* LOADING STATE */}
      {loading ? (
        <div className="flex justify-center items-center py-16">
          <div className="w-10 h-10 border-4 border-gray-300 border-t-gray-900 rounded-full animate-spin"></div>
        </div>
      ) : (
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
        >
          {logos.map((logo) => (
            <motion.div
              key={logo.id}
              variants={fadeUp}
              className="flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt="client logo"
                className="object-contain w-[100px] md:w-[120px] h-auto"
              />
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default ClientsSection;
