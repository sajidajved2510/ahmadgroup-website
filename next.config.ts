import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.hygraph.com', // Added this based on your API URL
      },
      {
        protocol: 'https',
        hostname: '**.graphassets.com',
      },
      {
        protocol: 'https',
        hostname: 'zknedevbqiwefmzmvnlp.supabase.co'
      },
      {
        protocol: "https",
        hostname: "zknedevbqiwefmzmvnlp.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ]
  },
};

export default nextConfig;