var rocketNormalImg,rocketFireImg,rocket
var spaceImg,space
var obstacle1Img,obstacle2Img,obstacle,obstacle2,obstacleGroup
var Gamestate = "play"
var score





function preload(){

    spaceImg = loadImage("stars.jpeg")
    rocketNormalImg = loadImage("rnormal.png")
    rocketFireImg = loadImage("rfire.png");
    
    obstacle1Img = loadImage("obstacle1.png");
    obstacle2Img = loadImage("obstacle2.png")
}

function setup() {

    createCanvas(400,600);

    space = createSprite(300,300);
    space.addImage("stars",spaceImg);
    space.velocityY = 1;

    rocket = createSprite(200,500)
    rocket.addImage("normal",rocketNormalImg);
    rocket.addImage("fire",rocketFireImg);
    rocket.scale = 0.2;

    obstacleGroup = new Group();

    score = 0

}

function draw() {
 background(200);

 if(Gamestate == "play"){
   rocket.changeImage("normal")

   if(keyDown("right")){
      rocket.x += 2;
      rocket.changeImage("fire")
   }
  
   if(keyDown("left")){
      rocket.x += -2;
      rocket.changeImage("fire")
   }
  
   if(keyDown("up")){
      rocket.y += -2;
      rocket.changeImage("fire")
   }
  
   if(keyDown("down")){
      rocket.y += 2;
      rocket.changeImage("fire")
   }
   
   if(rocket.isTouching(obstacleGroup)){
     Gamestate = "end"
   }
   
   
   text(score,50,500)

   
 }
else{
   space.velocityY = 0;
   obstacleGroup.velocityYEach(0);
   background(0);   
    stroke("green")
    strokeWeight(3)
    fill("yellow")
    textSize(80);
    text("Game Over",200,300);
   
}
   

spawnObstacles();


 spawnObstacles();

 
 


 
 
 if(space.y == 600){
   space.y = 0;
}


 drawSprites();

}

function spawnObstacles(){
    
    var r = Math.round(random(50,350))
    var n = Math.round(random(1,2))
    if(frameCount % 300 == 0){
        obstacle = createSprite(r,-15,20,20)

        if(n == 1){
         obstacle.addImage("1",obstacle1Img);                 
        }
        else{
         obstacle.addImage("2",obstacle2Img);
        }
               
        
        obstacle.scale = 0.1;
        obstacle.velocityY = 1;

        obstacle.lifetime = 600;

        obstacleGroup.add(obstacle);
    }

}