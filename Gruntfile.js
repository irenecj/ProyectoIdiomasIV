
'use strict';

module.exports = function (grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    shell: {
      tests: {
        command: 'npm test',
      }
    }
});

  grunt.loadNpmTasks('grunt-shell');

};
