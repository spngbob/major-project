// major project
// jenna doucette
// started november 14th 


let money = 0; // money balance
let income = 15; // how much your income is, going to be changed. 
let bonus = 1;
let cost = 50;
let costIncrease = 70;
let x = windowWidth;
let y = windowHeight;



let sales = [];

function preload() {
  img = loadImage('assets/background.jfif');
  sprite = loadImage('assets/actualcookie.png');
}

function setup() {  
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  image(img, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
  imageMode((CENTER))
  image(sprite, windowWidth/2, windowHeight/2, 100, 100);
  fill(255);
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {
  console.log(money);
  textSize(((height+width)/2)/30);
  text("$" + money, windowWidth/2-50, windowHeight/2-windowHeight/6);
  if (money >= cost){
    cost = costIncrease + cost;
    rect(windowWidth/4, windowHeight/3+windowHeight/3, 2*windowWidth/4, 2*windowHeight/2);
    console.log("WOWWWWWWWWWWWWWWWWWWWWWWWWWWW");
  }}






function mousePressed(){ // changes balance rigght now based on how many times you clicked. 
  if (mouseX > width/2 - 50 && mouseX < width/2 + 50 && mouseY > height/2 - 50 && mouseY < height/2 + 50) {
    money = money + income;
    image(sprite, windowWidth/2, windowHeight/2, 140, 140 );
    setup();
  }
}