/*jslint nomen: true*/
/*global $,define,require,_ */

define(['exports'], function (exports) {

    exports.init = function () {
        $('.expandable-label').click(function (e) {
            var expandableTargetCls = $(e.currentTarget).data('expandable');
            $('.' + expandableTargetCls).slideToggle('slow');
        });
    };
});
