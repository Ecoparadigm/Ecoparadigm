"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TrustedSection() {
  return (
    <section className="w-full py-12 sm:py-14 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-40">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-3 sm:mb-4">
            Trusted by Reputed Companies and Changemakers Globally
          </h2>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto">
            Our commitment to quality, innovation, and sustainable water
            management has been recognized by industry leaders and government
            bodies through prestigious awards and accolades.
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center max-w-5xl w-full">
            {/* LEFT IMAGE */}
            <motion.div
              className="overflow-hidden rounded-xl md:col-span-2"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/Awards/Rectangle 5402.png"
                alt="Award Ceremony"
                width={800}
                height={500}
                className="rounded-xl object-cover w-full h-[200px] sm:h-[260px] md:h-[300px] lg:h-[360px] xl:h-[420px]"
              />
            </motion.div>

            {/* RIGHT BADGE */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[260px] lg:w-[320px] lg:h-[300px] xl:w-[360px] xl:h-[320px]">
                {/* Laurel */}
                <Image
                  src="https://cdn.pixabay.com/photo/2014/03/25/16/32/laurel-wreath-297311_1280.png"
                  alt="Award"
                  fill
                  className="object-contain"
                />

                {/* TEXT */}
                <div className="absolute inset-0 flex items-center justify-center text-center px-4 sm:px-6">
                  <p className="text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-snug">
                    6 time National <br />
                    Award Winning <br />
                    Technology <br />
                    Company
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
