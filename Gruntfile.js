// Gruntfile.js
module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Mocha
    mocha: {
      all: {
        src: ['tests/testrunner.html'],
      },
      options: {
        run: true
      }
    }
  });

  // Load grunt mocha task
  grunt.loadNpmTasks('grunt-mocha');

  grunt.registerTask('default', ['mocha']);
};


// // Old Test
// module.exports = function(grunt) {
 
//   grunt.initConfig({
//     jshint: {
//       all: ['Gruntfile.js', 'hello.js']
//     }
//   });
 
//   grunt.loadNpmTasks('grunt-contrib-jshint');
//   grunt.registerTask('default', 'jshint');
 
// };