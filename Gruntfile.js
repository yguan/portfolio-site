module.exports = function (grunt) {

    grunt.initConfig({
        less: {
//            development: {
//                files: [
//                    {
//                        expand: true,     // Enable dynamic expansion.
//                        cwd: 'app/less',  // Src matches are relative to this path.
//                        src: ['*.less'],  // Actual pattern(s) to match.
//                        dest: 'app/css',  // Destination path prefix.
//                        ext: '.css'       // Dest filepaths will have this extension.
//                    }
//                ]
//            },
            production: {
                options: {
                    paths: ["app/css"],
                    yuicompress: true
                },
                src: 'app/less/*.less',
                dest: 'app/css/app-min.css'
//                files: {
//                    "path/to/result.css": "path/to/source.less"
//                }
            }
        },
        watch: {
            files: "app/less/*",
            tasks: ["less"],
            options: {
                debounceDelay: 2000
            }
        },
        requirejs: {
            dist: {
                options: {
//                    baseUrl: 'app',
//                    optimizeAllPluginResources: true,
//                    wrap: true,
//                    optimize: 'none',
                    appDir: 'app',
                    mainConfigFile: "app/js/app.js",
                    dir: 'app-built',
                    name: 'app',
                    optimizeCss: 'none',
                    findNestedDependencies: true,
                    inlineText: true
//                    stubModules: ['text']
//                    paths: {
//                        'text': 'app/js/lib/text' // relative to baseUrl
//                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:production', 'requirejs']);
};
