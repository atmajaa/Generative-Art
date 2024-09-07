function setup() {
  createCanvas(500, 500, WEBGL);
  angleMode(DEGREES)
}

function draw() {
  background(20);
  rotateX(60);
  noFill();
  stroke(255);
   beginShape() 
  for(let i=0; i<25; i++){
     let r = map(sin(frameCount/2), -1, 137, 134, 158); 
     let g = map(i,0, 174, 208, 129); 
     let b = map(cos(frameCount), -1, 150, 188, 170);
     stroke(r,g,b)
    for(let j=0; j<360; j+=10){
      let rad = i*8
      let x = rad * cos(j)
      let y = rad * sin(j)
      let z = sin(frameCount*2+j+i*10) * 100
      vertex(x,y,z)
    }
  }
  endShape(CLOSE);
}