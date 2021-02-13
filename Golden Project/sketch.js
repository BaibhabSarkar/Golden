//GameStates
var PLAY=2;
var START=1;
var END=0;
var gameState=START;

var edges;
var score=0;
var timer=60;

var boy, boy_dead, boy_run,boy_jump;
var wall1, diamond1, diamond2;

function preload(){
    upload=new Upload();
}

function setup(){
   createCanvas(990,700);

   boy=createSprite(50,570,20,40);
        boy.addImage(Jonathan);
        boy.scale=0.1;
  restart=createSprite(580,400,20,10);
  restart.addImage(restartimg);
  restart.scale=0.5;
      
  gameover=createSprite(500,350,20,10);
  gameover.addImage(gameoverimg);
  gameover.scale=2.0;
      
  playbutton=createSprite(880,650,20,10);
  playbutton.addImage(playbuttonimg);
  playbutton.scale=0.1;

   laser1= createSprite(20,380,100,10) ;
   laser1.shapeColor= "red" ; 
   laser1.velocityX=5;  

   laser2= createSprite(180,550,10,70) ;
   laser2.shapeColor= "red" ; 
   laser2.velocityY=-7;  
   
   wall1= createSprite(540, 600, 1100,10);
   
   wall2= createSprite(870,520,200,10);
   wall2.addImage(woodimg);
   wall2.scale=0.08;
   wall2.velocityX=-3;

   wall3= createSprite(70,480,200,10);
   wall3.addImage(woodimg);
   wall3.scale=0.08;
   wall3.velocityX=3;

   wall4= createSprite(920,420,200,10);
   wall4.addImage(woodimg);
   wall4.scale=0.08;
   wall4.velocityX=-4;

   wall5= createSprite(20,370,200,10);
   wall5.addImage(woodimg);
   wall5.scale=0.08;
   wall5.velocityX=4;

   wall6= createSprite(920,340,200,10);
   wall6.addImage(woodimg);
   wall6.scale=0.08;
   wall6.velocityX=-4;  

   wall7= createSprite(20,290,220,10);
   wall7.addImage(woodimg);
   wall7.scale=0.08;
   wall7.velocityX=-4;  

   wall8= createSprite(920,250,200,10);
   wall8.addImage(woodimg);
   wall8.scale=0.08;
   wall8.velocityX=-4; 
    
   
   
   diamond1= createSprite(10,500,20,10);
   diamond1.addImage(diamondimg);
   diamond1.debug=true;
   diamond1.scale=.2;
  // diamond1.x=wall2.x;

  diamond2= createSprite(960,450,20,10);
  diamond2.addImage(diamondimg);
  diamond2.debug=true;
  diamond2.scale=.2;

  diamond3= createSprite(20,430,20,10);
  diamond3.addImage(diamondimg);
  diamond3.debug=true;
  diamond3.scale=.2;

  diamond4= createSprite(960,400,20,10);
  diamond4.addImage(diamondimg);
  diamond4.debug=true;
  diamond4.scale=.2;

  diamond5= createSprite(20,350,20,10);
  diamond5.addImage(diamondimg);
  diamond5.debug=true;
  diamond5.scale=.2;

  diamond6= createSprite(960,300,20,10);
  diamond6.addImage(diamondimg);
  diamond6.debug=true;
  diamond6.scale=.2;

  diamond7= createSprite(20,250,20,10);
  diamond7.addImage(diamondimg);
  diamond7.debug=true;
  diamond7.scale=.2;

  diamond8= createSprite(960,200,20,10);
  diamond8.addImage(diamondimg);
  diamond8.debug=true;
  diamond8.scale=.2;
}

function draw(){
    background(bg);
    edges=createEdgeSprites();
    
    textSize(30);
    fill("yellow");
    text("SCARY MAZE RUNNER", 280,30);
    textSize(14);
    text("1.Press Space Key to make jump, left and right arrow to move",50,630);
    text("2.Collect items to score the points",50,650);
    text("3.Avoid obstacles, ghost",50,670);
    text("4.Touch the dotted line to win", 50,690);
    textSize(20);
    text("Timer in there",500,660);
   
    //Finish Line
    for(i=0; i<990; i=i+20){
      line(i, 60, i+10,60);
    }

 

if(gameState===START){
boy.velocityX=0;
boy.velocityY=0;
restart.visible=false;
gameover.visible=false;
playbutton.visible=true;
textSize(25);
fill("yellow")
text("TIME REMANING:"+Math.round(timer),690,30);
text("score= " + score,50,30);
if(mousePressedOver(playbutton)){
  gameState=PLAY;
 }
}
else if(gameState===PLAY){
  restart.visible=false;
  gameover.visible=false;
  playbutton.visible=false;
    timer=timer-0.05;
    textSize(25);
    fill("yellow")
    text("TIME REMANING:"+Math.round(timer),690,30);
    text("score= " + score,50,30);
      
// Giving control to boy
boy.velocityX=0;
boy.velocityY=0;
boy.bounceOff(edges);

if(keyDown("UP_ARROW")){
  boy.velocityY=-8; 
}

if(keyDown("DOWN_ARROW")){
  boy.velocityY=8; 
}
   if(keyDown("LEFT_ARROW")){
  boy.velocityX=-8; 
}
   if(keyDown("RIGHT_ARROW")){
  boy.velocityX=8; 
}

//if(boy.y<50){}

}
laser1.bounceOff(edges);
laser2.bounceOff(edges);
laser2.bounceOff(wall1);
laser2.bounceOff(wall2);

diamond1.bounceOff(edges);


wall2.bounceOff(edges);
wall3.bounceOff(edges);
wall4.bounceOff(edges);
wall5.bounceOff(edges);
wall6.bounceOff(edges);
wall7.bounceOff(edges);
wall8.bounceOff(edges);
//wall2.bounceOff(edges);

    drawSprites();
}   

