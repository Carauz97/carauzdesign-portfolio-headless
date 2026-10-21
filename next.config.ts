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
};

export default nextConfig;
