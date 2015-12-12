var imagesFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var imageFiles = imagesFolder.getDirectoryListing();
var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
var actions = [
		{title: "Now You See Me 2", description: "Sequel to the hit movie staring Jessie Eisenburg about the 4 horseman magicians. In this stunning sequel we will get to see what happens after they have completed all of their test and they are now in the secret order of magicians!"}, 
		{title: "Captain America, Civil War", description: "In this new super hero movie Captian america gets into some trouble and it has grave consiqunces!"}, 
		{title: "Concussion", description: "Amazing true story about a man from Africa who traveled here looking to live in the land of the free and eventually became a doctor. However when he discovers brain damage problems related to football players he finds out that it goes deeper than he thought and must fight to prove whats right."}
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
		text: "New Image",
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
		detailTitleView.add(detailTitleLabel);
		detailWin.add(detailTitleView, detailBorder, movieText);
		navWindow.openWindow(detailWin);
	};
	
	for(var i=0, j = actions.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: actions[i].title,
		desc: actions[i].description,
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
		backgroundColor: "#0b39be"
	});
	
	navWindow.openWindow(customWin);
};

customView.addEventListener("click", custom);
dataView.addEventListener("click", data);
imageView.addEventListener("click", gallery);

imageView.add(imageText);
dataView.add(dataText);
customView.add(customText);
mainWindow.add(imageView, dataView, customView, termText);
navWindow.open();

