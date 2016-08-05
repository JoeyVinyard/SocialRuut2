var squares = [];
var localSquareID = 0;
var square = {
	i		: 0,
	gridXPos	: 0,
	gridYPos	: 0,
	drawXPos	: 0,
	drawYPos	: 0,
	drawColor	: "#000000"
}
function createNewSquare(info){
	var newSquare = Object.create(square);
	newSquare.i = info.i;
	newSquare.gridXPos = info.xp;
	newSquare.gridYPos = info.yp;
	newSquare.drawColor = info.col;
	squares.push(newSquare);
}