module.exports = function(grunt) {

  require('time-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    injector: {
      options: {
        template: 'www/index.html',
      },
      dev: {
        files: {
          'www/index.html': [
            'bower.json', 
            'www/app.js', 
            'www/**/*.module.js', 
            'www/**/*.config.js', 
            'www/**/*.controller.js', 
            'www/**/*.factory.js', 
            '!www/**/*_test.js', 
            '!Gruntfile.js', 
            '!server.js', 
            '!bower_components/**/*', 
            '!node_modules/**/*']
        }
      },
      prod: {
        options: {
          min: true
        },
        files: {
          'www/index.html': ['www/assets/<%= pkg.minifiedPrefix %>.*']
        }
      }
    },
    jshint: {
      all: ['www/**/*.js', '!bower_components/**/*', '!node_modules/**/*', '!www/assets/**/*']
    }
  });  
  
  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-injector');
  
  grunt.registerTask('dev', ['jshint', 'injector:dev']);


};