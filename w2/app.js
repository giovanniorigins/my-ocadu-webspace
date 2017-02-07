var canvas = document.getElementById('my_canvas');
var ctx = canvas.getContext('2d');

// Drawing to Canvas
ctx.beginPath();
ctx.moveTo(250, 250);
ctx.lineTo(250+100, 250);
ctx.lineTo(250+100, 250+100);
ctx.lineTo(250, 250+100);
ctx.lineTo(250, 250);
ctx.stroke();