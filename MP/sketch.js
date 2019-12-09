// major project
// jenna doucette
// started november 14th 

let balance = 0; // money balance
let income = 3; // how much your income is, going to be changed. 
let bonus = 1;
let cost = 50;
let costIncrease = 100;



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
    let salebutton = new upgrade(width/2-50, height/2-50, 200, 200, 255, 0, 0, cost)
    sales.push(salebutton);
    salebutton.display();
  }
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
