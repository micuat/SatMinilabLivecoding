background(0);

translate(width/2, height/2);

var i;
for(i = 0; i < 16; i++) {
  switch(i % 3) {
    case 0:
    rotateZ(frameCount / 200);
    case 1:
    rotateY(-frameCount / 100);
    case 2:
    rotateX(frameCount / 300);
  }
  stroke(255);
  noFill();
  box(height / 2);
  scale(0.95, 0.95, 0.95);
}
