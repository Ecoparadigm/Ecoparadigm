import Image from "next/image";
import { notFound } from "next/navigation";

type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

type Blog = {
  slug: string;
  title: string;
  date: string;
  img: string;
  content: BlogBlock[];
};

const blogs: Blog[] = [
  {
    slug: "natural-water-treatment",
    title:
      "20 Years of Leadership in Biomimicry-Based Natural Water Treatment",
    date: "Oct 12, 2024",
    img: "https://images.unsplash.com/photo-1573164713988-8665fc963095",
    content: [
      {
        type: "paragraph",
        text: "For over two decades, Ecoparadigm has led innovation in sustainable water treatment using biomimicry-based solutions.",
      },
      {
        type: "heading",
        text: "What is Biomimicry?",
      },
      {
        type: "paragraph",
        text: "Biomimicry is the practice of learning from nature to solve human engineering challenges efficiently and sustainably.",
      },
      {
        type: "list",
        items: [
          "Uses natural filtration layers",
          "Consumes minimal energy",
          "Requires low maintenance",
        ],
      },
      {
        type: "heading",
        text: "Why It Matters",
      },
      {
        type: "paragraph",
        text: "As water scarcity grows globally, sustainable and cost-effective treatment systems are becoming essential.",
      },
    ],
  },

  {
    slug: "naturalstp-savings",
    title: "How NaturalSTPs Save Crores in Apartment Projects",
    date: "Oct 12, 2024",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    content: [
      {
        type: "paragraph",
        text: "NaturalSTP systems significantly reduce operational costs for residential and commercial projects.",
      },
      {
        type: "heading",
        text: "Key Benefits",
      },
      {
        type: "list",
        items: [
          "No electricity usage",
          "Minimal manpower required",
          "Long-term savings",
        ],
      },
      {
        type: "paragraph",
        text: "Over time, these systems can save crores for large-scale developments.",
      },
    ],
  },

  {
    slug: "what-is-naturalstp",
    title: "What Is NaturalSTP and How Does It Work?",
    date: "Oct 12, 2024",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    content: [
      {
        type: "paragraph",
        text: "NaturalSTP is a decentralized wastewater treatment system based on biological processes.",
      },
      {
        type: "heading",
        text: "How It Works",
      },
      {
        type: "list",
        items: [
          "Filtration through natural media",
          "Microbial breakdown of waste",
          "Zero chemical dependency",
        ],
      },
      {
        type: "paragraph",
        text: "It is eco-friendly and ideal for sustainable infrastructure.",
      },
    ],
  },

  {
    slug: "wastewater-explained",
    title: "Sustainable Wastewater Treatment Explained",
    date: "Oct 10, 2024",
    img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    content: [
      {
        type: "paragraph",
        text: "Wastewater treatment is essential for environmental sustainability.",
      },
      {
        type: "heading",
        text: "Why It’s Important",
      },
      {
        type: "list",
        items: [
          "Prevents water pollution",
          "Enables water reuse",
          "Protects ecosystems",
        ],
      },
    ],
  },

  {
    slug: "rainwater-harvesting",
    title: "Rainwater Harvesting for Smart Cities",
    date: "Oct 09, 2024",
    img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    content: [
      {
        type: "paragraph",
        text: "Rainwater harvesting helps cities become water-resilient.",
      },
      {
        type: "heading",
        text: "Advantages",
      },
      {
        type: "list",
        items: [
          "Reduces groundwater depletion",
          "Lowers water bills",
          "Supports sustainability goals",
        ],
      },
    ],
  },

  {
    slug: "zld-guide",
    title: "Zero Liquid Discharge Systems Guide",
    date: "Oct 08, 2024",
    img: "https://images.unsplash.com/photo-1497436072909-f5e4be4f6b13",
    content: [
      {
        type: "paragraph",
        text: "ZLD ensures that no liquid waste leaves the facility.",
      },
      {
        type: "heading",
        text: "Key Features",
      },
      {
        type: "list",
        items: [
          "Complete water recycling",
          "No environmental discharge",
          "Regulatory compliance",
        ],
      },
    ],
  },

  {
    slug: "green-infrastructure",
    title: "Green Infrastructure for Urban Areas",
    date: "Oct 07, 2024",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    content: [
      {
        type: "paragraph",
        text: "Green infrastructure integrates nature into urban planning.",
      },
      {
        type: "list",
        items: [
          "Improves air quality",
          "Reduces urban heat",
          "Enhances biodiversity",
        ],
      },
    ],
  },

  {
    slug: "climate-water",
    title: "Climate Change & Water Management",
    date: "Oct 06, 2024",
    img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
    content: [
      {
        type: "paragraph",
        text: "Climate change is directly impacting global water systems.",
      },
      {
        type: "list",
        items: [
          "Increased droughts",
          "Irregular rainfall",
          "Water stress in cities",
        ],
      },
    ],
  },

  {
    slug: "future-engineering",
    title: "Future of Environmental Engineering",
    date: "Oct 05, 2024",
    img: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d",
    content: [
      {
        type: "paragraph",
        text: "Environmental engineering is evolving rapidly with new technologies.",
      },
      {
        type: "list",
        items: [
          "AI-driven monitoring",
          "Smart water systems",
          "Sustainable materials",
        ],
      },
    ],
  },
];

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return notFound();

  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-12">
      <div className="max-w-3xl mx-auto">
        {/* IMAGE */}
        <div className="relative w-full h-[280px] sm:h-[350px] md:h-[420px] rounded-xl overflow-hidden mb-8">
          <Image src={blog.img} alt={blog.title} fill className="object-cover" />
        </div>

        {/* TITLE */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          {blog.title}
        </h1>

        {/* DATE */}
        <p className="text-gray-500 mb-8">{blog.date}</p>

        {/* CONTENT */}
        <div className="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
          {blog.content.map((block, index) => {
            if (block.type === "heading") {
              return (
                <h2
                  key={index}
                  className="text-xl sm:text-2xl font-semibold text-black"
                >
                  {block.text}
                </h2>
              );
            }

            if (block.type === "paragraph") {
              return <p key={index}>{block.text}</p>;
            }

            if (block.type === "list") {
              return (
                <ul key={index} className="list-disc pl-5 space-y-2">
                  {block.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              );
            }

            return null;
          })}
        </div>
      </div>
    </section>
  );
}