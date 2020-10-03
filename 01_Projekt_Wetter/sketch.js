var gui;

var anz = 10;
var distanz = 10;
let fr = 30; //starting FPS

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  angleMode(DEGREES);


  noFill();
  sliderRange(0, 20, 2);
  gui = createGui('p5.gui');
  gui.addGlobals('anz', 'distanz');
}

function draw() {
  strokeWeight(2);
  background(25, 25, 112, 20);


  stroke(120, 120, 250)
  if (mouseIsPressed) {
    for (let i = 1; i <= anz; i++) {
      fr = 10; //starting FPS
      frameRate(fr);
      strokeWeight(i/5);
      ellipse(mouseX, mouseY, distanz * i);
    }
  }

}
