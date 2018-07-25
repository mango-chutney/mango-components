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
              path.resolve(path.join(__dirname, 'components')),
              path.resolve(path.join(__dirname, 'routes.js')),
              path.resolve(path.join(__dirname, 'containers')),
              path.resolve(path.join(__dirname, 'store')),
              path.resolve(path.join(__dirname, 'reducers')),
              path.resolve(path.join(__dirname, 'index.js')),
              path.resolve(path.join(__dirname, '..', 'src')),
            ],
            use: [
              {
                loader: 'babel-loader',
                options: {
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
                    '@babel/react',
                    '@babel/flow',
                  ],
                  plugins: [
                    '@babel/plugin-proposal-class-properties',
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
          'styled-components': path.resolve(
            __dirname,
            './node_modules/styled-components',
          ),
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
