function setup() {
  createCanvas(900, 500);

}

function draw() {
  //size
  let s = 0;
  //x-Achse
  let x = 80;
  //blau-Wert
  let b = 0;
  //Transparenz
  let t = 20;

  //x-Wert nach Fibonacci zahlen

  background(mouseX, 50, 20);

  strokeWeight(5);

  s += 30;
  x += 1;
  b += 20;
  t += 5;
  fill(0, 200, b, t)
  ellipse(x, 250, s, s);


  s += 30;
  x += 1;
  b += 20;
  t += 5;
  fill(0, 200, b, t)
  ellipse(x, 250, s, s);

  s += 30;
  x += 2;
  b += 20;
  t += 5;
  fill(0, 200, b, t)
  ellipse(x, 250, s, s);

  s += 30;
  x += 3;
  b += 20;
  t += 5;
  fill(0, 200, b, t)
  ellipse(x, 250, s, s);

  s += 30;
  x += 5;
  b += 20;
  t += 5;
  fill(0, 200, b, t)
  ellipse(x, 250, s, s);

  s += 30;
  x += 8;
  b += 20;
  t += 5;
  fill(0, 200, b, t)
  ellipse(x, 250, s, s);

  s += 30;
  x += 13;
  b += 20;
  t += 5;
  fill(0, 200, b, t)
  ellipse(x, 250, s, s);

  s += 30;
  x += 21;
  b += 20;
  t += 5;
  fill(0, 200, b, t)
  ellipse(x, 250, s, s);

  s += 30;
  x += 34;
  b += 20;
  t += 5;
  fill(0, 200, b, t)
  ellipse(x, 250, s, s);

  s += 30;
  x += 55;
  b += 20;
  t += 5;
  fill(0, 200, b, t)
  ellipse(x, 250, s, s);

  s += 30;
  x += 89;
  b += 20;
  t += 5;
  fill(0, 200, b, t)
  ellipse(x, 250, s, s);

  s += 30;
  x += 144;
  b += 20;
  t += 5;
  fill(0, 200, b, t)
  ellipse(x, 250, s, s);

  s += 30;
  x += 233;
  b += 20;
  t += 5;
  fill(0, 200, b, t)
  ellipse(x, 250, s, s);
}
