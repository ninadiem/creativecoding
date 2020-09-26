function setup() {
  createCanvas(1000, 750);
  noFill();
}

function draw() {


  for (let x = 1; x < height; x += 20) {
    strokeWeight(5);
    beginShape();
    vertex(mouseX, 350 + x);
    vertex(mouseX, 200 + x);
    vertex(mouseX, 200 + x);
    vertex(mouseX, 300 + x);
    vertex(mouseX, 300 + x);
    vertex(mouseX, 450 - x);
    vertex(mouseX, 450 - x);
    vertex(mouseX, 600 - x);
    vertex(mouseX, 600 - x);
    vertex(mouseX, 600 - x);
    endShape(CLOSE);

  }
}
