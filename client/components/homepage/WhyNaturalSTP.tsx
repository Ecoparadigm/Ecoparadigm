"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhyNaturalSTP() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 bg-white relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        
        {/* Left side text */}
        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-green-600 uppercase mb-4">Why NaturalSTP?</h2>
            <h3 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-6">
              Underground. <br />
              Out of sight. <br />
              <span className="text-gray-400">Built for hasslefree performance.</span>
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              NaturalSTP is our innovative biophillic eco friendly treatment product, designed to treat sewage beyond to PCB Class norms with no power, no chemicals, and no moving parts. It sits invisibly under your driveway, courtyard, or parking lot, and runs quietly as a futureproofed solution.
            </p>

            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-8">
              <p className="font-bold text-gray-900 mb-6">Zero chemicals. Zero energy. Zero smell. Net Zero by design.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-black text-green-600 mb-1">95%</div>
                  <div className="text-sm text-gray-600">Lower OPEX compared to other STP's</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-green-600 mb-1">100%</div>
                  <div className="text-sm text-gray-600">PCB Compliant</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-green-600 mb-1">&lt;10 <span className="text-xl">mg/L</span></div>
                  <div className="text-sm text-gray-600">Future-proofed. Today's discharge meets tomorrow's norms.</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right side image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-1/2 relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
        >
          <Image 
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" 
            alt="NaturalSTP Installation" 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-green-900/10" />
        </motion.div>

      </div>
    </section>
  );
}
