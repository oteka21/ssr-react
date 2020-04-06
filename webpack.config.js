const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    filename: '[name].[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js','.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: require('html-webpack-template'),
      // inject: false,
      appMountId: 'app',
      filename: 'index.html',
      title: "My ssr app"
    })
  ],
  devServer: {
    historyApiFallback: true
  }
}