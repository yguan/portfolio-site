/*jslint nomen: true*/
/*global $,define,require,_ */

require(['chart/framework-history', 'data/frameworks'], function (chart, frameworks) {
    var frameworksdata = frameworks.getData(),
        maxWidth = 930,
        maxHeight = 500,
        maxXCount = 8,
        maxYCount = 18,
        xLeftBound = 240,
        xRightBound = 30,
        xBound = xLeftBound + xRightBound,
        yTopBound = 45,
        yBottomBound = 50,
        yBound = yTopBound + yBottomBound,
        xAdjustRatio = 50 / 66,
        getSize = function (xCount, yCount) {
            return {
                width: xCount / maxXCount * (maxWidth - xBound ) * xAdjustRatio + xBound,
                height: yCount / maxYCount * (maxHeight - yBound) + yBound
            }
        },
        createChart = function (container, framework) {
            var size = getSize(framework.years.length, framework.names.length);
            chart.create({
                container: container,
                width: size.width,
                height: size.height,
                xLeftBound: xLeftBound,
                xRightBound: xRightBound,
                yTopBound: yTopBound,
                yBottomBound: yBottomBound,
                data: framework.data
            });
        },
        chartConfigs = [
            {container: '#languages', framework: frameworksdata.languages },
            {container: '#dotNet', framework: frameworksdata.dotNet },
            {container: '#dotNetBased', framework: frameworksdata.dotNetBased },
            {container: '#database', framework: frameworksdata.database },
            {container: '#frontEnd', framework: frameworksdata.frontEnd },
            {container: '#test', framework: frameworksdata.test },
            {container: '#sourceControl', framework: frameworksdata.sourceControl },
            {container: '#ci', framework: frameworksdata.ci },
            {container: '#ide', framework: frameworksdata.ide }
        ];

    _.each(chartConfigs, function (chartConfig) {
        createChart(chartConfig.container, chartConfig.framework);
    });
});
