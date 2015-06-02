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
        tasks: ['jsbuild']
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
              'assets/js/lib/single/jquery.tooltipster.min.js',
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
            'template1.html': 'templates/layout/template1.html',
            'template2.html': 'templates/layout/template2.html',
            'template3.html': 'templates/layout/template3.html',
            'template4.html': 'templates/layout/template4.html',
            'template5.html': 'templates/layout/template5.html',
            'template6.html': 'templates/layout/template6.html',
            'template7.html': 'templates/layout/template7.html',
            'template8.html': 'templates/layout/template8.html',
            'template9.html': 'templates/layout/template9.html',
            'template10.html': 'templates/layout/template10.html',
            'template11.html': 'templates/layout/template11.html',
            'template12.html': 'templates/layout/template12.html',
            'template13.html': 'templates/layout/template13.html',
            'template14.html': 'templates/layout/template14.html',
            'lightbox.html': 'templates/layout/lightbox.html',
            'lightbox-xmas.html': 'templates/layout/lightbox-xmas.html',
            'splash.html': 'templates/layout/splash.html',
            'splash-with-menu.html': 'templates/layout/splash-with-menu.html',
            'modal.html': 'templates/components/modal.html',
            'modal-xmas.html': 'templates/components/modal-xmas.html',
            'infobox.html': 'templates/components/infobox.html',
            'filters.html': 'templates/components/filters.html',
            'buttons.html': 'templates/components/buttons.html',
            'carousel.html': 'templates/components/carousel.html',
            'lightbox-item.html': 'templates/components/lightbox-item.html',
            'layout_test.html': 'templates/layout/layout_test.html',
            'layout_test2.html': 'templates/layout/layout_test2.html',
            'contact.html': 'templates/layout/contact.html',
            'contact-xmas.html': 'templates/layout/contact-xmas.html'
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
  grunt.registerTask('jsbuild', ['jshint', 'concat', 'uglify', 'bake:build']);
  grunt.registerTask('default', ['build']);
};
