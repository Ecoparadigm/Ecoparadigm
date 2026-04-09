"use client";

import { motion } from "framer-motion";

export default function VisionMissionHeader() {
  return (
    <section className="px-8 md:px-20 py-16">
      {/* 🔥 HEADING */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="text-2xl md:text-4xl font-medium leading-tight max-w-3xl mb-12"
      >
        <span className="text-gray-800">
          Committed to an eco-friendly world:
        </span>
        <br />
        <span className="text-gray-400">our vision & mission</span>{" "}
        <span className="text-gray-800">explained</span>
      </motion.h2>

      {/* 🔥 CONTAINER */}
      <div className="border border-gray-300 rounded-2xl overflow-hidden grid md:grid-cols-2">
        {/* 🔹 LEFT - MISSION */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="p-6 md:p-10 border-b md:border-b-0 md:border-r border-gray-300"
        >
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Mission</h3>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            We thrive on establishing new paradigms, developing unconventional
            technologies mimicking nature’s own environmental processes, and
            pushing the envelope on environmental engineering - simple and
            elegant solutions that are good for the client, and good for the
            planet.
          </p>

          {/* Quote Box */}
          <div className="bg-gray-100 p-4 rounded-lg text-lg text-gray-600">
            <p>
              "We innovate to safeguard the Earth’s resources as a sacred trust,
              ensuring our closed-loop solutions leave a flourishing planet for
              future generations."
            </p>
            <p className="mt-2 text-gray-800 text-xs">— MD of Ecoparadigm</p>
          </div>
        </motion.div>

        {/* 🔹 RIGHT - VISION */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="p-6 md:p-10"
        >
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Vision</h3>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Our self-sustaining environmental strategies will lead to a
            significant enhancement in our quality of life, in terms of improved
            health, value for money and aesthetics. We will mentor and nurture a
            cadre of passionate environmentalists and their ideas, to be worthy
            custodians of our planet.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {[
              "Waste Water Treatment",
              "Rainwater Harvesting",
              "NaturalSTP",
              "Solid Waste Management",
              "Energy Audits",
              "Waterbody Restoration",
              "Biodiversity Assessment",
              "Clean air",
              "Carbon footprint",
            ].map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 text-lg px-3 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
