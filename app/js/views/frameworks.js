/*jslint nomen: true*/
/*global $,define,require,_ */

require(['chart/framework-history', 'data/frameworks'], function (chart, frameworks) {
    var frameworksdata = frameworks.getData(),
        maxWidth = 900,
        maxHeight = 500,
        maxXCount = 8,
        maxYCount = 18,
        xBound = 220,
        yBound = 50,
        x = xBound,
        y = 10,
        xAdjustRatio = 50 / 66,
        getSize = function (xCount, yCount) {
            return {
                width: xCount / maxXCount * (maxWidth - xBound) * xAdjustRatio + xBound,
                height: yCount / maxYCount * (maxHeight - yBound - y) + yBound + y
            }
        },
        createChart = function (container, data, size) {
            chart.create({
                container: container,
                width: size.width,
                height: size.height,
                xBound: xBound,
                yBound: yBound,
                x: x,
                y: y,
                data: data
            });
        },
        size;

    createChart('#frameworks', frameworksdata.ms, {width: maxWidth, height: maxHeight});

    size = getSize(4, 6);
    createChart('#front-end', frameworksdata.frontEnd, size);

    size = getSize(6, 9);
    createChart('#test', frameworksdata.test, size);

    size = getSize(7, 5);
    createChart('#source-control', frameworksdata.sourceControl, size);

    size = getSize(4, 2);
    createChart('#ci', frameworksdata.ci, size);

    size = getSize(9, 7);
    createChart('#ide', frameworksdata.ide, size);
});
