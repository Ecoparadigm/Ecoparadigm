"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-8 md:px-16 py-14">

      {/* TOP GRID */}
      <div className="grid grid-cols-1 md:grid-cols-7 gap-4 px-12">

        {/* LEFT SECTION */}
        <div className="md:col-span-2">
          <Image
            src="/logo.png" // put your logo in public/
            alt="Eco Paradigm"
            width={180}
            height={60}
            className="mb-2"
          />

          <p className="text-sm text-gray-400 mb-4">
            An ISO 9001:2015 & ISO 14001:2015 Certified Organization.
          </p>

          <p className="text-sm text-gray-400">
            <span className="text-white">Phone:</span> +91 9448077904
          </p>
          <p className="text-sm text-gray-400">
            <span className="text-white">Mail:</span> info@ecoparadigm.com
          </p>

          <p className="text-sm text-gray-400 mt-3 leading-relaxed">
            Address: 968/A, 11th Main Rd, Vijaya Bank Layout, Bilekahalli,
            Bengaluru, Karnataka 560076
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-1 text-gray-400 text-sm">
            <li><Link href="#">Home</Link></li>
            <li><Link href="#">Our Services</Link></li>
            <li><Link href="#">Projects</Link></li>
            <li><Link href="#">Customer Stories</Link></li>
            <li><Link href="#">Why Us?</Link></li>
          </ul>
        </div>

        {/* WATER SOLUTIONS */}
        <div>
          <h3 className="font-semibold mb-4">Water Solutions</h3>
          <ul className="space-y-1 text-gray-400 text-sm">
            <li><Link href="#">Natural STP</Link></li>
            <li><Link href="#">Compare Natural STP to Conventional STP’s</Link></li>
            <li><Link href="#">Rainwater Harvesting</Link></li>
            <li><Link href="#">Lake Restoration & Rejuvenation</Link></li>
          </ul>
        </div>

        {/* ENERGY & WASTE */}
        <div>
          <h3 className="font-semibold mb-4">Energy and Waste</h3>
          <ul className="space-y-1 text-gray-400 text-sm">
            <li><Link href="#">Solid Waste Management</Link></li>
            <li><Link href="#">Waste to Energy</Link></li>
            <li><Link href="#">Solar Solutions</Link></li>
          </ul>
        </div>

        {/* AUDITS */}
        <div>
          <h3 className="font-semibold mb-4">Audits and Advisory</h3>
          <ul className="space-y-1 text-gray-400 text-sm">
            <li><Link href="#">Net Zero Pathways</Link></li>
            <li><Link href="#">Climate Audits</Link></li>
            <li><Link href="#">ESG Compliance</Link></li>
            <li><Link href="#">Accessibility Audits</Link></li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h3 className="font-semibold mb-4">Resources</h3>
          <ul className="space-y-1 text-gray-400 text-sm">
            <li><Link href="#">Awards</Link></li>
            <li><Link href="#">Blogs</Link></li>
            <li><Link href="#">Projects</Link></li>
            <li><Link href="#">Our Clients</Link></li>
          </ul>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">

        <p className="text-sm text-gray-500">
          © 2026 Ecoparadigm. All rights reserved.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <div className="w-8 h-8 border border-gray-500 flex items-center justify-center rounded">
            in
          </div>
          <div className="w-8 h-8 border border-gray-500 flex items-center justify-center rounded">
            ig
          </div>
          <div className="w-8 h-8 border border-gray-500 flex items-center justify-center rounded">
            yt
          </div>
          <div className="w-8 h-8 border border-gray-500 flex items-center justify-center rounded">
            f
          </div>
        </div>

      </div>

    </footer>
  );
}