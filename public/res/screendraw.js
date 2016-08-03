var canvas;
var context;

prepCanv();
function prepCanv(){
	canvas = document.getElementById("canv");
	$("#canv").attr("width",$(window).width());
	$("#canv").attr("height",$(window).height());
	context = canvas.getContext("2d");
}
