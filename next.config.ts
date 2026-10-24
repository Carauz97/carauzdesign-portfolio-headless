import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,

  cacheLife: {
    wordpress: {
      stale: 300,
      revalidate: 1800,
      expire: 86400,
    },
  },
  images: {
    remotePatterns: [
      new URL(
        "https://primary-production-fdfe8.up.railway.app/wp-content/uploads/**",
      ),
    ],
  },
};

export default nextConfig;
