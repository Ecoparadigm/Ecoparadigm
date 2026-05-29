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

  // ✅ CLOSE MENU FUNCTION
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileResourcesOpen(false);
  };

  const services = [
    { name: "Wastewater Treatment", href: "/natural-stp" },
    {
      name: "Rainwater Harvesting",
      href: "/all-services/rainwater-harvesting",
    },
    { name: "Lake Restoration", href: "/all-services/lake-restoration" },
    {
      name: "Solid Waste Management",
      href: "/all-services/solid-waste-management",
    },
    {
      name: "Environmental Audits & Net-Zero Strategy",
      href: "/all-services/environ-audits",
    },
  ];

  const resources = [
    { name: "Blogs", href: "/resources/blogs" },
    { name: "Our Clients", href: "/resources/our-clients" },
    { name: "Awards", href: "/aboutus" },
    { name: "Careers", href: "/contact" },
  ];

  const LinkHoverEffect = ({ children, href }: { children: React.ReactNode, href: string }) => (
    <Link href={href} className="group relative py-2 text-gray-700 hover:text-green-600 transition-colors duration-300 font-semibold text-[15px]">
      {children}
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      {/* 🔹 Top Bar */}
      <div className="bg-[#062f2f] text-white text-xs sm:text-sm px-4 sm:px-6 py-2 flex flex-wrap justify-between items-center gap-2 border-b border-white/5 relative z-50">
        <div className="flex gap-4">
          <p className="flex items-center gap-1.5 opacity-90">
            <span className="font-semibold text-green-400">Enquiry:</span> +91 94480 77904
          </p>
          <span className="opacity-30 hidden sm:inline">|</span>
          <p className="hidden sm:flex items-center gap-1.5 opacity-90">
            <span className="font-semibold text-green-400">Mail:</span> Info@ecoparadigm.in
          </p>
        </div>
        <p className="text-[11px] sm:text-xs text-gray-300 font-medium tracking-wide">
          ISO 9001:2015 & 14001:2015 Certified
        </p>
      </div>

      {/* 🔹 Navbar */}
      <div className="bg-white/80 backdrop-blur-xl px-4 sm:px-6 md:px-12 lg:px-20 py-3 sm:py-4 flex items-center justify-between shadow-sm border-b border-gray-200/50 relative z-40 transition-all duration-300">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 transition duration-300 hover:scale-[1.02]">
          <Image src="/logo.png" alt="Eco Paradigm" width={130} height={42} className="object-contain" priority />
        </Link>

        {/* 🔥 Desktop Menu */}
        <div className="hidden md:flex items-center">
          <nav className="flex items-center gap-8 mr-8 relative">
            {/* SERVICES */}
            <div
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              className="relative py-2 group"
            >
              <span className="cursor-pointer text-gray-700 group-hover:text-green-600 transition-colors duration-300 font-semibold text-[15px] flex items-center gap-1.5">
                All Services <span className="text-[10px] opacity-75 group-hover:-rotate-180 transition-transform duration-300">▼</span>
              </span>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-500 rounded-full transition-all duration-300 group-hover:w-full"></span>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.98 }}
                    transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
                    className="absolute top-full left-0 w-[320px] bg-white border border-gray-100 rounded-2xl shadow-xl p-4 z-50 mt-1"
                  >
                    {services.map((item, i) => (
                      <Link key={i} href={item.href}>
                        <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-50/50 transition cursor-pointer group/item">
                          <span className="w-2 h-2 bg-green-500 rounded-full group-hover/item:scale-125 transition duration-300"></span>
                          <span className="text-sm font-medium text-gray-700 group-hover/item:text-green-700 transition">
                            {item.name}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <LinkHoverEffect href="/natural-stp">Natural STP</LinkHoverEffect>
            <LinkHoverEffect href="/projects">Projects</LinkHoverEffect>

            {/* RESOURCES */}
            <div
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
              className="relative py-2 group"
            >
              <span className="cursor-pointer text-gray-700 group-hover:text-green-600 transition-colors duration-300 font-semibold text-[15px] flex items-center gap-1.5">
                Resources <span className="text-[10px] opacity-75 group-hover:-rotate-180 transition-transform duration-300">▼</span>
              </span>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-500 rounded-full transition-all duration-300 group-hover:w-full"></span>

              <AnimatePresence>
                {resourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.98 }}
                    transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
                    className="absolute top-full left-0 w-[240px] bg-white border border-gray-100 rounded-2xl shadow-xl p-4 z-50 mt-1"
                  >
                    {resources.map((item, i) => (
                      <Link key={i} href={item.href}>
                        <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-50/50 transition cursor-pointer group/item">
                          <span className="w-2 h-2 bg-green-500 rounded-full group-hover/item:scale-125 transition duration-300"></span>
                          <span className="text-sm font-medium text-gray-700 group-hover/item:text-green-700 transition">
                            {item.name}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <LinkHoverEffect href="/aboutus">About Us</LinkHoverEffect>
          </nav>

          <Link
            href="/contact"
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold px-7 py-2.5 rounded-full transition-all duration-300 shadow-lg shadow-green-500/20 hover:shadow-green-500/40 hover:-translate-y-0.5"
          >
            Contact Us
          </Link>
        </div>

        {/* 🔥 Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-2xl text-gray-700 hover:text-green-600 transition p-2"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* 🔥 Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
            className="md:hidden bg-white/98 backdrop-blur-md px-6 py-6 shadow-2xl space-y-4 flex flex-col absolute top-full left-0 w-full z-30 border-b border-gray-100"
          >
            {/* Services */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between text-gray-800 font-bold py-2 border-b border-gray-100"
              >
                <span>All Services</span>
                <span className={`text-xs opacity-75 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}>▼</span>
              </button>

              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mt-2 space-y-1 pl-3 overflow-hidden"
                  >
                    {services.map((item, i) => (
                      <Link key={i} href={item.href} onClick={closeMobileMenu}>
                        <div className="flex items-center gap-2.5 py-2.5 hover:text-green-600 transition">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                          <span className="text-sm font-medium text-gray-600">{item.name}</span>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/natural-stp" onClick={closeMobileMenu} className="text-gray-800 font-bold py-2 border-b border-gray-100 block hover:text-green-600 transition">
              Natural STP
            </Link>
            <Link href="/projects" onClick={closeMobileMenu} className="text-gray-800 font-bold py-2 border-b border-gray-100 block hover:text-green-600 transition">
              Projects
            </Link>

            {/* Resources */}
            <div>
              <button
                onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                className="w-full flex items-center justify-between text-gray-800 font-bold py-2 border-b border-gray-100"
              >
                <span>Resources</span>
                <span className={`text-xs opacity-75 transition-transform duration-300 ${mobileResourcesOpen ? "rotate-180" : ""}`}>▼</span>
              </button>

              <AnimatePresence>
                {mobileResourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mt-2 space-y-1 pl-3 overflow-hidden"
                  >
                    {resources.map((item, i) => (
                      <Link key={i} href={item.href} onClick={closeMobileMenu}>
                        <div className="flex items-center gap-2.5 py-2.5 hover:text-green-600 transition">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                          <span className="text-sm font-medium text-gray-600">{item.name}</span>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/aboutus" onClick={closeMobileMenu} className="text-gray-800 font-bold py-2 border-b border-gray-100 block hover:text-green-600 transition">
              About Us
            </Link>

            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3.5 mt-2 flex items-center justify-center rounded-xl transition duration-300 shadow-lg shadow-green-500/20"
            >
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
