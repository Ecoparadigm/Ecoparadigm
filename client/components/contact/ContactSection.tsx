"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ContactSection() {
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 py-14 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">

        {/* 🔥 LEFT SIDE */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          className="space-y-5 sm:space-y-6"
        >
          {/* Card */}
          {[
            {
              title: "Our Mail",
              value: "info@ecoparadigm.com",
              icon: "✉️",
            },
            {
              title: "Phone Number",
              value: "+91 9448077904",
              icon: "📞",
            },
            {
              title: "Our Address",
              value:
                "968/A, 11th Main Rd, Vijaya Bank Layout, Bilekahalli, Bengaluru, Karnataka 560076",
              icon: "📍",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="flex items-center gap-4 sm:gap-5 p-4 sm:p-5 rounded-xl border border-gray-200 bg-white"
            >
              {/* Icon */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-green-500 flex items-center justify-center text-white text-lg sm:text-xl">
                {item.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-500 mt-1 leading-snug">
                  {item.value}
                </p>
              </div>
            </motion.div>
          ))}

          {/* 🔥 MAP */}
          <motion.div
            variants={fadeUp}
            className="rounded-xl overflow-hidden border border-gray-200 h-[220px] sm:h-[260px] md:h-[300px]"
          >
            <iframe
              src="https://www.google.com/maps?q=Ecoparadigm+Bengaluru&output=embed"
              className="w-full h-full"
              loading="lazy"
            />
          </motion.div>
        </motion.div>

        {/* 🔥 RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 md:p-8"
        >
          {/* Heading */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-green-600 mb-6">
            Contact Information
          </h2>

          <form className="space-y-4 sm:space-y-5">
            {/* Name */}
            <div>
              <label className="text-xs sm:text-sm text-gray-500">
                Name
              </label>
              <input
                type="text"
                placeholder="Jane Smith"
                className="w-full mt-1 h-10 sm:h-12 rounded-lg bg-gray-100 px-4 outline-none text-sm sm:text-base"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-xs sm:text-sm text-gray-500">
                Email*
              </label>
              <input
                type="email"
                placeholder="jane@mail.com"
                className="w-full mt-1 h-10 sm:h-12 rounded-lg bg-gray-100 px-4 outline-none text-sm sm:text-base"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-xs sm:text-sm text-gray-500">
                Phone Number*
              </label>
              <input
                type="text"
                placeholder="+91 xxxxxxxx76"
                className="w-full mt-1 h-10 sm:h-12 rounded-lg bg-gray-100 px-4 outline-none text-sm sm:text-base"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-xs sm:text-sm text-gray-500">
                Have a query?*
              </label>
              <textarea
                rows={4}
                placeholder="Message"
                className="w-full mt-1 rounded-lg bg-gray-100 px-4 py-3 outline-none text-sm sm:text-base resize-none"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full h-10 sm:h-12 rounded-lg bg-green-500 hover:bg-green-600 text-white text-sm sm:text-base font-medium transition"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}