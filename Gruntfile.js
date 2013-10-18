module.exports = function (grunt) {

    grunt.initConfig({
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
                    findNestedDependencies: true,
                    inlineText: true
//                    stubModules: ['text']
//                    paths: {
//                        'text': 'app/js/lib/text' // relative to baseUrl
//                    }
                }
            }
        }
    })
    ;

    grunt.loadNpmTasks('grunt-contrib-requirejs');
};
