/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  experimental: {
    scrollRestoration: true,
  },
  eslint: {
    dirs: ["src"],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
