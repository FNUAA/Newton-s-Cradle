

function preload() {
	var block = createSprite(360,10,160,10);
	var line1 = createSprite(310,40,5,50);
	var ball1 = createSprite(310,80,30,30);
	var line2 = createSprite(340,40,5,50);
	var ball2 = createSprite(340,80,30,30);
	var line3 = createSprite(370,40,5,50);
	var ball3 = createSprite(370,80,30,30);
	var line4 = createSprite(400,40,5,50);
	var ball4 = createSprite(400,80,30,30);
	
}

function setup() {
	createCanvas(800, 800);
	ball1.velocityX = -5;
	ball1.velocityY = 10;
	ball1.bouceOff(topEdge);
	line1.rotate(-90);

	if(ball1.isTouching(ball2) && ball1.velocityX > 0 && ball1.bouceOff(topEdge)) {
	ball4.velocityX = 5;
	ball4.velocityY = -10;
	ball4.bouceOff(topEdge);
	line4.rotate(90)

	line1.rotate(0);
	ball1.velocityX = 0;
	ball1.velocityY = 0;
	}
	

	if(ball4.isTouching(ball3) && ball4.velocityX > 0 && ball4.bouceOff(topEdge)) {
		ball1.velocityX = -5;
		ball1.velocityY = 10;
		ball1.bounceOff(topEdge);
		line1.rotate(-90);

		line4.rotate(0);
		line4.velocityX = 0;
		line.velocityY = 0;
	}

}


function draw() {
  background(255);

  
  drawSprites();
 
}



