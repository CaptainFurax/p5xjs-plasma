p5.disableFriendlyErrors = true;
setup=_=>{
  pixelDensity(1);
  x=64,y=48,d=128
  createCanvas(x*8,y*8)
  strokeWeight(1)
}
draw=_=>{
  for(j=y;j--;){
    for(i=x;i--;){
      c=sin(noise(i/d,j/d,frameCount/d)*d)
      r=map(c,-1,1,63,255)
      b=map(c,-1,1,255,63)
      fill(color(r,r,b))
      rect(i*8,j*8,8,8)
    }
  }
}
