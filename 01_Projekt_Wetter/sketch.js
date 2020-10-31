//VARIABELN
let key = '06e280b15621fb57f14de8e91c05e79e';
let input, button;

var gui;

var Niederschlag = 4;
var NiederschlagMin = 0;
var NiederschlagMax = 50;
var NiederschlagStep = 1;


var Tropfengroesse = 2;
var TropfengroesseMin = 1;
var TropfengroesseMax = 7;
var TropfengroesseStep = 0.5;

let raindropsX = [];
let raindropsY = [];
let raindropsRadius = [];
//  radius 1. ring

var Stadt = 0;


let scale = 1.1;




//SETUP
function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  angleMode(DEGREES);


  let url = 'https://api.weatherstack.com/current?access_key=' + key + '&query=Zürich';
  loadJSON(url, gotWeather);


  //gui
  gui = createGui('Regen');
  gui.addGlobals('Niederschlag', 'Tropfengroesse');


  //input feld

  input = createInput('Stadt');
  input.position(30, 220);
  button = createButton('Suchen');
  button.position(input.x + input.width + 10, 220);
  button.mousePressed(reloadJson);




  //regentropfen x-/y-position + radius 1. ring: array mit werten füllen – noch nichts wird gezeichnet
  // n wird zum ansprechen der n. stelle im array verwendet
  for (let n = 0; n < NiederschlagMax; n++) {
    raindropsX[n] = random(width);
    raindropsY[n] = random(height);
    raindropsRadius[n] = random(20);
  }

  // => z.B.
  // raindropsX = [33, 101, 17, 460, … ]
  //                0.  1.  2.   3.  Stelle im Array

  // raindropsY = [20, 88, 860, 190, …]
  //                0.  1.  2.   3.  Stelle im Array

  // raindropsRadius = [7, 16, 4, 11, …]
  //                    0.  1. 2.  3.  Stelle im Array



  background(0, 10);

}




//DRAW
function draw() {
  smooth();

  background(0, 10);

  stroke(120, 120, 250);
  strokeWeight(2);
  noFill();

  for (let n = 0; n < Niederschlag; n++) {
    raindropsRadius[n] = raindropsRadius[n] * scale;
    ellipse(raindropsX[n], raindropsY[n], raindropsRadius[n], raindropsRadius[n]);

    //   0. stelle im array ansprechen:
    //     ellipse(raindropsX[0], raindropsY[0], raindropsRadius[0]);
    //     =>  ellipse (33, 20, 7.7, 7.7)

    if (raindropsRadius[n] > Tropfengroesse * 50) {
      raindropsX[n] = random(width);
      raindropsY[n] = random(height);
      raindropsRadius[n] = random(20);
      // wenn raindropsradius zu gross => array wieder neu befüllen
    }
  }

  //lay box für input
  strokeWeight(0);
  fill(215);
  rect(20, 170, 245, 135);
  fill(245);
  rect(25, 175, 235, 125);

  textSize(13);
  fill(0);
  text("Suche nach einer Stadt, um zu sehen, wie stark es dort regnet.", 30, 180, 200, 30);
  fill(120, 120, 250);
  text('Die Niederschlagsmenge in ' + Stadt + ' beträgt ' + Niederschlag + ' mm/h', 30, 250, 200, 50);

}


//WETTER API
function gotWeather(weather) {
  // get the precip (niederschlag) in mm
  Niederschlag = weather.current.precip * 10; // in mm!
  Tropfengroesse = weather.current.precip; // in mm!
  Stadt = weather.location.name;
  fill(0);
}

//JSON RELOAD
function reloadJson() {
  // reload JSon kreiert eine neue url für die API mit dem Ort, den die User eingegeben haben

  let ort = input.value();
  let url = 'https://api.weatherstack.com/current?access_key=' + key + '&query=' + ort;

  // dann lädt die Funktion gotWeather diese neuen Daten
  loadJSON(url, gotWeather);
}
