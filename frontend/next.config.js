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
  },
  headers: async () => {
    return [
      { source: '/:path*', headers: [{ key: 'Content-Language', value: 'ja-JA' }] },
      { source: '/:path*', headers: [{ key: 'Cache-Control', value: 'max-age=31557600' }] },
    ]
  },
}

module.exports = nextConfig
