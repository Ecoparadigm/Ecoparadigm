// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// /* ---------------- ANIMATION ---------------- */

// const fadeLeft = {
//   hidden: { opacity: 0, x: -60 },
//   show: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// const fadeRight = {
//   hidden: { opacity: 0, x: 60 },
//   show: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// /* ---------------- COMPONENT ---------------- */

// const ContactSection = () => {
//   return (
//     <section className="py-15 px-10 bg-gradient-to-r from-blue-700 to-green-500">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
//         {/* LEFT SIDE */}
//         <motion.div
//           variants={fadeLeft}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="text-white"
//         >
//           <span className="bg-black/30 text-sm px-3 py-1 rounded-full">
//             Contact
//           </span>

//           <h2 className="text-4xl font-semibold mt-4 leading-tight">
//             Is your STP Facing compliance issues, odour, or high operating
//             costs?
//           </h2>

//           <p className="mt-4 text-blue-100 max-w-lg text-lg">
//             Whether you're planning a new STP or upgrading an existing one to
//             NaturalSTP®. We've got you covered.
//           </p>

//           <div className="mt-8 space-y-4 text-lg">
//             <div>
//               <p className="font-semibold">Email</p>
//               <p className="text-blue-100">Info@ecoparadigm.com</p>
//             </div>

//             <div>
//               <p className="font-semibold">Whatsapp</p>
//               <p className="text-blue-100">+91 9448077904</p>
//             </div>

//             <div>
//               <p className="font-semibold">Office</p>
//               <p className="text-blue-100 max-w-md">
//                 968/A, 11th Main Rd, Vijaya Bank Layout, Bilekahalli, Bengaluru,
//                 Karnataka 560076
//               </p>
//             </div>
//           </div>
//         </motion.div>

//         {/* RIGHT SIDE FORM */}
//         <motion.div
//           variants={fadeRight}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="bg-white rounded-xl shadow-xl p-6 md:p-8"
//         >
//           <form className="space-y-4">
//             {/* Name */}
//             <div>
//               <label className="text-sm font-medium">
//                 Name<span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="John Smith"
//                 className="w-full mt-1 p-3 border border-gray-400 rounded-md text-sm focus:border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label className="text-sm font-medium">
//                 Email<span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="email"
//                 placeholder="johnsmith@gmail.com"
//                 className="w-full mt-1 p-3 border border-gray-400 focus:border-none rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             {/* Phone */}
//             <div>
//               <label className="text-sm font-medium">Phone Number</label>
//               <input
//                 type="text"
//                 placeholder="+91 789 23456x"
//                 className="w-full mt-1 p-3 border border-gray-400 focus:border-none rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             {/* Message */}
//             <div>
//               <label className="text-sm font-medium">
//                 Message<span className="text-red-500">*</span>
//               </label>
//               <textarea
//                 rows={4}
//                 placeholder="Hello, I'd like to enquire about..."
//                 className="w-full mt-1 p-3 border border-gray-400 focus:border-none rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             {/* Button */}
//             <button
//               type="submit"
//               className="w-full bg-gray-800 text-white py-3 rounded-md text-sm font-medium hover:bg-gray-900 transition"
//             >
//               Reach out today
//             </button>
//           </form>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;

"use client";

import React from "react";
import { motion } from "framer-motion";

/* ---------------- ANIMATION ---------------- */

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ---------------- COMPONENT ---------------- */

const ContactSection = () => {
  return (
    <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 bg-gradient-to-r from-blue-700 to-green-500">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center">
        {/* LEFT SIDE */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-white"
        >
          <span className="bg-black/30 text-xs sm:text-sm px-3 py-1 rounded-full">
            Contact
          </span>

          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-3 sm:mt-4 leading-tight">
            Is your STP Facing compliance issues, odour, or high operating
            costs?
          </h2>

          <p className="mt-3 sm:mt-4 text-blue-100 text-sm sm:text-base md:text-lg max-w-lg">
            Whether you're planning a new STP or upgrading an existing one to
            NaturalSTP®. We've got you covered.
          </p>

          {/* CONTACT INFO */}
          <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg">
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-blue-100 break-all">Info@ecoparadigm.com</p>
            </div>

            <div>
              <p className="font-semibold">Whatsapp</p>
              <p className="text-blue-100">+91 9448077904</p>
            </div>

            <div>
              <p className="font-semibold">Office</p>
              <p className="text-blue-100 max-w-md text-xs sm:text-sm md:text-base">
                968/A, 11th Main Rd, Vijaya Bank Layout, Bilekahalli, Bengaluru,
                Karnataka 560076
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-xl p-5 sm:p-6 md:p-8"
        >
          <form className="space-y-4">
            {/* Name */}
            <div>
              <label className="text-xs sm:text-sm font-medium">
                Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="John Smith"
                className="w-full mt-1 p-2.5 sm:p-3 border border-gray-400 rounded-md text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-xs sm:text-sm font-medium">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="johnsmith@gmail.com"
                className="w-full mt-1 p-2.5 sm:p-3 border border-gray-400 rounded-md text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-xs sm:text-sm font-medium">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="+91 789 23456x"
                className="w-full mt-1 p-2.5 sm:p-3 border border-gray-400 rounded-md text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-xs sm:text-sm font-medium">
                Message<span className="text-red-500">*</span>
              </label>
              <textarea
                rows={4}
                placeholder="Hello, I'd like to enquire about..."
                className="w-full mt-1 p-2.5 sm:p-3 border border-gray-400 rounded-md text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-2.5 sm:py-3 rounded-md text-sm font-medium hover:bg-gray-900 transition"
            >
              Reach out today
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
