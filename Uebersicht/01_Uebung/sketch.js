function setup() {
  createCanvas(400, 400);
  background(20);
}

function draw() {
  print(width, height);
  noStroke();
  fill(142, 52, 244);
  triangle(0, 400, 200, 0, 400, 400);
  fill(238, 52, 244);
  triangle(0, 0, 200, 400, 400, 0);

  stroke(255);
  strokeWeight(4);
  fill(244, 142, 52);
  rect(100, 100, 200, 200);
  fill(244, 52, 58);
  rect(100, 100, 100, 200);

  fill(244, 238, 52);
  ellipse(200, 200, 80, 80);

  line(0, 0, 400, 400)
  line(400, 0, 0, 400)
  line(0, 0, 200, 400)
  line(400, 0, 200, 400)
  line(0, 400, 200, 0)
  line(400, 400, 200, 0)


}
