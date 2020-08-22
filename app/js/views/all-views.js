/*jslint nomen: true*/
/*global $,define,require,_ */

define(['exports', 'views/all-pages', 'lib/zenscroll'], function (exports, allPages, zenscroll) {
        'use strict';

        var pageIdPrefix = 'page_';

        function getMapPosition(numberOfStages) {
            var positions = [],
                counter = 1;
            while (counter <= numberOfStages) {
                positions.push({v: counter, h: 1});
                counter = counter + 1;
            }
            return positions;
        }

        function getMenuLis() {
            return $('#menu li');
        }

        function setInitialActiveMenuItem() {
            var $activeMenuAnchor = $('#menu a[href=" + window.location.hash + "]'),
                $activeMenuLi = $activeMenuAnchor.length > 0 ? $activeMenuAnchor.parent('li') : getMenuLis().first();
            if ($activeMenuLi) {
                $activeMenuLi.addClass('active');
            }
        }

        function getPageSelector(hash) {
            return hash.replace('#', '#' + pageIdPrefix);
        }

        function setMenuClickHandler() {
            var $menuLis = getMenuLis(),
                $anchor,
                $activeLi,
                $divToScroll;

            $menuLis.on('click', function (evt) {
                $anchor = $(evt.target);
                $activeLi = $anchor.parent('li');

                if ($activeLi.hasClass('no-action')) {
                    return;
                }
                
                $menuLis.removeClass('active');                
                $activeLi.addClass('active');
                $divToScroll = $($anchor.attr('href'));
                $('.stage').removeClass('not-visible');
                zenscroll.intoView($divToScroll.get(0));
                setTimeout(function () {
                    $divToScroll.prev().addClass('not-visible');
                }, 500);
                
            });
        }

        exports.render = function () {
            allPages.render('#viewport');
            setMenuClickHandler();
            setInitialActiveMenuItem();
        };
    }
);