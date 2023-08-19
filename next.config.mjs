import createBundleAnalyzerPlugin from '@next/bundle-analyzer'

/** @type{import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
}

const withBundleAnalyzer = createBundleAnalyzerPlugin({
  enabled: process.env.ANALYZE === 'true',
})

export default withBundleAnalyzer(config)
