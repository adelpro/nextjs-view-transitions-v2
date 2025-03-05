import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    viewTransition: true,
    webVitalsAttribution: ["CLS", "LCP"],
  },
};

export default nextConfig;
