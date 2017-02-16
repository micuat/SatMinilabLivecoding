background(0);

function Agent () {
    this.size = 10;
    this.x = 0;
    this.y = 0;
    this.j = 0;
    this.i = 0;
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
      agents[i + "," + j].j = j;
      agents[i + "," + j].i = i;
      agents[i + "," + j].x = j * 50;
      agents[i + "," + j].y = i * 50;
    }
  }

  doInitialize = 0;
  //print(agents);
}

translate(width/2, height/2);

pointLight(255, 255, 255, 0, 0, 100);

for each(var agent in agents.values()) {
  pushMatrix();
  translate(agent.x, agent.y, 0);
  switch((agent.i+16) % 3) {
    case 0:
    rotateZ(frameCount / 200);
    case 1:
    rotateY(-frameCount / 100);
    case 2:
    rotateX(frameCount / 300);
  }
  stroke(255);
  fill(255);
  box(agent.size);
  popMatrix();
}
