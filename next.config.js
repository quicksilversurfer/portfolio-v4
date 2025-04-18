/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(webm|mp4)$/i,
      type: "asset/resource",
    });

    return config;
  },
};

module.exports = nextConfig;
