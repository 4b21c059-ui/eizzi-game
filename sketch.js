let sound

function preload(){
  sound=loadSound('music.mp3')
}
function setup() {
  createCanvas(400, 400);
  sound.loop();
}

function draw() {
  background(220);
  let vol = map(mouseY,0,400,1.0,0.0);
  vol=constrain(vol,0,1);
  //console,log(vol);
  sound.setVolume(vol);
  stroke(255,128,0)
  strokeWeight(5);
  noFill();
  circle(width/2,height/2,vol*300);
}
