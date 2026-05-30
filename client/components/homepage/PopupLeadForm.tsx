"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, ArrowRight } from "lucide-react";

export default function PopupLeadForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    contactInfo: "",
    service: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    
    // Check if the user has already seen the popup in this session
    const hasSeenPopup = sessionStorage.getItem("ecoparadigm_popup_seen");
    
    if (!hasSeenPopup) {
      // Set a 7-second delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 7000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    sessionStorage.setItem("ecoparadigm_popup_seen", "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const payload = {
      name: formState.name,
      contactInfo: formState.contactInfo,
      service: formState.service,
      source: "popup",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setIsSubmitted(true);
        sessionStorage.setItem("ecoparadigm_popup_seen", "true");
        // Auto close after 3 seconds
        setTimeout(() => setIsOpen(false), 3000);
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting popup form:", error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!hasMounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePopup}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Popup Container */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-4 left-4 right-4 sm:bottom-auto sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 w-auto sm:w-[450px] bg-white rounded-3xl shadow-2xl z-[101] overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header Area */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-6 relative">
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-1.5 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-2xl font-black text-white leading-tight">
                Get a Free Expert Consultation
              </h3>
              <p className="text-green-50 mt-2 text-sm font-medium">
                Answer a few quick questions and discover how we can help achieve your sustainability goals.
              </p>
            </div>

            {/* Form Area */}
            <div className="p-6 sm:p-8 bg-white overflow-y-auto">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="popup-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div>
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                        Name<span className="text-green-500 ml-0.5">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full mt-1.5 p-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-500/20 transition duration-300 font-medium"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                        Email or Phone<span className="text-green-500 ml-0.5">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.contactInfo}
                        onChange={(e) => setFormState({ ...formState, contactInfo: e.target.value })}
                        placeholder="How should we reach you?"
                        className="w-full mt-1.5 p-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-500/20 transition duration-300 font-medium"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">
                        Interested Service<span className="text-green-500 ml-0.5">*</span>
                      </label>
                      <div className="relative mt-1.5">
                        <select
                          required
                          value={formState.service}
                          onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                          className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-500/20 transition duration-300 font-medium appearance-none cursor-pointer"
                        >
                          <option value="" disabled>Select a service...</option>
                          <option value="NaturalSTP">NaturalSTP™</option>
                          <option value="Solid Waste Management">Solid Waste Management</option>
                          <option value="Lake Restoration">Lake Restoration</option>
                          <option value="Environmental Audit">Environmental Audit</option>
                          <option value="Rainwater Harvesting">Rainwater Harvesting</option>
                          <option value="Other / Just Browsing">Other / Just Browsing</option>
                        </select>
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
                          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group w-full bg-gray-900 hover:bg-green-600 disabled:bg-gray-400 text-white py-4 mt-6 rounded-xl text-sm font-bold transition duration-300 shadow-lg shadow-gray-900/10 hover:shadow-green-600/30 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          Request Consultation
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11px] text-gray-400 font-medium mt-3">
                      We respect your privacy. No spam, ever.
                    </p>
                  </motion.form>
                ) : (
                  <motion.div
                    key="popup-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-10 text-center flex flex-col items-center justify-center"
                  >
                    <div className="w-16 h-16 bg-green-50 border border-green-100 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="text-green-500 w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-black text-gray-900 mb-2">Request Received!</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Thank you for your interest. Our team will contact you shortly to schedule your free consultation.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
