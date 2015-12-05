var getDetail = function(){
	var detailWindow = Ti.UI.createWindow({
		//title: "2015 and 2016 Upcoming Movies",
		backgroundColor: "#f5f5f5",
	});
		var detailTitleView = Ti.UI.createView({
		height:65,
		backgroundColor: "#3c7884",
		top: 0
	});
	
	var detailBorder = Ti.UI.createView({
		backgroundColor: "dbdbdb",
		height: 1,
		top: titleView.height + titleView.top
	});
	
	var detailTitleLabel = Ti.UI.createLabel({
		text: this.title,
		font: {fontSize: 20, fontFamily: "aerial", fontWeight: "bold"},
		top: 30,
		width: "100%",
		textAlign: "center"
	});
	
	var detailText = Ti.UI.createLabel({
		text: this.desc,
		font: {fontsize: 14, fontFamily: "arial", fontWeight: "regular"},
		top: detailBorder.height + detailBorder.top + 40,
		left: 10,
		right: 10
	});
	
	var closeButton = Ti.UI.createLabel({
		text: "go back",
		backgroundColor: "#333",
		color: "#fff",
		height: 50,
		font: { fontSize: 12, fontFamily: "aeiral"},
		width: "100%",
		bottom: 0,
		textAllign: "center"
		
});

	var closeWindow = function(){
		detailWindow.close();
	};

	closeButton.addEventListener("click", closeWindow);
	
	detailTitleView.add(detailTitleLabel);
	detailWindow.add(detailTitleView, detailBorder, detailText, closeButton);
	navWindow.openWindow(detailWindow);
	
};

var moreDetail = function(){
	var detailWindow = Ti.UI.createWindow({
		title: "2015 and 2016 Upcoming Movies",
		backgroundColor: "#f5f5f5",
	});
		var detailTitleView = Ti.UI.createView({
		height:65,
		backgroundColor: "#3c7884",
		top: 0
	});
	
	var detailBorder = Ti.UI.createView({
		backgroundColor: "dbdbdb",
		height: 1,
		top: titleView.height + titleView.top
	});
	
	var detailTitleLabel = Ti.UI.createLabel({
		text: this.title,
		font: {fontSize: 20, fontFamily: "aerial", fontWeight: "bold"},
		top: 30,
		width: "100%",
		textAlign: "center"
	});
	
	var detailText = Ti.UI.createLabel({
		text: this.desc,
		font: {fontsize: 14, fontFamily: "arial", fontWeight: "regular"},
		top: detailBorder.height + detailBorder.top + 40,
		left: 10,
		right: 10
	});
	
	var closeButton = Ti.UI.createLabel({
		text: "go back",
		backgroundColor: "#333",
		color: "#fff",
		height: 50,
		font: { fontSize: 12, fontFamily: "aeiral"},
		width: "100%",
		bottom: 0,
		textAllign: "center"
		
});				

	var closeWindow = function(){
		detailWindow.close();
	};

	closeButton.addEventListener("click", closeWindow);
	
	detailTitleView.add(detailTitleLabel);
	detailWindow.add(detailTitleView, detailBorder, detailText, closeButton);
	navWindow.openWindow(detailWindow);
	};

for(var i=0, j = comedies.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: comedies[i].title,
		desc: comedies[i].description,
		hasChild: true
	});
	comedySection.add(theRow);
	
	theRow.addEventListener("click", moreDetail);
}

for(var i=0, j = actions.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: actions[i].title,
		desc: actions[i].description,
		hasChild: true
	});
	
	actionSection.add(theRow);
	
	theRow.addEventListener("click", getDetail);
}


					
 

		
		
		
		
		




