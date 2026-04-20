let G1;
let F1;
let F2;
let S; 
let R;
let sunX = 700;
let C;
let C2, C3;
let cloudX = -150;
let cloud2X = -250; 
let cloud3X = -100;
let E1; 
let E2;
let E3;
let M;
var speed = 70;
//this is the mouse trail variables
var num = 30;
var mx = []; 
var my = []; 
let star;
let L;
let x = 200;
let y = 200;
let img;
 
 
//grass image
  function preload() {
    G1 = loadImage ("img1/Grass.png");
    S = loadImage ("img1/Sun.png");
    C = loadImage ("img1/Cloud.png");
   C2 = loadImage ("img1/Cloud2.png");
   C3 = loadImage ('img1/Cloud3.png');
    F1 = loadImage ("img1/Flower1.png");
    F2 = loadImage ("img1/Flower2.png");
    R = loadImage ("img1/Rainbow.png"); 
   // L = loadImage ("img2/Leaf.png");
    E1 = loadImage ("img1/Face1.png");
    E2 = loadImage ("img1/Face2.png");
    E3 = loadImage ("img1/Face3.png");
    M = loadImage ("img1/Moon.png");
    star = loadImage ("img1/Star.png");
    L = loadImage ("img1/Lego1.png");
    img = loadImage ("img1/butter.png");
    
  }
function setup() {
  createCanvas(windowWidth, windowHeight);
  
 let btn = createButton('Next Page');
  btn.position(1402, 741);
  btn.mousePressed(() => {
    window.location.href = 'page3.html';
  });
  
  
}

function draw() {
  
 background('#23d2fd');
 frameRate(60);

 //sun location
  image (S, 40, 40, 250, 250);
  
   if (mouseX < 240 && mouseX > 40 && mouseY < 240 && mouseY > 40) {
  background('#142e93');
    image (M, 70, 70, 170, 170); 
  image (star, 500, 141, 50, 50);
    image (star, 884, 136, 50, 50);
     image (star, 594, 250, 70, 70);
     image (star, 1135, 158, 70, 70);
    image (star, 966, 288, 30, 30);
     image (star, 288, 271, 30, 30);
     image (star, 1374, 286, 50, 50);
  } 
  //x,y coordinates
  
  frameRate(12);
   textSize(24);
  text("X: "+mouseX, 0, height/4);
  text("Y: "+mouseY, 0, height/2);

 

  
  //grass location
  image (G1, 1422, 700, 800, 200);
  image (G1, 700, 700, 800, 200);
    image (G1, 0, 700, 800, 200);
  
  //flowers location
  image(F1, 750, 615, 250, 248);
  image (F2, 300, 680, 150, 148);
  image (F2, 1200, 680, 150, 148);

  //face click location
  image (E1,910, 700, 60, 60 )
  image (E2, 877, 630, 58, 58);
  image (E3, 770, 733, 50, 50);

  if (mouseIsPressed) {
    image(E1, E2, E3);
  } else {
   image(F1, 750, 615, 250, 248);
}
  //Lego character
  image (L, 98, 550, 200, 300);
  
   cloudX = cloudX + 3;
  cloud2X = cloud2X + 2;
  cloud3X = cloud3X + 6;
  
  //lines 79-88 below reset the clouds to come from 300 or 200 pixels to the left of zero (well off screen) which gives the illusion of floating
    if (cloudX > windowWidth) {
       cloudX = -600;
    }
  
    if (cloud2X > windowWidth) {    
      cloud2X = -300;
    }
    if (cloud3X > windowWidth) {
      cloud3X = -200;
    }
  
 
 
  //cloud location + animation
  image (C, cloudX, 30, 300, 150); 
  image (C2, cloud2X, 150, 300, 150);
  image (C3, cloud3X, 160, 200, 100);

  x += (mouseX - x) * 0.05;
  y += (mouseY - y) * 0.05;

  image(img, x, y, 50, 50);

  
  
  //sun animation, will have to come back to figure out
// function mousePressed() {
 //   S.click();
 // }
  
//function clicked () {
//   let d = dist(mouseX, mouseY, 40, 40);
//   if (d < 100) {
  //   image(S, sunX, 250, 250);
  // }
// }
  //rainbow mouse cursor
  // if (mouseIsPressed === true) {
  //   cursor(R);
  // } else {
  //   cursor(R);
  // }

//rainbow mouse cursor
  if (mouseIsPressed === true) {
    cursor('img1/Rainbow.png', 8, 8); 
  } else {
    cursor('img1/Rainbow.png');
  
}
 //mouse trail
 var array_pos = (frameCount /'.5') % num; 
  mx[array_pos] = mouseX; 
  my[array_pos] = mouseY; 


  for (var i = 0; i < num; i++) {
    var index = (array_pos + 1 + i) % num; 
    image(R, mx[index], my[index], i, i); 
  }
}


// function drawbutter() {
//   let d = dist(mouseX, mouseY, x, y);

//   if (d < 100) {
//     x += (x - mouseX) * 0.05;
//     y += (y - mouseY) * 0.05;
//   }

//   image(img, x, y, 30, 30);
// }