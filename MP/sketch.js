// major project
// jenna doucette
// started november 14th 


let money = 0; // money balance
let income = 5; // how much your income is, going to be changed. 
let bonus = 1;
let cost = 25;
let costIncrease = 5 * bonus;

let sales = [];

function preload() {
  img = loadImage('assets/background.jfif');
  sprite = loadImage('assets/actualcookie.png');
  let x = windowWidth;
  let y = windowHeight;
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
  setup();
}


function draw() {
  console.log(money);
  textSize(((height+width)/2)/30);
  text("$" + money, windowWidth/2-50, windowHeight/2-windowHeight/6);
  
}


function mousePressed(){ // changes balance rigght now based on how many times you clicked. 
  if (mouseX > width/2 - 50 && mouseX < width/2 + 50 && mouseY > height/2 - 50 && mouseY < height/2 + 50) {
    money = money + income;
    image(sprite, windowWidth/2, windowHeight/2, 140, 140 );
    setup();
  }
  if (money >= cost){
    noStroke();
    rect(100, 100, 100, 100);
    if ((mouseX > 100 && mouseX < 200 && mouseY > 100&& mouseY < 200) &&  mouseIsPressed === true){
      if (cost < 2500){
        buyInfo(2);
        bonus = 2;
      }

      else if (cost < 5000){
        buyInfo(5);
        bonus = 5;
    
      }
      else if (cost < 10000){
        buyInfo(10);
        bonus = 10;
      }
      else if (cost < 20000){
        buyInfo(25);
        bonus = 25;

      }
    else{
      console.log(mouseX, mouseY);
    }
  }
}
}


function buyInfo(multiplier){
  money = money - cost;
  cost = cost + costIncrease;
  income = income + multiplier*bonus;
  costIncrease = int(costIncrease * (multiplier * 1.001111));
  bonus = multiplier;
  console.log("cost = " + cost); 
  console.log("income = " + income);
  setup();
}