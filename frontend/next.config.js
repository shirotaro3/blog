/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  basePath: process.env.BASE_PATH,
  assetPrefix: process.env.BASE_PATH,
  publicRuntimeConfig: {
    basePath: process.env.BASE_PATH,
  },
  images: { unoptimized: true },
  experimental: {
    scrollRestoration: true,
  },
}

module.exports = nextConfig
