// app/contact/page.tsx

"use client";

import React, { useEffect, useState } from "react";
import LeadModal from "@/components/form/LeadModal";

const ContactPage = () => {
  const [open, setOpen] = useState(false);
  const [hasSeen, setHasSeen] = useState(false);

  useEffect(() => {
    if (hasSeen) return;

    const handleScroll = () => {
      if (window.scrollY > 150) {
        setOpen(true);
        setHasSeen(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasSeen]);

  return (
    <main className="bg-black min-h-screen p-4">
      <LeadModal isOpen={open} onClose={() => setOpen(false)} />

      <section className="max-w-screen-2xl mx-auto min-h-screen rounded-3xl overflow-hidden relative px-10 md:px-20 py-16 flex items-center">
        {/* Glow Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-3xl md:h-192 bg-green-500/25 blur-3xl rounded-full" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,black_80%)]" />
        </div>

        {/* Content */}
        <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center w-full">
          {/* Left */}
          <div>
            <div className="inline-flex items-center px-8 py-4 rounded-full border border-white/10 bg-white/5 mb-10">
              <span className="text-xl md:text-2xl text-green-400 font-medium">
                Contact
              </span>
            </div>

            <h1 className="text-white text-5xl md:text-8xl leading-tight font-semibold tracking-tight max-w-5xl">
              Whatever the size of your challenge, we’re built to solve it.
            </h1>

            <p className="mt-10 text-lg md:text-3xl leading-relaxed text-white/55 max-w-3xl">
              Have questions, ideas, or need support? Connect with us we’re
              ready to listen and help.
            </p>

            <button
              onClick={() => setOpen(true)}
              className="mt-12 bg-green-500 hover:bg-green-400 text-black font-medium px-10 py-5 rounded-2xl text-lg md:text-2xl transition"
            >
              Talk To Our Expert
            </button>
          </div>

          {/* Right Shape */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-80 h-80">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-52 h-28 bg-white/10 rotate-45" />

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-52 h-28 bg-white/10 rotate-45" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f5] py-20 px-4">
        <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-2 gap-10">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            {/* Card 1 */}
            <div className="rounded-3xl border border-black/10 bg-white p-5 flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-green-500 flex items-center justify-center text-white text-2xl">
                ✆
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-black">Our Mail</h3>
                <p className="text-xl text-black/60 mt-1">
                  info@ecoparadigm.com
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-3xl border border-black/10 bg-white p-5 flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-green-500 flex items-center justify-center text-white text-2xl">
                ☎
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-black">
                  Phone Number
                </h3>
                <p className="text-xl text-black/60 mt-1">+91 9448077904</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-3xl border border-black/10 bg-white p-5 flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-green-500 flex items-center justify-center text-white text-2xl">
                📍
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-black">
                  Our Address
                </h3>
                <p className="text-xl text-black/60 mt-1 leading-relaxed">
                  968/A, 11th Main Rd, Vijaya Bank Layout, Bilekahalli,
                  Bengaluru, Karnataka 560076
                </p>
              </div>
            </div>

            {/* MAP */}
            <div className="rounded-3xl overflow-hidden border border-black/10 h-96">
              <iframe
                src="https://www.google.com/maps?q=Ecoparadigm+Bengaluru&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="rounded-4xl border border-black/10 bg-white p-8 md:p-12">
            <h2 className="text-4xl md:text-5xl font-semibold text-green-500 mb-10">
              Contact Information
            </h2>

            <form className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-lg text-black/60 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Jane Smith"
                  className="w-full h-14 rounded-2xl bg-black/3 px-5 outline-none text-lg"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-lg text-black/60 mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  placeholder="jane@mail.com"
                  className="w-full h-14 rounded-2xl bg-black/3 px-5 outline-none text-lg"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-lg text-black/60 mb-2">
                  Phone Number*
                </label>
                <input
                  type="text"
                  placeholder="+91 xxxxxxxx76"
                  className="w-full h-14 rounded-2xl bg-black/3 px-5 outline-none text-lg"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-lg text-black/60 mb-2">
                  Have a query?*
                </label>
                <textarea
                  rows={5}
                  placeholder="Message"
                  className="w-full rounded-2xl bg-black/3 px-5 py-4 outline-none text-lg resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full h-14 rounded-2xl bg-green-500 hover:bg-green-600 text-white text-xl font-semibold transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
