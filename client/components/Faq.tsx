"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Why Ecoparadigm?",
    answer:
      "Ecoparadigm is a National Award-winning Environmental Engineering consultancy with over 20 years of expertise. We provide high-impact, sustainable solutions for wastewater treatment, solid waste management, and climate change mitigation.",
  },
  {
    question: "Do you offer waste water treatment?",
    answer:
      "Yes, we design Effluent Treatment Plants (ETP) and decentralized Sewage Treatment Plants (STP). We specialize in NaturalSTP and Zero Liquid Discharge (ZLD) systems.",
  },
  {
    question: "Who do you serve?",
    answer:
      "We serve real estate developers, industries, healthcare, education, and government sectors across India.",
  },
  {
    question: "What is NaturalSTP (DTS)?",
    answer:
      "NaturalSTP is a decentralized system using biological filtration to treat wastewater with near-zero energy usage.",
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
