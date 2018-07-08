const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { ANALYZE } = process.env;
const withSass = require('@zeit/next-sass')

const env = require('./src/logic/envConfig/web/config')

module.exports = withSass({
  publicRuntimeConfig: { // Will be available on both server and client
    ...env
  },
  webpack: function(config) {
    if (ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: 8888,
          openAnalyzer: true,
        })
      );
    }
    config.module.rules.push(
      { test: /\.(ttf|eot|png|gif|woff|svg)$/, loader: 'file-loader' }
    )
    return config;
  },
});
