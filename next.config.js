const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    additionalData: '@import "@/styles/global-layout.scss";',
  },
}

module.exports = nextConfig
