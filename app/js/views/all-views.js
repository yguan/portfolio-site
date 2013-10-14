/*jslint nomen: true*/
/*global $,define,require,_ */

require(
    [
        'lib/text!template/home.tpl',
        'lib/text!template/summary.tpl',
        'lib/text!template/projects.tpl',
        'lib/text!template/skills.tpl',
        'lib/text!template/experience.tpl',
        'lib/text!template/education.tpl'
    ],
    function (homeTpl, summaryTpl, projectsTpl, skillsTpl, experienceTpl, educationTpl) {
        'use strict';

        var $container = $(homeTpl);

        $container.find('[data-anchor=summary]').append(summaryTpl);
        $container.find('[data-anchor=projects]').append(projectsTpl);
        $container.find('[data-anchor=skills]').append(skillsTpl);
        $container.find('[data-anchor=experience]').append(experienceTpl);
        $container.find('[data-anchor=education]').append(educationTpl);
        $('#viewport').append($container);

        $.fn.fullpage({
            autoScrolling: false,
            menu: '#menu'
        });

        require(['chart/framework-history', 'data/frameworks'], function (chart, frameworks) {
            var data = frameworks.getData(),
                maxWidth = 900,
                maxHeight = 500,
                maxXCount = 8,
                maxYCount = 18,
                xBound = 220,
                yBound = 50,
                xAdjustRatio = 50 / 66,
                getSize = function (xCount, yCount) {
                    return {
                        width: xCount / maxXCount * (maxWidth - xBound) * xAdjustRatio + xBound,
                        height: yCount / maxYCount * (maxHeight - yBound) + yBound
                    }
                },
                size;
            chart.create({
                container: '#frameworks',
                width: maxWidth,
                height: maxHeight,
                xBound: xBound,
                yBound: yBound,
                data: data.ms
            });

            size = getSize(4, 6);
            chart.create({
                container: '#front-end',
                width: size.width,
                height: size.height,
                xBound: xBound,
                yBound: yBound,
                data: data.frontEnd
            });

            size = getSize(6, 9);
            chart.create({
                container: '#test',
                width: size.width,
                height: size.height,
                xBound: xBound,
                yBound: yBound,
                data: data.test
            });

            size = getSize(7, 5);
            chart.create({
                container: '#source-control',
                width: size.width,
                height: size.height,
                xBound: xBound,
                yBound: yBound,
                data: data.sourceControl
            });

            size = getSize(4, 2);
            chart.create({
                container: '#ci',
                width: size.width,
                height: size.height,
                xBound: xBound,
                yBound: yBound,
                data: data.ci
            });

            size = getSize(9, 7);
            chart.create({
                container: '#ide',
                width: size.width,
                height: size.height,
                xBound: xBound,
                yBound: yBound,
                data: data.ide
            });
        });
    }
);