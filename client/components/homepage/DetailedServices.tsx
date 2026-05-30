"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Rainwater Harvesting",
    desc: "Rooftop & surface RWH systems designed for groundwater recharge and direct reuse. KSGWA-compliant, warranty-backed, and engineered to your catchment.",
    tags: ["Scientific RWH", "Groundwater recharge"],
    img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    link: "/all-services/rainwater-harvesting"
  },
  {
    title: "ESG, BRSR & Environmental Audits",
    desc: "Full-scope ESG & BRSR consulting, climate audits, Net Zero pathways, accessibility audits, and environmental impact assessments — for listed corporates, hospitals, universities, and infrastructure developers navigating SEBI, MoEFCC, and MCA mandates.",
    tags: ["Net Zero", "Climate Audits", "EIA", "Green Certifications"],
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c",
    link: "/all-services/environ-audits"
  },
  {
    title: "Solar & Energy Systems",
    desc: "Rooftop solar, energy audits, and renewable integrations designed alongside your wastewater and solid waste systems — because environmental infrastructure should save power, not consume it.",
    tags: ["Rooftop Solar", "Energy Audit"],
    img: "https://images.unsplash.com/photo-1509391366360-12009c95ebed",
    link: "/contact"
  },
  {
    title: "Lake & Waterbody Rejuvenation",
    desc: "End-to-end ecological restoration for urban lakes, tanks, and wetlands. Kundalahalli Lake in Bangalore was restored by our DTS-integrated treatment wetland — a model now studied by municipalities across India.",
    tags: ["Wetland Engineering", "Bioremediation", "Consulting"],
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    link: "/all-services/lake-restoration"
  },
  {
    title: "Solid Waste Management",
    desc: "On-site segregation, biomethanation, and waste-to-energy systems for campuses, apartments, hospitals, and municipalities.",
    tags: ["Biomethanation", "SWM", "Landfill Engineering"],
    img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15f",
    link: "/all-services/solid-waste-management"
  }
];

export default function DetailedServices() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-24 md:space-y-32">
          {services.map((svc, index) => (
            <div key={index} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 md:gap-16 items-center`}>
              
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-1/2 relative h-[300px] sm:h-[400px] rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image src={svc.img} alt={svc.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-green-900/10 mix-blend-overlay"></div>
              </motion.div>

              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full md:w-1/2"
              >
                <h3 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 leading-tight">{svc.title}</h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">{svc.desc}</p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {svc.tags.map((tag, i) => (
                    <span key={i} className="px-4 py-2 bg-green-50 text-green-700 font-semibold text-sm rounded-full border border-green-100">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link href={svc.link} className="inline-flex items-center gap-2 text-green-600 font-bold hover:text-green-700 transition duration-300 group">
                  Learn more
                  <span className="group-hover:translate-x-1 transition duration-300">→</span>
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
