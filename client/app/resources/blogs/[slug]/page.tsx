import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { supabase } from "@/utils/supabase";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, ChevronRight } from "lucide-react";

export const revalidate = 60; // ISR: Revalidate every 60 seconds

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  
  const { data: blog } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!blog) return {};

  const description = `Read about ${blog.title} on Ecoparadigm's knowledge center.`;

  return {
    title: `${blog.title} | Ecoparadigm Knowledge Center`,
    description: `${description} Insights from Ecoparadigm — India’s 6-time National Award-winning environmental engineering company and pioneers of NaturalSTP™.`,
    keywords: [
      blog.title,
      "NaturalSTP",
      "Ecoparadigm",
      "environmental engineering India",
      "wastewater treatment",
      "water treatment blog",
    ],
    alternates: {
      canonical: `https://ecoparadigm.in/resources/blogs/${slug}`,
    },
    openGraph: {
      title: blog.title,
      description,
      url: `https://ecoparadigm.in/resources/blogs/${slug}`,
      type: "article",
      publishedTime: blog.date,
      authors: ["Ecoparadigm"],
      images: [
        {
          url: blog.image_url || "/logo.png",
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description,
      images: [blog.image_url || "/logo.png"],
    },
  };
}

export async function generateStaticParams() {
  const { data: blogs } = await supabase.from("blogs").select("slug");
  return (blogs || []).map((b) => ({ slug: b.slug }));
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data: blog } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!blog) return notFound();

  // Format date nicely
  const formattedDate = new Date(blog.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <article className="min-h-screen bg-gray-50 flex flex-col">
      {/* JSON-LD: BlogPosting */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: blog.title,
            datePublished: blog.date,
            author: {
              "@type": "Organization",
              name: "Ecoparadigm",
              url: "https://ecoparadigm.in",
            },
            publisher: {
              "@type": "Organization",
              name: "Ecoparadigm",
              logo: {
                "@type": "ImageObject",
                url: "https://ecoparadigm.in/logo.png",
              },
            },
            description: blog.title,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://ecoparadigm.in/resources/blogs/${blog.slug}`,
            },
          }),
        }}
      />

      {/* IMMERSIVE HERO SECTION */}
      <header className="relative w-full h-[60vh] min-h-[500px] flex items-end justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={blog.image_url || "https://images.unsplash.com/photo-1573164713988-8665fc963095"} 
            alt={blog.title} 
            fill 
            className="object-cover" 
            priority
          />
        </div>
        
        {/* Gradient Overlay (Matches Homepage Aesthetics) */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#031c1c] via-[#062f2f]/80 to-black/30"></div>

        {/* Hero Content */}
        <div className="relative z-20 w-full max-w-4xl mx-auto px-6 pb-16 md:pb-24">
          <div className="flex items-center gap-4 text-green-400 mb-6 text-sm font-semibold tracking-wider uppercase">
            {blog.category && (
              <span className="flex items-center gap-1.5 bg-green-500/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-green-500/30">
                <Tag className="w-4 h-4" />
                {blog.category}
              </span>
            )}
            <span className="flex items-center gap-1.5 text-gray-300">
              <Calendar className="w-4 h-4" />
              {formattedDate}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6 drop-shadow-lg">
            {blog.title}
          </h1>

          {/* Breadcrumb back to blogs */}
          <Link href="/resources/blogs" className="inline-flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors text-sm font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to all resources
          </Link>
        </div>
      </header>

      {/* CONTENT SECTION */}
      <main className="flex-1 w-full max-w-3xl mx-auto px-6 py-16 md:py-24 bg-white md:-mt-10 relative z-30 rounded-t-3xl md:rounded-3xl shadow-xl mb-24 border border-gray-100 overflow-hidden">
        
        <div className="blog-content-area break-words w-full">
          <div 
            className="text-gray-700 text-lg leading-relaxed whitespace-normal text-justify"
            dangerouslySetInnerHTML={{ __html: (blog.content || "<p>No content provided for this blog.</p>").replace(/&nbsp;/g, ' ') }}
          />
        </div>
        
        {/* Custom Premium Typography CSS */}
        <style>{`
          .blog-content-area {
            font-family: var(--font-inter), system-ui, sans-serif;
          }
          .blog-content-area h2 {
            font-size: 2rem;
            font-weight: 800;
            color: #062f2f; /* Deep brand green */
            margin-top: 3rem;
            margin-bottom: 1.25rem;
            letter-spacing: -0.02em;
            line-height: 1.3;
          }
          .blog-content-area h3 {
            font-size: 1.5rem;
            font-weight: 700;
            color: #0a4d4d;
            margin-top: 2rem;
            margin-bottom: 1rem;
            letter-spacing: -0.01em;
          }
          .blog-content-area p {
            margin-bottom: 1.5rem;
            color: #374151;
            font-size: 1.125rem;
            line-height: 1.8;
          }
          .blog-content-area ul {
            list-style-type: none;
            padding-left: 0;
            margin-bottom: 2rem;
          }
          .blog-content-area ul li {
            position: relative;
            padding-left: 1.75rem;
            margin-bottom: 0.75rem;
            color: #4b5563;
          }
          .blog-content-area ul li::before {
            content: "•";
            color: #22c55e; /* Bright green accent */
            font-weight: bold;
            font-size: 1.5rem;
            position: absolute;
            left: 0;
            top: -5px;
          }
          .blog-content-area ol {
            list-style-type: decimal;
            padding-left: 1.5rem;
            margin-bottom: 2rem;
            color: #4b5563;
          }
          .blog-content-area ol li {
            margin-bottom: 0.75rem;
          }
          .blog-content-area img {
            border-radius: 1rem;
            margin-top: 2.5rem;
            margin-bottom: 2.5rem;
            width: 100%;
            height: auto;
            box-shadow: 0 10px 30px -10px rgba(0,0,0,0.15);
            border: 1px solid #f3f4f6;
          }
          .blog-content-area blockquote {
            border-left: 4px solid #22c55e;
            padding-left: 1.5rem;
            font-style: italic;
            color: #062f2f;
            font-weight: 500;
            font-size: 1.25rem;
            margin-top: 2.5rem;
            margin-bottom: 2.5rem;
            background: linear-gradient(to right, #f0fdf4, transparent);
            padding: 1.5rem;
            border-radius: 0 1rem 1rem 0;
          }
          .blog-content-area a {
            color: #16a34a;
            text-decoration: none;
            font-weight: 600;
            border-bottom: 2px solid transparent;
            transition: all 0.2s ease;
          }
          .blog-content-area a:hover {
            border-bottom-color: #16a34a;
            color: #15803d;
          }
        `}</style>

        {/* BOTTOM CTA */}
        <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold text-[#062f2f] mb-2">Interested in our solutions?</h4>
            <p className="text-gray-500">Discover how Ecoparadigm can transform your water infrastructure.</p>
          </div>
          <Link 
            href="/contact" 
            className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
          >
            Contact Us
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
    </article>
  );
}