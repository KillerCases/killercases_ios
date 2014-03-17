function Concept(index){
	
	var self = Ti.UI.createWindow({
		
	});
	
	var array = [
		{file:'ui/common/concepts/Commodity_Products.htm'},
		{file:'ui/common/concepts/DiscountPromotions.htm'},
		{file:'ui/common/concepts/Price_Elasticity.htm'},
		{file:'ui/common/concepts/Volume.htm'},
		{file:'ui/common/concepts/Cross_Selling.htm'},
		{file:'ui/common/concepts/Customer_Segmentation.htm'},
		{file:'ui/common/concepts/Distribution_Channels.htm'},
		{file:'ui/common/concepts/Sales_Force_Effectiveness.htm'},
		{file:'ui/common/concepts/Breakeven_Quantity.htm'},
		{file:'ui/common/concepts/Fixed_Costs.htm'},
		{file:'ui/common/concepts/Outsourcing.htm'},
		{file:'ui/common/concepts/Scale_Economy.htm'},
		{file:'ui/common/concepts/Synergies.htm'},
		{file:'ui/common/concepts/Variable_Costs.htm'},
		{file:'ui/common/concepts/3Cs.htm'},
		{file:'ui/common/concepts/Barriers_to_Entry.htm'},
		{file:'ui/common/concepts/Complementary_Products.htm'},
		{file:'ui/common/concepts/Differentiation.htm'},
		{file:'ui/common/concepts/Industry_Consolidation.htm'},
		{file:'ui/common/concepts/Network_Effects.htm'},
		{file:'ui/common/concepts/Entering_a_new_market.htm'},
		{file:'ui/common/concepts/Market_Sizing.htm'},
		{file:'ui/common/concepts/Mergers_and_Acquisitions.htm'},
		{file:'ui/common/concepts/Porters_5_Forces.htm'},
		{file:'ui/common/concepts/Power_of_Customers.htm'},
		{file:'ui/common/concepts/Power_of_Suppliers.htm'},
		{file:'ui/common/concepts/Developing_a_Product.htm'},
		{file:'ui/common/concepts/Degree_of_Rivalry.htm'},
		{file:'ui/common/concepts/Razor_and_Blade.htm'},
		{file:'ui/common/concepts/Substitute_Products.htm'},
		{file:'ui/common/concepts/Value_Chain.htm'},
		{file:'ui/common/concepts/Vertical_Integration.htm'},
		{file:'ui/common/concepts/Cooperative.htm'},
		{file:'ui/common/concepts/Private_Equity.htm'},
		{file:'ui/common/concepts/PrivatePublic_Ownership.htm'},
		{file:'ui/common/concepts/Venture_Capital.htm'},
		{file:'ui/common/concepts/ROINPV.htm'},
		{file:'ui/common/concepts/Sunk_Costs.htm'},
		{file:'ui/common/concepts/Multiples_Valuation.htm'}
	];
	
	var text = Ti.UI.createWebView({
		top:0,
		width: '100%',
		backgroundColor: 'white',
		url: array[index].file
	});
	

	self.add(text);
	return self;
	
};

module.exports = Concept;
