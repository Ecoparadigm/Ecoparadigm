"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

type Blog = {
  id?: string;
  slug: string;
  title: string;
  date: string;
  category?: string;
  img?: string;
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemStagger = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } },
};

export default function KnowledgeCenter({ initialBlogs }: { initialBlogs: Blog[] }) {
  const [search, setSearch] = useState("");

  const filteredBlogs = initialBlogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section className="bg-white px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 py-16 md:py-24 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* TOP */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-50 border border-green-100 text-green-700 font-semibold text-sm mb-4">
              Resources & Insights
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight tracking-tight">
              Knowledge Center
            </h1>
          </div>

          <div className="relative w-full md:w-[320px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 h-[52px] rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 focus:bg-white focus:ring-4 focus:ring-green-500/10 focus:border-green-500 focus:outline-none transition-all duration-300 shadow-sm"
            />
          </div>
        </motion.div>

        {/* GRID */}
        {filteredBlogs.length > 0 ? (
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          >
            {filteredBlogs.map((blog, index) => (
              <motion.div variants={itemStagger} key={index}>
                <Link href={`/resources/blogs/${blog.slug}`}>
                  <div className="group cursor-pointer bg-white border border-gray-100 rounded-3xl p-4 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-2 h-full flex flex-col">
                    <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-5">
                      <Image
                        src={blog.img}
                        alt={blog.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="flex-1 flex flex-col px-2 pb-2">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="w-8 h-[2px] bg-green-500 rounded-full"></span>
                        <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">{blog.date}</p>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300 leading-snug">
                        {blog.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-gray-500 text-lg">No articles found matching "{search}".</p>
          </div>
        )}
      </div>
    </section>
  );
}
