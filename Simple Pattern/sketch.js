let slider;
function setup() {
  createCanvas(400, 400);
  //Create slider
  slider = createSlider(10,45);
  slider.position(0,height+10);
  slider.size(100);
  
}

function draw() {
  background(220);
  fill(0);
  strokeWeight(1);
  rectMode(CENTER);
  let space = slider.value();
  for(x=0;x<width+50;x+=space){
    for(y=0; y<height+50; y+=space){
      line(x,y,x+space,y);
      line(x,y,x,y+space);
      circle(x,y,10);
      square(x+space/2, y+space/2,10)
       for (let z = 10; z < 50; z += space / 2) { 
        noFill();
        stroke(50 + z * 2, 100, 150); 
        strokeWeight(2);
        circle(x, y, z);  // Draw concentric circles
      }
    }
  }
}