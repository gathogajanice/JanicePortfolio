/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    domains: ['images.unsplash.com']
  },
  experimental: {
    optimizeCss: true,
  },
  swcMinify: true,
  compiler: {
    removeConsole: false,
  },
};

module.exports = nextConfig;