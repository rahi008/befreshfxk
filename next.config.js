/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  assetPrefix: isProd ? "/fxnew/" : "",
  images: {
    domains: ["localhost", "befreshfx.com", "/"],
  },
};

module.exports = nextConfig;
