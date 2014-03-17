function MathAnswers(question){
	
	var question = question;
	
	var self = {
		answer:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		status:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 
		test: 'Test String'
	};
	
	var results = [
		0, // Question 0 Page 0 Answer = 1st row (e.index 0)
		1, // Question 0 Page 1 Answer = 2nd row (e.index 1)
		1, // Question 0 Page 2 Answer = 2nd row (e.index 1)
		
		1, // Question 1 Page 0 Answer = 2nd row (e.index 1)
		2, // Question 1 Page 1 Answer = 3rd row (e.index 2)
		1, // Question 1 Page 2 Answer = 2nd row (e.index 1)
		
		2, // Question 2 Page 0 Answer = 3rd row (e.index 2)
		2, // Question 2 Page 1 Answer = 3rd row (e.index 2)
		2, // Question 2 Page 2 Answer = 3rd row (e.index 2)
		
		1, // Question 3 Page 0 Answer = 2nd row (e.index 1)
		0, // Question 3 Page 1 Answer = 1st row (e.index 0)
		1, // Question 3 Page 2 Answer = 1st row (e.index 1)
		
		2, // Question 4 Page 0 Answer = 3rd row (e.index 2)
		2, // Question 4 Page 1 Answer = 3rd row (e.index 2)
		1  // Question 4 Page 2 Answer = 2nd row (e.index 1)
	];
	
	function checkAnswers(){
		for (i=0; i<=2; i++){
		var index = (question*3) + i;
		(self.answer[index] === results[index]) ? self.status[index] = 1: self.status[index] = 0;
	}};
	
	
	Ti.App.addEventListener('mathChoice', function(event) {
		 self.answer[event.mathChoice_index] = event.mathChoice_choice;
		 checkAnswers();
 		 Ti.API.info('You fired me (Index): '+event.mathChoice_index);
 		 Ti.API.info('You fired me (Choice): '+event.mathChoice_choice);
 		 Ti.API.info("I have filed away "+ self.answer[event.mathChoice_index]);
 		 Ti.App.fireEvent('mathStatus',{
 		 	status: self.status.slice(question*3, question*3+3)
 		 });
 	});
	
	
	return self;
	
};

module.exports = MathAnswers;
