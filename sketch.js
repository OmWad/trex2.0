
var trex ,trex_running , ground;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
 //ground_moving=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  trex=createSprite(50,180,20,50)
  trex.addAnimation("running",trex_running)
  trex.scale=0.5;
 ground=createSprite(100,200,800,20)
// ground.loadImage("moving",ground_moving)
}

function draw(){
  
  background("white")
  
trex.collide(ground)
if(keyWentDown("space")){
trex.velocityY=-10
}
trex.velocityY=trex.velocityY+1
drawSprites()
}
