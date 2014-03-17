
// This is a single context application with mutliple windows in a stack
(function() {
	//determine platform and form factor and render approproate components
	var osname = Ti.Platform.osname,
		version = Ti.Platform.version,
		height = Ti.Platform.displayCaps.platformHeight,
		width = Ti.Platform.displayCaps.platformWidth;

	var ApplicationTabGroup = require('ui/common/ApplicationTabGroup');
	var theTabGroup = new ApplicationTabGroup();
	theTabGroup.open();
		
})();