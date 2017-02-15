background(0);

translate(width/2, height/2);

pointLight(255, 255, 255, 0, 0, 100);

var i, j;
for(i = -16; i < 16; i++) {
  for(j = -16; j < 16; j++) {
    pushMatrix();
    translate(j * 50, i * 50, 0);
    switch((i+16) % 3) {
      case 0:
      rotateZ(frameCount / 200);
      case 1:
      rotateY(-frameCount / 100);
      case 2:
      rotateX(frameCount / 300);
    }
    stroke(255);
    fill(255);
    box(50);
    popMatrix();
  }
}
