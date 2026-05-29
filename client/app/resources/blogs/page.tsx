import { Metadata } from "next";
import KnowledgeCenter from "@/components/blogs/KnowledgeCenter";
import CTASection from "@/components/blogs/CTASection";

export const metadata: Metadata = {
  title:
    "Knowledge Center \u2014 Water Treatment & Environmental Engineering Insights | Ecoparadigm",
  description:
    "Explore Ecoparadigm\u2019s knowledge center for expert insights on NaturalSTP\u2122, wastewater treatment, rainwater harvesting, lake restoration, zero liquid discharge (ZLD), green infrastructure and the future of environmental engineering in India.",
  keywords: [
    "NaturalSTP blog",
    "water treatment articles India",
    "environmental engineering blog",
    "rainwater harvesting guide",
    "zero liquid discharge ZLD",
    "lake restoration insights",
    "wastewater treatment explained",
    "green infrastructure blog",
    "Ecoparadigm knowledge center",
    "sustainable water management articles",
  ],
  alternates: {
    canonical: "https://ecoparadigm.in/resources/blogs",
  },
  openGraph: {
    title:
      "Knowledge Center | Water & Environmental Engineering Blogs \u2014 Ecoparadigm",
    description:
      "Expert articles on NaturalSTP\u2122, wastewater treatment, rainwater harvesting, lake restoration, ZLD and green infrastructure by Ecoparadigm.",
    url: "https://ecoparadigm.in/resources/blogs",
    type: "website",
  },
  twitter: {
    title: "Ecoparadigm Knowledge Center | Water & Environmental Insights",
    description:
      "Blogs on NaturalSTP\u2122, wastewater treatment, rainwater harvesting, ZLD and more by India\u2019s award-winning environmental engineers.",
  },
};

import { supabase } from "@/utils/supabase";

export default async function BlogsPage() {
  const { data: blogs } = await supabase
    .from("blogs")
    .select("*")
    .order("created_at", { ascending: false });

  // Map database properties to what the KnowledgeCenter expects
  const formattedBlogs = (blogs || []).map(b => ({
    id: b.id,
    slug: b.slug,
    title: b.title,
    date: b.date,
    category: b.category,
    img: b.image_url || "https://images.unsplash.com/photo-1573164713988-8665fc963095"
  }));

  return (
    <>
      <KnowledgeCenter initialBlogs={formattedBlogs} />
      <CTASection />
    </>
  );
}
