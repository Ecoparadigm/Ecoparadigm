import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "i.ytimg.com",
      "plus.unsplash.com",
      "images.unsplash.com",
      "cdn.pixabay.com",
      "randomuser.me",
      "picsum.photos",
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
