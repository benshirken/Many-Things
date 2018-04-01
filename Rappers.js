var bubbles = [];
var rappers = [];

function preload() {
    rappers[0] = loadImage('images/drake.png');
    rappers[1] = loadImage('images/kanye.png');
    rappers[2] = loadImage('images/LilWayne.png');
}

function setup() {
  createCanvas(900, 600);
}

function mousePressed() {
   var r = floor(random(0, rappers.length));
   var b = new Bubble(mouseX, mouseY, rappers[r]);
   bubbles.push(b);
}

function draw() {
  background(0);
  for(var i = bubbles.length-1; i >= 0; i--){
    bubbles[i].update();
    bubbles[i].display();
    }
  }