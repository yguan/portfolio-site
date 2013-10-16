/*jslint nomen: true*/
/*global $,define,require,d3,_ */

define(function (require, exports, module) {
    'use strict';

    function getDefaultColors() {
        var colors = ['#aebd22', '#99c0db', '#28b3f8', '#c999ca', '#ff7f0e', '#fef102', '#ef018b', '#8dc73f', '#0065a5'],
            dimpleColors = [];
        _.each(colors, function (color) {
            dimpleColors.push(new dimple.color(color));
        });

        return dimpleColors;
    }

    function create(config, data) {
        var svg = dimple.newSvg(config.container, config.width, config.height),
            chart = new dimple.chart(svg, config.data),
            xAxisYear,
            yAxisName,
            xAxisDuration,
            yBound = config.yTopBound + config.yBottomBound,
            xBound = config.xLeftBound + config.xRightBound,
            yearsSeries,
            durationSeries,
            orderAxis;

        chart.setBounds(config.xLeftBound, config.yTopBound, config.width - xBound, config.height - yBound)
        xAxisYear = chart.addCategoryAxis('x', ['year']);
        yAxisName = chart.addCategoryAxis('y', 'name');
        orderAxis = chart.addMeasureAxis('x', 'order');
        orderAxis.hidden = true;
        yAxisName.addOrderRule('number of years');
        xAxisDuration = chart.addMeasureAxis('x', 'number of years');
        yearsSeries = chart.addSeries('name', dimple.plot.bar, [xAxisYear, yAxisName]);
        yearsSeries.barGap = 0.2;
        durationSeries = chart.addSeries(' ', dimple.plot.bubble, [xAxisDuration, yAxisName]);
        durationSeries.lineWeight = 5;
        chart.assignColor(' ', 'red', 0.9);
        chart.defaultColors = getDefaultColors();
        //hart.addLegend(config.xLeftBound, 0, 290, 15, "left");
        chart.draw();
    }

    exports.create = function (config) {
        create(config);
    };
});

/*
 var colors = ['#727047'];
 var $body = $('body');
 _.each(colors, function (color) {
 $body.append('<div>').css('background-color', color).width(50).height(50);
 });
 */