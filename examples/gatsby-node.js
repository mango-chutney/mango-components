// @flow

/* eslint-env node */

const systemPath = require('path');
const { copy: copyFile } = require('fs-extra');
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

// Copy CircleCI configuration to deploy dir so that it ends up in the gh-pages
// branch.  Otherwise, pushes to that branch won't be ignored by CircleCI.  Note
// that you need to run `gh-pages` with the --dotfiles flag for this to be
// copied.
exports.onPostBuild = () =>
  copyFile(
    systemPath.resolve(systemPath.join(__dirname, '..', '.circleci')),
    systemPath.resolve(systemPath.join(__dirname, 'public', '.circleci')),
  );
