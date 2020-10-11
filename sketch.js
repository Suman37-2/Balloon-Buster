
var ground,groundimg,bow,bowimg,balloon1,balloon1img,balloon2,balloon2img,balloon3,balloon3img,balloon4,balloon4img,arrow,arrowimg,score=0;

var arrowgrp,redba,greenba,blueba,pinkba;

function preload(){
 //load your images here 
 groundimg=loadImage("background0.png");
  bowimg=loadImage("bow0.png");
  balloon1img=loadImage("blue_balloon0.png");
  balloon2img=loadImage("green_balloon0.png");
  balloon3img=loadImage("red_balloon0.png");
  balloon4img=loadImage("pink_balloon0.png");
  arrowimg=loadImage("arrow0.png");
}

function setup() {
  createCanvas(600,600);
  
  //add code here
  ground=createSprite(0,0,600,600);
  ground.addImage("image",groundimg);
 
  bow=createSprite(440,300,20,70);
  bow.addImage("image",bowimg);
  
 
arrowgrp=new Group();
 redba=new Group();
greenba=new Group();
  blueba=new Group();
  pinkba=new Group();
  
  
}


function draw() {

  bow.y=World.mouseY;
  
  ground.scale=3;
  ground.velocityX=-3; 

 	if(ground.x<0){
      ground.x=ground.width/2;
    }
  
var select_balloon=Math.round(random(1,4));
  console.log(select_balloon);
  
  if(World.frameCount % 80==0){
    if(select_balloon==1){
      redBalloon();
    } else if(select_balloon==2){
      greenBalloon();
    } else if(select_balloon==3){
      blueBalloon();
    } else if(select_balloon==4){
      pinkBalloon();
  }
  }
      
 if(arrowgrp.isTouching(redba)) {
   redba.destroyEach();
   arrowgrp.destroyEach();
   score=score+1;
 }    
     
 if(arrowgrp.isTouching(blueba)) {
   blueba.destroyEach();
   arrowgrp.destroyEach();
   score=score+2;
 }    
                 
 if(arrowgrp.isTouching(greenba)) {
   greenba.destroyEach();
   arrowgrp.destroyEach();
   score=score+2;
 }    
           
 if(arrowgrp.isTouching(pinkba)) {
   pinkba.destroyEach();
   arrowgrp.destroyEach();
   score=score+3;
 }    
      
      
    
  
  
  drawSprites();
   textSize(18);
  text("Score : "+score,500,30);
createArrows();
}
function createArrows(){
  if(keyDown("space")){
  arrow=createSprite(430,300,20,20);
  arrow.addImage("image",arrowimg);
  arrow.velocityX=-6;
  arrow.scale=0.3;
   arrow.y=bow.y;
  arrow.lifetime=100;
    arrowgrp.add(arrow);
  }
}  
function redBalloon(){
   balloon3=createSprite(0,Math.round(random(22,370)),10,10);
   balloon3.addImage("image",balloon3img);
  balloon3.velocityX=3;
  balloon3.lifetime=200;
  balloon3.scale=0.10;
  redba.add(balloon3);
  
}
function greenBalloon(){
   balloon2=createSprite(0,Math.round(random(30,400)),10,10);
   balloon2.addImage("image",balloon2img);
  balloon2.velocityX=3;
  balloon2.lifetime=200;
  balloon2.scale=0.10;
  greenba.add(balloon2);
}
function blueBalloon(){
   balloon1=createSprite(0,Math.round(random(40,380)),10,10);
   balloon1.addImage("image",balloon1img);
  balloon1.velocityX=3;
  balloon1.lifetime=200;
  balloon1.scale=0.10;
  blueba.add(balloon1);
  
}
function pinkBalloon(){
   balloon4=createSprite(0,Math.round(random(46,363)),10,10);
   balloon4.addImage("image",balloon4img);
  balloon4.velocityX=3;
  balloon4.lifetime=200;
  balloon4.scale=1.3;
  pinkba.add(balloon4);
}
