/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'assets.mixkit.co'
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com'
      }
    ]
  }
};

module.exports = nextConfig;
