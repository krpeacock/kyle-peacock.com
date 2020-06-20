/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreateWebpackConfig = ({
  actions: { replaceWebpackConfig },
  getConfig,
}) => {
  const config = getConfig()

  config.module.rules.push({
    test: /\.worker\.js$/,
    use: { loader: 'worker-loader', options: { inline: true } },
  })

  config.output.globalObject = 'this'

  replaceWebpackConfig(config)
}
