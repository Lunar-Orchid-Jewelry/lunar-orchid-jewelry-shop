import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || process.env.PAGES_BASE_PATH || "",
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
