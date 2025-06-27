/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '',
  // For GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : undefined,
  trailingSlash: true,
}

module.exports = nextConfig 