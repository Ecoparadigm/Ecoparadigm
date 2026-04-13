"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  const services = [
    { name: "Waste Water Treatment", href: "/natural-stp" },
    {
      name: "Rainwater Harvesting",
      href: "/all-services/rainwater-harvesting",
    },
    { name: "Lake Restoration", href: "/all-services/lake-restoration" },
    { name: "Solid Waste Management", href: "/all-services/solid-waste-management" },
    { name: "Energy and Power Systems", href: "/all-services/energy-power" },
    {
      name: "Environmental Audits & Net-Zero Strategy",
      href: "/all-services/environmental-audit",
    },
    { name: "SEWAC", href: "/services/sewac" },
  ];

  const resources = [
    { name: "Blogs", href: "/blogs" },
    { name: "Our Clients", href: "/resources/our-clients" },
    { name: "Awards", href: "/aboutus" },
    { name: "Careers", href: "/careers" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      {/* 🔹 Top Bar */}
      <div className="bg-black text-white text-xs sm:text-sm px-4 sm:px-6 py-1.5 flex flex-wrap gap-2">
        <p>For Enquiry: +91 9448077404</p>
        <span className="hidden sm:inline">|</span>
        <p>info@ecoparadigm.com</p>
      </div>

      {/* 🔹 Navbar */}
      <div className="bg-white px-4 sm:px-6 md:px-12 lg:px-20 py-3 flex items-center justify-between shadow-sm">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Eco Paradigm" width={120} height={40} />
        </Link>

        {/* 🔥 Desktop Menu */}
        <div className="hidden md:flex items-center">
          <nav className="flex gap-8 mr-6 text-gray-700 relative">
            {/* SERVICES */}
            <div
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              className="relative"
            >
              <span className="cursor-pointer flex items-center gap-2">
                {/* <div className="w-2 h-2 bg-green-500 rounded-full"></div> */}
                All Services ▾
              </span>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-8 left-0 w-[300px] bg-white rounded-2xl shadow-lg p-4"
                  >
                    {services.map((item, i) => (
                      <Link key={i} href={item.href}>
                        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                          <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">
                            {item.name}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/natural-stp">Natural STP</Link>
            <Link href="/projects">Projects</Link>

            {/* RESOURCES */}
            <div
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
              className="relative"
            >
              <span className="cursor-pointer flex items-center gap-2">
                {/* <div className="w-2 h-2 bg-green-500 rounded-full"></div> */}
                Resources ▾
              </span>

              <AnimatePresence>
                {resourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-8 left-0 w-[220px] bg-white rounded-2xl shadow-lg p-4"
                  >
                    {resources.map((item, i) => (
                      <Link key={i} href={item.href}>
                        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                          <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">
                            {item.name}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/aboutus">About Us</Link>
          </nav>

          <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition">
            Contact Us
          </button>
        </div>

        {/* 🔥 Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* 🔥 Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white px-6 py-6 shadow-lg space-y-4 flex flex-col absolute top-full left-0 w-full z-40"
          >
            {/* Services */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center gap-2"
              >
                {/* <div className="w-2 h-2 bg-green-500 rounded-full"></div> */}
                All Services ▾
              </button>

              {mobileServicesOpen && (
                <div className="mt-3 space-y-2">
                  {services.map((item, i) => (
                    <Link key={i} href={item.href}>
                      <div className="flex items-center gap-2 py-1.5">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <p className="text-sm text-gray-600">{item.name}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/natural-stp">Natural STP</Link>
            <Link href="/projects">Projects</Link>

            {/* Resources */}
            <div>
              <button
                onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                className="w-full flex items-center gap-2"
              >
                {/* <div className="w-2 h-2 bg-green-500 rounded-full"></div> */}
                Resources ▾
              </button>

              {mobileResourcesOpen && (
                <div className="mt-3 space-y-2">
                  {resources.map((item, i) => (
                    <Link key={i} href={item.href}>
                      <div className="flex items-center gap-2 py-1.5">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <p className="text-sm text-gray-600">{item.name}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/aboutus">About Us</Link>

            <button className="w-full bg-black text-white py-2 rounded-lg">
              Contact Us
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
