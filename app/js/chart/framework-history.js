/*jslint nomen: true*/
/*global $,define,require,d3,_ */

define(function (require, exports, module) {
    'use strict';

    function create(config, data) {
        var svg = dimple.newSvg(config.container, config.width, config.height),
            chart = new dimple.chart(svg, config.data),
            xAxisYear,
            yAxisName,
            xAxisDuration,
            yBound = config.yTopBound + config.yBottomBound,
            xBound = config.xLeftBound + config.xRightBound;

        chart.setBounds(config.xLeftBound, config.yTopBound, config.width - xBound, config.height - yBound)
        xAxisYear = chart.addCategoryAxis('x', ['year']);
        yAxisName = chart.addCategoryAxis('y', 'name');
        xAxisDuration =chart.addMeasureAxis('x', 'duration');
        chart.assignColor('Used in year', 'orange', 'orange', 1);
        chart.assignColor('Used number of years', '#9500bc', '#9500bc', 1);
        chart.addSeries('Used in year', dimple.plot.bar, [xAxisYear, yAxisName]);
        chart.addSeries('Used number of years', dimple.plot.bubble, [xAxisDuration, yAxisName]);
        chart.addLegend(config.xLeftBound, 0 , 290, 15, "left");
        chart.draw();
    }


    exports.create = function (config) {
        create(config);
    };
});

