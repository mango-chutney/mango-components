// @flow

/* eslint-env node */

const systemPath = require('path');
const { peerDependencies } = require('../package.json');

exports.onCreateWebpackConfig = ({ actions } /* : any */) => {
  actions.setWebpackConfig({
    resolve: {
      alias: Object.keys(peerDependencies)
        .map(key => ({
          [key]: systemPath.resolve(
            __dirname,
            systemPath.join('node_modules', key),
          ),
        }))
        .reduce((prev, next) => ({ ...prev, ...next }), {}),
    },
  });
};
