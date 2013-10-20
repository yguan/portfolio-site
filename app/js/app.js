/*global require */

require.config({
    baseUrl: 'js',
    paths: {
        lib: './lib',
        data: './data',
        chart: './chart',
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
    'lib/jquery.print',
    'lib/d3',
    'lib/dimple.v1.1.1.min',
    'lib/lodash.underscore',
    'extension/lodash.underscore',
    'lib/doT'
], function () {
    'use strict';

    require(['views/all-views'], function (views) {
        views.render();
    });
});

// python -m http.server
