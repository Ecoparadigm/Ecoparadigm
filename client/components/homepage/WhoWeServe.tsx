"use client";

import { motion } from "framer-motion";
import { Building2, Activity, Factory, Coffee, Landmark, GraduationCap } from "lucide-react";

const industries = [
  {
    icon: Building2,
    title: "Real Estate & Housing",
    desc: "Apartment complexes, gated communities, villa developments. PCB-compliant STPs, rainwater harvesting, solid waste segregation, and RERA-aligned environmental clearances."
  },
  {
    icon: Activity,
    title: "Hospitals & Healthcare",
    desc: "Biomedical waste, pathogenic wastewater, and stringent regulatory scrutiny. Our hospital-grade NaturalSTP handles high BOD loads and emerging contaminants while meeting PCB and other regulatory norms."
  },
  {
    icon: Factory,
    title: "Manufacturing & Industry",
    desc: "Effluent treatment plants (ETP), ZLD systems, EIA, consent-to-operate, PAT scheme compliance, and carbon accounting for textile, pharma, food processing, and engineering sectors."
  },
  {
    icon: Coffee,
    title: "Hospitality & Hotels",
    desc: "Hotels, resorts, banquet facilities. Treating high-load kitchen and laundry effluent at scale without the OPEX and odour issues of conventional aerobic plants."
  },
  {
    icon: Landmark,
    title: "Government & Municipalities",
    desc: "GeM-empanelled. BBMP, KSWMP, AMRUT 2.0 project experience. Decentralised systems for tier-2 and tier-3 city wastewater, lake restoration, and solid waste master planning."
  },
  {
    icon: GraduationCap,
    title: "Education & Institutions",
    desc: "Universities, schools, research institutions. Campus-wide water-waste-energy integration. Ideal for NAAC green campus scoring and institutional sustainability reporting."
  }
];

export default function WhoWeServe() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">Who we serve</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Ecoparadigm's engineering is vertical-specific. Every solution is calibrated to the standards, pressures and regulators of your industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {industries.map((ind, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6">
                <ind.icon className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{ind.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
