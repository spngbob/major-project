// major project
// jenna doucette
// started november 14th 


let cookies = 0; //  balance of cookies 
let cps = 0; //  cookies per click

let windowWidth = 750;
let windowHeight = 750;


function preload() {
  cookieImage = loadImage('assets/sprite.png');
  //  upgrades
  b1 = loadImage('assets/baker_1.png');
  b2 = loadImage('assets/baker_2.png');
  b3 = loadImage('assets/baker_3.png');
  b4 = loadImage('assets/baker_4.png');
  b5 = loadImage('assets/baker_5.png');
  b6 = loadImage('assets/baker_6.png');
}

let cookieX = windowWidth/2;
let cookieY = windowHeight/2;
let cookieW = windowWidth/5;
let cookieH = windowHeight/5; 

// Baker 1
let b1Cost = 15;
let b1Owned = 0;
let b1Color = 255;

// Baker 2
let b2Cost = 200;
let b2Owned = 0;
let b2Color = 255;

// Baker 3
let b3Cost = 1000;
let b3Owned = 0;
let b3Color = 255;

// Baker 4
let b4Cost = 2000;
let b4Owned = 0;
let b4Color = 255;

// Baker 5
let b5Cost = 50000
let b5Owned = 0
let b5Color = 255

// Baker 6
let b6Cost = 100000
let b6Owned = 0
let b6Color = 255

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  frameRate(60);

}

function draw(){
  drawCookie();
  textSize(20);
  text("cookies" + nf(cookies, 0, 2), 20, 46);
  stroke(1);

  // calculating clicks per minuet
  fill(0);
  textSize(15);
  text("CPS: " + nf(cps, 0, 2), 20, 46);
  cookies = cookies + cps * 1/60;
  cps = b1Owned*1 + b2Owned*5 + b3Owned*10 + b4Owned*25 + b5Owned*50 + b6Owned*100;

// I T E M S 

// baker 1 
  fill(b1Color);
  rect(20, 50, 250, 75);
  fill(0);

  textSize(14);
  text("Buy Pastry Chef. (1 CPS)", 25, 65);
  text("Price: C " + nf(b1Cost, 0, 2), 25, 83);
  text("Owned:", 25, 100);
  text(b1Owned, 25, 120);

  b1Cost =  15 * pow(1.07, b1Owned);

// baker 2

  fill(b2Color);
  rect(20, 130, 250, 75);
  fill(0);

  textSize(14);
  text("Buy Bread Baker (5 CPS)", 25, 145);
  text("Price: C " + nf(b2Cost, 0, 2), 25, 163);
  text("Owned:", 25, 180);
  text(b2Owned, 25, 200);

  b2Cost =  200 * pow(1.07, b2Owned);

// baker 3

  fill(b3Color);
	rect(20, 210, 250, 75);
	fill(0);
	
	textSize(14);
	text("Buy Cake Baker (10 CPS)", 25, 225);
	text("Price: C " + nf(b3Cost, 0, 2), 25, 243);
	text("Owned:", 25, 260);
	text(b3Owned, 25, 280);
	
	b3Cost =  1000 * pow(1.07, b3Owned);

// baker 4

  fill(b4Color);
  rect(20, 290, 250, 75);
  fill(0);

  textSize(14);
  text("Buy Super Baker (25 CPS)", 25, 305);
  text("Price: C " + nf(b4Cost, 0, 2), 25, 323);
  text("Owned:", 25, 340);
  text(b4Owned, 25, 360);

  b4Cost =  2000 * pow(1.07, b4Owned);

// baker 5 

  fill(b5Color);
  rect(20, 370, 250, 75);
  fill(0);

  textSize(14);
  text("Buy Godtier Baker (50 CPS)", 25, 385);
  text("Price: C " + nf(b5Cost, 0, 2), 25, 403);
  text("Owned:", 25, 420);
  text(b5Owned, 25, 440);

  b5Cost =  50000 * pow(1.07, b5Owned);

// baker 6

	fill(b6Color);
	rect(20, 450, 250, 75);
	fill(0);
	
	textSize(14);
	text("Buy Gordon Ramsey (100 CPS)", 25, 465);
	text("Price: C " + nf(b6Cost, 0, 2), 25, 483);
	text("Owned:", 25, 500);
	text(b6Owned, 25, 520);
	
	b6Cost =  100000 * pow(1.07, b6Owned);



  // b1 highlighter 
  if(cookies < b1Cost) {
		b1Color = 200
  } 
  else if (mouseX < 20 && mouseX > 20 + 250 && mouseY < 50 && mouseY > 50 + 75 && cookies >= b1Cost) {
		b1Color = 255
  } 
  else if (mouseX > 20 && mouseX < 20 + 250 && mouseY > 50 && mouseY < 50 + 75 && cookies < b1Cost) {
		b1Color = 200
  } 
  else {
		b1ClickerColor = 255
	} 
	if (mouseX > 20 && mouseX < 20 + 250 && mouseY > 50 && mouseY < 50 + 75 && cookies >= b1Cost) {
		b1Color = 245
	}
	
	// b2 highlighter
	if(cookies < b2Cost) {
		b2Color = 200
	} else if (mouseX < 20 && mouseX > 20 + 250 && mouseY < 130 && mouseY > 130 + 75 && cookies >= b2Cost) {
		b2Color = 255
	} else if (mouseX > 20 && mouseX < 20 + 250 && mouseY > 130 && mouseY < 130 + 75 && cookies < b2Cost) {
		b2Color = 200
	} else {
		b2Color = 255
	} 
	if (mouseX > 20 && mouseX < 20 + 250 && mouseY > 130 && mouseY < 130 + 75 && cookies >= b2Cost) {
		b2Color = 245
	}
	
	// b3 highlighter 
	if (cookies < b3Cost) {
		b3Color = 200
  } 
  else if (mouseX < 20 && mouseX > 20 + 250 && mouseY < 210 && mouseY > 210 + 75 && cookies >= b3Cost) {
		b3Color = 255
  } 
  else if (mouseX > 20 && mouseX < 20 + 250 && mouseY > 210 && mouseY < 210 + 75 && cookies < b3Cost) {
    b3Color = 200
  } 
  else {
		b3Color = 255
	} 
	if (mouseX > 20 && mouseX < 20 + 250 && mouseY > 210 && mouseY < 210 + 75 && cookies >= b3Cost) {
		b3Color = 245
	}
	
	// b4 highlighter
	if(cookies < b4Cost) {
		b4Color = 200
  } 
  else if (mouseX < 20 && mouseX > 20 + 250 && mouseY < 290 && mouseY > 290 + 75 && cookies >= b4Cost) {
		b4Color = 255
  } 
  else if (mouseX > 20 && mouseX < 20 + 250 && mouseY > 290 && mouseY < 290 + 75 && cookies < b4Cost) {
		b4Color = 200
  }
  else {
		b4Color = 255
	} 
	if (mouseX > 20 && mouseX < 20 + 250 && mouseY > 290 && mouseY < 290 + 75 && cookies >= b4Cost) {
		b4Color = 245
	}
	
	// b5 highlighter 
	if(cookies < b5Cost) {
		b5Color = 200
	} else if (mouseX < 20 && mouseX > 20 + 250 && mouseY < 370 && mouseY > 370 + 75 && cookies >= b5Cost) {
		b5Color = 255
	} else if (mouseX > 20 && mouseX < 20 + 250 && mouseY > 370 && mouseY < 370 + 75 && cookies < b5Cost) {
		b5Color = 200
	} else {
		b5Color = 255
	} 
	if (mouseX > 20 && mouseX < 20 + 250 && mouseY > 370 && mouseY < 370 + 75 && cookies >= b5Cost) {
		b5Color = 245
	}
	
	// b6 highlighter
	if(cookies < b6Cost) {
		b6Color = 200
	} else if (mouseX < 20 && mouseX > 20 + 250 && mouseY < 450 && mouseY > 450 + 75 && cookies >= b6Cost) {
		b6Color = 255
	} else if (mouseX > 20 && mouseX < 20 + 250 && mouseY > 450 && mouseY < 450 + 75 && cookies < b6Cost) {
		b6Color = 200
	} else {
		b6Color = 255
	} 
	if (mouseX > 20 && mouseX < 20 + 250 && mouseY > 450 && mouseY < 450 + 75 && cookies >= b6Cost) {
		b6Color = 245
  }
  

  // lines for shop
  for(i = 0; i < 461; i = i + 80) {
		line(200, i + 50, 200, i + 125);
	}

  //Icons
	image(b1, 201, 51, 69, 75);
	image(b2, 201, 131, 69, 75);
	image(b3, 201, 211, 69, 74);
	image(b4, 201, 291, 69, 75);
	image(b5, 201, 370, 70, 75);
	image(b6, 201, 450, 69, 75);

}

// space clicker
function keyPressed () {
  if (key == " ") {
    cookies++
  }
}


function mousePressed() {
	if(mouseX > cookieX && mouseX < cookieX + cookieW && mouseY > cookieY && mouseY < cookieY + cookieH) {
		cookieX = cookieX - 5;
		cookieY = cookieY - 5;
		cookieH = cookieH + 10;
		cookieW = cookieW + 10;
	}
}

function mouseReleased() {
	if(mouseX > cookieX && mouseX < cookieX + cookieW && mouseY > cookieY && mouseY < cookieY + cookieH) {
		cookieX = cookieX + 5;
		cookieY = cookieY + 5; 
		cookieH = cookieH - 10; 
		cookieW = cookieW - 10; 
	}
}


// mouse clicked clicked 
function mouseClicked() {	
	if(mouseX > cookieX && mouseX < cookieX + cookieW && mouseY > cookieY && mouseY < cookieY + cookieH) {
		cookies++;
	}
		// Buy b1
	if(mouseX > 20 && mouseX < 20 + 250 && mouseY > 50 && mouseY < 50 + 75 && cookies >= b1Cost) {
		cookies = cookies - b1Cost;
		b1Owned++;
	}
		//Buy b2
	if(mouseX > 20 && mouseX < 20 + 250 && mouseY > 130 && mouseY < 130 + 75 && cookies >= b2Cost) {
		cookies = cookies - b2Cost;
		b2Owned++;
	}
		//Buy b3
	if(mouseX > 20 && mouseX < 20 + 250 && mouseY > 210 && mouseY < 210 + 75 && cookies >= b3Cost) {
		cookies = cookies - b3Cost;
		b3Owned++;
	}
		//Buy b4
	if(mouseX > 20 && mouseX < 20 + 250 && mouseY > 290 && mouseY < 290 + 75 && cookies >= b4Cost) {
		cookies = cookies - b4Cost;
		b4Owned++;
	}
		//Buy b5
	if(mouseX > 20 && mouseX < 20 + 250 && mouseY > 370 && mouseY < 370 + 75 && cookies >= b5Cost) {
		cookies = cookies - b5Cost;
		b5Owned++;	
	}
		//Buy b6
	if(mouseX > 20 && mouseX < 20 + 250 && mouseY > 450 && mouseY < 450 + 75 && cookies >= b6Cost) {
		cookies = cookies - b6Cost;
		b6Owned++;
	}
}

function drawCookie() {
	noStroke();
	image(cookieImage, cookieX, cookieY, cookieW, cookieH);
}