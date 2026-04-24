"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Why Ecoparadigm?",
    answer:
      "Ecoparadigm is a National Award-winning Environmental Engineering consultancy with over 20 years of expertise. We provide high-impact, sustainable solutions for wastewater treatment, solid waste management, and climate change mitigation. Our strategy first approach ensures that every project is environmentally sound and economically viable, helping clients save on operational costs while meeting 100% regulatory standards.",
  },
  {
    question: "Do you offer waste water treatment?",
    answer:
      `Yes, our expertise spans from designing Effluent Treatment Plants (ETP) for industries to decentralized Sewage Treatment Plants (STP) for commercial and residential sectors. We turn waste into a resource through advanced filtration and biological treatment. We specialize in NaturalSTP and Zero Liquid Discharge (ZLD) systems. NaturalSTP systems reduce OPEX by 90% compared to conventional chemical plants.`,
  },
  {
    question: "Who do you serve?",
    answer:
      "We cater to Indian and international clients including real estate developers, industrial plants, healthcare facilities, educational institutions, and government bodies. We deliver tailored environmental infrastructure for projects of every scale.",
  },
  {
    question: "What is NaturalSTP (DTS)?",
    answer:
      "NaturalSTP™ is a Decentralized Wastewater Treatment System that replaces mechanical blowers and chemicals with passive biological filtration. It mimics nature’s own processes to treat sewage into reusable water standards with near-zero electricity usage.",
  },
  {
    question:
      "How does NaturalSTP reduce Opex compared to traditional STP's?",
    answer:
      "NaturalSTP lowers operating costs by removing expensive chemical dosing and energy-heavy aerators. With fewer moving parts, it requires 60–80% less maintenance and fewer skilled operators than conventional ASP plants.",
  },
  {
    question: "What areas do you currently serve?",
    answer:
      "Our headquarters is in Bengaluru, but we provide consulting and execution services across Pan-India. We’ve completed 600+ projects across urban hubs and industrial zones.",
  },
  {
    question: "What are your ESG and Net-Zero services?",
    answer:
      "We provide Carbon Footprint Mapping, Sustainability Audits, ESG Reporting, and Net-Zero roadmap consulting to help corporations meet compliance and improve environmental ratings.",
  },
  {
    question: "Does Ecoparadigm take up turn key projects?",
    answer:
      "Absolutely. We provide end-to-end turnkey solutions covering site assessment, design, approvals, construction, commissioning, and long-term O&M support.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-28 px-4 pb-20">
      <div className="max-w-275 mx-auto">
        {/* Top Text */}
        <p className="text-center text-[26px] text-black/80 font-medium">
          What You’re Thinking, We’ve Answered.
        </p>

        <h2 className="text-center text-[72px] leading-tight font-semibold mt-4 mb-14">
          Frequently Asked Questions (FAQ)
        </h2>

        {/* FAQ List */}
        <div className="space-y-7">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-black/10 rounded-4xl bg-white overflow-hidden"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-7 flex items-center justify-between text-left"
                >
                  <span className="text-[38px] font-medium text-black">
                    {faq.question}
                  </span>

                  <span className="text-[52px] text-black/50 leading-none">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-8 pb-8 pr-20 text-[26px] leading-[1.7] text-black/55">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}