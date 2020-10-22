var gui;

var Niederschlag = 4;
var NiederschlagMin = 4;
var NiederschlagMax = 100;
var NiederschlagStep = 1;

var Tropfengroesse = 70;
var TropfengroesseMin = 20;
var TropfengroesseMax = 500;
var TropfengroesseStep = 10;

let raindropsX = [];
let raindropsY = [];
let raindropsRadius = [];


let scale = 1.1;



function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  angleMode(DEGREES);


  //regentropfen erzeugen, initialposition
  for (let n = 0; n < Niederschlag; n++) {
    raindropsX[n] = random(width);
    raindropsY[n] = random(height);
    raindropsRadius[n] = random(20);
  }

  stroke(120, 120, 250);
  strokeWeight(2);
  noFill();

  // frameRate(10);


  gui = createGui('Regen');
  gui.addGlobals('Niederschlag', 'Tropfengroesse');
}



function draw() {

  background(0, 10);

  for (let n = 0; n < Niederschlag; n++) {
    raindropsRadius[n] = raindropsRadius[n] * scale;
    ellipse(raindropsX[n], raindropsY[n], raindropsRadius[n]);

    if (raindropsRadius[n] > Tropfengroesse) {
      //neue Position für regentropfen
      raindropsX[n] = random(width);
      raindropsY[n] = random(height);
      raindropsRadius[n] = random(20);
    }
  }
}
