// major project



let cookies = 0; //  balance of cookies 
let cps = 0; //  cookies per second

function preload() {

	// sprite
	cookieImage = loadImage('assets/sprite.png');

	//  upgrades
	baker1 = loadImage('assets/baker_1.png');
	baker2 = loadImage('assets/baker_2.png');
	baker3 = loadImage('assets/baker_3.png');
	baker4 = loadImage('assets/baker_4.png');
	baker5 = loadImage('assets/baker_5.png');
	baker6 = loadImage('assets/baker_6.png');

	tabletop = loadImage('assets/background2.jpg'); // loads background


	if (windowWidth > 700) { // sets cookie location
		cookieW = windowWidth / 5;
		cookieH = windowWidth / 5;
		cookieX = windowWidth / 2 - cookieW / 2;
		cookieY = windowHeight / 2 - cookieH / 2;
	}
	else {
		cookieW = 100;   // set a fixed cookie location that wont interfere with the store
		cookieH = 100;
		cookieX = 300;
		cookieY = 300;
	}
}


// Baker 1                   // individual cost, amount owned, and the colour of the background
let baker1cost = 15;
let baker1owned = 0;
let baker1color = 255;

// Baker 2
let baker2cost = 200;
let baker2owned = 0;
let baker2color = 255;

// Baker 3
let baker3cost = 1000;
let baker3owned = 0;
let baker3color = 255;

// Baker 4
let baker4cost = 2000;
let baker4owned = 0;
let baker4color = 255;

// Baker 5
let baker5cost = 50000;
let baker5owned = 0;
let baker5color = 255;

// Baker 6
let baker6cost = 100000;
let baker6owned = 0;
let baker6color = 255;



function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	frameRate(60);    // makes it actually look like the cookie is growing and shrinking 

}


function windowResized() {
	createCanvas(windowWidth, windowHeight);
	drawCookie();
}





function draw() {
	background(255);
	image(tabletop, 0, 0, windowWidth, windowHeight);
	drawCookie();
	textSize(15);

	// labels, titles, etx

	fill(50, 16, 1);
	textSize(18);
	rect(0, 0, windowWidth, 47);
	fill(255);

	text("cookies: " + nf(cookies, 0, 2), 20, 15);
	text("cookies/click: " + (1 + baker4owned * 25 + baker5owned * 50 + baker6owned * 100), 20, 45);
	text("cookies/second: " + nf(cps, 0, 2), 20, 30);
	textSize(26);
	text("off brand cookie clicker", windowWidth / 2 - 120, 32.5);


	//cookies per minute and changing the cookie value
	cookies = cookies + cps * 1 / 60;
	cps = baker1owned * 1 + baker2owned * 5 + baker3owned * 10 + baker4owned * 25;


	// I T E M S 

	// baker 1 store option
	fill(baker1color);
	rect(20, 50, 180, 75);
	fill(0);

	textSize(14);
	text("Buddy Valastro (1 CPS)", 25, 65);
	text("Price: C " + nf(baker1cost, 0, 2), 25, 83);
	text("Level " + baker1owned, 25, 100);

	baker1cost = 15 * pow(1.07, baker1owned);

	// baker 2 store option

	fill(baker2color);
	rect(20, 130, 180, 75);
	fill(0);

	textSize(14);
	text("Martha Stewart (5 CPS)", 25, 145);
	text("Price: C " + nf(baker2cost
		, 0, 2), 25, 163);
	text("Level " + baker2owned, 25, 180);

	baker2cost
		= 200 * pow(1.07, baker2owned);

	// baker 3 store option

	fill(baker3color);
	rect(20, 210, 180, 75);
	fill(0);

	textSize(14);
	text("Paul Hollywood (10 CPS)", 25, 225);
	text("Price: C " + nf(baker3cost, 0, 2), 25, 243);
	text("Level " + baker3owned, 25, 260);

	baker3cost = 1000 * pow(1.07, baker3owned);

	// baker 4 store option

	fill(baker4color);
	rect(20, 290, 180, 75);
	fill(0);

	textSize(14);
	text("Stella Parks (+25 cookies)", 25, 305);
	text("Price: C " + nf(baker4cost, 0, 2), 25, 323);
	text("Level " + baker4owned, 25, 340);

	baker4cost = 2000 * pow(1.07, baker4owned);

	// baker 5  store option

	fill(baker5color);
	rect(20, 370, 180, 75);
	fill(0);

	textSize(14);
	text("Alton Brown (+50 cookies)", 25, 385);
	text("Price: C " + nf(baker5cost
		, 0, 2), 25, 403);
	text("Level " + baker5owned, 25, 420);

	baker5cost = 50000 * pow(1.07, baker5owned);

	// baker 6 store option 

	fill(baker6color);
	rect(20, 450, 180, 75);
	fill(0);

	textSize(14);
	text("Claire Saffitz (+100 cookies)", 25, 465);
	text("Price: C " + nf(baker6cost, 0, 2), 25, 483);
	text("Level " + baker6owned, 25, 500);

	baker6cost = 100000 * pow(1.07, baker6owned);



	// baker1 highlighter    
	if (cookies < baker1cost) {
		baker1color = (75, 16, 1, 100); // unavailable, can't buy yet
	}

	else {
		baker1color = 255; // available to be purchased
	}
	if (mouseX > 20 && mouseX < 20 + 250 && mouseY > 50 && mouseY < 50 + 75 && cookies >= baker1cost) {
		baker1color = (50, 16, 1, 50); // hovering over when available
	}

	// baker2 highlighter
	if (cookies < baker2cost) {
		baker2color = (50, 16, 1, 100);
	}

	else {
		baker2color = 255;
	}
	if (mouseX > 20 && mouseX < 20 + 250 && mouseY > 130 && mouseY < 130 + 75 && cookies >= baker2cost) {
		baker2color = (50, 16, 1, 50);
	}

	// baker3 highlighter 
	if (cookies < baker3cost) {
		baker3color = (50, 16, 1, 100);
	}

	else {
		baker3color = 255;
	}
	if (mouseX > 20 && mouseX < 20 + 250 && mouseY > 210 && mouseY < 210 + 75 && cookies >= baker3cost) {
		baker3color = (50, 16, 1, 50);
	}

	// baker4 highlighter
	if (cookies < baker4cost) {
		baker4color = (50, 16, 1, 100);
	}
	else {
		baker4color = 255;
	}
	if (mouseX > 20 && mouseX < 20 + 250 && mouseY > 290 && mouseY < 290 + 75 && cookies >= baker4cost) {
		baker4color = (50, 16, 1, 50);
	}

	// baker5 highlighter 
	if (cookies < baker5cost
	) {
		baker5color = (50, 16, 1, 100);
	}
	else {
		baker5color = 255;
	}
	if (mouseX > 20 && mouseX < 20 + 250 && mouseY > 370 && mouseY < 370 + 75 && cookies >= baker5cost
	) {
		baker5color = (50, 16, 1, 50);
	}

	// baker6 highlighter
	if (cookies < baker6cost) {
		baker6color = (50, 16, 1, 100);
	}
	else {
		baker6color = 255;
	}
	if (mouseX > 20 && mouseX < 20 + 250 && mouseY > 450 && mouseY < 450 + 75 && cookies >= baker6cost) {
		baker6color = (50, 16, 1, 50);
	}


	// lines for shop
	stroke(1);
	for (i = 0; i < 461; i = i + 80) {
		line(200, i + 50, 200, i + 125);
	}

	//Icons
	image(baker1, 205, 51, 69, 75);
	image(baker2, 205, 131, 69, 75);
	image(baker3, 205, 211, 69, 74);
	image(baker4, 205, 291, 69, 75);
	image(baker5, 205, 370, 70, 75);
	image(baker6, 205, 450, 69, 75);

}

// space clicker
function keyPressed() {
	if (key == " ") {
		cookies = cookies + 1 + baker5owned * 50 + baker6owned * 100;
	}
}


function mousePressed() {
	if (mouseX > cookieX && mouseX < cookieX + cookieW && mouseY > cookieY && mouseY < cookieY + cookieH) {
		cookieX = cookieX - 5;
		cookieY = cookieY - 5;
		cookieH = cookieH + 10;
		cookieW = cookieW + 10;
	}
}

function mouseReleased() {
	if (mouseX > cookieX && mouseX < cookieX + cookieW && mouseY > cookieY && mouseY < cookieY + cookieH) {
		cookieX = cookieX + 5;
		cookieY = cookieY + 5;
		cookieH = cookieH - 10;
		cookieW = cookieW - 10;
		cookies = cookies + 1 + baker5owned * 50 + baker6owned * 100;

		setup();
		console.log("beans");

	}
}


// mouse clicked clicked 
function mouseClicked() {

	// Buy baker1
	if (mouseX > 20 && mouseX < 20 + 250 && mouseY > 50 && mouseY < 50 + 75 && cookies >= baker1cost) {
		cookies = cookies - baker1cost;
		baker1owned++;
	}
	//Buy baker2
	if (mouseX > 20 && mouseX < 20 + 250 && mouseY > 130 && mouseY < 130 + 75 && cookies >= baker2cost) {
		cookies = cookies - baker2cost;
		baker2owned++;
	}
	//Buy baker3
	if (mouseX > 20 && mouseX < 20 + 250 && mouseY > 210 && mouseY < 210 + 75 && cookies >= baker3cost) {
		cookies = cookies - baker3cost;
		baker3owned++;
	}
	//Buy baker4
	if (mouseX > 20 && mouseX < 20 + 250 && mouseY > 290 && mouseY < 290 + 75 && cookies >= baker4cost) {
		cookies = cookies - baker4cost;
		baker4owned++;
	}
	//Buy baker5
	if (mouseX > 20 && mouseX < 20 + 250 && mouseY > 370 && mouseY < 370 + 75 && cookies >= baker5cost
	) {
		cookies = cookies - baker5cost;
		baker5owned++;
	}
	//Buy baker6
	if (mouseX > 20 && mouseX < 20 + 250 && mouseY > 450 && mouseY < 450 + 75 && cookies >= baker6cost) {
		cookies = cookies - baker6cost;
		baker6owned++;
	}
}

function drawCookie() {
	noStroke();
	image(cookieImage, cookieX, cookieY, cookieW, cookieH);
}

