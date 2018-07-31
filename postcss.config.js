module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    require('autoprefixer'),
    require('cssnano')({ preset: 'default' }),
    require('postcss-preset-env')
  ]
};
