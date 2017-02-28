/*
 * grunt/sass.js
 */

module.exports = {
  dist: {
    options: {
      outputStyle: 'expanded',
      includePaths: ['./node_modules/foundation-sites/scss'],
    },
    files: {
      '<%= dest %>/css/styles.css': '<%= src %>/scss/main.scss',
    },
  },
};
