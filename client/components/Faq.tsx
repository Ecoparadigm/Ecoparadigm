"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Why Ecoparadigm?",
    answer:
      "Ecoparadigm is a National Award-winning Environmental Engineering consultancy with over 20 years of expertise. We provide high-impact, sustainable solutions for wastewater treatment, solid waste management, and climate change mitigation. Our strategy first approach ensures that every project is not only environmentally sound but also economically viable, helping clients save on operational costs while meeting 100% of regulatory standards.",
  },
  {
    question: "Do you offer waste water treatment?",
    answer:
      "Yes, Our expertise spans from designing Effluent Treatment Plants (ETP) for industries to implementing decentralized Sewage Treatment Plants (STP) for commercial and residential sectors. We focus on turning `waste` into a resource through advanced filtration and biological treatment. We specialize  in NaturalSTP and Zero Liquid Discharge (ZLD) systems. Our NaturalSTP systems reduces OPEX by 90% compared to conventional chemical plants.",
  },
  {
    question: "Who do you serve?",
    answer:
      "We cater to a wide spectrum of Indian and International clients, including real estate developers, industrial manufacturing plants, healthcare facilities, educational institutions, and government bodies. Whether it’s a large-scale residential township requiring a decentralized STP or an industrial unit aiming for Zero Liquid Discharge (ZLD), we provide tailored environmental infrastructure.",
  },
  {
    question: "What is NaturalSTP (DTS)?",
    answer:
      "NaturalSTP™ is a Decentralized Wastewater Treatment System (DTS) that replaces mechanical blowers and chemicals with passive biological filtration. It mimics the earth’s natural processes to treat sewage to 100% reusable standards.Zero Chemicals. Near-Zero Electricity.Unlike traditional STPs that require 24/7 power for aeration, NaturalSTP™ is largely gravity-fed. By eliminating heavy machinery and constant chemical dosing, you slash your monthly operational bills and bypass frequent mechanical repairs.",
  },
  {
    question: "How does NaturalSTP reduce Opex compared to traditional STP's?",
    answer:
      "NaturalSTP significantly lowers Operating Expenditure (OPEX) by eliminating the need for expensive chemical dosing and heavy aerators that consume high amounts of electricity. Because the system is largely self-sustaining and has fewer mechanical parts, it requires 60-80% less maintenance and fewer skilled operators than conventional Activated Sludge Process (ASP) plants.",
  },
  {
    question: "What areas do you currently serve?",
    answer:
      "While our headquarters is based in Bengaluru, we provide comprehensive environmental consulting services across Pan-India. We have successfully delivered 600+ projects in major urban hubs and industrial zones, specializing in diverse topographical and climatic conditions to ensure regional environmental compliance.",
  },
  {
    question: "What are your ESG and Net-Zero services?",
    answer:
      "We provide Carbon Footprint Mapping, Sustainability Audits, and ESG Reporting to help corporations achieve Net-Zero compliance and improve their environmental ratings.",
  },
  {
    question: "Does Ecoparadigm take up turn key projects?",
    answer:
      "Absolutely. We provide end-to-end Turnkey Solutions, handling everything from initial site assessment and environmental design to construction, commissioning, and long-term Operation & Maintenance (O&M). This ensures a single point of accountability and a seamless transition from concept to a fully functional, compliant facility. ",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 py-20 md:py-28 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      <div className="max-w-3xl sm:max-w-4xl md:max-w-5xl mx-auto relative z-10">
        {/* 🔥 TOP */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-xs sm:text-sm font-extrabold tracking-wider text-green-700 uppercase">
              Frequently Asked Questions (FAQ)
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
            What You’re Thinking,{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              We’ve Answered.
            </span>
          </h2>
        </motion.div>

        {/* 🔥 FAQ LIST */}
        <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                key={index}
                className={`border rounded-2xl bg-white overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? "border-green-200 shadow-xl shadow-green-500/5 ring-1 ring-green-500/10" 
                    : "border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300"
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between text-left group"
                >
                  <span className={`text-base sm:text-lg md:text-xl font-bold transition-colors duration-300 ${isOpen ? "text-green-700" : "text-gray-900 group-hover:text-green-600"}`}>
                    {faq.question}
                  </span>

                  {/* Animated Icon */}
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                      isOpen ? "bg-green-100 text-green-600" : "bg-gray-50 text-gray-400 group-hover:bg-green-50 group-hover:text-green-500"
                    }`}
                  >
                    <span className="text-xl sm:text-2xl font-light leading-none">+</span>
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-6 sm:pb-8 text-base sm:text-lg text-gray-600 leading-relaxed font-medium">
                        <div className="w-12 h-1 bg-green-200 rounded-full mb-4"></div>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
