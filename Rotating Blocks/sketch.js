let distMouse = 50;
let blocks = [];
let size = 25;
let rows; 
let cols; 
let r;
let g;
let b;
let a;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  angleMode(DEGREES);
  rows = width/size;
  cols = height/size;
  for(let i=0; i<cols; i++){
    //empty 1d arrays
    blocks[i] = [];
    for(let j=0; j<rows; j++){
      blocks[i][j] = new Block(size/2 + i*size, size / 2 + j*size);
    }
  }
 
}



//draw function is like a while loop
//1. Automatically handles the looping
//2. Redraws the canvas on each iteration
//3. Updates the frame based on the code
function draw() {
  background(220);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      blocks[i][j].move();

      // Only set the color if the mouse is near the block
      blocks[i][j].setColor(
        random(205),
        random(10, 200),
        random(20),
        random(100, 255)
      );

      blocks[i][j].display();
    }
  }
}