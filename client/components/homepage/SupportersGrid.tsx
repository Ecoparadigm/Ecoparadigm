"use client";

import Image from "next/image";

const logos = [
  "https://images.unsplash.com/photo-1496200186974-4293800e2c20?q=80&w=1032&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1760138270903-d95903188730?q=80&w=870&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1659893982146-b5151a13f1ff?q=80&w=862&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1662052955098-042b46e60c2b?q=80&w=862&auto=format&fit=crop",
  "https://plus.unsplash.com/premium_photo-1669075651475-5cba57c03b8c?q=80&w=580&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1496200186974-4293800e2c20?q=80&w=1032&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1659893982146-b5151a13f1ff?q=80&w=862&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1662052955098-042b46e60c2b?q=80&w=862&auto=format&fit=crop",
  "https://plus.unsplash.com/premium_photo-1669075651475-5cba57c03b8c?q=80&w=580&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1496200186974-4293800e2c20?q=80&w=1032&auto=format&fit=crop",
];

export default function SupportersGrid() {
  return (
    <section className="py-10 sm:py-10 md:py-16 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 2xl:px-32 overflow-hidden bg-[#062f2f]">
      {/* 🔥 Heading */}
      <div className="flex items-center gap-2 mb-6 md:mb-8">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <p className="text-base md:text-xl font-medium text-gray-200">
          Trusted by 500+ Global Companies and Changemakers
        </p>
      </div>

      {/* 🔥 Logo Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-6 sm:gap-y-8 md:gap-y-10 gap-x-4 sm:gap-x-6 md:gap-x-8 items-center justify-items-center">
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center">
            <Image
              src={logo}
              alt="supporter"
              width={160}
              height={70}
              className="object-contain h-[50px] sm:h-[55px] md:h-[65px] w-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
