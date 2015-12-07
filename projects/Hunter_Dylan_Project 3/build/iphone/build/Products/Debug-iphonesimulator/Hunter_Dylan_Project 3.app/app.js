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
	backgroundColor: "#3e3d3f"
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
	text: "Image Gallery of Skateboarding",
	font: {fontSize: 20, fontFamily: "aerial", fontWeight: "bold"},
	top: 30,		
	width: "100%",
	textAlign: "center"
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
		
		var oneImageWindow = function(dataSource){
			var imageWindow2 = Ti.UI.createWindow({
				backgroundColor: "#ccc",
				layout: "horizontal"
			});
			var imageView = Ti.UI.createImageView({
				image:dataSource.image,
				backgroundColor: "#ccc",
				top: 20,
				width: pWidth,
				bottom: 100
			});
			
			var closeButton = Ti.UI.createLabel({
				text: "Close Window",
				textAllign: "center",
				backgroundColor: "#000",
				color: "#ccc",
				bottom: 0,
				height: 50,
				font: { fontSize: 12, fontFamily: "aeiral"},
				width: "100%",
			});
			
			var imageTitle = Ti.UI.createView({
				height:50,
				backgroundColor: "#3c7884",
				top: 0
			});
			
			var titleLabel = Ti.UI.createLabel({
					text: dataSource.image,
					font: {fontSize: 20, fontFamily: "aerial", fontWeight: "bold", fontColor: "#fdfcfc"},
					top: 20,
					width: "100%",
					textAlign: "center"
			});
			
			var closeWindow = function(){
				imageWindow2.close();
			};
			
			imageTitle.add(titleLabel);
			imageWindow2.add(imageTitle);
			imageWindow2.add(closeButton);
			imageWindow2.add(imageView);
			imageWindow2.open();
			closeButton.addEventListener("click", closeWindow);
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
titleView.add(titleLabel);
mainWindow.add(galleryButton, titleView);
mainWindow.open();




