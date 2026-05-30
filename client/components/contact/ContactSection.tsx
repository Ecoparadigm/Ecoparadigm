"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemStagger = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] } },
};

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormState({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="overflow-x-hidden py-24 sm:py-28 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 bg-white relative">
      <div className="absolute inset-0 bg-radial-[at_bottom_right] from-green-500/5 via-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start relative z-10">
        {/* LEFT COLUMN: INFORMATION & MAP */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="text-gray-900 flex flex-col h-full"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-6 text-xs sm:text-sm font-semibold text-green-700 w-fit">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Connect With Us
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight mt-2 text-gray-900">
            Ready to transform your environmental strategy?
          </h2>

          <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg max-w-lg leading-relaxed">
            Whether you are planning a new biological wastewater system, seeking environmental consulting, or just want to learn more — Ecoparadigm is ready to assist.
          </p>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-8 space-y-4"
          >
            {/* EMAIL */}
            <motion.a 
              variants={itemStagger}
              href="mailto:Info@ecoparadigm.in" 
              className="flex gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-green-100 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center shrink-0 group-hover:bg-green-100 group-hover:scale-105 transition-all duration-300">
                <Mail className="text-green-600 w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-gray-400 text-xs tracking-wider uppercase">Email</p>
                <p className="text-gray-900 font-bold text-sm sm:text-base break-all mt-0.5 group-hover:text-green-600 transition-colors">
                  info@ecoparadigm.com
                </p>
              </div>
            </motion.a>

            {/* CALL */}
            <motion.a 
              variants={itemStagger}
              href="tel:+919448077904" 
              className="flex gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-cyan-100 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center shrink-0 group-hover:bg-cyan-100 group-hover:scale-105 transition-all duration-300">
                <Phone className="text-cyan-600 w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-gray-400 text-xs tracking-wider uppercase">Call / Whatsapp</p>
                <p className="text-gray-900 font-bold text-sm sm:text-base mt-0.5 group-hover:text-cyan-600 transition-colors">
                  +91 94480 77904
                </p>
              </div>
            </motion.a>

            {/* ADDRESS */}
            <motion.a 
              variants={itemStagger}
              href="https://maps.google.com/?q=968/A,+11th+Main+Rd,+Vijaya+Bank+Layout,+Bilekahalli,+Bengaluru,+Karnataka+560076" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 group-hover:scale-105 transition-all duration-300">
                <MapPin className="text-emerald-600 w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-gray-400 text-xs tracking-wider uppercase">Office Address</p>
                <p className="text-gray-600 font-medium text-xs sm:text-sm max-w-sm leading-relaxed mt-0.5 group-hover:text-gray-900 transition-colors">
                  968/A, 11th Main Rd, Vijaya Bank Layout, Bilekahalli, Bengaluru, Karnataka 560076
                </p>
              </div>
            </motion.a>

            {/* MAP */}
            <motion.div
              variants={itemStagger}
              className="mt-6 rounded-2xl overflow-hidden border border-gray-100 h-[240px] shadow-sm hover:shadow-lg transition-shadow duration-500 group relative"
            >
              <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/10 transition-colors duration-500 pointer-events-none mix-blend-overlay"></div>
              <iframe
                src="https://www.google.com/maps?q=Ecoparadigm+Bengaluru&output=embed"
                className="w-full h-full filter grayscale group-hover:grayscale-0 transition-all duration-1000"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: PREMIUM LIGHT FORM */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white border border-gray-100 p-8 sm:p-10 lg:p-12 rounded-3xl shadow-2xl shadow-gray-200/60 relative overflow-hidden h-fit mt-4 lg:mt-0"
        >
          {/* Neon side border indicator */}
          <div className="absolute top-0 left-0 w-[6px] h-full bg-gradient-to-b from-green-400 to-emerald-600" />

          {/* Heading */}
          <div className="flex items-center gap-2 mb-8">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shrink-0"></span>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
              Send us a Message
            </h2>
          </div>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="contact-form"
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <motion.div variants={itemStagger}>
                  <label className="text-xs sm:text-sm font-bold text-gray-700">
                    Name<span className="text-green-500 ml-0.5">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full mt-1.5 p-4 bg-gray-50 border border-gray-200 rounded-2xl text-sm text-gray-900 focus:outline-none focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10 transition duration-300 placeholder:text-gray-400 font-medium"
                  />
                </motion.div>

                <motion.div variants={itemStagger}>
                  <label className="text-xs sm:text-sm font-bold text-gray-700">
                    Email<span className="text-green-500 ml-0.5">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="yourname@domain.com"
                    className="w-full mt-1.5 p-4 bg-gray-50 border border-gray-200 rounded-2xl text-sm text-gray-900 focus:outline-none focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10 transition duration-300 placeholder:text-gray-400 font-medium"
                  />
                </motion.div>

                <motion.div variants={itemStagger}>
                  <label className="text-xs sm:text-sm font-bold text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full mt-1.5 p-4 bg-gray-50 border border-gray-200 rounded-2xl text-sm text-gray-900 focus:outline-none focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10 transition duration-300 placeholder:text-gray-400 font-medium"
                  />
                </motion.div>

                <motion.div variants={itemStagger}>
                  <label className="text-xs sm:text-sm font-bold text-gray-700">
                    Have a query?<span className="text-green-500 ml-0.5">*</span>
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="How can we help you?"
                    className="w-full mt-1.5 p-4 bg-gray-50 border border-gray-200 rounded-2xl text-sm text-gray-900 focus:outline-none focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10 transition duration-300 placeholder:text-gray-400 font-medium resize-none"
                  />
                </motion.div>

                <motion.button
                  variants={itemStagger}
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 disabled:from-green-300 disabled:to-emerald-400 text-white py-4 mt-2 rounded-2xl text-base font-bold transition duration-300 shadow-xl shadow-green-500/20 hover:shadow-green-500/40 hover:-translate-y-1 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                     <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Submit Request
                      <span className="group-hover:translate-x-1 transition duration-300">→</span>
                    </>
                  )}
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                key="success-form"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="py-20 text-center"
              >
                <div className="w-24 h-24 bg-green-50 border border-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-green-500/10">
                  <CheckCircle className="text-green-500 w-12 h-12" />
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-3">Message Sent!</h3>
                <p className="text-gray-600 text-base max-w-sm mx-auto leading-relaxed font-medium">
                  Thank you for reaching out. A representative will review your request and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-10 text-sm font-bold text-green-600 hover:text-green-700 underline underline-offset-4 cursor-pointer"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}