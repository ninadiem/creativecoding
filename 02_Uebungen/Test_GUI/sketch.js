var gui;

var anz = 10;
var distanz = 25;

function setup() {
  createCanvas(windowWidth, windowHeight);

  noFill();
  sliderRange(0, 90, 2);
//von 0–90, 2er Schritte
  gui = createGui('p5.gui');
  gui.addGlobals('anz', 'distanz');
  // only call draw when then gui is changed
  noLoop();
}

function draw() {
  strokeWeight(2);
  background(242, 161, 184);

  for (let i = 1; i <= anz; i++) {
    strokeWeight(i);
    rect(distanz * i, distanz * i, 100, 100);
  }
}
