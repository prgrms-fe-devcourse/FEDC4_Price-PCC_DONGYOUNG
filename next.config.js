const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack(config) {
    config.resolve.alias = {
      '@/styles': path.resolve(__dirname, 'src/styles'),
    }
    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/learnprogrammers/image/upload/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/learnprogrammers/image/upload/**',
      },
    ],
  },
  async redirect() {
    return [
      {
        source: '/post/:id',
        destination: '/post/:id',
        permanent: true,
      },
      {
        source: '/user/:id',
        destination: '/user/:id',
        permanent: true,
      },
      {
        source: '/post/search/:keyword',
        destination: '/post/search/:keyword',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
