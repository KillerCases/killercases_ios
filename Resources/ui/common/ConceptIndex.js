function ConceptIndex(){
	
	var self = Ti.UI.createWindow({
		title: 'Concepts',
		barColor:'#5856D6'
		// barColor: '#035e94'
	});
	
	var array = [
			{title:"Commodity Products", className:"tableRow"},
			{title:"Discounts/Promotions", className:"tableRow"},
			{title:"Price Elasticity", className:"tableRow"},
			{title:"Volume", className:"tableRow"},
			{title:"Crossing Selling", className:"tableRow"},//Row 4
			{title:"Customer Segmentation", className:"tableRow"},
			{title:"Distribution Channels", className:"tableRow"},
			{title:"Sales Force Effectiveness", className:"tableRow"},
			{title:"Breakeven Quantity", className:"tableRow"}, // Row 8
			{title:"Fixed Costs", className:"tableRow"},
			{title:"Outsourcing", className:"tableRow"},
			{title:"Scale Economy", className:"tableRow"},
			{title:"Synergies", className:"tableRow"},
			{title:"Variable Costs", className:"tableRow"},
			{title:"3Cs", className:"tableRow"}, // Row 14
			{title:"Barriers to Entry", className:"tableRow"},
			{title:"Complementary Products", className:"tableRow"},
			{title:"Differentiation", className:"tableRow"},
			{title:"Industry Consolidation", className:"tableRow"},
			{title:"Network Effects", className:"tableRow"},
			{title:"Entering a new market", className:"tableRow"},
			{title:"Market Sizing", className:"tableRow"},
			{title:"Mergers and Acquisitions", className:"tableRow"},
			{title:"Porters 5 Forces", className:"tableRow"},
			{title:"Power of Customers", className:"tableRow"},
			{title:"Power of Suppliers", className:"tableRow"},
			{title:"Developing a Product", className:"tableRow"},
			{title:"Degree of Rivalry", className:"tableRow"},
			{title:"Razor and Blade model", className:"tableRow"},
			{title:"Substitute Products", className:"tableRow"},
			{title:"Value Chain", className:"tableRow"},
			{title:"Vertical Integration", className:"tableRow"},
			{title:"Cooperative", className:"tableRow"}, // Row 32
			{title:"Private Equity", className:"tableRow"},
			{title:"Private/Public Ownership", className:"tableRow"},
			{title:"Venture Capital", className:"tableRow"},
			{title:"ROI/NPV", className:"tableRow"}, // Row 36
			{title:"Sunk Costs", className:"tableRow"},
			{title:"Multiples Valuation", className:"tableRow"}
		];
		
	var search = Ti.UI.createSearchBar({
		barColor: 'black',
		showCancel: false
	});
	
	// Section 1
	
	var section1 = Ti.UI.createTableViewSection();
	
	var customView1 = Ti.UI.createView({height:'auto'});
	
	var customLabel1 = Ti.UI.createLabel({
	    height:'20',
	    left:0,
	    width: '100%',
	   	backgroundColor: '#5856D6',
	   	zIndex: 1
	});
	
	var customText1 = Ti.UI.createLabel({
		left:10,
		text:'Revenue',
	    font:{fontSize:18, fontWeight:'bold'},
	    color:'white',
		backgroundColor: 'transparent',
		zIndex: 2
	});
 
	for(i=0;i<=3;i++) {
		section1.add(Ti.UI.createTableViewRow({
			title: array[i].title,
			color:'black',
			hasChild: true
		}))};
	
	customView1.add(customText1);
 	customView1.add(customLabel1);
 	section1.headerView = customView1;	
	
	// Section 2
	
	var section2 = Ti.UI.createTableViewSection();
	
	var customView2 = Ti.UI.createView({height:'auto'});
	
	var customLabel2 = Ti.UI.createLabel({
	    height:'20',
	    left:0,
	    width: '100%',
	   	backgroundColor: '#5856D6',
	   	zIndex: 1
	});
	
	var customText2 = Ti.UI.createLabel({
		left:10,
		text:'Sales & Marketing',
	    font:{fontSize:18, fontWeight:'bold'},
	    color:'white',
		backgroundColor: 'transparent',
		zIndex: 2
	});

	for(i=4;i<=7;i++) {
		section2.add(Ti.UI.createTableViewRow({
			title: array[i].title,
			color:'black',
			hasChild: true
		}))};
		
	customView2.add(customText2);
 	customView2.add(customLabel2);
 	section2.headerView = customView2;	
 	
 	// Section 3
		
	var section3 = Ti.UI.createTableViewSection();
		
	var customView3 = Ti.UI.createView({height:'auto'});
	
	var customLabel3 = Ti.UI.createLabel({
	    height:'20',
	    left:0,
	    width: '100%',
	   	backgroundColor: '#5856D6',
	   	zIndex: 1
	});
	
	var customText3 = Ti.UI.createLabel({
		left:10,
		text:'Costs',
	    font:{fontSize:18, fontWeight:'bold'},
	    color:'white',
		backgroundColor: 'transparent',
		zIndex: 2
	});

	for(i=8;i<=13;i++) {
		section3.add(Ti.UI.createTableViewRow({
			title: array[i].title,
			color:'black',
			hasChild: true
		}))};
	
	customView3.add(customText3);
 	customView3.add(customLabel3);
 	section3.headerView = customView3;	
	
	// Section 4
		
	var section4 = Ti.UI.createTableViewSection();

	var customView4 = Ti.UI.createView({height:'auto'});
	
	var customLabel4 = Ti.UI.createLabel({
	    height:'20',
	    left:0,
	    width: '100%',
	   	backgroundColor: '#5856D6',
	   	zIndex: 1
	});
	
	var customText4 = Ti.UI.createLabel({
		left:10,
		text:'Strategy',
	    font:{fontSize:18, fontWeight:'bold'},
	    color:'white',
		backgroundColor: 'transparent',
		zIndex:2
	});

	customView4.add(customText4);
 	customView4.add(customLabel4);
 	section4.headerView = customView4;	

	for(i=14;i<=31;i++) {
		section4.add(Ti.UI.createTableViewRow({
			title: array[i].title,
			color:'black',
			hasChild: true
		}))};
	
	// Section 5
		
	var section5 = Ti.UI.createTableViewSection();
	
	var customView5 = Ti.UI.createView({height:'auto'});
	
	var customLabel5 = Ti.UI.createLabel({
	    height:'20',
	    left:0,
	    width: '100%',
	   	backgroundColor: '#5856D6',
	   	zIndex:1
	});
	
	var customText5 = Ti.UI.createLabel({
		left:10,
		text:'Ownership Structures',
	    font:{fontSize:18, fontWeight:'bold'},
	    color:'white',
		backgroundColor: 'transparent',
		zIndex: 2
	});

	customView5.add(customText5);
 	customView5.add(customLabel5);
 	section5.headerView = customView5;

	for(i=32;i<=35;i++) {
		section5.add(Ti.UI.createTableViewRow({
			title: array[i].title,
			color:'black',
			hasChild: true
		}))};
		
	// Section 6
		
	var section6 = Ti.UI.createTableViewSection();

	var customView6 = Ti.UI.createView({height:'auto'});
	
	var customLabel6 = Ti.UI.createLabel({
	    height:'20',
	    left:0,
	    width: '100%',
	   	backgroundColor: '#5856D6',
	   	zIndex: 1
	});
	
	var customText6 = Ti.UI.createLabel({
		left:10,
		text:'Financial',
	    font:{fontSize:18, fontWeight:'bold'},
	    color:'white',
		backgroundColor: 'transparent',
		zIndex: 2
	});

	customView6.add(customText6);
 	customView6.add(customLabel6);
 	section6.headerView = customView6;

	for(i=36;i<=38;i++) {
		section6.add(Ti.UI.createTableViewRow({
			title: array[i].title,
			color:'black',
			hasChild: true
		}))};
		
	// Creat TableView section
		
	var table = Ti.UI.createTableView({
		data: [section1, section2, section3, section4, section5, section6],
		backgroundColor:'white',
		separatorStyle:Titanium.UI.iPhone.TableViewSeparatorStyle.SINGLE_LINE,
		separatorColor: '#5856D6',
		search: search,
		hideSearchOnSelection: true
	});
		
	self.add(table);
	
	table.addEventListener("click",function(e){
	var Concept = require ('ui/common/Concept');
	var concept = new Concept(e.index);
	concept.title = e.rowData.title;//Take the title from the row
	concept.containingTab = self.containingTab;
	concept.tabGroup = self.tabGroup;
	self.containingTab.open(concept,{animated:true});
});

	return self;
	
};

module.exports = ConceptIndex;
