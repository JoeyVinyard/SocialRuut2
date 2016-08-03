//prepCanv();
console.log("hello world");
function prepCanv(){
	var canvas = document.getElementById("canv");
	canvas.width = document.body.clientWidth;
	canvas.height = document.body.clientHeight;
	var context = canvas.getContext("2d");
}