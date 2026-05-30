"use client";

import { motion } from "framer-motion";
import { FileText, CloudRain, Globe, Key, Trees, Accessibility } from "lucide-react";

const esgServices = [
  {
    icon: FileText,
    title: "BRSR Reporting for Top 1000 Listed Companies",
    desc: "End-to-end BRSR Core and Comprehensive reporting, aligned with GRI, SASB, and TCFD frameworks. Fully assurance-ready documentation."
  },
  {
    icon: CloudRain,
    title: "Net Zero Strategy & GHG Accounting",
    desc: "Scope 1, 2, and 3 emissions inventory, science-based target setting, and decarbonisation roadmaps aligned with your capex cycle."
  },
  {
    icon: Globe,
    title: "Climate & Environmental Audits",
    desc: "Consent-to-operate audits, PCB compliance reviews, EIA, Environmental Statement (Form V), and ESG due diligence for M&A."
  },
  {
    icon: Key,
    title: "Regulatory Liaison",
    desc: "In-house experts managing PCB, MoEFCC, NGT, and state authority approvals—ensuring faster clearances with minimal back-and-forth."
  },
  {
    icon: Trees,
    title: "Carbon Credit Advisory",
    desc: "Project registration under Verra VCS and Gold Standard for DTS, solar, biomethanation, and afforestation—from MRV setup to credit issuance."
  },
  {
    icon: Accessibility,
    title: "Accessibility & Universal Design Audits",
    desc: "RPwD Act compliance audits for campuses and public infrastructure, with clear gap analysis and implementation roadmaps."
  }
];

export default function ESGDeepDive() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <p className="text-sm font-bold tracking-widest text-green-600 uppercase mb-4">ESG, BRSR & Environmental Audits</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
            Compliance is not a report. <br className="hidden sm:block" />
            It's an operating system.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-medium">
            SEBI's BRSR mandate, PCB's tightening discharge norms, MCA's CSR reporting, India's Net Zero commitments. Ecoparadigm's audit practice is led by engineers who have designed the systems they audit — so your compliance is defensible, auditable, and operational.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {esgServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-200 p-8 rounded-3xl hover:border-green-400 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
