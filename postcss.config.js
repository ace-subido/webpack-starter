const DEBUG = process.env.NODE_ENV !== "production";

module.exports = {
  syntax: "postcss-scss",
  plugins: [
    require("autoprefixer"),
    require("postcss-preset-env")()
  ].concat(!DEBUG ? [
    require('cssnano')({ preset: 'default' })
  ] : [])
};
