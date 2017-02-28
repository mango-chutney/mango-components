/*
 * grunt/mocha.js
 */

module.exports = {
  test: {
    options: {
      reporter: 'spec',
      quiet: false,
      clearRequireCache: false,
      noFail: false,
      require: ['babel-register', 'jsdom-global/register'],
    },
    src: ['./src/js/**/*.spec.js'],
  },
};
