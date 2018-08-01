const merge = require("webpack-merge");
const common = require("./webpack.common.js");

process.env.WEBPACK_MODE = 'development'

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  devServer: { contentBase: "./dist" }
});
