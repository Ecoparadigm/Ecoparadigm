"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "Net Zero Readiness",
    desc: "From saving energy to ensuring universal access, we help your company meet the highest standards of environmental and social responsibility.",
  },
  {
    title: "Energy Audits",
    desc: "Enhance business strategy, optimize core processes, and leverage real-time analytics for sustainable growth.",
  },
  {
    title: "Accessibility Audits",
    desc: "Ensure compliance with accessibility standards and regulations while addressing elderly and differently-abled users—improve usability, safety, and inclusivity.",
  },
  {
    title: "Carbon Footprint Audits",
    desc: "We offer end-to-end climate audits covering emissions, energy, and resource use to help organisations align with net-zero targets and regulatory frameworks.",
  },
  {
    title: "Biodiversity Assessment",
    desc: "We evaluate the variety of life on your site to create a roadmap for protecting and restoring local ecosystems, supporting nature while increasing land value.",
  },
  {
    title: "ESG Advisory",
    desc: "Our audits and designs give you the data and the infrastructure to boost your ESG score, helping you lower costs, attract talent, and secure investment.",
  },
];

export default function WhatWeOffer() {
  return (
    <section className="w-full py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-xs sm:text-sm font-extrabold tracking-wider text-green-700 uppercase">
              What we offer
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight">
            Comprehensive <span className="text-green-500">Net Zero</span> Solutions
          </h2>
          <p className="mt-6 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Partner with us to achieve environmental compliance, optimize energy usage, and establish your organization as a sustainability leader.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-3xl p-8 text-left shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-green-50 text-green-600 mb-6 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Link
            href="/contact"
            className="group bg-green-500 hover:bg-green-600 text-white font-bold text-sm sm:text-base px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-green-500/20 hover:shadow-green-500/40 hover:-translate-y-0.5 flex items-center gap-2"
          >
            Get a Site Assessment
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
