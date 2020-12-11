
'use strict';

module.exports = function (grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    run: {
      tests: {
        cmd: 'npm',
        args: [
          'run',
          'test'
        ]
      },
      coverage: {
        cmd: 'npm',
        args: [
          'run',
          'coverage'
        ]
      }, 
      install: {
        cmd: 'npm', 
        args: [ 
          'install'
        ]
      }
    }
});

  grunt.loadNpmTasks('grunt-run');
  grunt.registerTask('test', ['run:tests']);
  grunt.registerTask('coverage', ['run:coverage']);
  grunt.registerTask('install', ['run:install']);
};
