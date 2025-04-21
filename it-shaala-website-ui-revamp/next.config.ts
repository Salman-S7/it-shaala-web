import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'itshaala.com',
        pathname: '/wp-content/**',

      },
      {
        protocol: 'https',
        hostname: 'i0.wp.com',
        pathname: '/itshaala.com',
      },
    ],
  },
};

export default nextConfig;
