/*jslint nomen: true*/
/*global $,define,require,d3,_ */

define(function (require, exports, module) {
    'use strict';

    function getDefaultColors() {
        var colors = ['#aebd22', '#99c0db', '#28b3f8', '#c999ca', '#ff7f0e', '#fef102', '#ef018b', '#0065a5', 'green'],// '#8dc73f'
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
            durationSeries;

        chart.setBounds(config.xLeftBound, config.yTopBound, config.width - xBound, config.height - yBound);

        xAxisYear = chart.addCategoryAxis('x', ['year']);

        yAxisName = chart.addCategoryAxis('y', 'name');
        yAxisName.showGridlines = true;
        yAxisName.addOrderRule('number of years');

        xAxisDuration = chart.addMeasureAxis('x', 'number of years');
        xAxisDuration.tickFormat = '.1f';
        xAxisDuration.showGridlines = false;

        yearsSeries = chart.addSeries('name', dimple.plot.bar, [xAxisYear, yAxisName]);
        yearsSeries.barGap = 0.2;
        durationSeries = chart.addSeries(' ', dimple.plot.bubble, [xAxisDuration, yAxisName]);
        durationSeries.lineWeight = 5;
        chart.assignColor(' ', 'red', 0.9);
        chart.defaultColors = getDefaultColors();
        //chart.addLegend(config.xLeftBound, 0, 290, 15, 'left');
        chart.draw();

        xAxisDuration.shapes.style('opacity', 0.5);
        xAxisDuration.titleShape.style('opacity', 0.5);
    }

    exports.create = function (config) {
        create(config);
    };
});

/*
 var colors = ['orange', 'yellowgreen', 'black', '#3879d9', '#df6229', '#e9672b', '#16a085', '#444444', '#a74d0f', '#007a85'];var $body = $('body');
 $.each(colors, function (index,color) {
 $('<div></div>').width(50).height(50).css('backgroundColor', color).appendTo($body);
 });
 */