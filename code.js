background(0);

function Agent () {
    this.size = 10;
}

define("agents", new java.util.HashMap());

define("doInitialize", 1);
//doInitialize = 1;

if(doInitialize > 0) {
  agents.clear();
  var i, j;
  for(i = -16; i < 16; i++) {
    for(j = -16; j < 16; j++) {
      agents.put(i + "," + j, new Agent);
      agents[i + "," + j].size = 17 + i;
    }
  }

  doInitialize = 0;
  //print(agents);
}

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
    box(agents[i + "," + j].size);
    popMatrix();
  }
}
