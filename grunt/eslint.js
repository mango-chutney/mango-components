/*
 * grunt/eslint.js
 */

module.exports = {
  tests: {
    options: {
      configFile: './.eslintrc.json',
    },
    src: ['./tests/**/*.js'],
  },
  components: {
    options: {
      configFile: './.eslintrc.json',
    },
    src: ['<%= src %>/js/**/*.js'],
  }
};
