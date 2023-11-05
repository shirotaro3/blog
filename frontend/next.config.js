/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: {
    scrollRestoration: true,
    // swcPlugins: [['next-superjson-plugin', {}]]
  },
}

module.exports = nextConfig
