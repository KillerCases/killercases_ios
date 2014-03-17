function CoachEmail(){
	
	var self = Ti.UI.createWindow({
		backgroundColor: 'white',
		title:'Find A Case Interview Coach',
		barColor:'#5AC8FB',
		navTintColor: 'white'
		// barColor:'#940315'
	});

	var view = Titanium.UI.createScrollView({
		top: '0',
		width: Ti.UI.SIZE,
		height: Ti.UI.SIZE,
  		layout:'vertical',
  		showVerticalScrollIndicator: true
	});
	
	var image = Ti.UI.createImageView({
		top:'5%',
		image:'/images/evisors.png',
		width:'90%'
	});
	
	// var intro1 = Ti.UI.createTextArea({
		// // top:'35%',
		// width:'95%',
		// font:{
				// fontSize:14,
				// //fontWeight:'bold'
			// },
		// value: 'Evisors can connect you with expert coaches for consulting interview practice.'	
	// });
// 	
	var intro2 = Ti.UI.createTextArea({
		// top:'35%',
		width:'90%',
		font:{
				fontSize:14,
				//fontWeight:'bold'
			},
		value: 'Please fill in your details to find out more:'	
	});
	
	var text1 = Ti.UI.createTextField({
 		 borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
 		 color: '#5AC8FB',
 		 // top: '50%',
 		 hintText: 'Your Name',
 		 layout:'vertical',
 		 width: '90%', height: '10%'
	});
	
	var space1 = Ti.UI.createView({
		// top:'60%',
		height: '3%',
		width: '100%',
		backgroundColor: 'white'
	});
	
	var text2 = Ti.UI.createTextField({
 		 borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
 		 color: '#5AC8FB',
 		 // top: '63%',
 		 hintText: 'Your Background',
 		 layout:'vertical',
 		 width: '90%', height: '10%'
	});
	
	var space2 = Ti.UI.createView({
		// top:'73%',
		height: '3%',
		width: '100%',
		backgroundColor: 'white'
	});
	
	var button =Ti.UI.createButton({
		title:'SEND',
		font:{
				fontSize:13,
				fontWeight:'bold'
			},
		height:'10%',
		width:'90%',
		// top:'76%',
		borderRadius: 10,
		color: 'white',
		zIndex: 1,
		backgroundImage: 'NONE',
		backgroundColor:'#5AC8FB'
	});

	
	var emailDialog = Ti.UI.createEmailDialog();
		emailDialog.subject = "Coach Request";
		emailDialog.toRecipients = ['jo.killercases@gmail.com'];
		emailDialog.html = true;
		
	button.addEventListener('click', function(e){
		emailDialog.messageBody = "Please send information about Interview Coaching. For your reference, my name is " + text1.value +" and I have a background in "+text2.value +".";
		emailDialog.open();
	});
	
	view.add(image);
	// view.add(intro1);
	view.add(intro2);
	view.add(text1);
	view.add(space1);
	view.add(text2);
	view.add(space2);
	view.add(button);
	self.add(view);

	return self;
};
module.exports = CoachEmail;