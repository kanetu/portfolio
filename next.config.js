/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  basePath: "/portfolio",
  assetPrefix: "/portfolio"
}

module.exports = nextConfig
