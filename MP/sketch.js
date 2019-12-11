// major project
// jenna doucette
// started november 14th 



// income rules;

// income level one = 1 
// income level two = 2
// income level three = 4
// income level four = 8
// income level five = 16 and etc etc etc !!!!!!!


let money = 0; // money balance
let income = 3; // how much your income is, going to be changed. 
let bonus = 1;
let cost = 50;
let costIncrease = 100;



let sales = [];

function preload() {
  img = loadImage('assets/background.jfif');
  sprite = loadImage('assets/actualcookie.png');
}

function setup() {  
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  image(img, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
  image(sprite, windowWidth/2, windowHeight/2, 100, 100 );
  fill(255);
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {
  console.log(money);
  textSize(((height+width)/2)/30);
  text("$" + money, windowWidth/2-25, windowHeight/2-windowHeight/6);
  
}


function createSale(){
  let salebutton = new upgrade(cost, "red");
  sales.push(salebutton);
  salebutton.display();
  }





function mouseClicked(){ // changes balance rigght now based on how many times you clicked. 
  if (mouseX > width/2 - 50 && mouseX < width/2 + 50 && mouseY > height/2 - 50 && mouseY < height/2 + 50) {
    money = money + income;
    checkBalance();
    image(sprite, windowWidth/2, windowHeight/2, 140, 140 );
    setup();

  }
}


function checkBalance(){
  if (money === cost){
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