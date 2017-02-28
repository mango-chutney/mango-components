/*
 * grunt/webpack.js
 */

const HTMLWebpackPlugin = require('html-webpack-plugin');

const development = {
  entry: '<%= src %>/js/examples/index.js',
  output: {
    path: '<%= dest %>/js',
    filename: 'main.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'babel-loader',
        options: {
          compact: false,
          presets: [
            ['latest', {
              es2015: {
                loose: true,
                modules: false,
              },
            }],
            ['env', {
              targets: {
                browsers: ['last 2 versions'],
              },
              debug: false,
              loose: true,
              modules: false,
              useBuiltIns: true,
            }],
            'react',
            'react-optimize',
            'stage-2',
          ],
        },
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/html/index.html',
      filename: '../index.html',
    }),
  ],
  stats: {
    colors: true,
    modules: false,
    reasons: true,
  },
  watch: true,
  keepalive: false,
};

module.exports = { development };
