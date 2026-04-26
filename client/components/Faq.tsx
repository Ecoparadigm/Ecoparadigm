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
    <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 py-14 sm:py-16 md:py-20">
      <div className="max-w-3xl sm:max-w-4xl md:max-w-5xl mx-auto">
        {/* 🔥 TOP */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14">
          <p className="text-md text-gray-500 mb-2">
            Frequently Asked Questions (FAQ)
          </p>

          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-[-0.02em]">
            What You’re Thinking, We’ve Answered.
          </h2>
        </div>

        {/* 🔥 FAQ LIST */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-xl bg-white hover:shadow-sm transition"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left"
                >
                  <span className="text-sm sm:text-base md:text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>

                  {/* Animated Icon */}
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-xl text-gray-400"
                  >
                    +
                  </motion.span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-sm sm:text-base text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
