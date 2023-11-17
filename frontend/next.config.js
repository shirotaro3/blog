/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  experimental: {
    scrollRestoration: true,
  },
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID: process.env.GOOGLE_MEASUREMENT_ID,
  },
}

module.exports = nextConfig
