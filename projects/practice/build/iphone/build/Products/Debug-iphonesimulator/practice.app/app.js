var allMovies = {
	"comedies": {
		"theTitle": "2015 comedies",
		"movieList": [
		
		{"title": "Zoolander 2",
		 "description": "This is the long awaited sequel to the 2001 hit staring Ben Stiler and Owen wilson. In this newly adapted film, they will pick up where they left off with the first film, as well as bringing back all of the original characters including Will Ferell."
		 }, 
		 {"title": "Central Intelligence", 
		 "description": "This is a new comedy staring the Rock and Kevin Hart! The story will follow CIA agent the rock, coming home for his high school reunion. When he gets there he enlists the help of Hart, who is now an accountant and missing his glory days from high school."
		 },
		 {"title": "The Boss", 
		 "description": "New comedy from up and coming actress Melisa McCarthy. She was a CEO of a fourtane 500 company, when one day she is charged with fraud and goes to prison. upon her relse from jail she befriends an old employee, and in order to help her daugther she will help build the biggest girl scout cookie company!"
		 }, 
		 {"title": "The Night Before", 
		 "description": "New comedy from Seth Rogan! on the night before christmas since they were kids three always hung out and celebrated christams in style. However with all of them growing up they decided to make it the last big blow-out on the night before!"
		 }
		 
		]
	},
	
	"Action":{
		"theTitle": "2016 Action movies",
		"movieList": [
		{
			"title": "Now You See Me 2", 
			"description": "Sequel to the hit movie staring Jessie Eisenburg about the 4 horseman magicians. In this stunning sequel we will get to see what happens after they have completed all of their test and they are now in the secret order of magicians!"
			},
			{
				"title": "Captain America, Civil War", 
				"description": "In this new super hero movie Captian america gets into some trouble and it has grave consiqunces!"
			},
			{
				"title": "Concussion", 
				"description": "Amazing true story about a man from Africa who traveled here looking to live in the land of the free and eventually became a doctor. However when he discovers brain damage problems related to football players he finds out that it goes deeper than he thought and must fight to prove whats right."
			}
		
		]
	}
};

var mainWindow = Ti.UI.createWindow({
	title: "2015 and 2016 Upcoming Movies",
	backgroundColor: "#dadada"
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});

var titleView = Ti.UI.createView({
	height: 65,
	backgroundColor: "#3c7884",
	top: 0
});

var border = Ti.UI.createView({
	backgroundColor: "#dbdbdb",
	height: 1,
	top: titleView.height + titleView.top
});

var titleLabel = Ti.UI.createLabel({
	text: "2015 & 2016 Upcoming Movies",
	font: {fontSize: 20, fontFamily: "arial", fontWeight: "bold"},
	top: 35,
	width: "100%",
	textAlign: "center"
});

var makeUI = function(){
	var spacing = 80;
	for(j in allMovies){
		var titleLabel = Ti.UI.createTableView({
			text: allMovies[j].theTitle,
			left: 15,
			right: 15,
			top: spacing,
			height: 25,
			backgroundColor: "#333",
			font: {fontSize: 22, fontFamily: "Arial"},
			color: "#fafafa"	
		});

		var comedySection = Ti.UI.createTableViewSection({
			headerTitle: "Comedies",
			footerTitle: "2015 and 2016",
		});

		var actionSection = Ti.UI.createTableViewSection({
			headerTitle: "Action Films",
			footerTitle: "2015-16"
		});
		
		var movieSections = [comedySection, actionSection];
		titleLabel.setData(movieSections);
		
		spacing = titleLabel.top + titleLabel.height + 10;
		console.log(spacing);
		for(n in allMovies[j].movieList){
			var itemLabel = Ti.UI.createTableViewRow({
			text: allMovies[j].movieList[n].title,
			details: allMovies[j].movieList[n].description,
			left: 30,
			right: 15,
			top: spacing,
			height: 25,
			backgroundColor: "#fff",
			font: {fontSize: 22, fontFamily: "Arial"},
			color: "#333"
		});
		
		spacing = itemLabel.top + itemLabel.height + 10;
		itemLabel.addEventListener("click", makeUI);
		comedySection.add(itemLabel);
		actionSection.add(itemLabel);
		
	}
	mainWindow.add(titleLabel);
	spacing = itemLabel.top + itemLabel.height + 40;
	navWindow.open();
	}
};


titleView.add(titleLabel);
mainWindow.add( titleView, border);
makeUI();
navWindow.open();

