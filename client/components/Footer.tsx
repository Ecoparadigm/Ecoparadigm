"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 py-10 sm:py-12">
      {/* 🔥 TOP GRID */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 max-w-7xl mx-auto">
        {/* LEFT SECTION */}
        <div className="lg:col-span-2">
          <Image
            src="/logoWhite.png"
            alt="Eco Paradigm"
            width={160}
            height={50}
            className="mb-3"
          />

          <p className="text-xs sm:text-sm text-white mb-4">
            An ISO 9001:2015 & ISO 14001:2015 Certified Organization.
          </p>

          <p className="text-xs sm:text-sm text-gray-400">
            <span className="text-white">Phone:</span> +91 9448077904
          </p>

          <p className="text-xs sm:text-sm text-gray-400">
            <span className="text-white">Mail:</span> info@ecoparadigm.com
          </p>

          <p className="text-xs sm:text-sm text-gray-400 mt-3 leading-relaxed">
            968/A, 11th Main Rd, Vijaya Bank Layout, Bilekahalli, Bengaluru,
            Karnataka 560076
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold mb-3 text-sm sm:text-base">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-400 text-xs sm:text-sm">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">Our Services</Link>
            </li>
            <li>
              <Link href="#">Projects</Link>
            </li>
            <li>
              <Link href="#">Customer Stories</Link>
            </li>
            <li>
              <Link href="#">Why Us?</Link>
            </li>
          </ul>
        </div>

        {/* WATER */}
        <div>
          <h3 className="font-semibold mb-3 text-sm sm:text-base">
            Water Solutions
          </h3>
          <ul className="space-y-2 text-gray-400 text-xs sm:text-sm">
            <li>
              <Link href="#">Natural STP</Link>
            </li>
            <li>
              <Link href="#">Compare STP</Link>
            </li>
            <li>
              <Link href="#">Rainwater Harvesting</Link>
            </li>
            <li>
              <Link href="#">Lake Restoration</Link>
            </li>
          </ul>
        </div>

        {/* ENERGY */}
        <div>
          <h3 className="font-semibold mb-3 text-sm sm:text-base">
            Energy & Waste
          </h3>
          <ul className="space-y-2 text-gray-400 text-xs sm:text-sm">
            <li>
              <Link href="#">Solid Waste</Link>
            </li>
            <li>
              <Link href="#">Waste to Energy</Link>
            </li>
            <li>
              <Link href="#">Solar</Link>
            </li>
          </ul>
        </div>

        {/* AUDITS */}
        <div>
          <h3 className="font-semibold mb-3 text-sm sm:text-base">Audits</h3>
          <ul className="space-y-2 text-gray-400 text-xs sm:text-sm">
            <li>
              <Link href="#">Net Zero</Link>
            </li>
            <li>
              <Link href="#">Climate Audits</Link>
            </li>
            <li>
              <Link href="#">ESG</Link>
            </li>
            <li>
              <Link href="#">Accessibility</Link>
            </li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h3 className="font-semibold mb-3 text-sm sm:text-base">Resources</h3>
          <ul className="space-y-2 text-gray-400 text-xs sm:text-sm">
            <li>
              <Link href="#">Awards</Link>
            </li>
            <li>
              <Link href="#">Blogs</Link>
            </li>
            <li>
              <Link href="#">Projects</Link>
            </li>
            <li>
              <Link href="#">Clients</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* 🔥 DIVIDER */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs sm:text-sm text-gray-500 text-center md:text-left">
          © 2026 Ecoparadigm. All rights reserved.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex gap-3 sm:gap-4">
          {[FaLinkedinIn, FaInstagram, FaYoutube, FaFacebookF].map(
            (Icon, i) => (
              <div
                key={i}
                className="w-8 h-8 sm:w-9 sm:h-9 border border-gray-500 flex items-center justify-center rounded hover:bg-white hover:text-black transition cursor-pointer"
              >
                <Icon size={14} />
              </div>
            ),
          )}
        </div>
      </div>
    </footer>
  );
}
