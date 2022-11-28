/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
    // loader: "akamai",
    // path: ''
  },
  // basePath: "/portfolio",
  // assetPrefix: "/portfolio"
}

module.exports = nextConfig
