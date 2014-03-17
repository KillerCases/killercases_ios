function MathIndex(){
	
		
var self = Titanium.UI.createWindow({  
    title:"Math",
    backgroundColor:"#FFFFFF",
    // barColor: '#0BD318'
    barColor: '#039482'
});

var makeRow = function(/*Object*/ _params) {
			var row = Ti.UI.createTableViewRow({
				backgroundColor:'transparent',
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
			var primaryLabel = Ti.UI.createLabel({
				text:_params.primarylabel,
				color: 'black',
				font:{
					fontSize:16,
					fontWeight:'bold'
				},
				top:20,
				left:10,
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
				left:10,
				height:'auto'
			});
			row.add(secondaryLabel);
			return row;
		};
		
		var propertyArray = [
			{title:"Financial Metrics", subtitle: "Profitability, ROI, Terminology", leftImage:"images/thumbnails/MenuBiryani.png", className:"tableRow"},
			{title:"Growth Metrics", subtitle: "Average, Percentage, CAGR", leftImage:"images/thumbnails/MenuZobe.png", className:"tableRow"},
			{title:"Breakeven", subtitle: "Volume required for breakeven scenarios", leftImage:"images/thumbnails/MenuLamdin.png", className:"tableRow"},
			{title:"Business Segmentation", subtitle: "Allocation of costs to different business units", leftImage:"images/thumbnails/MenuFoodAid.png", className:"tableRow"},
			{title:"Scale Economies", subtitle: "Reduction in costs at different volumes", leftImage:"images/thumbnails/MenuMNI.png", className:"tableRow"}
		];
		
		// declare an array to hold your table rows
		var tbldata = [];
		
		// use a loop to create 10 rows
		for(i=0;i<=4;i++) {
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
			separatorColor: '#039482'
		});
		
		table.setData(tbldata);
				
		
		table.addEventListener("click",function(e){
			// Open new Math window at Page 0
			var Math = require ('ui/common/Math');
			var math = new Math(e.index, 0);
			math.title = propertyArray[e.index].title;
			math.containingTab = self.containingTab;
			math.tabGroup = self.tabGroup;
			self.containingTab.open(math,{animated:true});
			// Create a Math Answer table to store results
			var MathAnswers = require ('ui/common/MathAnswers');
			var mathAnswers = new MathAnswers(e.index);
		});

		
		self.add(table);
	
	
	return self;
	
};

module.exports = MathIndex;
