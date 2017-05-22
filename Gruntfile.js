module.exports = (grunt) => {
  // eslint-disable-next-line import/no-extraneous-dependencies
  require('time-grunt')(grunt); // eslint-disable-line global-require

  // eslint-disable-next-line import/no-extraneous-dependencies
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
