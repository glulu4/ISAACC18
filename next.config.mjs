/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        // hostname: "imagedelivery.net",
        hostname: "tailwindcss.com",
      },
    ],
  },
  redirects: async () => {
    return [];
  },
};

export default nextConfig;
