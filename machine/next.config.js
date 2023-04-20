/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    largePageDataBytes: 1800 * 1000,
  },
}

module.exports = nextConfig
