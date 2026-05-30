"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "End-to-end support",
    desc: "Clear answers from people who understand your context, and your priorities. Complete lifecycle support from concept to continuous performance, with minimal intervention."
  },
  {
    title: "Zero compromise on standards",
    desc: "CPCB Class A. BOD <10 mg/L. COD <50 mg/L. Every site. Every day."
  },
  {
    title: "Scalable foundation",
    desc: "Built to handle projects of any scale optimizing cost, time, and long-term performance."
  },
  {
    title: "Trusted by Global Leaders",
    desc: "Preferred by Governments, Corporates, Institutes and communities who value reliability, transparency and long term partnerships."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 bg-gradient-to-b from-[#031c1c] to-[#062f2f] text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        <div>
          <h2 className="text-4xl sm:text-5xl font-black mb-6 tracking-tight">Why choose Us?</h2>
          <p className="text-xl text-gray-300 font-medium mb-12">
            Why Global Leaders and organizations choose Ecoparadigm.
          </p>
          
          <div className="space-y-10">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="mt-1">
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">{reason.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{reason.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative">
          {/* Subtle Glow */}
          <div className="absolute inset-0 bg-green-500/20 blur-[100px] rounded-full pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 border border-white/10 p-8 sm:p-12 rounded-3xl backdrop-blur-xl relative z-10"
          >
            <div className="w-full h-[400px] rounded-2xl bg-gradient-to-tr from-green-900/40 to-transparent flex items-center justify-center border border-white/5">
               {/* Placeholder for "Solar illustration" mentioned in the prompt */}
               <div className="text-center">
                 <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                   <div className="w-12 h-12 bg-green-400 rounded-full animate-pulse" />
                 </div>
                 <p className="text-green-300 font-semibold tracking-widest uppercase text-sm">Solar & Green Tech</p>
               </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
