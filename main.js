function preload(){
  ball_touch = loadSound("ball_touch_paddel.wav");
  missed = loadSound("missed.wav");
}
function setup() {
  var canvas =  createCanvas(700,600);
  canvas.parent('canvas');
  video = createCapture(VIDEO);
  
  video.size(700,600);
}