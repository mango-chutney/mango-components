/* eslint-env node */

module.exports = api => {
  api.cache(true);

  return {
    extends: '../babel.config.js',
  };
};
