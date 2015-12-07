var imageWindow = function(dataSource){
	
	var mainImageWindow = Ti.UI.createWindow({
		backgroundColor: "#fff",
		layout: "horizontal"
	});
	
	var imageTitleView = Ti.UI.createView({
		top: 0,
		height: 65,
		backgroundColor: "#3c7884",
	
	});
	
	var imageTitleLabel = Ti.UI.createLabel({
		text: "Skateboarding",
		font: {fontSize: 20, fontFamily: "aerial", fontWeight: "bold"},
		color: "fff",
		top: 30,		
		width: "100%",
		textAlign: "center"
	});
	
	var border = Ti.UI.createView({
		backgroundColor: "#cecece",
		height: 1,
		width: pWidth,
		top: 20
	});
	
	var imageCloseButton = Ti.UI.createLabel({
		text: "Close Window",
		textAllign: "center",
		backgroundColor: "#fff",
		color: "#000",
		height: 50,
		font: { fontSize: 16, fontFamily: "aeiral", fontWeight: "bold"},
		width: "100%",
		bottom: 0
	});
		
	var viewContainer = Ti.UI.createScrollView({
		top: 0,
		layout: "horizontal",
		width: pWidth,
		height: pHeight-border.height-imageTitleView.height-imageCloseButton.height,
		contentWidth: pWidth,
		showVerticleScrollIndicator: true,
		backgroundColor: "#000"
	});
	
	var imageCloseWindow = function(){
		mainImageWindow.close();
	};
	
	for(var i=0; i<imageFiles.length; i++){
		var view = Ti.UI.createView({
			backgroundColor: "#fff",
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
				backgroundColor: "#000",
				layout: "horizontal"
			});
			var imageView = Ti.UI.createImageView({
				image:dataSource.image,
				backgroundColor: "#ccc",
				top: 20,
				width: pWidth,
			});
			
			var closeButton = Ti.UI.createLabel({
				text: "Close Window",
				textAllign: "center",
				backgroundColor: "#fff",
				color: "#000",
				bottom: 0,
				height: 50,
				font: { fontSize: 16, fontFamily: "aeiral", fontWeight: "bold"},
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
					color: "#fff",
					top: 20,
					width: "100%",
					textAlign: "center"
			});
			
			var closeWindow = function(){
				imageWindow2.close();
			};
			
			imageTitle.add(titleLabel);
			imageWindow2.add(imageTitle, closeButton, imageView);
			imageWindow2.open();
			closeButton.addEventListener("click", closeWindow);
	};
	

	
		view.add(thumb);
		viewContainer.add(view);
		imageTitleView.add(imageTitleLabel);
		thumb.addEventListener("click", function(event){
			oneImageWindow(event.source);
		});	
	}
			
		mainImageWindow.add(imageTitleView, imageCloseButton, viewContainer, border);
		imageCloseButton.addEventListener("click", imageCloseWindow);
		mainImageWindow.open();

};
galleryButton.addEventListener("click", imageWindow);
