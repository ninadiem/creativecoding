// PROBLEM: Niederschlag verändert Animations-Geschwindigkeit und nicht Anzahl Regentropfen
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


let scale = 1.1;





function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  angleMode(DEGREES);


  let url = 'https://api.weatherstack.com/current?access_key=' + key + '&query=Zürich';
  loadJSON(url, gotWeather);



  gui = createGui('Regen');
  gui.addGlobals('Niederschlag', 'Tropfengroesse');
  // gui.position(20, height - 50);



  input = createInput('Stadt eingeben');
  input.position(20, 160);
  button = createButton('Suchen');
  button.position(input.x + input.width + 10, 160);
  button.mousePressed(reloadJson);





  //regentropfen variablen füllen
  for (let n = 0; n < NiederschlagMax; n++) {
    raindropsX[n] = random(width);
    raindropsY[n] = random(height);
    raindropsRadius[n] = random(20);
  }


  background(0, 10);

}



function draw() {
  noLoop();
    textSize(15);
    fill(255, 255, 255);
    strokeWeight(0);
    text('Suche nach einer Stadt, um zu sehen, wie stark es dort regnet.', 20, 200);
  Loop();

  background(0, 10);



  smooth();

  stroke(120, 120, 250);
  strokeWeight(2);
  noFill();

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



}


function gotWeather(weather) {
  // Get the precip in mm
  Niederschlag = weather.current.precip * 10; // in mm!
  Tropfengroesse = weather.current.precip; // in mm!
  console.log(Niederschlag);

}


function reloadJson() {
  // reload JSon kreiert eine neue url für die API mit dem Ort, den die User eingegeben haben

  let ort = input.value();
  let url = 'http://api.weatherstack.com/current?access_key=' + key + '&query=' + ort;

  // dann lädt die Funktion gotWeather diese neuen Daten
  loadJSON(url, gotWeather);
}
