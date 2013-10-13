/*global require */

require.config({
    baseUrl: 'js',
    paths: {
        lib: './lib',
        data: './data',
        component: './component',
        extension: './extension',
        views: './views',
        template: './views/template'
    }
});

require([
    'lib/text',
    'lib/jquery-1.9.1',
    'lib/jquery-ui-1.10.3.custom',
    'lib/jquery.fullPage',
    'lib/d3',
    'lib/lodash.underscore',
    'extension/lodash.underscore',
    'lib/doT'
], function () {
    'use strict';

    require([
        'views/all-views'
    ], function (views) {
//        samples.run();
    });
});

// python -m http.server