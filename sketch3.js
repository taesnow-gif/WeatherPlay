let G;
let C1;
let lineXone = 0;
let lineYone = 0;
let L;
let B;


function preload () {
  G = loadImage("img2/Wetfloor.png");
  C1 = loadImage("img2/Cloud1.png");
  L = loadImage ("img2/Leaf.png");
  B = loadImage ("img2/Lighting.PNG");
  
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('#425c84');
  
   if (mouseIsPressed) {
    image(B, 430, 150, 600, 600);
  } else {
   image(B, -2000, -2000, 600, 600);
}
  
  stroke("#95a8c5");
  strokeWeight(4);
  line(lineXone, lineYone, lineXone + 30, lineYone - 30);
  
  //wetfloor at the bottom of the screen
  image (G, 1400, 752, 700, 100);
  image (G, 700, 752, 700, 100);
    image (G, 0, 752, 700, 100);
  
  // lighting bolt
  //image (B, 430, 150, 600, 600);
  
  //for the thunderclouds in the sky
  image (C1, -300, -150, 2000, 500);
  
  
  
  //set shooting star to random location
  //https://p5js.org/tutorials/variables-and-change/
  lineXone = random(0, windowWidth);
  lineYone = random(0, windowHeight); 
  
  //rainbow mouse cursor
  if (mouseIsPressed === true) {
    cursor('img2/Leaf.png', 8, 8);
  } else {
    cursor('img2/Leaf.png');
  
}
 
}