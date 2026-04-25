"use client";

import Image from "next/image";

const logos = [
  "https://images.unsplash.com/photo-1496200186974-4293800e2c20?q=80&w=1032&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1760138270903-d95903188730?q=80&w=870&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1659893982146-b5151a13f1ff?q=80&w=862&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1662052955098-042b46e60c2b?q=80&w=862&auto=format&fit=crop",
  "https://plus.unsplash.com/premium_photo-1669075651475-5cba57c03b8c?q=80&w=580&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1496200186974-4293800e2c20?q=80&w=1032&auto=format&fit=crop",
];

export default function SupportersTicker() {
  return (
    <section className="py-10 sm:py-10 md:py-16 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 overflow-hidden bg-[#062f2f]">
      {/* Heading */}
      <div className="flex items-center gap-2 mb-6 sm:mb-8 md:mb-10 max-w-lg">
        <p className="text-sm sm:text-base md:text-lg text-gray-200">
          Trusted globally by State Governments, Fortune 500 companies, and 500+
          clients across 23 Indian states and 12 countries.
        </p>
      </div>

      {/* 🔥 Ticker Wrapper */}
      <div className="relative w-full overflow-hidden mask-fade">
        <div className="flex gap-10 sm:gap-14 md:gap-20 lg:gap-24 animate-marquee hover:[animation-play-state:paused]">
          {/* Duplicate for infinite loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[90px] sm:min-w-[110px] md:min-w-[120px]"
            >
              <Image
                src={logo}
                alt="supporter"
                width={120}
                height={60}
                className="object-contain w-[80px] sm:w-[100px] md:w-[120px] h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
