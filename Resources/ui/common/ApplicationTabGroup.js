// Keep a reference to this window so it does not get collected on Android.
var messageWin;
function ApplicationTabGroup() {
	//create module instance
	var self = Ti.UI.createTabGroup();
	
	// require modules
	var	CaseIndex = require('ui/common/CaseIndex');
	var ConceptIndex = require('ui/common/ConceptIndex');
	var MathIndex = require('ui/common/MathIndex');
	var CoachEmail = require('ui/common/CoachEmail');

	
	//create app tabs
	var caseIndex = new CaseIndex();
	var conceptIndex = new ConceptIndex();
	var mathIndex = new MathIndex();
	var coachEmail = new CoachEmail();
	
	var caseIndexTab = Ti.UI.createTab({
		title: 'Cases',
		icon:'images/Icons/literature/literature-25.png',
		window: caseIndex
	});
	caseIndex.containingTab = caseIndexTab;
	self.addTab(caseIndexTab);
	
	var conceptIndexTab = Ti.UI.createTab({
		title: 'Concepts',
		icon:'images/Icons/help/help-25.png',
		window: conceptIndex
	});
	conceptIndex.containingTab = conceptIndexTab;
	self.addTab(conceptIndexTab);
	
	var mathIndexTab = Ti.UI.createTab({
		title: 'Math',
		icon:'images/Icons/math/math-25.png',
		window: mathIndex
	});
	mathIndex.containingTab = mathIndexTab;
	self.addTab(mathIndexTab);
	
	var coachTab = Ti.UI.createTab({
		title: 'Coach',
		icon:'images/Icons/my_topic/my_topic-25.png',
		window: coachEmail
	});
	coachEmail.containingTab = coachTab;
	self.addTab(coachTab);
	
	
	self.setActiveTab(0);
	
	return self;
};

module.exports = ApplicationTabGroup;