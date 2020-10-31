let c = 50;

function setup() {
  createCanvas(400, 400);
  strokeCap(PROJECT);
}

function draw() {
  background(map(mouseX, 0, width, 0, 255), map(mouseY, 0, height, 0, 255), 176);
  stroke(255);
  fill(20, 20, 255,50);
  let a = mouseX;
  let b = 390;
  let side = 100 * map(mouseY, 0, width, 0.5, 3);
  let up = 50;

  strokeWeight(5);
  square(a, a, side);
  strokeWeight(2);
  line(a+side,a,a+side,a+side);
  line(a,a+side,a+side,a+side);

  strokeWeight(1);
  square(b, b, side);
  strokeWeight(2);
  line(b+up,b,b+up,b+up);
  line(b,b+up,b+up,b+up);

  a += a / 3;
  side += c
  strokeWeight(1);
  square(a, a, side);
  strokeWeight(2);
  line(a+side,a,a+side,a+side);
  line(a,a+side,a+side,a+side);

  a += a / 3
  side += c
  strokeWeight(5);
  square(a, a, side);
  strokeWeight(2);
  line(a+side,a,a+side,a+side);
  line(a,a+side,a+side,a+side);

  a += a / 3
  side += c
  strokeWeight(1);
  square(a, a, side);
  strokeWeight(2);
  line(a+side,a,a+side,a+side);
  line(a,a+side,a+side,a+side);

  a += a / 3
  side += c
  strokeWeight(5);
  square(a, a, side);
  strokeWeight(2);
  line(a+side,a,a+side,a+side);
  line(a,a+side,a+side,a+side);


}
