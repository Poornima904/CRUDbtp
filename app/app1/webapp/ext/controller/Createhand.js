// sap.ui.define([
//     "sap/m/MessageToast",
// ], function(MessageToast) {
//     'use strict';

// return {
//     createmeth: function(oEvent) {
//         debugger
//         this.loadFragment({
//             id: "Create",
//             name: "app1.ext.fragment.Createfrag",
//         }).then(function (oDialog) {
//             oDialog.open();
         
//         });
        
//     }
    
// }
// });

sap.ui.define([
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"

], function(MessageToast, Fragment,oDialog) {
    'use strict';

    return {
        createmeth: function(oEvent) {
            debugger
            this.loadFragment({
                id: "Create",
                name: "app1.ext.fragment.Createfrag"
                // controller: this // Pass the correct context
            }).then(function (oDialog) {
                debugger
                var now = new Date();
                var randomNum = '';
                randomNum += Math.round(Math.random() * 9);
                randomNum += Math.round(Math.random() * 9);
                randomNum += now.getTime();
                sap.ui.getCore().byId("Create--helloDialog").mAggregations.content[0].mAggregations.items[1].setValue(randomNum)
                oDialog.open();
            })
        },
        handlediscard:function(oEvent){
            debugger
            var a = oEvent.oSource.getParent().getParent().close();
            a.close();
            a.destroy();
        },
        handlesave:function(oEvent){
            debugger
            var plantfield = oEvent.oSource.oParent.mAggregations.items[1].mProperties.value;
            var sbgfield = oEvent.oSource.oParent.mAggregations.items[3].mProperties.value;
            var sbufield = oEvent.oSource.oParent.mAggregations.items[5].mProperties.value;
            let testdata = JSON.stringify({ Plant:plantfield,SBG:sbgfield,SBU:sbufield });
            $.ajax({
                url: '/odata/v4/my/tab',
                type: 'POST',
                contentType: 'application/json',
                data: testdata, 
                success: function(data) {
                    debugger
                    // Handle success
                    console.log(data);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    // Handle error
                    console.error(textStatus, errorThrown);
                }
            })
            var a = oEvent.oSource.getParent().getParent().close();
            a.close();

        }
    };
});


