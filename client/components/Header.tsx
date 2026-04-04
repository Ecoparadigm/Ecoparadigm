"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const services = [
    "Waste Water Treatment",
    "Rainwater Harvesting",
    "Lake Restoration",
    "Solid Waste Management",
    "Energy and Power Systems",
    "Environmental Audits & Net-Zero Strategy",
    "SEWAC",
  ];

  const resources = ["Blogs", "Our Clients", "Awards", "Careers"];

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      {/* Top Bar */}
      <div className="bg-black text-white text-sm px-6 py-1.5 flex">
        <p>For Enquiry: +91 9448077404</p>
        <span className="mx-2">|</span>
        <p>info@ecoparadigm.com</p>
      </div>

      {/* Navbar */}
      <div className="bg-white px-8 py-3 flex items-center justify-between shadow-sm">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* <div className="w-8 h-8 bg-red-400"></div>
          <span className="font-semibold text-lg">eco paradigm</span> */}

          <Image src="/logo.png" alt="Eco Paradigm" width={140} height={40} />
        </div>

        <div className="flex items-center">
          {/* Menu */}
          <nav className="hidden md:flex gap-8 mr-6 text-gray-700 relative">
            {/* SERVICES */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <span className="cursor-pointer">All Services ▾</span>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25 }}
                    className="absolute top-8 left-0 w-[320px] bg-white rounded-2xl shadow-lg p-4 z-50"
                  >
                    {services.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition cursor-pointer"
                      >
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="#">Natural STP</Link>
            <Link href="#">Projects</Link>

            {/* RESOURCES */}
            <div
              className="relative"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <span className="cursor-pointer">Resources ▾</span>

              <AnimatePresence>
                {resourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25 }}
                    className="absolute top-8 left-0 w-[220px] bg-white rounded-2xl shadow-lg p-4 z-50"
                  >
                    {resources.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition cursor-pointer"
                      >
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="#">About Us</Link>
          </nav>

          {/* Button */}
          <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
}
