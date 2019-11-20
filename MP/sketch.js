// major project
// jenna doucette
// started november 14th

let level = 5;
let levels = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
let levelOne; // level 
let balance = 0; // money balance
let income = 3; // how much your income is, going to be changed. 
let incomeSpeed = 2; // how often you get your "paycheck" 
let bonus = 1;
let costIncrease = 1.1;

function setup() {  
  createCanvas(windowWidth, windowHeight);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  createSprite(); // shows image/sprite to be clicked on 
}

function createSprite(){
  // creates the current square-esque sprite
  rect(width/2-50, height/2-50, 100, 100);
  fill(levels[level]);
}

function mouseClicked(){ // changes balance rigght now based on how many times you clicked. 
  if (mouseX > width/2 - 50 && mouseX < width/2 + 50 && mouseY > height/2 - 50 && mouseY < height/2 + 50) {
    balance = balance + bonus;
    console.log(balance);
    fill(0, 0, 0, 150);
  }
}

class sellButtons{
  constructor(x, y, w, h, colour, text){
    this.x = x;
    this.y = y;
    this.w = w;
    this.colour = colour;
    // check if clicked 
    // colour change
  }
}