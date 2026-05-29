"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

const socialLinks = [
  { Icon: FaLinkedinIn, href: "https://www.linkedin.com/company/ecoparadigm" },
  { Icon: FaInstagram, href: "https://www.instagram.com/ecoparadigm" },
  { Icon: FaYoutube, href: "https://www.youtube.com/@ecoparadigm" },
  { Icon: FaFacebookF, href: "https://www.facebook.com/ecoparadigm" },
];

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link href={href} className="group relative inline-block hover:text-green-400 transition-colors duration-300">
      {children}
      <span className="absolute left-0 bottom-0 w-0 h-px bg-green-400 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  </li>
);

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#062f2f] to-[#031c1c] border-t border-white/5 text-white px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 py-16 sm:py-20 relative overflow-hidden">
      {/* Subtle bottom edge spotlight */}
      <div className="absolute inset-0 bg-radial-[at_bottom] from-[#0f4d4d]/10 via-transparent pointer-events-none" />

      {/* 🔥 TOP GRID */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 max-w-7xl mx-auto relative z-10">
        {/* LEFT SECTION */}
        <div className="col-span-2 lg:col-span-2">
          <Link href="/" className="inline-block mb-4 transition-transform hover:scale-105 duration-300">
            <Image
              src="/logoWhite.png"
              alt="Eco Paradigm"
              width={160}
              height={50}
              className="object-contain"
            />
          </Link>

          <p className="text-xs sm:text-sm text-gray-300 mb-4 leading-relaxed font-medium">
            An ISO 9001:2015 & ISO 14001:2015 Certified Organization.
          </p>

          <div className="space-y-1.5 text-xs sm:text-sm text-gray-400">
            <p>
              <span className="text-white font-medium">Phone:</span> +91 94480 77904
            </p>
            <p>
              <span className="text-white font-medium">Mail:</span> Info@ecoparadigm.in
            </p>
            <p className="mt-3 leading-relaxed max-w-sm">
              968/A, 11th Main Rd, Vijaya Bank Layout, Bilekahalli, Bengaluru,
              Karnataka 560076
            </p>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold text-white mb-4 text-sm sm:text-base tracking-wide uppercase">
            Quick Links
          </h3>
          <ul className="space-y-3 text-gray-400 text-xs sm:text-sm font-medium">
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/natural-stp">Our Services</FooterLink>
            <FooterLink href="/projects">Projects</FooterLink>
            <FooterLink href="/resources/blogs">Blogs</FooterLink>
            <FooterLink href="/aboutus">Why Us?</FooterLink>
          </ul>
        </div>

        {/* WATER */}
        <div>
          <h3 className="font-semibold text-white mb-4 text-sm sm:text-base tracking-wide uppercase">
            Water Solutions
          </h3>
          <ul className="space-y-3 text-gray-400 text-xs sm:text-sm font-medium">
            <FooterLink href="/natural-stp">Natural STP</FooterLink>
            <FooterLink href="/natural-stp#compare">Compare STP</FooterLink>
            <FooterLink href="/all-services/rainwater-harvesting">Rainwater Harvesting</FooterLink>
            <FooterLink href="/all-services/lake-restoration">Lake Restoration</FooterLink>
          </ul>
        </div>

        {/* ENERGY */}
        <div>
          <h3 className="font-semibold text-white mb-4 text-sm sm:text-base tracking-wide uppercase">
            Energy & Waste
          </h3>
          <ul className="space-y-3 text-gray-400 text-xs sm:text-sm font-medium">
            <FooterLink href="/all-services/solid-waste-management">Solid Waste</FooterLink>
            <FooterLink href="/all-services/solid-waste-management">Waste to Energy</FooterLink>
            <FooterLink href="/all-services/environ-audits">Solar Advisory</FooterLink>
          </ul>
        </div>

        {/* AUDITS */}
        <div>
          <h3 className="font-semibold text-white mb-4 text-sm sm:text-base tracking-wide uppercase">
            Audits & ESG
          </h3>
          <ul className="space-y-3 text-gray-400 text-xs sm:text-sm font-medium">
            <FooterLink href="/all-services/environ-audits">Net Zero Strategy</FooterLink>
            <FooterLink href="/all-services/environ-audits">Climate Audits</FooterLink>
            <FooterLink href="/all-services/environ-audits">ESG Advisory</FooterLink>
            <FooterLink href="/all-services/environ-audits">Accessibility Audits</FooterLink>
          </ul>
        </div>
      </div>

      {/* 🔥 DIVIDER & BOTTOM SECTION */}
      <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto relative z-10">
        <p className="text-xs sm:text-sm text-gray-500 text-center md:text-left font-medium">
          © {new Date().getFullYear()} Ecoparadigm. All rights reserved.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex gap-4">
          {socialLinks.map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-600 hover:border-transparent text-gray-400 hover:text-white transition-all duration-300 shadow-lg hover:shadow-green-500/30 hover:-translate-y-1"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
