"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import LeadModal from "@/components/form/LeadModal";
import HeroSection from "@/components/projects/HeroSection";
import Testimonials from "@/components/rainwaterharvesting/Testimonials";
import FAQSection from "@/components/Faq";

const services = [
  {
    title: "Waste Water Treatment",
    desc: "Zero power, zero chemicals, low-maintenance systems.",
    img: "/services/water.jpg",
  },
  {
    title: "Rainwater Solutions",
    desc: "Smart harvesting and recharge systems.",
    img: "/services/rain.jpg",
  },
  {
    title: "Solid Waste Management",
    desc: "Scalable waste-to-resource infrastructure.",
    img: "/services/waste.jpg",
  },
  {
    title: "Lake Rejuvenation",
    desc: "End-to-end ecosystem restoration.",
    img: "/services/lake.jpg",
  },
];

const stats = [
  {
    num: "80+",
    title: "Billion Litres Treated",
    img: "/about/lake.jpg",
  },
  {
    num: "600+",
    title: "Projects Delivered",
    img: "/about/projects.jpg",
  },
  {
    num: "324+",
    title: "Crores Saved",
    img: "/about/rain.jpg",
  },
];

export default function Page() {
  const [open, setOpen] = useState(false);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    if (seen) return;

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setOpen(true);
        setSeen(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [seen]);

  return (
    <div className="bg-neutral-100 text-black">
      <LeadModal isOpen={open} onClose={() => setOpen(false)} />

      <main className="max-w-screen-2xl mx-auto px-4 md:px-6 py-8 space-y-24">
        {/* HERO */}
        <section className="grid lg:grid-cols-3 gap-6 items-stretch">
          {/* Left */}
          <div className="lg:col-span-1 flex flex-col justify-center rounded-3xl bg-white p-8 md:p-10 shadow-sm">
            <h1 className="text-4xl md:text-6xl xl:text-7xl font-semibold leading-tight tracking-tight">
              <span className="text-blue-600">We solve your</span>
              <br />
              <span className="text-green-500">environmental</span>
              <br />
              <span className="text-blue-600">challenges</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-black/70">
              Full Spectrum Environmental Solutions
            </p>

            <button
              onClick={() => setOpen(true)}
              className="mt-8 w-fit rounded-2xl bg-black text-white px-6 py-3 text-base md:text-lg hover:bg-black/85 transition"
            >
              Talk to Our Expert
            </button>
          </div>

          {/* Right Grid */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {services.map((item, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-3xl bg-white shadow-sm group"
              >
                <div className="relative h-56 md:h-64">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="bg-blue-700 text-white p-5 flex justify-between gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-white/85 mt-2">
                      {item.desc}
                    </p>
                  </div>

                  <div className="shrink-0 w-12 h-12 rounded-full border border-white flex items-center justify-center text-xl">
                    →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TRUSTED BY */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <p className="text-lg md:text-2xl font-medium">
              Trusted by 500+ Global Companies and Changemakers
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-black/40 text-sm"
              >
                Logo {i + 1}
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="space-y-10">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <p className="text-lg md:text-xl font-medium">About Us</p>
              </div>

              <h2 className="text-3xl md:text-5xl xl:text-6xl font-semibold leading-tight">
                We are a{" "}
                <span className="text-green-500">
                  6-time National Award winning
                </span>{" "}
                Environmental Engineering consultancy.
              </h2>
            </div>

            <div className="flex items-center">
              <p className="text-base md:text-xl text-black/65 leading-relaxed">
                We engineer wastewater treatment, rainwater harvesting,
                sustainability systems, and compliance-driven infrastructure for
                homes, industries, and corporates.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((item, i) => (
              <div
                key={i}
                className="relative h-72 md:h-80 rounded-3xl overflow-hidden"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />

                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <p className="text-5xl md:text-6xl font-semibold">
                    {item.num}
                  </p>

                  <p className="mt-2 text-xl md:text-2xl font-medium">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 rounded-2xl border border-black text-base md:text-lg">
              What We Offer
            </button>

            <button
              onClick={() => setOpen(true)}
              className="px-6 py-3 rounded-2xl bg-lime-400 text-base md:text-lg font-medium"
            >
              Free Preliminary Consultation
            </button>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection />

        {/* Existing Components */}
        <HeroSection />
        <Testimonials />
      </main>
    </div>
  );
}