# Webpack Starter

Inspired by [rstacruz/webpack-starter-kit](https://github.com/rstacruz/webpack-starter-kit) and [these](https://hackernoon.com/a-tale-of-webpack-4-and-how-to-finally-configure-it-in-the-right-way-4e94c8e7e5c1) [posts](https://medium.freecodecamp.org/how-to-develop-react-js-apps-fast-using-webpack-4-3d772db957e4).

This is my baseline Webpack-based project. Takes HTML, CSS, and JS files in `src`, compiles them and puts them inside `dist` using Webpack. Gives you these basic things right out of the box:

- Javascript ES6 (Babel)
- SASS
- Autoprefixed and Compression CSS files (PostCSS, cssnano)
- Development Server with Automatic Browser Reload (WebpackDevServer)
- Starter HTML template (HtmlWebpackPlugin, inject: true)
- Images and Fonts
- ESLint and Stylelint

## Installation

Get npm and Yarn. Then download the files into your projects:

```sh
curl -L "https://github.com/ace-subido/webpack-starter/archive/master.tar.gz" | tar xz
mv webpack-starter-master/{yarn.lock,package.json,postcss.config.js,webpack.config.js,.stylelintrc,src/assets,src/css,src/js,src/html} .
rm -rf webpack-starter-master
```

## Extras

Some additional things you can find on this repo

### Publishing to `gh-pages`

- Visit the `publishing` branch

### Adding React

```
yarn add react
yarn add babel-cli babel-preset-react -D
```
