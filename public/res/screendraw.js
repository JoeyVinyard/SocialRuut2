var canvas;
var context;
function prepCanv(){
	canvas = document.getElementById("canv");
	$("#canv").attr("width",$(window).width());
	$("#canv").attr("height",$(window).height());
	context = canvas.getContext("2d");
	drawLocSquare();
}
function drawLocSquare(){
	console.log(squares[0]);
	console.log(squares);
	//console.log(localSquareID);
	context.fillStyle = squares[localSquareID].drawColor;
	console.log(context.fillStyle);
	context.fillRect(($(window).width()/2)- 15,($(window).height()/2)- 15, 30, 30);
}