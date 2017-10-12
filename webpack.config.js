/**
 * webpack.config.js
 */

const banner = `
                                                            ##
 ##############     ########    ########    #########    #########
###    ##     ##   ####   ##   ##      ##  ##      ##  ###      ###
###    ##     ##  ##      ###  ##      ##  ##      ##  ##        ##
###    ##     ##  ##      ###  ##      ##  ##      ##  ###      ###
###    ##     ##  ###########  ##      ##   #########    #########
                                                   ##        #
                                             #######
             ##                      ##
             ##                      ##
             ##                      ##
  ########   #########   ##      ##  ######   ########    #########   ##      ##
 ##          ##     ###  ##      ##  ##      ##     ###  ##       ##  ##      ##
##           ##      ##  ##      ##  ##      ##      ##  ###########  ##      ##
 ##          ##      ##  ##      ##  ##      ##      ##  ##           ##      ##
  ###        ##      ##   ###  ###    ###    ##      ##   ###     #    #########
     #####   #       #      ###         ##   #       #       #####            ##
                                                                       #######

Copyright 2017-present, Mango Chutney.
All rights reserved.
`;

const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env, { p: production }) => ({
  ...{
    name: 'client',
    entry: path.resolve(__dirname, './examples/index.js'),
    output: {
      path: path.resolve(__dirname, './build/'),
      filename: 'main.[hash].js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: [
            path.resolve(__dirname, './components'),
            path.resolve(__dirname, './examples'),
            path.resolve(__dirname, './index.js'),
          ],
          use: [
            {
              loader: 'babel-loader',
              query: {
                babelrc: false,
                compact: false,
                presets: [
                  [
                    'env',
                    {
                      debug: false,
                      loose: true,
                      modules: false,
                      usebuiltins: true,
                    },
                  ],
                  'react',
                  'flow',
                  'stage-2',
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
      new CleanWebpackPlugin([path.resolve(__dirname, './build')]),
      ...(production
        ? [
            new UglifyJSPlugin(),
            new webpack.BannerPlugin({ banner, entryOnly: true }),
          ]
        : []),
      new HTMLWebpackPlugin(),
    ],
    resolve: {
      alias: {
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
});
