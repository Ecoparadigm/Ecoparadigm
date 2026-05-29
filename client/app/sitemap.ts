import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://ecoparadigm.in";

  const staticRoutes = [
    "",
    "/aboutus",
    "/contact",
    "/natural-stp",
    "/projects",
    "/resources/blogs",
    "/resources/our-clients",
    "/all-services/environ-audits",
    "/all-services/lake-restoration",
    "/all-services/rainwater-harvesting",
    "/all-services/solid-waste-management",
  ];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : route === "/natural-stp" ? 0.9 : 0.8,
  }));

  const blogSlugs = [
    "natural-water-treatment",
    "naturalstp-savings",
    "what-is-naturalstp",
    "wastewater-explained",
    "rainwater-harvesting",
    "zld-guide",
    "green-infrastructure",
    "climate-water",
    "future-engineering",
  ];

  const blogEntries = blogSlugs.map((slug) => ({
    url: `${baseUrl}/resources/blogs/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
