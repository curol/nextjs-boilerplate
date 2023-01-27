/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,

  // compiler: {
  //   removeConsole: {
  //     exclude: ['log'],
  //   },
  // },

  experimental: {
    appDir: true,
    // Server Components: https://beta.nextjs.org/docs/api-reference/next.config.js#servercomponentsexternalpackages
    // serverComponentsExternalPackages: ['prisma'],
    // Transplile packages: https://beta.nextjs.org/docs/api-reference/next.config.js#transpilepackages
    // transpilePackages: ['@acme/ui', 'lodash-es'],
  },
}

module.exports = nextConfig
