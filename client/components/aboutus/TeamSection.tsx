"use client";

import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const team = [
  {
    name: "Pravinjith KP",
    role: "Managing Director",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    name: "Naina Shah",
    role: "Director",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    name: "Padma Rao",
    role: "HR and Training",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  },
  {
    name: "Sangeetha Venkatesh",
    role: "Corporate Communication",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
  },
];

export default function TeamSection() {
  return (
    <section className="px-8 md:px-20 py-10">

      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-medium text-center mb-12">
        The Team
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {team.map((member, index) => (
          <div
            key={index}
            className="relative bg-gray-200 rounded-2xl p-6 pt-10 text-center"
          >

            {/* Profile Image */}
            <div className="w-64 h-64 mx-auto rounded-full overflow-hidden mb-6">
              <Image
                src={member.img}
                alt={member.name}
                width={150}
                height={150}
                className="w-full h-full object-cover grayscale"
              />
            </div>

            {/* Name */}
            <h3 className="text-xl font-semibold text-gray-800">
              {member.name}
            </h3>

            {/* Role */}
            <p className="text-md text-gray-600">
              {member.role}
            </p>

            {/* 🔥 Social Badge */}
            <div className="absolute bottom-0 right-0 bg-black text-green-400 px-3 py-2 rounded-tl-2xl flex gap-3 items-center">
              <FaFacebookF className="text-sm cursor-pointer hover:scale-110 transition" />
              <FaInstagram className="text-sm cursor-pointer hover:scale-110 transition" />
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}