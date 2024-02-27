sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        onEdit: function(oEvent) {
            debugger
            this.loadFragment({
                id: "edit",
                name: "app1.ext.fragment.EditDialog"
                // controller: this // Pass the correct context
            }).then(function (oDialog) {
                debugger
                var plantfield1 = oEvent.oSource.oParent.mAggregations.cells[0].mProperties.text;
                var sbgfield1 = oEvent.oSource.oParent.mAggregations.cells[1].mProperties.text;
                var sbufield1 = oEvent.oSource.oParent.mAggregations.cells[2].mProperties.text;
                sap.ui.getCore().byId("edit--editDialog").mAggregations.content[0].mAggregations.items[1].setValue(plantfield1)
                sap.ui.getCore().byId("edit--editDialog").mAggregations.content[0].mAggregations.items[3].setValue(sbgfield1)
                sap.ui.getCore().byId("edit--editDialog").mAggregations.content[0].mAggregations.items[5].setValue(sbufield1)
            
                oDialog.open();
            })
        },
        handleUpdate:function(oEvent){
            debugger
            // var readOnlyInput = document.getElementById("edit--Plant-inner");
            // readOnlyInput.disabled = true;

            var plantfield = oEvent.oSource.oParent.mAggregations.items[1].mProperties.value
            var sbgfield = oEvent.oSource.oParent.mAggregations.items[3].mProperties.value
            var sbufield = oEvent.oSource.oParent.mAggregations.items[5].mProperties.value
            let testdata = JSON.stringify({ Plant:plantfield,SBG:sbgfield,SBU:sbufield });
            var url = '/odata/v4/my/tab/' + plantfield;
            $.ajax({
                url: url,
                type: 'PUT',
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

