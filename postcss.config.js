const DEBUG = process.env.WEBPACK_MODE !== "production";

module.exports = {
  syntax: "postcss-scss",
  plugins: [
    require("autoprefixer"),
  ].concat(DEBUG ? [
    require("postcss-preset-env")()
  ] : [
    require('cssnano')({ preset: 'default' }),
    require("postcss-preset-env")()
  ])
};
