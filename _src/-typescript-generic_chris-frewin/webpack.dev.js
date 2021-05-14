const { HotModuleReplacementPlugin } = require('webpack')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  plugins: [new HotModuleReplacementPlugin(), new ForkTsCheckerWebpackPlugin()]
}
