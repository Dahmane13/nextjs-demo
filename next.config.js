/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
        pathname: "/t/p/original/**",
      },
    ],
    domains: ["https://m.media-amazon.com"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
