sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        uploadmeth: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
        }
    };
});
