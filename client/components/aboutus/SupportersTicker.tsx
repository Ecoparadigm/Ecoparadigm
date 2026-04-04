"use client";

import Image from "next/image";

const logos = [
  "https://images.unsplash.com/photo-1496200186974-4293800e2c20?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1760138270903-d95903188730?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1659893982146-b5151a13f1ff?q=80&w=862&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1662052955098-042b46e60c2b?q=80&w=862&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1669075651475-5cba57c03b8c?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1496200186974-4293800e2c20?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function SupportersTicker() {
  return (
    <section className="pt-5 pb-10 px-8 md:px-20 overflow-hidden">

      {/* Heading */}
      <div className="flex items-center gap-2 mb-10">
        <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
        <p className="text-gray-700 text-lg font-semibold">Our Trusted Supporters</p>
      </div>

      {/* 🔥 Ticker Wrapper */}
      <div className="relative w-full overflow-hidden mask-fade">

        <div className="flex gap-24 animate-marquee hover:[animation-play-state:paused]">

          {/* Duplicate for infinite loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex items-center justify-center min-w-[120px]">
              <Image
                src={logo}
                alt="supporter"
                width={120}
                height={60}
                className="object-contain opacity-80 hover:opacity-100 transition"
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}