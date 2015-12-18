var win = Ti.UI.createWindow({
  backgroundColor: "white"
});
var textField = Ti.UI.createTextField({
  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
  color: '#336699',
  top: 20, left: 10,
  width: 250, height: 60
});

var button = Ti.UI.createView({
	backgroundColor: "#000",
	bottom: 0,
	height: 50
});
var text = Ti.UI.createLabel({
	text: "Submit",
	color: "#fff"
});
var view = Ti.UI.createView({
	backgroundColor: "#fff",
	borderRadius: 10,
	borderColor: "black",
	bottom:200,
	left:"25%",
	right:"25%",
	height:30
});
var viw = Ti.UI.createView({
	backgroundColor: "#000",
	borderRadius: 10,
	borderColor: "black",
	bottom: 200,
	left: "25%",
	right: "50%",
	height: 30
});
var data = [{title: 'Actors', title: 'Release date', title: 'director'}];
var column1 = Ti.UI.createPickerColumn();

for(var i=0, ilen=data.length; i<ilen; i++){
  var row = Ti.UI.createPickerRow();

  var label = Ti.UI.createLabel({
    color: "#fff",
    font:{fontSize:20,fontWeight:'bold'},
    text: data[i],
    textAlign:'left',
    width:'126'
  });

  row.add(label);
  column1.addRow(row);
}
var picker = Ti.UI.createPicker({
  top:80,
  columns: [column1],
  selectionIndicator: true
});
var run = function(){
	console.log(pickerSelection);
};
button.addEventListener("click", run);

button.add(text);
view.add(viw);
win.add(textField, button, picker, view, viw);
win.open();
var data = [{title: 'Actors', title: 'Release date', title: 'director'}];
