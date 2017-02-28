/*
 * grunt/scsslint.js
 */

module.exports = {
  allFiles: [
    '<%= src %>/scss/**/*.scss',
  ],
  options: {
    config: '.scss-lint.yml',
    colorizeOutput: true,
  },
};
