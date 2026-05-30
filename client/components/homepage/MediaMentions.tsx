"use client";

import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";

export default function MediaMentions() {
  return (
    <section className="py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 bg-[#062f2f] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Newspaper className="w-6 h-6 text-green-400" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight">
            Featured in leading media for our innovative technology and impact
          </h2>
        </motion.div>

        {/* Media Logos Grid (Placeholders for now) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70"
        >
          {/* Replace these with actual logos later */}
          <div className="text-xl md:text-2xl font-serif font-bold uppercase tracking-widest text-gray-400">Forbes</div>
          <div className="text-xl md:text-2xl font-serif font-bold uppercase tracking-widest text-gray-400">The Hindu</div>
          <div className="text-xl md:text-2xl font-serif font-bold uppercase tracking-widest text-gray-400">Economic Times</div>
          <div className="text-xl md:text-2xl font-serif font-bold uppercase tracking-widest text-gray-400">Mint</div>
        </motion.div>

      </div>
    </section>
  );
}
