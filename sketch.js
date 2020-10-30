var arrow
var redballooni
var blueballooni
var greenballooni
var pinkballooni
var bowimage
var playgroundimage
var pinkballoon
var blueballoon
var greenballoon
var redballoon
var score=0

function preload(){
 //load your images here 
  bowimage = loadImage("bow0.png");
  
  pinkballooni = loadImage("pink_balloon0.png");
  
  blueballooni = loadImage("blue_balloon0.png");
  
  greenballooni = loadImage("green_balloon0.png");
  
  redballooni = loadImage("red_balloon0.png");
  
  playgroundImage=loadImage("background0.png","background20.png");
  
  arrow=loadImage("arrow0.png");
}

function setup() {
  createCanvas(600, 600);
  
  //add code here
  playground = createSprite(0,0,600,600);
  playground.addImage(playgroundImage);
  playground.scale=3
  
  bow=createSprite(550,300,20,50)
  bow.addImage(bowimage);
  
  arrow1=createSprite(500,bow,10,5);
  arrow1.addImage(arrow);
  arrow1.scale=0.2
  
  balloonGroup = new Group();
}

function draw() {
        background("white");
  
  if(keyWentDown("space")){
   arrow1=createSprite(500,100,10,5);
   arrow1.addImage(arrow);
   arrow1.scale=0.2
    arrow1.velocityX=-7;
    arrow1.velocityY=0;
    arrow1.y=bow.y
  }
  playground.velocityX=-7
  if (playground.x < 0){
      playground.x = playground.width/2;
    }
    var select_balloon = Math.round(random(1,4));
  if(frameCount % 80 == 0){
    if(select_balloon == 3 ){
       redballoon1();
       }
    else if(select_balloon == 2){
       greenballoon1();
       }
    else if(select_balloon == 1){
       blueballoon1();
       }
    else {
       pinkballoon1();
    }
  }
  
  bow.y=mouseY;
  drawSprites();
  textSize(30)
  text("Score:"+score,450,40)
  if(balloonGroup.isTouching(arrow1)){
    balloonGroup.destroyEach()
    arrow1.destroy()
    score+=1
  }
  
}
    
  function pinkballoon1(){
  pinkballoon=createSprite(0,Math.round(random(10,370)),20,30);
  pinkballoon.addImage(pinkballooni);
  pinkballoon.scale=1.2
  pinkballoon.lifetime=150
  pinkballoon.velocityX=4
  balloonGroup.add(pinkballoon)
  }
 function blueballoon1(){
  blueballoon=createSprite(0,Math.round(random(10,370)),5,30);
  blueballoon.scale=0.10
  blueballoon.addImage(blueballooni); 
  blueballoon.lifetime=150
  blueballoon.velocityX=4
  balloonGroup.add(blueballoon)
    }
  function greenballoon1(){
 greenballoon=createSprite(0,Math.round(random(10,370)),5,30);
  greenballoon.scale=0.10
  greenballoon.addImage(greenballooni); 
  greenballoon.lifetime=150
  greenballoon.velocityX=4
  balloonGroup.add(greenballoon)
      }
  function redballoon1(){
  redballoon=createSprite(0,Math.round(random(10,370)),5,30);
  redballoon.scale=0.09
  redballoon.addImage(redballooni);
  redballoon.lifetime=150
  redballoon.velocityX=4
  balloonGroup.add(redballoon)
    }  

