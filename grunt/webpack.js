/*
 * grunt/webpack.js
 */

// eslint-disable-next-line import/no-extraneous-dependencies
const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const development = {
  entry: '<%= src %>/js/examples/index.js',
  output: {
    path: path.resolve('<%= dest %>/js'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: {
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
  cache: true,
  watch: true,
  keepalive: false,
};

module.exports = { development };
