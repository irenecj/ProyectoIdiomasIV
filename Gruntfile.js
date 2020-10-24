
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
      }
    }
});

  grunt.loadNpmTasks('grunt-run');
  grunt.registerTask('default', ['run:tests']);

};
