// major project
// jenna doucette
// started november 14th

let level = 0;
let levels = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
let levelOne; // level 
let balance = 0; // money balance
let income = 3; // how much your income is, going to be changed. 
let incomeSpeed = 2; // how often you get your "paycheck" 
let bonus = 1;
let costIncrease = 1.1;
let baseCost = 50;

let sales = [];

function setup() {  
  createCanvas(windowWidth, windowHeight);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  createSprite(); // shows image/sprite to be clicked on 
  console.log(balance);
  textSize(((height+width)/2)/50);
  text("$" + balance, windowWidth/2-25, windowHeight/2-windowHeight/6);
  
}

function createSale(){
  for (let i = 0; i < 100; i ++){
    let salebutton = new upgrade(width/2-50, height/2-50, 200, 200, 255, 0, 0, baseCost)
    baseCost = baseCost * costIncrease;
    sales.push(saleshutton);
    salebutton.display();
  }
}


function createSprite(){
  // creates the current square-esque sprite
  noStroke();
  rect(width/2-50, height/2-50, 100, 100);
  fill(levels[level]);
}

function mouseClicked(){ // changes balance rigght now based on how many times you clicked. 
  if (mouseX > width/2 - 50 && mouseX < width/2 + 50 && mouseY > height/2 - 50 && mouseY < height/2 + 50) {
    balance = balance + bonus;
    fill(0, 0, 0, 150);
  }
  if (balance > 50){
    createSale();
  }
}

class upgrade{
  constructor(x, y, xl, yl, r, g, b, cost){
    this.x = x;
    this.y = y;
    this.xl = xl;
    this.yl = yl; 
    this.r = r;
    this.g = g;
    this.b = b;
    this.cost = cost;
  }
  
  display(){
    noStroke();
    fill(this.r, this.g, this.b, 100);
    rect(this.x, this.y, this.xl, this.yl)
  }
}

function createSale(){
  for (let i = 0; i < 1; i ++){
    let salebutton = new upgrade(width/2-50, height/2-50, 200, 200, 255, 0, 0, baseCost)
    baseCost = baseCost * costIncrease;
    sales.push(salebutton);
    salebutton.display();
  }
}