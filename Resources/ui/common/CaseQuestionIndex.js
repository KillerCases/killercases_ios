function CaseQuestionIndex(index){

var caseIndex = index;
var self = Titanium.UI.createWindow({
	// barColor: '#940315',
	barColor: '#FF3A2D',
	backgroundColor: 'white'
});

var view = Titanium.UI.createView({
		top:'0',
		layout: 'vertical',
		height: Ti.UI.SIZE
	
});

var infoArray = [
		{info:'ui/common/cases/C1_info.txt'},
		{info:'ui/common/cases/C2_info.txt'},
		{info:'ui/common/cases/C3_info.txt'},
		{info:'ui/common/cases/C4_info.txt'},
		{info:'ui/common/cases/C5_info.txt'},
		{info:'ui/common/cases/C6_info.txt'},
		{info:'ui/common/cases/C7_info.txt'},
		{info:'ui/common/cases/C8_info.txt'},
		{info:'ui/common/cases/C9_info.txt'},
		{info:'ui/common/cases/C10_info.txt'}	
	];
	
var background = Ti.UI.createTextArea({
		height: Ti.UI.SIZE,
		top: '0',
		width: '100%',
		value:Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,infoArray[caseIndex].info).read().text,
		font: {
			fontSize:13
		},
		scrollable: false,
		editable:false,
		backgroundColor:'white',
		zIndex:1
	});
	
var line = Ti.UI.createView({
		backgroundColor: '##FF3A2D',
		zIndex: 2,
		height: '1'
});


var makeRow = function(/*Object*/ _params) {
			var row = Ti.UI.createTableViewRow({
				backgroundColor:'transparent',
				horizontalWrap: false,
				height:74
			});
			var rowArrow = Ti.UI.createImageView({
				image:'images/Icons/right_circular/right_circular-64.png',
				height:30,
				width:30,
				top:22,
				right:8
			});
			row.add(rowArrow);
			// var rowImage = Ti.UI.createImageView({
				// image:_params.rowimage,
				// left: 0,
				// height:74,
				// width:74
			// });
			// row.add(rowImage);
			var secondaryLabel = Ti.UI.createLabel({
				text:_params.secondarylabel,
				color: 'black',
				font:{
					fontSize:16,
					fontWeight:'bold'
				},				
				top:10,
				left:10,
				width:'80%',
				height:'auto'
			});
			row.add(secondaryLabel);
			return row;
		};
		
		var propertyArray = [
		//Case 1 - Biryani Brunch
			{image: '', subtitle: 'Q1 What is the market for fast casual dining in London?', className:"tableRow"},
			{image: '', subtitle: 'Q2 How many meals to breakeven?', className:"tableRow"},
			{image: '', subtitle: 'Q3 Can the restaurant defend against competition?', className:"tableRow"},
		//Case 2 - Zobe Clothing
			{image: 'images/thumbnails/question1.png', subtitle: 'What business issues do you identify?', className:"tableRow"},
			{image: 'images/thumbnails/question2.png', subtitle: 'How can Zobe grow store revenue?', className:"tableRow"},
			{image: 'images/thumbnails/question3.png', subtitle: 'Would a retail promotion make sense?', className:"tableRow"},
		//Case 3 - Lamdin Cement
			{image: 'images/thumbnails/question1.png', subtitle: 'How could the company improve profitability?', className:"tableRow"},
			{image: 'images/thumbnails/question2.png', subtitle: 'Should Lamdin consolidate production?', className:"tableRow"},
			{image: 'images/thumbnails/question3.png', subtitle: 'Is it a good idea to buy a quarry?', className:"tableRow"},
		//Case 4 - Food Aid
			{image: 'images/thumbnails/question1.png', subtitle: 'What should Food Aid do about price increases?', className:"tableRow"},
			{image: 'images/thumbnails/question2.png', subtitle: 'Can they define a strategic direction?', className:"tableRow"},
			{image: 'images/thumbnails/question3.png', subtitle: 'How should Food Aid measure success?', className:"tableRow"},
		//Case 5 - MNI Snacks
			{image: 'images/thumbnails/question1.png', subtitle: 'How should MNI approach international expansion?', className:"tableRow"},
			{image: 'images/thumbnails/question2.png', subtitle: 'Should they acquire a manufacturing business in Germany?', className:"tableRow"},
			{image: 'images/thumbnails/question3.png', subtitle: 'How would MNI deal with the trade union?', className:"tableRow"},
		//Case 6 - Szmu Pharma
			{image: 'images/thumbnails/question1.png', subtitle: 'Should Szmu Pharma proceed with Phase 3 clinical trials?', className:"tableRow"},
			{image: 'images/thumbnails/question2.png', subtitle: 'For another drug, how should Szmu respond to generics? ', className:"tableRow"},
			{image: 'images/thumbnails/question3.png', subtitle: 'How can the company improve sales force effectiveness?', className:"tableRow"},
		//Case 7 - Penguin Games
			{image: 'images/thumbnails/question1.png', subtitle: 'How can PenguinPro grow revenue?', className:"tableRow"},
			{image: 'images/thumbnails/question2.png', subtitle: 'Which advertising option is best?', className:"tableRow"},
			{image: 'images/thumbnails/question3.png', subtitle: 'How can they grow beyond PenguinPro?', className:"tableRow"},
		//Case 8 - Venti Wind
			{image: 'images/thumbnails/question1.png', subtitle: 'What is the outlook for Venti Wind?', className:"tableRow"},
			{image: 'images/thumbnails/question2.png', subtitle: 'How could green credentials be utilized?', className:"tableRow"},
			{image: 'images/thumbnails/question3.png', subtitle: 'Should Venti acquire a wind facility?', className:"tableRow"},
		//Case 9 - Banana Book
			{image: 'images/thumbnails/question1.png', subtitle: 'How should Banana price their new laptop?', className:"tableRow"},
			{image: 'images/thumbnails/question2.png', subtitle: 'What are the risks with a close-walled strategy?', className:"tableRow"},
			{image: 'images/thumbnails/question3.png', subtitle: 'Should Banana Book outsource manufacturing & services?', className:"tableRow"},
		//Case 10 - ChelmWest
			{image: 'images/thumbnails/question1.png', subtitle: 'How is the ChelmWest portfolio performing?', className:"tableRow"},
			{image: 'images/thumbnails/question2.png', subtitle: 'What are the pros & cons of fixed rate mortgages?', className:"tableRow"},
			{image: 'images/thumbnails/question3.png', subtitle: 'How should ChelmWest conduct marketing & distribution?', className:"tableRow"}
		];
		
		// declare an array to hold your table rows
		var tbldata = [];
		
		// use a loop to create at least 3 rows
		for(i=0;i<=2;i++) {
			j = index*3 + i; 
			tbldata.push(makeRow({
				rownum: i,
				secondarylabel: propertyArray[j].subtitle,
				rowimage:propertyArray[j].image,
			}));
		};
		

		// define the tableview and assign its data/rows here
		var table = Ti.UI.createTableView({
			width:'100%',
			height:Ti.UI.SIZE,
			backgroundColor:'white',
			separatorStyle:Titanium.UI.iPhone.TableViewSeparatorStyle.SINGLE_LINE,
			separatorColor: '#FF3A2D',
			horizontalWrap: false,
			scrollable: false
		});
		
table.setData(tbldata);

table.addEventListener("click",function(e){
	var CaseStudy = require ('ui/common/CaseStudy');
	var caseStudy = new CaseStudy(caseIndex, e.index);
	caseStudy.title = "Question "+(e.index+1);
	caseStudy.containingTab = self.containingTab;
	caseStudy.tabGroup = self.tabGroup;
	self.containingTab.open(caseStudy,{animated:true});
});

view.add(background);
view.add(line);
view.add(table);
self.add(view);

return self;

};

module.exports = CaseQuestionIndex;