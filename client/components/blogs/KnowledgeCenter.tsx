"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const blogs = [
  {
    slug: "natural-water-treatment",
    title: "20 Years of Leadership in Biomimicry-Based Natural Water Treatment",
    date: "Oct 12, 2024",
    img: "https://images.unsplash.com/photo-1573164713988-8665fc963095",
  },
  {
    slug: "naturalstp-savings",
    title: "How NaturalSTPs Save Crores in Apartment Projects",
    date: "Oct 12, 2024",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
  },
  {
    slug: "what-is-naturalstp",
    title: "What Is NaturalSTP and How Does It Work?",
    date: "Oct 12, 2024",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    slug: "wastewater-explained",
    title: "Sustainable Wastewater Treatment Explained",
    date: "Oct 10, 2024",
    img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
  },
  {
    slug: "rainwater-harvesting",
    title: "Rainwater Harvesting for Smart Cities",
    date: "Oct 09, 2024",
    img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
  },
  {
    slug: "zld-guide",
    title: "Zero Liquid Discharge Systems Guide",
    date: "Oct 08, 2024",
    img: "https://images.unsplash.com/photo-1497436072909-f5e4be4f6b13",
  },
  {
    slug: "green-infrastructure",
    title: "Green Infrastructure for Urban Areas",
    date: "Oct 07, 2024",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  },
  {
    slug: "climate-water",
    title: "Climate Change & Water Management",
    date: "Oct 06, 2024",
    img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
  },
  {
    slug: "future-engineering",
    title: "Future of Environmental Engineering",
    date: "Oct 05, 2024",
    img: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d",
  },
];

export default function KnowledgeCenter() {
  const [search, setSearch] = useState("");

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* TOP */}
        <div className="flex flex-col md:flex-row md:justify-between gap-6 mb-10">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight">
            Knowledge Center
          </h1>

          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-[300px] px-4 h-[45px] rounded-lg border border-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none focus:border-transparent transition"
          />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {filteredBlogs.map((blog, index) => (
            <Link href={`/resources/blogs/${blog.slug}`} key={index}>
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src={blog.img}
                    alt={blog.title}
                    width={400}
                    height={250}
                    className="w-full h-[240px] object-cover group-hover:scale-105 transition"
                  />
                </div>

                <div className="mt-3">
                  <p className="text-sm text-gray-500">{blog.date}</p>
                  <h3 className="mt-1 text-lg font-medium group-hover:text-green-600">
                    {blog.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
