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
            xBound = config.xLeftBound + config.xRightBound,
            yearsSeries,
            durationSeries;

        chart.setBounds(config.xLeftBound, config.yTopBound, config.width - xBound, config.height - yBound)
        xAxisYear = chart.addCategoryAxis('x', ['year']);
        yAxisName = chart.addCategoryAxis('y', 'name');
        xAxisDuration = chart.addMeasureAxis('x', 'duration');

//        yAxisName.addGroupOrderRule('year');

//        chart.assignColor('Used in year', 'orange', 'orange', 1);
//        chart.assignColor('Used number of years', '#9500bc', '#9500bc', 1);
        yearsSeries = chart.addSeries('name', dimple.plot.bar, [xAxisYear, yAxisName]);
        yearsSeries.barGap = 0.2;
        durationSeries = chart.addSeries('name', dimple.plot.bubble, [xAxisDuration, yAxisName]);
        durationSeries.lineWeight = 5;
//        chart.addLegend(config.xLeftBound, 0, 290, 15, "left");
        //#c2e487,#99c0db,#fdc381,#fff08b,#c999ca
        chart.defaultColors = [
            new dimple.color("#727047"),
            new dimple.color("#aebd22"),
            new dimple.color("#00457e"),
            new dimple.color("#fe6847"),
            new dimple.color("#c2e487"),
            new dimple.color("#99c0db"),
            new dimple.color("#fdc381"),
            new dimple.color("#28b3f8"),
            new dimple.color("#c999ca")
        ];
        chart.draw();
    }


    exports.create = function (config) {
        create(config);
    };
});

