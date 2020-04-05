const path = require('path')
const htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js','.jsx']
  },
  plugins: [
    new htmlWebpackPlugin({
      template: require('html-webpack-template'),
      appMountId: "app"
    })
  ]
}