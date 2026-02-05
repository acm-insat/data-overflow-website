import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: false,
  images: {
    unoptimized: true,

    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  output: "export",

  // Optional: This helps Next.js understand it's in a subfolder,
  // but we will handle the image paths manually to be safe.
  basePath:
    process.env.NODE_ENV === "production" ? "/data-overflow-website" : "",
};

export default nextConfig;
