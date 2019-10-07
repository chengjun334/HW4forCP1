function setup() {
  createCanvas(400, 400);
}

var x = []; // new empty array
var y = []; // new empty array

function draw() {
  background(255);
  noFill();

  x.push(mouseX);
  y.push(mouseY);

  for (var i = 0; i < x.length; i = i + 10) {
    rectMode(CENTER)
    square(x[i], y[i], 1 + (x.length - i));
  }

  x = x.slice(-100); // remove all but the last 100 x values
  y = y.slice(-100); // remove all but the last 100 y values
}
