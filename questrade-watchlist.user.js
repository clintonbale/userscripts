// ==UserScript==
// @name         Questrade Watchlist Updater
// @namespace    https://github.com/clintonbale/userscripts
// @version      1.0
// @description  Updates all Questrade watchlists periodically
// @author       clintonbale
// @match        https://my.questrade.com/trading/*
// @grant        none
// @license      MIT
// ==/UserScript==

// refresh watchlists every 5 seconds
var updateInterval = 5000;

(function($) {
    'use strict';
    setInterval(function () {
        $(".watch-list-view").each(function (i, o) {
            var scope = angular.element(o).scope();
            var snapper = scope.vmWatchListGadget || scope.vmWatchlistView;
            if (snapper && typeof snapper.snapData === "function") {
                snapper.snapData();
            }
        });
    }, updateInterval);
})(jQuery);
