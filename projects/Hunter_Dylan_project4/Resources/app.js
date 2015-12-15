var imagesFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var imageFiles = imagesFolder.getDirectoryListing();
var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
var actions = [
		{title: "Now You See Me 2", description: "Sequel to the hit movie staring Jessie Eisenburg about the 4 horseman magicians. In this stunning sequel we will get to see what happens after they have completed all of their test and they are now in the secret order of magicians!",
		image: "now you see.jpg",
		actors: "Daniel Radcliffe, Lizzy Caplan, Jesse Eisenberg, Mark Ruffalo, Morgan Freeman, Woody Harrelson, Dave Franco",
		}, 
		{title: "Captain America, Civil War", description: "In this new super hero movie Captian america gets into some trouble and it has grave consiqunces!",
		image: "civil war.jpg"}, 
		{title: "Concussion", description: "Amazing true story about a man from Africa who traveled here looking to live in the land of the free and eventually became a doctor. However when he discovers brain damage problems related to football players he finds out that it goes deeper than he thought and must fight to prove whats right.",
		image: "concussion.jpg"}
	];
  
var mainWindow = Titanium.UI.createWindow({
	backgroundColor: "#000",
	title: "New Movie Details",
	textAllign: "center"
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});

var imageView = Ti.UI.createView({
	top: 0,
	height: 100,
	backgroundColor: "#0fb213",
});

var imageText = Ti.UI.createLabel({
	text: "Gallery",
	left: 20,
	color: "#fff",
	font: {fontSize: 40, fontFamily: "Cochin", fontWeight: "regular", fontStyle: "bold", }
});

var dataView = Ti.UI.createView({
	top: imageView.top+ imageView.height,
	height: 100,
	backgroundColor: "#9b05c1"
});

var dataText = Ti.UI.createLabel({
	text: "Details",
	left: 20,
	color: "#fff",
	font: {fontSize: 40, fontFamily: "Cochin", fontWeight: "regular", fontStyle: "bold", }
});

var customView = Ti.UI.createView({
	top: dataView.top+dataView.height,
	height: 100,
	backgroundColor: "#0b39be"
});

var customText =Ti.UI.createLabel({
	text: "Custom",
	left: 20,
	color: "#fff",
	font: {fontSize: 40, fontFamily: "Cochin", fontWeight: "regular", fontStyle: "bold", }
});
var termText = Ti.UI.createLabel({
	text: " VFW Term 1512 // Dylan Hunter",
	bottom: 100,
	color: "#fff",
	font: {fontSize: 12, fontFamily: "arial", fontStyle: "regular"}
});

var gallery = function(){
	var mainImageWindow = Ti.UI.createWindow({
		title: "Gallery",
		backgroundColor: "#0fb213",
	});
	var newImage = Ti.UI.createView({
		backgroundColor: "#000",
		bottom: 0,
		height: 50
	});
	var newImageText = Ti.UI.createLabel({
		text: "Display Random Image",
		left: 20,
		color: "#fff",
		font: {fontSize: 18, fontFamily: "Cochin", fontWeight: "regular", fontStyle: "regular", }
	});	
	    var i = 8;
		var randomImage = Math.floor(Math.random() * i + 1);
		var imageView = Ti.UI.createImageView({
			image: "images/" + imageFiles [randomImage],
			top: newImage.height + 20,
			bottom: 60,
			width: pWidth
		});
	var nextImage = function(){
		var randomImage = Math.floor(Math.random() * i + 1);
		imageView.image = "images/" + imageFiles [randomImage];
		if (i == i){
			imageView.image = "images/" + imageFiles [randomImage];
		};
};
	newImage.addEventListener("click", nextImage);
	mainImageWindow.add(imageView);	
	newImage.add(newImageText);
	mainImageWindow.add(newImage);
	navWindow.openWindow(mainImageWindow);
};
var data = function(){
	var dataWindow = Ti.UI.createWindow({
		title: "2015 and 2016 Upcoming Movies",
		backgroundColor: "#9b05c1",
	});
	var dataBorder = Ti.UI.createView({
		backgroundColor: "dbdbdb",
		height: 1,
	});
	var movies = Ti.UI.createTableView({
		top: dataBorder.top + dataBorder.height,
	});
	var actionSection = Ti.UI.createTableViewSection({
		headerTitle: "Action",
		footerTitle: "2015-16"
	});
	dataWindow.add(dataBorder, movies);
	navWindow.openWindow(dataWindow);
	var getDetail = function(){
		var detailWin = Ti.UI.createWindow({
			title: "2015 and 2016 Upcoming Movies",
			backgroundColor: "#9b05c1"
		});
		var detailTitleView = Ti.UI.createView({
			height:65,
			backgroundColor: "#3c7884",
			top: 0
		});
	
		var detailBorder = Ti.UI.createView({
			backgroundColor: "dbdbdb",
			height: 1,
			top: detailTitleView.height + detailTitleView.top
		});
	
		var detailTitleLabel = Ti.UI.createLabel({
			text: this.title,
			font: {fontSize: 20, fontFamily: "aerial", fontWeight: "bold"},
			top: 30,
			width: "100%",
			textAlign: "center"
		});
	
		var movieText = Ti.UI.createLabel({
			text: this.desc,
			color: "#fff",
			font: {fontsize: 14, fontFamily: "arial", fontWeight: "regular"},
			top: detailBorder.height + detailBorder.top + 300,
			left: 10,
			right: 10
		});
		var movieImage = Ti.UI.createImageView({
			image: "images/" + this.image,
			top: detailTitleView.height,
		});
		detailTitleView.add(detailTitleLabel);
		detailWin.add(detailTitleView, detailBorder, movieText, movieImage);
		navWindow.openWindow(detailWin);
	};
	
	for(var i=0, j = actions.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: actions[i].title,
		desc: actions[i].description,
		image: actions[i].image,
		actors: actions[i].actors,
		hasChild: true
	});
	actionSection.add(theRow);
	
	theRow.addEventListener("click", getDetail);
	}
	var movieSections = [actionSection];
	movies.setData(movieSections);
};
var custom = function(){
	var customWin = Ti.UI.createWindow({
		backgroundColor: "#0b39be",
		title: "More Information",
		exitOnClose: true,
		layout: "verticle"
	});
	var textField = Ti.UI.createTextField({
 		 borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
 		 color: '#336699',
 		 top: 40, left: 10,
 		 width: 275, height: 40
	});
	var pickMovie = Ti.UI.createLabel({
		text: "Type one of the three movies from data",
		color: "#fff",
		top: 15,
		left: 10
	});
	var button = Ti.UI.createView({
		backgroundColor: "#000",
		bottom: 0,
		height: 50
	});
	var buttonLabel = Ti.UI.createLabel({
		text: "Submit",
		left: 20,
		color: "#fff",
		font: {fontSize: 18, fontFamily: "Cochin", fontWeight: "regular", fontStyle: "regular", }
	});
	var picker = Ti.UI.createPicker({
  		top: textField.top + textField.height + 10,
  		useSpinner: true
	});

var data = ['Actors', 'budget', 'release date', 'reviews'];
//data[0]=Ti.UI.createPickerRow({title:'Actors'});
//data[1]=Ti.UI.createPickerRow({title:'budget'});
//data[2]=Ti.UI.createPickerRow({title:'release date'});
//data[3]=Ti.UI.createPickerRow({title:'reviews'});


picker.selectionIndicator = true;
var column1 = Ti.UI.createPickerColumn();

for (var i=0, k=data.length; i<k; i++){
	var row2 = Ti.UI.createPickerRow({
		title: data[i]
	});
	column1.addRow(row2);
};

var column2 = Ti.UI.createPickerColumn();
	for(var i=0, j=actions.length; i<j; i++ ){
	var row3 = Ti.UI.createPickerRow({
		title: actions[i].title
	});
	column2.addRow(row3);
};
picker.add([column1, column2]);
button.add(buttonLabel);
customWin.add(picker);
customWin.add(textField, button, pickMovie);
navWindow.openWindow(customWin);

	var showActors = function(){
	var dataWin = Ti.UI.createWindow({
		backgroundColor: "#0b39be",
		title: "More information About These Upcoming Films"
	});
	//if (picker.column1 == [0] & picker.column2 == [0]){
	var text = Ti.UI.createLabel({
		text: "Daniel Radcliffe, Lizzy Caplan, Jesse Eisenberg, Mark Ruffalo, Morgan Freeman, Woody Harrelson, Dave Franco",
		color: "#fff",
	});
	dataWin.add(text);
	navWindow.openWindow(dataWin);
	
	};
	button.addEventListener("click", showActors);
};

customView.addEventListener("click", custom);
dataView.addEventListener("click", data);
imageView.addEventListener("click", gallery);

imageView.add(imageText);
dataView.add(dataText);
customView.add(customText);
mainWindow.add(imageView, dataView, customView, termText);
navWindow.open();

