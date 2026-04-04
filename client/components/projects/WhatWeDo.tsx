"use client";

import Image from "next/image";

const services = [
  {
    title: "Waste Water Treatment",
    img: "https://plus.unsplash.com/premium_photo-1682144318933-fcab743fb527?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Rainwater Harvesting",
    img: "https://plus.unsplash.com/premium_photo-1661825536186-19606cd9a0f1?q=80&w=419&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lake and Waterbody Restoration",
    img: "https://plus.unsplash.com/premium_photo-1661962514374-442d58a10c91?q=80&w=846&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Solid Waste Management",
    img: "https://images.unsplash.com/photo-1690730685007-c253cb2a5f44?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Biodiversity Assessment",
    img: "https://i.ytimg.com/vi/LWq-aLhbil4/maxresdefault.jpg",
  },
  {
    title: "Audits, Awareness and Training",
    img: "https://images.unsplash.com/photo-1608441877519-7aa279de3e7d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Climate Change and Sustainability",
    img: "https://i.ytimg.com/vi/LWq-aLhbil4/maxresdefault.jpg",
  },
  {
    title: "Consulting and Implementation",
    img: "https://plus.unsplash.com/premium_photo-1679862571153-04959fa9411d?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function WhatWeDo() {
  return (
    <section className="pt-24 pb-10 px-8 md:px-16 bg-white text-center">
      {/* 🔥 Heading with gradient */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
        What We Do
      </h2>

      {/* Subtitle */}
      <p className="text-gray-600 max-w-4xl mx-auto mb-16 text-lg">
        We design solutions for the toughest environmental problems, sustainably
        and optimally
      </p>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-20">
        {services.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center group cursor-pointer"
          >
            {/* 🔥 Bigger Circle */}
            <div className="w-36 h-36 rounded-full overflow-hidden mb-5 transition duration-300 group-hover:scale-105">
              <Image
                src={item.img}
                alt={item.title}
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>

            {/* 🔥 Title spacing + width */}
            <p className="text-md text-gray-800 max-w-[200px] leading-snug">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
