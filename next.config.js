/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    largePageDataBytes: 20000 * 100000,
  },
};

module.exports = nextConfig;
