"use client";

import React from "react";

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
    title: "Carbon footprint audits (Scope 1, 2, and relevant Scope 3)",
    desc: "We offer end-to-end climate audits covering emissions, energy, and resource use to help organisations align with net-zero targets and regulatory frameworks.",
  },
  {
    title: "Biodiversity Assessment",
    desc: "We evaluate the variety of life on your site to create a roadmap for protecting and restoring local ecosystems. This turns your project into a living asset that supports nature while increasing the overall health and value of the land.",
  },
  {
    title: "ESG",
    desc: "Modern business is measured by more than profit. Our audits and designs give you the data and the infrastructure to boost your ESG score, helping you lower costs, attract talent, and secure investment.",
  },
];

export default function WhatWeOffer() {
  return (
    <section className="w-full pb-14 sm:pb-16 md:pb-24 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900">
          What we offer
        </h2>
        <p className="mt-3 text-gray-600 text-sm sm:text-base">
          Comprehensive Net Zero solutions for business success.
        </p>

        {/* Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-[#f5f5f5] rounded-2xl p-6 text-left shadow-sm hover:shadow-md transition"
            >
              {/* Icon placeholder */}
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 mb-4">
                <span className="text-gray-600 text-lg">★</span>
              </div>

              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-10">
          <button className="bg-green-500 hover:bg-green-600 text-white text-sm sm:text-base px-6 py-3 rounded-md transition">
            Get a Site Assessment
          </button>
        </div>
      </div>
    </section>
  );
}
