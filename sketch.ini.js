let nx = 0x40;
let ny = 0x30;
let sx,sy;
let delta = 128;
var freq = 192;
function setup() {
  frameRate(25);
  createCanvas(nx<<3,ny<<3);
  sx = width/nx;
  sy = height/ny;
  //rectMode(CENTER);
  strokeWeight(0.1);
}

function draw() {
  for (var j = 0; j < ny; j++) {
    for (var i = 0; i < nx; i++) {
      var calc = sin( noise( i/delta, j/delta, frameCount/delta ) * delta );
      var r = map(calc,-1,1,63,255);
      var g = r;/*map(sin(noise(i/delta,j/delta,frameCount/delta)*freq),-1,1,64,192);*/
      var b = map(calc,-1,1,255,63);      
      fill( color(r,g,b) );
      rect( i<<3, j<<3, sx, sy );
    }
  }
}
/*let nx = 100;
let ny = 100;
let sx,sy;
let delta = 200;
var freq = 100;
function setup() {

  createCanvas(400,400);
  sx = width / (nx + 1);
  sy = height / (ny + 1);
  rectMode(CENTER);
  strokeWeight(0);
}

function draw() {
  for (var i = 0; i < nx; i++) {
    for (var j = 0; j < ny; j++) {
      var x = (i + 1) * sx;
      var y = (j + 1) * sy;
      var r =map(sin(noise(i/delta,j/delta,frameCount/delta)*freq),-1,1,0,256);
      var g =map(sin(noise(i/delta,j/delta,frameCount/delta+100)*freq),-1,1,0,256);
      var b =map(sin(noise(i/delta,j/delta,frameCount/delta+200)*freq),-1,1,0,256);
      
      fill(color(r,g,b));
      rect(x,y,sx,sy);
      
    }
  }
}*/