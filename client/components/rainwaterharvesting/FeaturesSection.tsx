"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } }
};

const features = [
  {
    title: "Make your site self-sufficient and water-smart",
    description:
      "Tailored rainwater harvesting systems for your site, budget, and water goals delivering maximum capture, clean storage, and long-term performance.",
    points: [
      "Reduce dependence on tanker water",
      "Lower water bills year",
      "Prevent flooding and water stagnation",
      "Recharge groundwater naturally",
      "Improve site sustainability rating",
    ],
    button: "Get a Free Site Assessment",
    image:
      "https://plus.unsplash.com/premium_photo-1661825536186-19606cd9a0f1?q=80&w=419&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title:
      "Prevent failures, Data-backed groundwater insights for reliable planning",
    description:
      "See your underground water before you invest in it. Whether you're tackling water scarcity or reducing utility costs, Ecoparadigm delivers smart rainwater management solutions tailored to your site.",
    image:
      "https://plus.unsplash.com/premium_photo-1723983555317-4431f5fcc867?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Providing custom solutions tailored to your needs.",
    description:
      "We offer end-to-end rainwater management systems that include:",
    points: [
      "Rooftop collection networks",
      "Multi-stage filtration units",
      "Recharge wells / percolation pits",
      "Underground storage tanks",
      "Overflow and flood-control pathways",
    ],
    button: "Get a Custom Proposal Today",
    image:
      "https://images.unsplash.com/photo-1632898631773-cf6299c04fa6?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "What makes Us Different",
    points: [
      "Gravity-based wherever possible",
      "No gimmicky filters",
      "Easy access for cleaning",
      "Designed for decades of performance",
      "Long-term operation & maintenance support",
    ],
    image:
      "https://images.unsplash.com/photo-1720942975041-c74637bacef8?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 md:py-32 bg-white px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 overflow-hidden relative">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute top-40 left-0 w-[400px] h-[400px] bg-green-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* 🔥 Heading */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-4xl mx-auto text-center mb-16 md:mb-24"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-xs sm:text-sm font-extrabold tracking-wider text-green-700 uppercase">
            Why Choose Us
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight tracking-tight">
          Tailored Solutions to{" "}
          <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
            revolutionise the way you harvest rain
          </span>
        </h2>
      </motion.div>

      <div className="max-w-7xl mx-auto space-y-24 sm:space-y-32">
        {features.map((item, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={{ show: { transition: { staggerChildren: 0.15 } } }}
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-10 md:gap-16 ${
                isReverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* 🔹 TEXT */}
              <motion.div variants={fadeUp} className="flex-1 max-w-2xl">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug tracking-tight mb-4">
                  {item.title}
                </h3>

                {item.description && (
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed font-medium mb-6">
                    {item.description}
                  </p>
                )}

                {/* Points */}
                {item.points && (
                  <ul className="space-y-3 mb-8">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-6 h-6 shrink-0 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm mt-0.5">
                          ✓
                        </span>
                        <span className="text-base md:text-lg text-gray-700 font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Button */}
                {item.button && (
                  <button className="group relative bg-white border border-gray-200 text-gray-900 font-bold px-8 py-4 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-2">
                    {item.button}
                    <span className="group-hover:translate-x-1 transition-transform text-green-600">→</span>
                  </button>
                )}
              </motion.div>

              {/* 🔹 IMAGE */}
              <motion.div variants={fadeUp} className="flex-1 w-full relative group">
                <div className="absolute inset-0 bg-green-500/10 translate-x-4 translate-y-4 rounded-3xl -z-10 transition-transform group-hover:translate-x-6 group-hover:translate-y-6 duration-500"></div>
                <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50 group-hover:shadow-green-500/10 transition-shadow duration-500">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
