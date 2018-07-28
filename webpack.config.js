// Webpack v4
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')

const DEBUG = process.env.NODE_ENV != 'production'
const SOURCE = './src'
const DEST = './dist'

module.exports = {

  entry: {
    'assets/js/main': `${SOURCE}/js/index.js`,
    'assets/css/main': `${SOURCE}/css/index.js`
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({ filename: 'assets/css/style.[contenthash].css' }),
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/html/index.html',
      filename: 'index.html'
    }),
    new CleanWebpackPlugin('dist', {})
  ],

};
