
'use strict';

module.exports = function (grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jest: {
      options: {
        coverage: true,
        testPathPattern: /.*-test.js/
      }
    }
});

  grunt.loadNpmTasks('grunt-jest');
  grunt.registerTask('test', ['jest']);

};
