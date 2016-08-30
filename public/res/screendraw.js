var canvas;
var context;

function prepCanv(){
	canvas = document.getElementById("canv");
	$("#canv").attr("width",$(window).width());
	$("#canv").attr("height",$(window).height());
	context = canvas.getContext("2d");
}
function drawLocSquare(){
	context.fillStyle = squares[localSquareID -1];
}