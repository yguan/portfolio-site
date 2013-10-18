/*jslint nomen: true*/
/*global $,define,require,_ */

define(
    [
        'exports',
        'lib/text!template/home.tpl',
        'lib/text!template/summary.tpl',
        'lib/text!template/projects.tpl',
        'lib/text!template/skills.tpl',
        'lib/text!template/experience.tpl',
        'lib/text!template/education.tpl',
        'views/frameworks'
    ],
    function (exports, homeTpl, summaryTpl, projectsTpl, skillsTpl, experienceTpl, educationTpl, frameworks) {
        'use strict';

        exports.render = function (container) {
            var $container = $(homeTpl);

            $container.find('[data-anchor=summary]').append(summaryTpl);
            $container.find('[data-anchor=projects]').append(projectsTpl);
            $container.find('[data-anchor=skills]').append(skillsTpl);
            $container.find('[data-anchor=experience]').append(experienceTpl);
            $container.find('[data-anchor=education]').append(educationTpl);
            $(container).append($container);

            frameworks.render();
        };
    }
);