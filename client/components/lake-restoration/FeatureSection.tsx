"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TrustedSection() {
  return (
    <section className="w-full py-16 px-6 md:px-36">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Trusted by Reputed Companies and Changemakers Globally
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            Our commitment to quality, innovation, and sustainable water
            management has been recognized by industry leaders and government
            bodies through prestigious awards and accolades.
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="flex items-center justify-center">
          <div className="grid md:grid-cols-3 gap-6 items-center max-w-4xl">
            {/* LEFT IMAGE */}
            <motion.div
              className="overflow-hidden rounded-xl col-span-2"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1514820720301-4c4790309f46?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // replace with your actual image
                alt="Award Ceremony"
                width={600}
                height={400}
                className="rounded-xl object-cover"
              />
            </motion.div>

            {/* RIGHT BADGE */}
            <div className=" items-center">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
