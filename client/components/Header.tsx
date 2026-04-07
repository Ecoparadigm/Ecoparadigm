// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Header() {
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const [resourcesOpen, setResourcesOpen] = useState(false);

//   const services = [
//     "Waste Water Treatment",
//     "Rainwater Harvesting",
//     "Lake Restoration",
//     "Solid Waste Management",
//     "Energy and Power Systems",
//     "Environmental Audits & Net-Zero Strategy",
//     "SEWAC",
//   ];

//   const resources = ["Blogs", "Our Clients", "Awards", "Careers"];

//   return (
//     <header className="w-full fixed top-0 left-0 z-50">
//       {/* Top Bar */}
//       <div className="bg-black text-white text-sm px-6 py-1.5 flex">
//         <p>For Enquiry: +91 9448077404</p>
//         <span className="mx-2">|</span>
//         <p>info@ecoparadigm.com</p>
//       </div>

//       {/* Navbar */}
//       <div className="bg-white px-8 py-3 flex items-center justify-between shadow-sm">
//         {/* Logo */}
//         <Link href="/" className="flex items-center gap-2">
//           <Image src="/logo.png" alt="Eco Paradigm" width={140} height={40} />
//         </Link>

//         <div className="flex items-center">
//           {/* Menu */}
//           <nav className="hidden md:flex gap-8 mr-6 text-gray-700 relative">
//             {/* SERVICES */}
//             <div
//               className="relative"
//               onMouseEnter={() => setServicesOpen(true)}
//               onMouseLeave={() => setServicesOpen(false)}
//             >
//               <span className="cursor-pointer">All Services ▾</span>

//               <AnimatePresence>
//                 {servicesOpen && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 10 }}
//                     transition={{ duration: 0.25 }}
//                     className="absolute top-8 left-0 w-[320px] bg-white rounded-2xl shadow-lg p-4 z-50"
//                   >
//                     {services.map((item, index) => (
//                       <div
//                         key={index}
//                         className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition cursor-pointer"
//                       >
//                         <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                         <span className="text-sm text-gray-700">{item}</span>
//                       </div>
//                     ))}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             <Link href="#">Industries</Link>
//             <Link href="#">Natural STP</Link>
//             <Link href="/projects">Projects</Link>

//             {/* RESOURCES */}
//             <div
//               className="relative"
//               onMouseEnter={() => setResourcesOpen(true)}
//               onMouseLeave={() => setResourcesOpen(false)}
//             >
//               <span className="cursor-pointer">Resources ▾</span>

//               <AnimatePresence>
//                 {resourcesOpen && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 10 }}
//                     transition={{ duration: 0.25 }}
//                     className="absolute top-8 left-0 w-[220px] bg-white rounded-2xl shadow-lg p-4 z-50"
//                   >
//                     {resources.map((item, index) => (
//                       <div
//                         key={index}
//                         className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition cursor-pointer"
//                       >
//                         <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                         <span className="text-sm text-gray-700">{item}</span>
//                       </div>
//                     ))}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             <Link href="/aboutus">About Us</Link>
//           </nav>

//           {/* Button */}
//           <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition">
//             Contact Us
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  // ✅ UPDATED SERVICES WITH LINKS
  const services = [
    {
      name: "Waste Water Treatment",
      href: "/natural-stp",
    },
    {
      name: "Rainwater Harvesting",
      href: "/all-services/rainwater-harvesting",
    },
    {
      name: "Lake Restoration",
      href: "/all-services/lake-restoration",
    },
    {
      name: "Solid Waste Management",
      href: "/all-services/solid-waste",
    },
    {
      name: "Energy and Power Systems",
      href: "/all-services/energy-power",
    },
    {
      name: "Environmental Audits & Net-Zero Strategy",
      href: "/all-services/environmental-audit",
    },
    {
      name: "SEWAC",
      href: "/services/sewac",
    },
  ];

  const resources = [
    { name: "Blogs", href: "/blogs" },
    { name: "Our Clients", href: "/resources/our-clients" },
    { name: "Awards", href: "/aboutus" },
    { name: "Careers", href: "/careers" },
  ];

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
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Eco Paradigm" width={140} height={40} />
        </Link>

        <div className="flex items-center">
          {/* Menu */}
          <nav className="hidden md:flex gap-8 mr-6 text-gray-700 relative">
            {/* SERVICES DROPDOWN */}
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
                      <Link
                        key={index}
                        href={item.href}
                        onClick={() => setServicesOpen(false)}
                      >
                        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
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

            <Link href="#">Industries</Link>
            <Link href="/natural-stp">Natural STP</Link>
            <Link href="/projects">Projects</Link>

            {/* RESOURCES DROPDOWN */}
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
                      <Link
                        key={index}
                        href={item.href}
                        onClick={() => setResourcesOpen(false)}
                      >
                        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
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

          {/* Button */}
          <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
}
