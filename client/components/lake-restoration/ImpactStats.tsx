"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useEffect, useState } from "react";

const stats = [
  {
    value: "80+",
    label: "Billion Litres of Water Treated",
  },
  {
    value: "200+",
    label: "Million Lives Impacted",
  },
  {
    value: "600+",
    label: "Projects Completed",
  },
  {
    value: "324+",
    label: "Crores Saved for Clients",
  },
];

export default function ImpactStats() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      {" "}
      <section className="px-8 md:px-20 py-20 bg-white">
        {/* 🔥 Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-medium leading-snug">
            Over two decades of delivering measurable{" "}
            <span className="text-green-500">environmental </span> and{" "}
            <span className="text-green-500">economic </span> value across
            India.
          </h2>
        </motion.div>

        {/* 🔥 Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >
              <h3 className="text-5xl md:text-4xl font-semibold text-black">
                {mounted && (
                  <CountUp
                    start={0}
                    end={parseInt(item.value)}
                    duration={5}
                    delay={index * 0.2}
                  />
                )}
                +
              </h3>

              <p className="text-gray-500 text-lg mt-1">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* 🔥 Image with scroll animation */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden"
        >
          <Image
            src="https://plus.unsplash.com/premium_photo-1758671827607-97084cac8d24?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Impact"
            width={1200}
            height={600}
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
        </motion.div>
      </section>
      <section className="w-full bg-white pb-16 px-6 md:px-36">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
              Kundalahalli Lake <br />
              Rejuvenation Project
            </h1>

            <p className="text-gray-700 text-lg">
              Location: Whitefield, Karnataka
            </p>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <p className="text-gray-800 text-base leading-relaxed">
              Revitalizing Kundalahalli Lake through science-led restoration,
              nature based water treatment, and native landscape regeneration to
              improve water quality, biodiversity, and community value.
            </p>

            <p className="text-blue-600 font-medium">
              Won 1st Prize in National Water Award 2018 conducted by Ministry
              of Water Resource, River Development and Ganga Rejuvenation. A CSR
              Initiative by United Way, GE and Qualcomm
            </p>

            {/* INFO GRID */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm font-semibold">CAPACITY</p>
                <p className="text-gray-800">800 KLD</p>
              </div>

              <div>
                <p className="text-sm font-semibold">COMMISSION</p>
                <p className="text-gray-800">2017</p>
              </div>

              <div>
                <p className="text-sm font-semibold">CATEGORY:</p>
                <p className="text-gray-800">SURFACE WATER BODY</p>
              </div>
            </div>

            {/* BUTTON */}
            <div className="">
              <button className="bg-green-500 hover:bg-green-600 text-black font-medium px-6 py-3 rounded-lg transition">
                Talk to Our Expert
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
