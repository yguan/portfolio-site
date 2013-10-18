/*jslint nomen: true*/
/*global $,define,require,_ ,doT*/

define(
    [
        'exports',
        'lib/doT',
        'lib/text!template/reading-list.tpl',
        'data/reading-list'
    ],
    function (exports, doT, readingListTpl, readingList) {
        'use strict';

        exports.render = function (container) {
            var $container = $(container),
                templateFn = doT.template(readingListTpl),
                html = templateFn(readingList.getData());

            $container.append(html);
        };
    }
);