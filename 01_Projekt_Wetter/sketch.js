// PROBLEM: Niederschlag verändert Animations-Geschwindigkeit und nicht Anzahl Regentropfen
let key = '06e280b15621fb57f14de8e91c05e79e';
let input, button;

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


  let url = 'https://api.weatherstack.com/current?access_key='+key+'&query=Zürich';
  loadJSON(url, gotWeather);

  gui = createGui('Regen');
  gui.addGlobals('Niederschlag', 'Tropfengroesse');


  input = createInput();
  input.position(20, height - 50);
  button = createButton('SUBMIT');
  button.position(input.x + input.width + 10, height - 50);
  button.mousePressed(reloadJson);


  //regentropfen variablen füllen
  for (let n = 0; n < NiederschlagMax; n++) {
    raindropsX[n] = random(width);
    raindropsY[n] = random(height);
    raindropsRadius[n] = random(20);
  }

  stroke(120, 120, 250);
  strokeWeight(2);
  noFill();
}



function draw() {

  background(0, 10);



  for (let n = 0; n < Niederschlag; n++) {
    raindropsRadius[n] = raindropsRadius[n] * scale;
    ellipse(raindropsX[n], raindropsY[n], raindropsRadius[n], raindropsRadius[n]);

    if (raindropsRadius[n] > Tropfengroesse) {
      //neue position für regentropfen
      raindropsX[n] = random(width);
      raindropsY[n] = random(height);
      raindropsRadius[n] = random(20);
    }
  }

  //ellipse(width / 2, height / 2, Niederschlag);



}

function gotWeather(weather) {
  // Get the precip in mm
  Niederschlag = weather.current.precip*10; // in mm!
  console.log(Niederschlag);
  //windrad = map(windstaerke, 0, 200, 0, 10); // in Rotationsgrad mappen. Bei 200stdkm dreht sich das Windrad nun 10 Grad weiter pro Frame

}


function reloadJson() {
  // reload JSon kreiert eine neue url für die API mit dem Ort, den die User eingegeben haben

  let ort = input.value();
  let url = 'http://api.weatherstack.com/current?access_key=' + key + '&query=' + ort;

  // dann lädt die Funktion gotWeather diese neuen Daten
  loadJSON(url, gotWeather);
}
