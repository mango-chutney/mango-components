/* eslint-env node */

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const banner = require('./banner');

module.exports = (env, argv) => {
  const production = !process.env.WEBPACK_SERVE && !argv.d;

  return {
    ...{
      entry: path.resolve(__dirname, './index.js'),
      output: {
        filename: 'bundle.js',
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            include: [
              path.resolve(__dirname, './components'),
              path.resolve(__dirname, './routes.js'),
              path.resolve(__dirname, './containers'),
              path.resolve(__dirname, './store'),
              path.resolve(__dirname, './reducers'),
              path.resolve(__dirname, './index.js'),
              path.resolve(__dirname, './../src'),
            ],
            use: [
              {
                loader: 'babel-loader',
                query: {
                  babelrc: false,
                  compact: false,
                  presets: [
                    [
                      '@babel/preset-env',
                      {
                        debug: false,
                        loose: true,
                        modules: false,
                        useBuiltIns: 'entry',
                      },
                    ],
                    '@babel/preset-stage-2',
                    '@babel/react',
                    '@babel/flow',
                  ],
                  plugins: [
                    ['styled-components', { ssr: true, displayName: false }],
                  ],
                },
              },
            ],
          },
        ],
      },
      plugins: [
        new webpack.EnvironmentPlugin({
          ...(!production ? { NODE_ENV: 'development' } : {}),
        }),
        ...(production
          ? [new webpack.BannerPlugin({ banner, entryOnly: true })]
          : [new HtmlWebpackPlugin()]),
      ],
      resolve: {
        alias: {
          'mango-components': path.resolve(__dirname, './../src/index.js'),
          react: path.resolve(__dirname, './node_modules/react'),
          'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
        },
      },
      target: 'web',
    },
    ...(!production
      ? {
          devtool: 'source-map',
          watch: true,
        }
      : {}),
    mode: production ? 'production' : 'development',
    serve: {
      open: true,
    },
  };
};
