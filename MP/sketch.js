// major project
// jenna doucette
// started november 14th 



// income rules;

// income level one = 1 
// income level two = 2
// income level three = 4
// income level four = 8
// income level five = 16 and etc etc etc !!!!!!!


let balance = 0; // money balance
let income = 3; // how much your income is, going to be changed. 
let bonus = 1;
let cost = 50;
let costIncrease = 100;



let sales = [];

function preload() {
  img = loadImage('assets/background.jfif');
}

function setup() {  
  createCanvas(windowWidth, windowHeight);
  image(img, 100, 100);
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {
  createSprite(); // shows image/sprite to be clicked on 
  console.log(balance);
  textSize(((height+width)/2)/50);
  text("$" + balance, windowWidth/2-25, windowHeight/2-windowHeight/6);
  
}


function createSale(){
  let salebutton = new upgrade(cost, "red");
  sales.push(salebutton);
  salebutton.display();
  }


function createSprite(){
  // creates the current square-esque sprite
  noStroke();
  rect(width/2-50, height/2-50, 100, 100);
  fill("red");
}


function mouseClicked(){ // changes balance rigght now based on how many times you clicked. 
  if (mouseX > width/2 - 50 && mouseX < width/2 + 50 && mouseY > height/2 - 50 && mouseY < height/2 + 50) {
    balance = balance + income;
    fill(0, 0, 0, 150);
    checkBalance();
  }
}


function checkBalance(){
  if (balance === cost){
    let cost = costIncrease + cost;
    createSale();
  }
}



class upgrade {
  constructor(money, fillColor) {
    this.fillColor = color(0);
    this.money = cost; 
    this.x = width/2;
    this.y = height/2;
  }

  makeRect() {
    rect(this.x - 20, this.y - 20, this.x + 20, this.y + 20);
    fill(this.fillColor)
  }
  }