function MathReference(question, page){

var self = {
	intro: 'ui/common/math/MathQ1_Intro.htm',
	question: 'test',
	option1: 'test',
	option2: 'test',
	option3: 'test',
	answer: 'test'
};	

	var question = question;
	var page = page;
	var index = (question*3) + page;
	
// Questions for Math section
	
var question_reference = [
//Question 0
	{question: 'What is another term for "Cost of Sales"?', option1:'Variable Costs', option2:'Depreciation',option3: 'Fixed Costs' },
	{question: 'Calculate Gross Profit Margin', option1:"20%", option2: '50%', option3: '18%'},
	{question: 'Calculate ROI', option1:'5%', option2:'20%', option3:'15%'},
//Question 1
	{question: 'What was the average absolute growth per year, over 20 years?', option1:'$90k/year', option2:'$95k/year',option3: '$110k/year' },
	{question: 'Assuming even absolute growth per year, what is the % growth in years 2-3?', option1:"40%", option2: '45%', option3: '48%'},
	{question: 'What was the CAGR over the past 3 years?', option1:'25%', option2:'50%', option3:'65%'},
//Question 2
	{question: 'What is the Gross Margin per Unit?', option1:'$50', option2:'$60',option3: '$80' },
	{question: 'What is the Net Profit Margin per Unit?', option1:"50%", option2: '60%', option3: '78%'},
	{question: 'How many units does the company need to sell to breakeven?', option1:'500', option2:'1000', option3:'2000'},
//Question 3
	{question: 'What is the total profit?', option1:'$100', option2:'$200',option3: '$300' },
	{question: 'Should the company continue with all business units?', option1:"Yes", option2: 'No'},
	{question: 'At what level of variable costs does it make sense to close C', option1:'$400', option2:'$500', option3:'$600'},
//Question 4
	{question: 'What is the Total Cost per Unit?', option1:'$1.00', option2:'$1.50',option3: '$2.0' },
	{question: 'What is the Total Cost per Unit if you double the volume?', option1:"$1.0", option2: '$1.50', option3: '$1.75'},
	{question: 'Calculate the "Scale Economy" of this business', option1:'10%', option2:'12.5%', option3:'15%'},
];

// Answers and intro data for Math section

var answer_reference = [
	{intro:'ui/common/math/MathQ1_Intro.htm', answer:'ui/common/math/MathQ1_Answer.htm'},
	{intro:'ui/common/math/MathQ2_Intro.htm', answer:'ui/common/math/MathQ2_Answer.htm'},
	{intro:'ui/common/math/MathQ3_Intro.htm', answer:'ui/common/math/MathQ3_Answer.htm'},
	{intro:'ui/common/math/MathQ4_Intro.htm', answer:'ui/common/math/MathQ4_Answer.htm'},
	{intro:'ui/common/math/MathQ5_Intro.htm', answer:'ui/common/math/MathQ5_Answer.htm'}	
];
	
	self.intro = answer_reference[question].intro;
	self.answer = answer_reference[question].answer;
	self.question = question_reference[index].question;
	self.option1 = question_reference[index].option1;
	self.option2 = question_reference[index].option2;
	self.option3 = question_reference[index].option3;
	
	return self;
	
};

module.exports = MathReference;
