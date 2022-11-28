/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "custom",
    // path: ''
  },
  basePath: "/portfolio",
  assetPrefix: "/portfolio"
}

module.exports = nextConfig
