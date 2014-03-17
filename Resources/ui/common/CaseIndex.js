

function CaseIndex(){
	
var self = Titanium.UI.createWindow({  
    title:"Case Studies",
    backgroundColor:"white",
    color:'white',
    // barColor: '#940315'
    barColor: '#FF3A2D'
});

var makeRow = function(/*Object*/ _params) {
			var row = Ti.UI.createTableViewRow({
				backgroundColor:'transparent',
				height:74
			});
			var rowImage = Ti.UI.createImageView({
				image:_params.rowimage,
				left: 0,
				height:74,
				width:74
			});
			row.add(rowImage);
			var rowArrow = Ti.UI.createImageView({
				image:'images/Icons/right_circular/right_circular-64.png',
				height:30,
				width:30,
				top:22,
				right:8
			});
			row.add(rowArrow);
			var primaryLabel = Ti.UI.createLabel({
				text:_params.primarylabel,
				color: 'black',
				font:{
					fontSize:16,
					fontWeight:'bold'
				},
				top:20,
				left:80,
				height:'auto'
			});
			row.add(primaryLabel);
			var secondaryLabel = Ti.UI.createLabel({
				text:_params.secondarylabel,
				color: 'black',
				font:{
					fontSize:13
				},
				top:42,
				left:80,
				height:'auto'
			});
			row.add(secondaryLabel);
			return row;
		};
		
		var propertyArray = [
			{title:"Biryani Brunch", subtitle: "Restaurants", leftImage:"images/thumbnails/MenuBiryani.png", className:"tableRow"},
			{title:"Zobe Clothing", subtitle: "Retail", leftImage:"images/thumbnails/MenuZobe.png", className:"tableRow"},
			{title:"Lamdin Cement", subtitle: "Industrial Goods", leftImage:"images/thumbnails/MenuLamdin.png", className:"tableRow"},
			{title:"Food Aid", subtitle: "Non-Profit Charity", leftImage:"images/thumbnails/MenuFoodAid.png", className:"tableRow"},
			{title:"MNI Snacks", subtitle: "Food Products", leftImage:"images/thumbnails/MenuMNI.png", className:"tableRow"},
			{title:"Szmu Pharma", subtitle: "Pharmaceuticals", leftImage:"images/thumbnails/MenuSzmuPharma.png", className:"tableRow"},
			{title:"Penguin Games", subtitle: "Entertainment", leftImage:"images/thumbnails/MenuPenguinGames.png", className:"tableRow"},
			{title:"Venti Wind", subtitle: "Renewable Energy", leftImage:"images/thumbnails/MenuVentiWind.png", className:"tableRow"},
			{title:"Banana Book", subtitle: "Technology", leftImage:"images/thumbnails/MenuBananaBook.png", className:"tableRow"},
			{title:"ChelmWest", subtitle: "Financial Services", leftImage:"images/thumbnails/MenuChelmWest.png", className:"tableRow"}
		];
		
		// declare an array to hold your table rows
		var tbldata = [];
		
		// use a loop to create 10 rows
		for(i=0;i<=9;i++) {
			tbldata.push(makeRow({
				rownum: i,
				primarylabel: propertyArray[i].title,
				secondarylabel: propertyArray[i].subtitle,
				rowimage: propertyArray[i].leftImage
			}));
		};

		// define the tableview and assign its data/rows here
		var table = Ti.UI.createTableView({
			width:'100%',
			height:'100%',
			backgroundColor:'white',
			separatorStyle:Titanium.UI.iPhone.TableViewSeparatorStyle.SINGLE_LINE,
			separatorColor: '#FF3A2D'
		});
		
table.setData(tbldata);
		
table.addEventListener("click",function(e){
	var CaseQuestionIndex = require ('ui/common/CaseQuestionIndex');
	var caseQuestionIndex = new CaseQuestionIndex(e.index);
	caseQuestionIndex.containingTab = self.containingTab;
	caseQuestionIndex.tabGroup = self.tabGroup;
	caseQuestionIndex.title = propertyArray[e.index].title;//Take the title from the row
	self.containingTab.open(caseQuestionIndex,{animated:true});
});

self.add(table);

return self;
		
};

module.exports = CaseIndex;