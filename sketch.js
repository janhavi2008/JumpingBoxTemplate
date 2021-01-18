var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
 
  movingRect = createSprite(800, 400,300,30);
  movingRect.shapeColor = "green";

  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "yellow";
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "white";
  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = "violet";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, gameObject1)){
    movingRect.shapeColor = "violet";
    gameObject1.shapeColor = "violet";
  }
  else {
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "green";
  }

  if(isTouching(movingRect, gameObject2)){
    movingRect.shapeColor = "white";
    gameObject2.shapeColor = "white";
  }
  else {
    movingRect.shapeColor = "green";
    gameObject2.shapeColor = "yellow";
  }

  if(isTouching(movingRect, gameObject3)){
    movingRect.shapeColor = "yellow";
    gameObject3.shapeColor = "yellow";
  }
  else {
    movingRect.shapeColor = "green";
    gameObject3.shapeColor = "white";
  }

  if(isTouching(movingRect, gameObject4)){
    movingRect.shapeColor = "green";
    gameObject4.shapeColor = "blue";
  }
  else {
    movingRect.shapeColor = "green";
    gameObject4.shapeColor = "violet";
  }
  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}