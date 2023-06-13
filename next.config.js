/** @type {import('next').NextConfig} */
module.exports = {
  // output: "standalone",
  reactStrictMode: true,
  images: {
    domains: ["images.prismic.io"],
    formats: ["image/avif", "image/webp"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};
