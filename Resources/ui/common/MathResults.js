function MathResults(question){
	
	var question = question;
	var index = (question*3);
	
	//Bring in question values and text
	var MathReference = require('ui/common/MathReference');
	var mathReference = new MathReference(question, 0);
	
	var self = Ti.UI.createWindow({
		title:'Results',
		barColor:'#039482',
		backgroundColor:'white'
	});
	
	var view = Ti.UI.createScrollView({	
		top: '0',
		width: Ti.UI.FILL,
		height: Ti.UI.SIZE,
  		layout:'vertical',
  		showVerticalScrollIndicator: true
	});
	
	var result_view = Ti.UI.createView({
		height: '30%'	
	});
	
	var label = Ti.UI.createLabel({
		font:{
				fontSize:16,
				//fontWeight:'bold'
			},
		left:'40%',
		right:'10%',
 		color: 'black'
 	});
 	
 	var killer = Ti.UI.createImageView({
 		top: 0,
 		image: 'images/killercases_green_cropped.png',
 		left:0,
 		width: '30%',
 		zIndex: 1
 	});
 	
 	result_view.add(label);
 	result_view.add(killer);
 	
 	
 	var webview = Ti.UI.createWebView({
 		width:'100%',
 		url: mathReference.answer,
 		height: Ti.UI.SIZE,
 		touchEnabled: false
 	});
	
	Ti.App.addEventListener('mathStatus', function(event) {
		var result = 0;
		for (i=0; i<=2;i++){
			result = result + event.status[i];
		};
		if (result === 3){
			label.text = "Congrats! All correct";
			}
		else if(result === 2){
			label.text = "Nearly there! See answers below";
		}
		else{
			label.text = "Sorry, try again";
		};
 	});
 	
 	view.add(result_view);
	view.add(webview);
	self.add(view);
	
	return self;
	
};

module.exports = MathResults;
