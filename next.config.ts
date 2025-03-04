import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["raw.githubusercontent.com"],
  },
  experimental: {
    viewTransition: true,
    webVitalsAttribution: ["CLS", "LCP"],
  },
};

export default nextConfig;
