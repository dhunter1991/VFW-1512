var newMovies = [ "Zoolander 2", "Criminal Activities", "The Force Awakens", "Allegiant", "Alice Throught The Looking Glass", "Concussion", "Top Gun 2"];

var i = 0;

var displayPreviousMovie = function(){
	textLabel.text = newMovies [i];
	i--;
	if (i == -2){
		i = 6;
		textLabel.text = newMovies [i];
		i--;
	};
};
var displayMovies = function(){
	textLabel.text = newMovies [i];
	i++;
	if (i == 8){
		i = 0;
		textLabel.text = newMovies [i];
		i++;
	};
};

previousButton.addEventListener("click", displayPreviousMovie);
nextButton.addEventListener("click", displayMovies);

