/*jslint nomen: true*/
/*global $,define,require,d3,_ */

define(function (require, exports, module) {
    'use strict';

    function create(config, data) {
        var svg = dimple.newSvg(config.container, config.width, config.height),
            chart = new dimple.chart(svg, config.data);

        chart.setBounds(config.xBound, 0, config.width - config.xBound, config.height - config.yBound)
        chart.addCategoryAxis('x', ['year']);
        chart.addCategoryAxis('y', 'name');
        chart.addSeries('Framework used', dimple.plot.bar);
        chart.defaultColors = [
            new dimple.color("orange")
        ],
//        chart.addLegend(240, 10, 330, 20, 'right');
        chart.draw();
    }


    exports.create = function (config) {
        create(config);
    };
});

