Titanium.UI.setBackgroundColor("#d3d3d3");

var imagesFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var imageFiles = imagesFolder.getDirectoryListing();
var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
var rowCount = 4;
var margin = 10;
var trueCanvasWidth = rowCount+margin;
var size = pWidth/margin+35;

var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#000"
});

var galleryButton = Ti.UI.createView({
	backgroundColor: "#49f804",
	top: 375,
	left: 50,
	right: 50,
	borderRadius: 5,
	height: 50
});

var titleView = Ti.UI.createView({
	top: 0,
	height: 65,
	backgroundColor: "#3c7884",
	
});
	
var viewText = Ti.UI.createLabel({
	text: "click to view gallery",
	textAllign: "center",
	color: "#fff",
	font: {fontSize: 20, fontFamily: "Cochin", fontWeight: "regular", fontStyle: "italic", },
});


var titleLabel = Ti.UI.createLabel({
	text: "This is a Gallery of Skateboarding",
	font: {fontSize: 20, fontFamily: "aerial", fontWeight: "bold"},
	color: "#fff",
	top: 30,		
	width: "100%",
	textAlign: "center"
});

var loadFile = require("data");

galleryButton.add(viewText);
titleView.add(titleLabel);
mainWindow.add(galleryButton, titleView);
mainWindow.open();




