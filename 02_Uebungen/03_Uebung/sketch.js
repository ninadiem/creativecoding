function setup() {
  createCanvas(1000, 750);
  background(255, 64, 64);
  noFill();
}

function draw() {


  for (let x = 1; x < height; x += 20) {
    strokeWeight(x / 40);
    beginShape();
    vertex(350 + x, 350 + x);
    vertex(350 + x, 200 + x);
    vertex(250 + x, 200 + x);
    vertex(250 + x, 300 + x);
    vertex(200 + x, 300 + x);
    vertex(200 + x, 450 - x);
    vertex(230 + x, 450 - x);
    vertex(230 + x, 600 - x);
    vertex(230 + x, 600 - x);
    vertex(350 + x, 600 - x);
    endShape(CLOSE);

  }
}
