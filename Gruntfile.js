
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
      }
    }
});

  grunt.loadNpmTasks('grunt-run');
  grunt.registerTask('test', ['run:tests']);
  grunt.registerTask('test', ['run:coverage']);

};
