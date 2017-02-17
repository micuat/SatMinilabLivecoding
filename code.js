background(0);

function Agent () {
  this.size = 10;
  this.x = 0;
  this.y = 0;
  this.z = 0;
  this.j = 0;
  this.i = 0;
  this.left = null;
  this.right = null;
  this.up = null;
  this.down = null;

  this.draw = function() {
  }
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
      agents[i + "," + j].x = 500 * Math.cos(j / 16 * Math.PI);
      agents[i + "," + j].y = i * 50;
      agents[i + "," + j].z = 500 * Math.sin(j / 16 * Math.PI);

      if(i > -16) {
        agents[i + "," + j].up = agents[(i-1) + "," + j];
        agents[(i-1) + "," + j].down = agents[i + "," + j];
      }
      if(j > -16) {
        agents[i + "," + j].left = agents[i + "," + (j-1)];
        agents[i + "," + (j-1)].right = agents[i + "," + j];
      }
      if(j == 15) {
        agents[i + "," + 15].right = agents[i + "," + (-16)];
        agents[i + "," + (-16)].left = agents[i + "," + 15];
      }
    }
  }

  doInitialize = 0;
  //print(agents);
}

translate(width/2, height/2);
rotateY(frameCount / 200)
pointLight(255, 255, 255, 0, 0, 0);

for each(var agent in agents.values()) {
  agent.draw = function() {
    pushMatrix();
    translate(this.x, this.y, this.z);
    switch((this.i+16) % 3) {
      case 0:
      rotateZ(frameCount / 200);
      case 1:
      rotateY(-frameCount / 100);
      case 2:
      rotateX(frameCount / 300);
    }
    stroke(255);
    fill(255);
    //this.size = 17 + this.i;
    this.size += Math.sin(frameCount / (45 + this.j)) * 1;
    box(this.size);
    popMatrix();
    // if(this.right != null)
    //   line(this.x, this.y, this.right.x, this.right.y);
    // if(this.down != null)
    //   line(this.x, this.y, this.down.x, this.down.y);
  }

  agent.draw();
}
