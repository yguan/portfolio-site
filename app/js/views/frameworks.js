/*jslint nomen: true*/
/*global $,define,require,_ */

require(['chart/framework-history', 'data/frameworks'], function (chart, frameworks) {
    var frameworksdata = frameworks.getData(),
        maxWidth = 910,
        maxHeight = 500,
        maxXCount = 8,
        maxYCount = 18,
        xLeftBound = 220,
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
        createChart = function (container, data, size) {
            chart.create({
                container: container,
                width: size.width,
                height: size.height,
                xLeftBound: xLeftBound,
                xRightBound: xRightBound,
                yTopBound: yTopBound,
                yBottomBound: yBottomBound,
                data: data
            });
        },
        size;

    size = getSize(10, 10);
    createChart('#dotNet', frameworksdata.dotNet, size);

    size = getSize(7, 6);
    createChart('#dotNetBased', frameworksdata.dotNetBased, size);

    size = getSize(9, 4);
    createChart('#database', frameworksdata.database, size);

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
