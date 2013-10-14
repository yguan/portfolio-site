module.exports = function (grunt) {

    grunt.initConfig({
        requirejs: {
            compile: {
                options: {
//                    baseUrl: 'app',
//                    optimizeAllPluginResources: true,
//                    inlineText: true,
                    appDir: 'app',
                    mainConfigFile: "app/js/app.js",
                    dir: 'app-built',
                    name: 'app'
                }
            }
        }
    })
    ;

    grunt.loadNpmTasks('grunt-contrib-requirejs');
//    grunt.loadNpmTasks('grunt-connect');
//    grunt.loadNpmTasks('grunt-bg-shell');
////	grunt.registerTask('default', 'connect:tests bgShell:runNode');
//	grunt.registerTask('startTestServer', 'connect:tests');
//	grunt.registerTask('startSeleniumServer', 'bgShell:startSeleniumServer');
//	grunt.registerTask('runTests', 'bgShell:runTests');
}
;
