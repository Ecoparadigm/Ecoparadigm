"use client";

import Image from "next/image";

type ProjectCardProps = {
  title: string;
  desc: string;
  img: string;
  span?: string;
};

export default function ProjectCard({
  title,
  desc,
  img,
  span = "",
}: ProjectCardProps) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden group cursor-pointer ${span}`}
    >
      <Image
        src={img}
        alt={title}
        width={800}
        height={500}
        className="w-full h-[400px] object-cover transition duration-500 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

      {/* Text */}
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-200">{desc}</p>
      </div>
    </div>
  );
}
