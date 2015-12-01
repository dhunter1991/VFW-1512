// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');


var mainWindow = Titanium.UI.createWindow({
	backgroundColor: "#ccc"
	
});

var headerText = Titanium.UI.createLabel({
	text: "new movies",
	font: {fontSize: 20, fontFamily: "Cochin", fontWeight: "regular", fontStyle: "bold", },
	color: "#fff",
	top: 30 
});

var view = Titanium.UI.createView({
	backgroundColor: "#333",
	top: 20,
	left: 10,
	right: 10,
	bottom: 50,
	
	
});

var textLabel = Titanium.UI.createLabel({
	text: "Zoolander 2",
	color: "#fff",
	font: {fontSize: 16, fontFamily: "Cochin", fontWeight: "regular", fontStyle: "italic", }
	
});

var nextButton = Titanium.UI.createView({
	backgroundColor: "#49f804",
	top: 350,
	left: 175,
	right: 10,
	borderRadius: 5,
	height: 50
});
var previousButton = Titanium.UI.createView({
	backgroundColor: "#49f804",
	top: 350,
	left: 10,
	right: 175,
	borderRadius: 5,
	height: 50
});
var nextText = Titanium.UI.createLabel({
	color: "#fff",
	font: {fontSize: 16, fontFamily: "Ariel"},
	textAllign: "center",
	text: "Next"
});
var previousText = Titanium.UI.createLabel({
	color: "#fff",
	font: {fontSize: 16, fontFamily: "Ariel"},
	textAllign: "center",
	text: "Previous"
});

var loadFile = require("movieIteams");

mainWindow.add(view);
view.add(textLabel,nextButton,previousButton,headerText);
nextButton.add(nextText);
previousButton.add(previousText);
mainWindow.open();


