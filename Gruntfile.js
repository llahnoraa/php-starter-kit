module.exports = function(grunt) {
  require('time-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>',
    // Modules
    sass: {
        scss : {
            options : {
                require : 'sass-globbing',
                noCache : true
            },
            files : [ {
                expand : true,
                flatten : true,
                cwd : 'scss/',
                src : ['base.scss'],
                dest : 'css/',
                ext : '.css'
            } ]
        }
    },
    cssmin : {
        dist : {
            files : {
                'css/base.min.css' : [ 'css/base.css' ]
            }
        }
    },
    // Task configuration.
    watch: {
        dist : {
            files: ['scss/**/*.scss'],
            tasks: ['sass','cssmin'],
            options: {
                livereload: true,
            },
        }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-notify');

  // Default task.
  grunt.registerTask('default', ['sass']);
  grunt.registerTask('build', ['default','cssmin']);
};
