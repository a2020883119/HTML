//window.open("index.html", "new", "height = 141, width = 693, top = 10, left = 20");
//window.open("uri", "name", "property");
function pp(){
	var hdc = window.open("index.html", "new", "height = 400, width = 500");
	var width = screen.width;
	var height = screen.height;
	hdc.moveTo((width - 500) / 2, (height - 400) / 2);
	closePage();
}
//setTimeout("pp()", 2000);
function closePage(){
	window.setTimeout("window.close()", 2000)
}


