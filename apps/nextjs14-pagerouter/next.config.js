/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: [
      "@washingtonpost/wpds-assets",
      "@washingtonpost/wpds-ui-kit",
    ],
  },
};

module.exports = nextConfig;
