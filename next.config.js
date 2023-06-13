/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    scrollRestoration: true,
  },
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["next-mymark-cdn.joytech.store", "mymarkcdn.joytech.store"],
    remotePatterns: [
      {
        // The `src` property hostname must end with `.example.com`,
        // otherwise the API will respond with 400 Bad Request.
        protocol: "https",
        hostname: "**.example.com",
      },
    ],
  },
  compiler: {
    styledComponents: false,
    removeConsole: process.env.REMOVE_CONSOLE === "true" ? true : false,
  },
  env: {
    reactStrictMode: true,
    APP_BASE_URL: process.env.APP_BASE_URL,
    APP_BASE_IDENTITY_URL: process.env.APP_BASE_IDENTITY_URL,
  },
};

module.exports = nextConfig;
