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




  //regentropfen x/y-position + radius 1. ring: variablen im array füllen – noch nichts wird gezeichnet
  for (let n = 0; n < NiederschlagMax; n++) {
    raindropsX[n] = random(width);
    raindropsY[n] = random(height);
    raindropsRadius[n] = random(20);
  }


  background(0, 10);

}




//DRAW
function draw() {
  smooth();

  background(0, 10);

  stroke(120, 120, 250);
  strokeWeight(2);
  noFill();

  //
  for (let n = 0; n < Niederschlag; n++) {
    raindropsRadius[n] = raindropsRadius[n] * scale;
    ellipse(raindropsX[n], raindropsY[n], raindropsRadius[n], raindropsRadius[n]);

    if (raindropsRadius[n] > Tropfengroesse * 50) {
      //neue position für regentropfen
      raindropsX[n] = random(width);
      raindropsY[n] = random(height);
      raindropsRadius[n] = random(20);
    }
  }

  //box für input
  strokeWeight(0);
  fill(220);
  rect(20, 170, 245, 135);
  fill(255);
  rect(25, 175, 235, 125);

  textSize(13);
  fill(0);
  text("Suche nach einer Stadt, um zu sehen, wie stark es dort regnet.", 30, 180, 200, 30);
  fill(120, 120, 250);
  text('Die Niederschlagsmenge in ' + Stadt + ' beträgt ' + Niederschlag + ' mm/h', 30, 250, 200, 50);

}


//WETTER API
function gotWeather(weather) {
  // get the precip in mm
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
