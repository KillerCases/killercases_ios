var CaseStudy = function(caseIndex,questionIndex){


var CaseReference = require('ui/common/CaseReference');
var casereference = new CaseReference(caseIndex, questionIndex);
Ti.API.info("caseindex is "+ caseIndex);
Ti.API.info("caseurl is "+ casereference.url);

var showVideo = caseIndex;

	
	var self = Titanium.UI.createWindow({
		title: casereference.title,
		backgroundColor:'white',
    	// barColor:'#940315',
    	barColor:'#FF3A2D',
  		navBarHidden:false
	});
	
	
	var view = Titanium.UI.createScrollView({
		top: '0',
		width: Ti.UI.SIZE,
		height: Ti.UI.SIZE,
  		layout:'vertical',
  		showVerticalScrollIndicator: true,
	});

	/*
	
	var question = Ti.UI.createTextArea({
		height: Ti.UI.SIZE,
		width: '100%',
		value:Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,casereference.questionValue).read().text,
		font: {
			fontSize: casereference.fontSize
		},
		scrollable: false,
		editable:false,
		backgroundColor:'white'
	});
	
	var image = Titanium.UI.createImageView({
		image: casereference.caseImage,
		height:Ti.UI.SIZE,
		width: '100%',
	});
	
	*/
	
	var facts = Ti.UI.createWebView({
		height: Ti.UI.SIZE,
		width: '100%',
		url:casereference.url,
		touchEnabled: false
	});
	
	
	if (caseIndex ===0){
		
	var space1 = Ti.UI.createView({
		height: '5%'
		});
	
	var button =Ti.UI.createButton({
		title:'PLAY VIDEO',
		borderRadius: 10,
		font:{
				fontSize:16,
				fontWeight:'bold'
			},
		height:'10%',
		width:'90%',
		color: 'black',
		zIndex: 3,
		backgroundImage: 'NONE',
		backgroundColor:'#CFCFCF'
		});
	
	var space2 = Ti.UI.createView({
		height: '5%'
		});
		
		Titanium.API.info(caseIndex);
		button.addEventListener("click",function(e){
			var Video = require ('ui/common/Video');
			var video = new Video(questionIndex);
			video.containingTab = self.containingTab;
			video.tabGroup = self.tabGroup;
			self.containingTab.open(video,{animated:true});
		});
		
		view.add(space1);
		view.add(button);
		view.add(space2);
		
	};

	view.add(facts);
	self.add(view);
	
/*
	// Refresh window on Orientation Change
Ti.Gesture.addEventListener('orientationchange', function(e) {
	properties();
	image.image = caseImage;
	self.remove(view);
	self.add(view);
});
*/
	
	return self;
	
};

module.exports = CaseStudy;

