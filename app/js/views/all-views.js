/*jslint nomen: true*/
/*global $,define,require,_ */

define(['exports', 'views/all-pages'], function (exports, allPages) {
        'use strict';

        exports.render = function () {
            var $window = $(window),
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

            allPages.render('#viewport');

            $.fn.fullpage({
                autoScrolling: false,
                menu: '#menu'
            });

            $(document).ready(function () {
                setBodyBackgroundColor();
                adjustSlideHeight();
                $window.resize(adjustSlideHeight);
                $('.click-me').hover(setBodyBackgroundColor, $.noop);
            });
        };
    }
);