/*
 * grunt/watch.js
 */

module.exports = {
  styles: {
    tasks: ['scss'],
    files: '<%= src %>/scss/**/*.scss',
  },
  scripts: {
    tasks: ['js'],
    files: '<%= src %>/js/**/*.js',
  },
};
