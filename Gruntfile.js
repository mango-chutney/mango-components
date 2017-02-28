module.exports = (grunt) => {
  // time how long tasks take
  require('time-grunt')(grunt); // eslint-disable-line global-require

  // grunt config
  require('load-grunt-config')(grunt, {  // eslint-disable-line global-require
    jitGrunt: {
      staticMappings: {
        scsslint: 'grunt-scss-lint',
      },
    },
    data: {
      src: './src',
      dest: './dist',
    },
  });

  grunt.registerTask('test', ['eslint', 'run:test']);
  grunt.registerTask('js', ['eslint', 'webpack']);
  grunt.registerTask('scss', ['scsslint', 'sass']);
  grunt.registerTask('default', ['clean', 'js', 'scss', 'watch']);
};
