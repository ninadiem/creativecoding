function setup() {
  createCanvas(400, 250);
  background(255);
}

function draw() {
  if (mouseX > 0 && mouseX < width / 3) {
    background(255, 0, 0); // red
  } else if (mouseX > width / 3 && mouseX < width - width / 3) {
    background(0, 255, 0); // green
  } else {
    background(0, 0, 255); // blue
  }

  for (let x = width / 3; x < width; x += 133.3) {
    line(x, 0, x, 250);
  }
}
