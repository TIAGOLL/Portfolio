/** @type {import('next').NextConfig} */
const nextConfig = {}

const { withSentryConfig } = require('@sentry/nextjs');

const moduleExports = {
 // next config
};

const sentryWebpackPluginOptions = {
 // sentry config
}

const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
 enabled: process.env.ANALYZE === 'true',
})

module.exports = async (phase, { defaultConfig }) => {
 delete defaultConfig['webpackDevMiddleware'];

 return withPlugins(
     [withBundleAnalyzer],
     withSentryConfig(moduleExports, sentryWebpackPluginOptions)
 )(phase, { defaultConfig });
}