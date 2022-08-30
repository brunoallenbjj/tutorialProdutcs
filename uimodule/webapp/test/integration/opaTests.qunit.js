/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
    "use strict";

    sap.ui.require(["tutorial02/products/test/integration/AllJourneys"], function () {
        QUnit.start();
    });
});
