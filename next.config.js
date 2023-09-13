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
}

module.exports = nextConfig
