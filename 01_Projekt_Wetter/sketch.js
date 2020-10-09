var gui;


var Tropfengroesse = 70;
var TropfengroesseMin = 1;
var TropfengroesseMax = 7;
var TropfengroesseStep = 2;

var Niederschlag = 10;
var NiederschlagMin = 0;
var NiederschlagMax = 60;
var NiederschlagStep = 5;

let x = 0;


let raindropsRadius = 50;
let kreisdurchmesserMax = 300;
let scale = 1.1;



function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  angleMode(DEGREES);


  // background(25, 25, 112);


  stroke(120, 120, 250)
  strokeWeight(5);
  noFill();

  frameRate(10);


  gui = createGui('Regen');
  gui.addGlobals('Tropfengroesse', 'Niederschlag');
}



function draw() {
  // background(25, 25, 112, 10);

  background(0, 20);
  randomSeed(10);
  x = random(0, windowWidth);


  raindropsRadius = raindropsRadius * scale;

for (let i = 0; i <= Niederschlag; i++){
  if (raindropsRadius <= Tropfengroesse) {
    ellipse(x, x, raindropsRadius);
    x = random(0, windowWidth);
    ellipse(x, x, raindropsRadius);
  }
  else {
    raindropsRadius = 50;
  }
  }

}





// if (mouseIsPressed) {
//   for (let i = 1; i <= anz; i++) {
//   /*  fr = 10; //starting FPS
//     frameRate(fr);*/
//     let alpha=map(i,1,anz,255,0);
//     stroke(120, 120, 250, alpha);
//     strokeWeight(i);
//     ellipse(mouseX, mouseY, distanz * i);
//   }
// }
