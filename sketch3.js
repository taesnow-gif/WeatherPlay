let G;
let C1;
let lineXone = 0;
let lineYone = 0;
let L;
let l;
let B;
let showB = false;
let U;
let C;
let F;
let frogY1 = 752;
let frogY2 = 800;
let frogY3 = 500;
let frogSpeed1 = 3;
let frogSpeed2 = 3;
let frogSpeed3 = 2;
let cheerful = false;
let r = 255;
let g = 255;
let b = 255;
//this is the mouse trail variables
var num = 40;
var mx = []; 
var my = []; 


function preload () {
  G = loadImage("img2/Wetfloor.png");
  C1 = loadImage("img2/Cloud1.png");
  L = loadImage ("img2/Leaf.png");
  B = loadImage ("img2/Lighting.PNG");
  l = loadImage ("img2/Lego2.png");
  U = loadImage ("img2/Umbrella.png");
  C = loadImage ("img2/Cheerful.png");
  F = loadImage ("img2/frog.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);

  let btn = createButton('Next Page');
  btn.position(1402, 741);
  btn.mousePressed(() => {
    window.location.href = 'page4.html';
  });

  // r = random(255);
  // g = random (255);
  // b = random (255);
}

function draw() {
  background('#425c84');
  
//    if (mouseIsPressed) {
//     image(B, 430, 150, 600, 600);
//   } else {
//    image(B, -2000, -2000, 600, 600);
// }
  
  stroke("#95a8c5");
  strokeWeight(4);
  line(lineXone, lineYone, lineXone + 30, lineYone - 30);
  
  //wetfloor at the bottom of the screen
  image (G, 1400, 800, 700, 100);
  image (G, 700, 800, 700, 100);
    image (G, 0, 800, 700, 100);
  
  // lighting bolt
  // if (showB) {
  // image (B, 430, 150, 600, 600);
  // }
  if (mouseX > 390 && mouseX < 1030 &&
    mouseY > 70 && mouseY < 300) {
      image (B, 390, 150, 600, 600); 
    }
  
  //for the thunderclouds in the sky
  image (C1, -300, -150, 2000, 500);
  
  //Lego character
  image (l, 960, 550, 200, 300);

  //if statement for the cheerful image, currently turned off but when mousepressed on Umbrella it will activate the cheerful image on
if (cheerful) {
  image (C, 960, 550, 200, 300);
  }


  //umbrella location
 tint(r, g, b);
  image (U, 857, 360, 300, 300);
  noTint();

  bounce ();
  //frog image location
  image (F, 350, frogY1, 80, 80);
   image (F, 200, frogY2, 80, 80);
    image (F, 500, frogY2, 80, 80);
  
  //set shooting star to random location
  //https://p5js.org/tutorials/variables-and-change/
  lineXone = random(0, windowWidth);
  lineYone = random(0, windowHeight); 
  
  //leaf mouse cursor
  if (mouseIsPressed === true) {
    cursor('img2/Leaf.png', 8, 8);
  } else {
    cursor('img2/Leaf.png');
  
}
 //mouse trail
 var array_pos = (frameCount /'.5') % num; 
  mx[array_pos] = mouseX; 
  my[array_pos] = mouseY; 


  for (var i = 0; i < num; i++) {
    var index = (array_pos + 1 + i) % num; 
    image(L, mx[index], my[index], i, i); 
  }

textSize(24);
  text("X: "+mouseX, 0, height/4);
  text("Y: "+mouseY, 0, height/2);

  
}

// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  if (mouseX > 857 && mouseX < 857 + 300 && mouseY > 360 && mouseY < 360 + 300) {
    r = random(255);
    g = random(255);
    b = random(255);

     cheerful = true;

  
  }  
// if (mouseX > 430 && mouseX < 1030 && mouseY > 150 && mouseY < 750) {
//   showB = !showB;
// }
// }


}
//bounce function to have the frogs jump up and down lol
//https://editor.p5js.org/carriehott/sketches/3fIbayWzS 
function bounce() {
  if (frogY1 > 752) {
    frogSpeed1 = -3; 
  }
  if (frogY1 < 702) {
    frogSpeed1 = 3;
  }
  frogY1 += frogSpeed1;

  if (frogY2 > 752) {
    frogSpeed2 = -3; 
  }
  if (frogY2 < 702) {
    frogSpeed2 = 3;
  }
  frogY2 += frogSpeed2;

  if (frogY3 > 752) {
    frogSpeed3 = -2; 
  }
  if (frogY3 < 702) {
    frogSpeed3 = 2;
  }
  frogY3 += frogSpeed3;
}
