"use client";

import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Waste Water Treatment",
    desc: "Zero Power. Zero Chemicals. Zero Hassle.",
    img: "/images/water.jpg",
  },
  {
    title: "Smart Rainwater Solutions",
    img: "/images/rain.jpg",
  },
  {
    title: "Solid Waste Management",
    img: "/images/waste.jpg",
  },
  {
    title: "Lake Rejuvenation",
    img: "/images/lake.jpg",
  },
  {
    title: "Go Net Zero",
    img: "/images/solar.jpg",
  },
];

export default function ServiceGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
      {services.map((service, i) => (
        <ServiceCard key={i} service={service} />
      ))}
    </div>
  );
}
