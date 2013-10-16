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
            $body = $('body'),
            adjustSlideHeight = function () {
                $('.content').css('height', $window.height() - 150);
            },
            colors = ['orange', 'yellowgreen', 'black', '#3879d9', '#e9672b', '#16a085', '#444444', '#a74d0f', '#007a85'],
            setBodyBackgroundColor = function () {
                var randomIndex = Math.floor(Math.random() * 10 + 1) % colors.length,
                    color = colors[randomIndex],
                    bodyColor = $body.css('backgroundColor');

                $body.css('backgroundColor', color);
                colors.splice(randomIndex, 1);
                colors.push(bodyColor);
//                $('body').animate({ backgroundColor: color });
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
            $('.click-me').hover(setBodyBackgroundColor, setBodyBackgroundColor);
        });

        $.fn.fullpage({
            autoScrolling: false,
            menu: '#menu'
        });

        require(['views/frameworks'], function (chart, frameworks) {
        });
    }
);