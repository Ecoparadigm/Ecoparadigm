"use client";

import Image from "next/image";

export default function AwardsHighlight() {
  return (
    <section className="px-8 md:px-60 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* 🔥 LEFT SIDE (AWARD) */}
        <div className="flex justify-center">
          <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[340px]">
            {/* Laurel Image */}
            <Image
              src="https://cdn.pixabay.com/photo/2014/03/25/16/32/laurel-wreath-297311_1280.png"
              alt="Award"
              fill
              className="object-contain"
            />

            {/* Center Text */}
            <div className="absolute inset-0 flex items-center justify-center text-center px-8">
              <p className="text-gray-800 text-2xl leading-snug">
                6 time National <br />
                Award Winning <br />
                Technology <br />
                Company
              </p>
            </div>
          </div>
        </div>

        {/* 🔥 RIGHT SIDE (POINTS) */}
        <div className="space-y-8">
          <p className="text-lg md:text-2xl font-medium bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
            • 20 Years of Industry Experience
          </p>

          <p className="text-lg md:text-2xl font-medium bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
            • 600+ Successful Installations <br />
            Across India and 5 countries
          </p>

          <p className="text-lg md:text-2xl font-medium bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
            • Trusted by Leading Institutions <br />
            Companies and residences
          </p>
        </div>
      </div>
    </section>
  );
}
