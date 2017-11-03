/**
 * webpack.config.js
 */

const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const banner = require('./banner');
const { stripIndent } = require('common-tags');

module.exports = (env, { p: production }) => ({
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
      ...(production
        ? [
            new UglifyJSPlugin(),
            new webpack.BannerPlugin({ banner, entryOnly: true }),
          ]
        : []),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
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
  devServer: {
    hot: true,
    open: true,
    before: (_, devServer) => {
      devServer.serveMagicHtml = (req, res, next) => {
        res.end(
          stripIndent`
           <!doctype html>
           <html>
             <head>
               <meta charset="utf-8"/>
               <script type="text/javascript" charset="utf-8" src="http://localhost:8097"></script>
             </head>
             <body>
               <script type="text/javascript" charset="utf-8" src="${req.path}.js${req
            ._parsedUrl.search || ''}"></script>
             </body>
           </html>`,
        );
      };
    },
    openPage: 'webpack-dev-server/bundle',
    overlay: {
      warnings: true,
      errors: true,
    },
  },
});
