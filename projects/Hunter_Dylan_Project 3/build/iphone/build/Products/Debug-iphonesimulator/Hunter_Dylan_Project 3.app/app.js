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
	backgrounColor: "#d3d3d3"
});

var galleryButton = Ti.UI.createView({
	backgroundColor: "#49f804",
	top: 375,
	left: 50,
	right: 50,
	borderRadius: 5,
	height: 50
});
	
var viewText = Ti.UI.createLabel({
	text: "click to view gallery",
	textAllign: "center",
	color: "#fff",
	font: {fontSize: 20, fontFamily: "Cochin", fontWeight: "regular", fontStyle: "italic", },
});

var imageWindow = function(dataSource){
	
	var mainImageWindow = Ti.UI.createWindow({
		backgroundColor: "#fff",
		layout: "horizontal"
	});
	
	var border = Ti.UI.createView({
		backgroundColor: "#cecece",
		height: 1,
		width: pWidth,
		top: 20
	});
	
	var viewContainer = Ti.UI.createScrollView({
		top: 0,
		layout: "horizontal",
		width: pWidth,
		height: pHeight-border.height-border.top,
		contentWidth: pWidth,
		showVerticleScrollIndicator: true,
		backgroundColor: "#fef"
	});
	
	for(var i=0; i<imageFiles.length; i++){
		var view = Ti.UI.createView({
			backgroundColor: "#33CCFF",
			top: 10,
			left: 10,
			width: size,
			height: size
		});
	
		var thumb = Ti.UI.createImageView({
			image: "images/" + imageFiles[i],
			top: 0,
			width: view.width*3
 
		});
		
		var oneImageWindow = function(){
			var imageWindow2 = Ti.UI.createWindow({
				backgroundColor: "#fff",
				layout: "horizontal"
			});
			var imageView = Ti.UI.createImageView({
				image: thumb.image,
				backgroundColor: "#333",
				top: 20,
				left: 25,
				right: 25,
				bottom: 200
			});
			
				imageWindow2.add(imageView);
				imageWindow2.open();
		
	};
		view.add(thumb);
		viewContainer.add(view);
		thumb.addEventListener("click", function(event){
			oneImageWindow(event.source);
		});	
	}
		mainImageWindow.add(border);
		mainImageWindow.add(viewContainer);
		mainImageWindow.open();

		

};
galleryButton.addEventListener("click", imageWindow);


galleryButton.add(viewText);
mainWindow.add(galleryButton);
mainWindow.open();




