'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-bake');

  grunt.initConfig({
    watch: {
      compass: {
        files: 'sass/**/*.scss',
        tasks: ['compass', 'replace']
      },

      scripts: {
        files: [
          'assets/js/components/*.js',
          'assets/js/framework/*.js',
          'assets/js/lib/*.js'
        ],
        tasks: ['build']
      },

      bake: {
        files: ['templates/**/*.html'],
        tasks: 'bake:build'
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },

      all: [
        'Gruntfile.js',
        'assets/js/components/*.js'
      ]
    },

    concat: {
      components: {
        src: ['assets/js/components/*.js'],
        dest: 'assets/js/components.js'
      },
      framework: {
        src: ['assets/js/framework/*.js'],
        dest: 'assets/js/framework.js'
      },
      library: {
        src: ['assets/js/lib/single/jquery-2.1.1.js',
              'assets/js/lib/single/owl.carousel.js',
              'assets/js/lib/*.js'],
        dest: 'assets/js/lib.js'
      }
    },

    uglify: {
      dist: {
        files: {
          'assets/js/components.min.js': 'assets/js/components.js',
          'assets/js/framework.min.js': 'assets/js/framework.js',
          'assets/js/lib.min.js': 'assets/js/lib.js'
        }
      }
    },

    bake: {
      build: {
        files: {
            'index.html': 'templates/structure/index.html',
            'style-guide.html': 'templates/structure/style-guide.html',
            'layout1.html': 'templates/layout/layout1.html',
            'layout2.html': 'templates/layout/layout2.html',
            'lightbox.html': 'templates/layout/lightbox.html',
            'modal.html': 'templates/components/modal.html',
            'infobox.html': 'templates/components/infobox.html',
            'filters.html': 'templates/components/filters.html',
            'buttons.html': 'templates/components/buttons.html',
            'lightbox-item.html': 'templates/components/lightbox-item.html'
        }
      }
    },

    compass: {
      clean: {
        options: {
          clean: true
        }
      },
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },

    replace: {
      example: {
        src: ['assets/css/*.css'],
        overwrite: true,
        replacements: [{
          from: '/assets/img',
          to: '../../assets/img'
        }]
      }
    }
  });

  grunt.registerTask('build', ['compass:clean', 'compass:dist', 'jshint', 'concat', 'uglify', 'bake:build', 'replace']);
  grunt.registerTask('default', ['build']);
};
