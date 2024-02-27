sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'app1/test/integration/FirstJourney',
		'app1/test/integration/pages/tabList',
		'app1/test/integration/pages/tabObjectPage'
    ],
    function(JourneyRunner, opaJourney, tabList, tabObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('app1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThetabList: tabList,
					onThetabObjectPage: tabObjectPage
                }
            },
            opaJourney.run
        );
    }
);