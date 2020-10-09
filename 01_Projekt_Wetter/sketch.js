var gui;

var anz = 10;
var distanz = 10;
let fr = 30; //starting FPS

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  angleMode(DEGREES);

  background(25, 25, 112);

  fr = 10; //starting FPS
    frameRate(10);
  noFill();
  sliderRange(0, 20, 2);
  gui = createGui('p5.gui');
  gui.addGlobals('anz', 'distanz');
}

function draw() {
  strokeWeight(2);
  background(25, 25, 112, 10);


  stroke(120, 120, 250)
  if (mouseIsPressed) {
    for (let i = 1; i <= anz; i++) {
    /*  fr = 10; //starting FPS
      frameRate(fr);*/
      let alpha=map(i,1,anz,255,0);
      stroke(120, 120, 250, alpha);
      strokeWeight(i);
      ellipse(mouseX, mouseY, distanz * i);
    }
  }

}
