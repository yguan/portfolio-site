/*jslint nomen: true*/
/*global $,define,require,_ */

define(['exports', 'views/all-pages'], function (exports, allPages) {
        'use strict';

        function getHorizontalMapPosition(numberOfStages) {
            var positions = [],
                counter = 1;
            while (counter <= numberOfStages) {
                positions.push({v: 1, h: counter});
                counter = counter + 1;
            }
            return positions;
        }

        exports.render = function () {
            allPages.render('#viewport');

            $('#stages').fullContent({
                children: '.stage',
                mapPosition: getHorizontalMapPosition(7),
                stageStart: 1,
                idComplement: 'page_'
            });
        };
    }
);