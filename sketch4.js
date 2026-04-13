let G;
let P1;
let S;
let P2;
let circleXone = 0;
let circleYone = 0;
let speed = -100;

function preload() {
  G = loadImage ("img3/Landscape.png");
  P1 = loadImage ("img3/Penguin1.png");
 P2 = loadImage ("img3/Penguin2.png");
 S = loadImage ("img3/Snowflake.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('#4fa9db');

   stroke("#95a8c5");
 // strokeWeight(1);
  circle(circleXone, circleYone, 30, 30);
  circleXone = circleXone - 100;
  circleYone = circleYone - 100;
  
 //image of the snowy landscape 
  image (G, -5, 150, 1550, 750);
  
  //penguin locations
   image (P1, 1090, 600, 95, 180);
  image (P2, 980, 500, 100, 200);
 
   //set shooting star to random location
  //https://p5js.org/tutorials/variables-and-change/
  circleXone = random(0, windowWidth);
  circleYone = random(0, windowHeight); 
  
  
  // //snowflake cursor
  // if (mouseIsPressed === true) {
  //   cursor('img3/Snowflake.png', 8, 8);
  // } else {
  //   cursor('img3/Snowflake.png');
  // }
  //rainbow mouse cursor
  if (mouseIsPressed === true) {
    cursor('img3/Snowflake.png', 8, 8);
  } else {
    cursor('img3/Snowflake.png');
  
}
  
}