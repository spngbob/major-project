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
  sprite = loadImage('assets/sprite.png'); //main cookie to click on
  background = loadImage('assets/kitchen.png');
  b1 = loadImage('assets/baker_1.png');   // all the bakers are different upgrades
  b2 = loadImage('assets/baker_2.png');
  b3 = loadImage('assets/baker_3.png');
  b4 = loadImage('assets/baker_4.png');
  b5 = loadImage('assets/baker_5.png');
  b6 = loadImage('assets/baker_6.png');
  b7 = loadImage('assets/baker_7.png');
  b8 = loadImage('assets/baker_8.png');
  bowl = loadImage('assets/bowl.png');
  cookie = loadImage('assets/cookie.png');
  cup = loadImage('assets/cup.png');
  





  let x = windowWidth;
  let y = windowHeight;
}


function setup() {  
  createCanvas(windowWidth, windowHeight);
  imageMode((CENTER))
  image(background, windowWidth/2, windowHeight/2 , windowWidth, windowHeight)
  image(sprite, windowWidth/2, windowHeight/2, 100, 100);
  fill("black");
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  setup();
}


function draw() {
  console.log(money);
  textSize(((height+width)/2)/30);
  text("$" + money, windowWidth/2-50, windowHeight/2-windowHeight/6);
  text("$ " + cost + " = next upgrade", 300, 100);
}


function mousePressed(){ // changes balance rigght now based on how many times you clicked. 
  if (mouseX > width/2 - 50 && mouseX < width/2 + 50 && mouseY > height/2 - 50 && mouseY < height/2 + 50 || keyIsPressed === true) {
    money = money + income;
    image(sprite, windowWidth/2, windowHeight/2, 140, 140 );
    setup();
  }
  if (money >= cost){
    noStroke();
    if (cost < 1000){
      image(b1, 150, 150, 100, 100)

    }

    else if (cost < 2500){
      image(b2, 150, 150, 100, 100)
  
    }
    else if (cost < 7500){
      image(b3, 150, 150, 100, 100)

    }
    else if (cost < 10000){
      image(b4, 150, 150, 100, 100)

    }
    else if (cost < 100000){
      image(b5, 150, 150, 100, 100)

    }
    else if (cost < 2000000){
      image(b6, 150, 150, 100, 100)

    }
    else if (cost < 3000000){
      image(b7, 150, 150, 100, 100)

    }
    else{
      image(b8, 150, 150, 100, 100)

    }
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
        bonus = 50;

      }
      else if (cost < 75000 ){
        buyInfo(50);
        bonus = 75;
      }
      else if (cost < 1000000 ){
        buyInfo(100);
        bonus = 300;
      }

      else{
        bonus = int(cost);
        buyInfo(bonus);

      }
  
  }
}
}


function buyInfo(multiplier){
  money = money - cost;
  cost = cost + costIncrease;
  income = int(income *1.71);
  costIncrease = int(costIncrease * (multiplier));
  bonus = multiplier;
  console.log("cost = " + cost); 
  console.log("income = " + income);
  setup();
}