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

        var $container = $(homeTpl),
            $window = $(window),
            adjustSlideHeight = function () {
                $('.content').css('height', $window.height() - 150);
            },
            colors = ['orange', 'yellowgreen', 'black', '#3879d9', '#df6229', '#e9672b', '#d9d1be', '#16a085', '#444444'],
            setBodyBackgroundColor = function () {
                var randomIndex = Math.floor(Math.random() * 10 + 1) % colors.length;
                $('body').css('background-color', colors[randomIndex])
            };

        $container.find('[data-anchor=summary]').append(summaryTpl);
        $container.find('[data-anchor=projects]').append(projectsTpl);
        $container.find('[data-anchor=skills]').append(skillsTpl);
        $container.find('[data-anchor=experience]').append(experienceTpl);
        $container.find('[data-anchor=education]').append(educationTpl);
        $('#viewport').append($container);

        $(document).ready(function () {
            setBodyBackgroundColor();
            adjustSlideHeight();
            $window.resize(adjustSlideHeight);
        });

        $.fn.fullpage({
            autoScrolling: false,
            menu: '#menu'
        });

        require(['views/frameworks'], function (chart, frameworks) {});
    }
);