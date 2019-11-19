// major project
// started november 14th


let grid = [];
let level; 
let levelOne;
let balance = 0; // money balance
let income = 3; // how much your income is, going to be changed. 
let incomeSpeed = 2; // how often you get your "paycheck" 
let bonus = 1;
let beans = 0;
let costIncrease = 1.1;



function setup() {  
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  createSprite(levelOne); // shows image/sprite to be clicked on 
}


function createSprite(level){
  noStroke();
  rect(width/2-50, height/2-50, 100, 100);
  fill(100);
  mouseClicked();
}



function mouseClicked(){
  if (mouseX > width/2 - 50 && mouseX < width/2 + 50 && mouseY > height/2 - 50 && mouseY < height/2 + 50) {
    balance = balance + bonus;
    console.log(balance);
    fill(50);
  
  }

}