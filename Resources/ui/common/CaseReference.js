function CaseReference(caseIndex, questionIndex){
	
var self = {
	title: 'test',
	url: 'ui/common/cases/C1F1Phone.htm',
};

// Define reference value
// a = caseIndex
// b = questionIndex
function Index(a, b){
	this.a = a;
	this.b = b;
	this.page = function(){
		// Note: This code actually does nothing as this.osname function does not work
		if(this.osname === 'iphone' ){
			Ti.API.info('os is '+this.osname);
			Ti.API.info((this.a*3) + this.b);
			return ((this.a*3) + this.b);
		}
		else if (this.osname === 'ipad' ){
			Ti.API.info('os is'+this.osname);
			Ti.API.info(((this.a*3) + this.b)*2);
			return (((this.a*3) + this.b)*2);
		}
		else {
			return (((this.a*3) + this.b));
			}
	};	
};

var index = new Index(caseIndex, questionIndex);

// Create an array of Question dependent properties
// 10 elements
var questionTitle = [
	{title:'Question 1'},
	{title:'Question 2'},
	{title:'Question 3'}	
];

// Create an array of Case_Question dependent properties
// 30 elements
var questionPage = [

//iPhone
	{url:'ui/common/cases/C1Q1_answer.htm'},
	{url:'ui/common/cases/C1Q2_answer.htm'},
	{url:'ui/common/cases/C1Q3_answer.htm'},
	{url:'ui/common/cases/C2Q1_answer.htm'},
	{url:'ui/common/cases/C2Q2_answer.htm'},
	{url:'ui/common/cases/C2Q3_answer.htm'},
	{url:'ui/common/cases/C3Q1_answer.htm'},
	{url:'ui/common/cases/C3Q2_answer.htm'},
	{url:'ui/common/cases/C3Q3_answer.htm'},
	{url:'ui/common/cases/C4Q1_answer.htm'},
	{url:'ui/common/cases/C4Q2_answer.htm'},
	{url:'ui/common/cases/C4Q3_answer.htm'},
	{url:'ui/common/cases/C5Q1_answer.htm'},
	{url:'ui/common/cases/C5Q2_answer.htm'},
	{url:'ui/common/cases/C5Q3_answer.htm'},
	{url:'ui/common/cases/C6Q1_answer.htm'},
	{url:'ui/common/cases/C6Q2_answer.htm'},
	{url:'ui/common/cases/C6Q3_answer.htm'},
	{url:'ui/common/cases/C7Q1_answer.htm'},
	{url:'ui/common/cases/C7Q2_answer.htm'},
	{url:'ui/common/cases/C7Q3_answer.htm'},
	{url:'ui/common/cases/C8Q1_answer.htm'},
	{url:'ui/common/cases/C8Q2_answer.htm'},
	{url:'ui/common/cases/C8Q3_answer.htm'},
	{url:'ui/common/cases/C9Q1_answer.htm'},
	{url:'ui/common/cases/C9Q2_answer.htm'},
	{url:'ui/common/cases/C9Q3_answer.htm'},
	{url:'ui/common/cases/C10Q1_answer.htm'},
	{url:'ui/common/cases/C10Q2_answer.htm'},
	{url:'ui/common/cases/C10Q3_answer.htm'},
	
//iPad
	{url:'ui/common/cases/C1Q1_answer.htm'},
	{url:'ui/common/cases/C1Q2_answer.htm'},
	{url:'ui/common/cases/C1Q3_answer.htm'},
	{url:'ui/common/cases/C2Q1_ipad_answer.htm'},
	{url:'ui/common/cases/C2Q2_answer.htm'},
	{url:'ui/common/cases/C2Q3_ipad_answer.htm'},
	{url:'ui/common/cases/C3Q1_answer.htm'},
	{url:'ui/common/cases/C3Q2_answer.htm'},
	{url:'ui/common/cases/C3Q3_answer.htm'},
	{url:'ui/common/cases/C4Q1_answer.htm'},
	{url:'ui/common/cases/C4Q2_answer.htm'},
	{url:'ui/common/cases/C4Q3_answer.htm'},
	{url:'ui/common/cases/C5Q1_answer.htm'},
	{url:'ui/common/cases/C5Q2_answer.htm'},
	{url:'ui/common/cases/C5Q3_answer.htm'},
	{url:'ui/common/cases/C6Q1_answer.htm'},
	{url:'ui/common/cases/C6Q2_answer.htm'},
	{url:'ui/common/cases/C6Q3_answer.htm'},
	{url:'ui/common/cases/C7Q1_answer.htm'},
	{url:'ui/common/cases/C7Q2_answer.htm'},
	{url:'ui/common/cases/C7Q3_answer.htm'},
	{url:'ui/common/cases/C8Q1_answer.htm'},
	{url:'ui/common/cases/C8Q2_answer.htm'},
	{url:'ui/common/cases/C8Q3_answer.htm'},
	{url:'ui/common/cases/C9Q1_answer.htm'},
	{url:'ui/common/cases/C9Q2_answer.htm'},
	{url:'ui/common/cases/C9Q3_answer.htm'},
	{url:'ui/common/cases/C10Q1_answer.htm'},
	{url:'ui/common/cases/C10Q2_answer.htm'},
	{url:'ui/common/cases/C10Q3_answer.htm'}

];



//keep
self.title = questionTitle[questionIndex].title;
self.url = questionPage[index.page()].url;

return self;

};

module.exports = CaseReference;