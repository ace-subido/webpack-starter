const merge = require("webpack-merge");
const common = require("./webpack.common.js");

process.env.WEBPACK_MODE = 'production'

module.exports = merge(common, {
  mode: "production",
  devtool: "hidden-source-map"
});
