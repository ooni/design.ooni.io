const withCSS = require('@zeit/next-css')
const images = require('remark-images')
const emoji = require('remark-emoji')

module.exports = withCSS({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.md$/,
      use: [
        defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {
            mdPlugins: [images, emoji]
          }
        }
      ]
    })
    config.module.rules.push({
      test: /\.(otf|ttf|woff|woff2)$/,
      use: {
        loader: 'file-loader',
        options: {
          limit: 10000,
          publicPath: './',
          outputPath: 'static/',
          name: '[name].[ext]'
        }
      }
    })

    return config
  }
})
