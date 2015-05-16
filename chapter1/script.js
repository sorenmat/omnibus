function drawPoint(x,y, color) {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = color;
    ctx.fillRect(x,y,3,3);
}
var canvasSize = 400
var corna = 2
var cornb = 2

var side = 10
for(i =0; i < canvasSize; i++) {
    for(j=0; j < canvasSize; j++) {
	x = corna + i*side/100;
	y = cornb + j*side/100;
	c = (x*x + y*y)
	if( c % 2 === 0) {
	    drawPoint(i,j, "#E91313")
	}
	if( c % 2 === 1) {
	    drawPoint(i,j, "#661313")
	}
	if( c % 3 === 1) {
	    drawPoint(i,j, "#00F058")
	}
	
    }
}

 
