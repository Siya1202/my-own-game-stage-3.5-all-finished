
var player;
var player_1;
var t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15,t16,t17,t18,t19,t20,t21,t22,t23,t24,t25,t26,t27,t28,t29,t30,t31,t32,t33,t34,t35,t36,t38,t39,t40,t41,t42,t43,t44,t45,t46,t47,t48,t49,t50,t51,t52;
var prize;
var prize_1;
var ghost1,ghost2,ghost3,ghost4;
var ghost_1,ghost_2,ghost_3,ghost_4;
var carrot1,carrot2,carrot3;
var carrot_1;
var fruit1,fruit2,fruit3;
var fruit_1;
var life = 3;
var gameState = 1;
var win;
var win_1
var gameover;
var gameover_1;
var reset1;
var reset_1;
var ghostGroup;
var fruitGroup
var sound1;
var sound2;
var sound3;
var sound4;
var sound5;
var sound6;

function preload() {
  

  player_1=loadImage("images/player.png");
  prize_1=loadImage("images/prize1.png");
  ghost_1=loadImage("images/ghost1.png");
  ghost_2=loadImage("images/ghost 2.png");
  ghost_3=loadImage("images/ghost 3.png");
  ghost_4=loadImage("images/ghost 4.png");
  carrot_1=loadImage("images/carrot.png");
  fruit_1=loadImage("images/fruit1.png");
  win_1=loadImage("images/Win.png");
  gameover_1=loadImage("images/gameover.png");
  reset_1=loadImage("images/reset.png");
  sound1=loadSound("sound/s1.mp3", false);
  sound2=loadSound("sound/s1.mp3", false);
  sound3=loadSound("sound/s1.mp3", false);
  sound4=loadSound("sound/s1.mp3", false);
  sound5=loadSound("sound/s3.mp3", false);
  sound6=loadSound("sound/s2.mp3", false);
}

function setup() {
  
  createCanvas(700,1000);
  
  t1=createSprite(350,45,700,200);
  t1.shapeColor="black";

  t2=createSprite(55,203,115,115);
  t2.shapeColor="red";

  t3=createSprite(171,203,115,115);
  t3.shapeColor="skyblue";

  t4=createSprite(288,203,115,115);
  t4.shapeColor="pink";

  t5=createSprite(405,203,115,115);
  t5.shapeColor="lightgreen";

  t6=createSprite(522,203,115,115);
  t6.shapeColor="orange";

  t7=createSprite(640,203,115,115);
  t7.shapeColor="yellow";

  t8=createSprite(55,319,115,115);
  t8.shapeColor="purple";

  t9=createSprite(171,319,115,115);
  t9.shapeColor="white";

  t10=createSprite(288,319,115,115);
  t10.shapeColor="turquoise";

  t11=createSprite(405,319,115,115);
  t11.shapeColor="orange";

  t12=createSprite(522,319,115,115);
  t12.shapeColor="red";

  t13=createSprite(640,319,115,115);
  t13.shapeColor="skyblue";

  t14=createSprite(55,435,115,115);
  t14.shapeColor="pink";

  t15=createSprite(171,435,115,115);
  t15.shapeColor="lightgreen";

  t16=createSprite(288,435,115,115);
  t16.shapeColor="orange";

  t17=createSprite(405,435,115,115);
  t17.shapeColor="yellow";

  t18=createSprite(522,435,115,115);
  t18.shapeColor="purple";

  t19=createSprite(640,435,115,115);
  t19.shapeColor="white";

  t20=createSprite(55,551,115,115);
  t20.shapeColor="turquoise";

  t21=createSprite(171,551,115,115);
  t21.shapeColor="white";

  t22=createSprite(288,551,115,115);
  t22.shapeColor="lightgreen";

  t23=createSprite(405,551,115,115);
  t23.shapeColor="skyblue";

  t24=createSprite(522,551,115,115);
  t24.shapeColor="pink";

  t25=createSprite(640,551,115,115);
  t25.shapeColor="lightgreen";

  t26=createSprite(55,667,115,115);
  t26.shapeColor="orange";

  t27=createSprite(171,667,115,115);
  t27.shapeColor="yellow";

  t28=createSprite(288,667,115,115);
  t28.shapeColor="purple";

  t29=createSprite(405,667,115,115);
  t29.shapeColor="white";

  t30=createSprite(522,667,115,115);
  t30.shapeColor="turquoise";

  t31=createSprite(640,667,115,115);
  t31.shapeColor="pink";

  t32=createSprite(55,783,115,115);
  t32.shapeColor="red";

  t33=createSprite(171,783,115,115);
  t33.shapeColor="skyblue";

  t34=createSprite(288,783,115,115);
  t34.shapeColor="pink";

  t35=createSprite(405,783,115,115);
  t35.shapeColor="lightgreen";

  t36=createSprite(522,783,115,115);
  t36.shapeColor="orange";

  t37=createSprite(640,783,115,115);
  t37.shapeColor="yellow";

  t38=createSprite(55,783,115,115);
  t38.shapeColor="purple";

  t39=createSprite(171,783,115,115);
  t39.shapeColor="white"; 

  t40=createSprite(55,87,115,115);
  t40.shapeColor="turquoise";

  t41=createSprite(171,87,115,115);
  t41.shapeColor="orange";

  t42=createSprite(288,87,115,115);
  t42.shapeColor="yellow";

  t43=createSprite(405,87,115,115);
  t43.shapeColor="pink";

  t44=createSprite(522,87,115,115);
  t44.shapeColor="lightgreen";

  t45=createSprite(640,87,115,115);
  t45.shapeColor="skyblue";

  t46=createSprite(55,899,115,115);
  t46.shapeColor="red";

  t47=createSprite(171,899,115,115);
  t47.shapeColor="skyblue";

  t48=createSprite(288,900,115,115);
  t48.shapeColor="lightgreen";

  t49=createSprite(405,900,115,115);
  t49.shapeColor="pink";

  t50=createSprite(522,900,115,115);
  t50.shapeColor="yellow";

  t51=createSprite(640,900,115,115);
  t51.shapeColor="orange";

  prize=createSprite(640,900,20,20);
  prize.addImage(prize_1);
  prize.scale=0.5;

  ghost1=createSprite(100,400,80,20,20);
  ghost1.addImage(ghost_1);
  ghost1.scale=0.14;

  ghost2=createSprite(640,783,80,20,20);
  ghost2.addImage(ghost_2);
  ghost2.scale=0.14;

  ghost3=createSprite(100,650,20,20);
  ghost3.addImage(ghost_3);
  ghost3.scale=0.14;

  ghost4=createSprite(171,600,20,20);
  ghost4.addImage(ghost_4);
  ghost4.scale=0.14;

  fruit1=createSprite(405,900,115,115);
  fruit1.addImage(fruit_1);
  fruit1.scale=0.12;
  //fruit1.visible=false;

  fruit2=createSprite(522,87,115,115);
  fruit2.addImage(fruit_1);
  fruit2.scale=0.12;
  //fruit2.visible=false;

  fruit3=createSprite(171,783,115,115);
  fruit3.addImage(fruit_1);
  fruit3.scale=0.12;
  //fruit3.visible=false;

  carrot1=createSprite(288,319,115,115);
  carrot1.addImage(carrot_1);
  carrot1.scale=0.12;
  //carrot1.visible=false;

  carrot2=createSprite(522,319,115,115);
  carrot2.addImage(carrot_1);
  carrot2.scale=0.12;
  //carrot2.visible=false;

  carrot3=createSprite(522,551,115,115);
  carrot3.addImage(carrot_1);
  carrot3.scale=0.12;
  //carrot3.visible=false;
  
  win=createSprite(300,500,20,20);
  win.addImage(win_1);
  win.scale=0.5;
  win.visible=false;

  gameover=createSprite(300,500,20,20);
  gameover.addImage(gameover_1);
  gameover.scale=0.5;
  gameover.visible=false;

  reset1=createSprite(300,800,20,20);
  reset1.addImage(reset_1);
  reset1.scale=0.5;
  reset1.visible=false;

  ghostGroup=new Group;

  fruitGroup=new Group;

  player=createSprite(55,85,20,20);
  player.addImage(player_1);
  player.scale=0.12;

  ghost1.velocityX=-25;
  
  ghost2.velocityY=-25;
  
  ghost3.velocityX=25;
  
  ghost4.velocityY=25;
  


}


function draw() {

  background(0); 
  edges=createEdgeSprites(); 

  if(gameState=1){
  ghost1.depth=carrot1.depth;
  ghost1.depth=carrot3.depth;
  //spawnghost();
  //spawnfruits();
  ghost1.bounceOff(edges[0]);
  ghost1.bounceOff(edges[1]); 
  ghost1.bounceOff(edges[2]); 
  ghost1.bounceOff(edges[3]);

  ghost2.bounceOff(edges[0]);
  ghost2.bounceOff(edges[1]); 
  ghost2.bounceOff(edges[2]); 
  ghost2.bounceOff(edges[3]);

  ghost3.bounceOff(edges[0]);
  ghost3.bounceOff(edges[1]); 
  ghost3.bounceOff(edges[2]); 
  ghost3.bounceOff(edges[3]);

  ghost4.bounceOff(edges[0]);
  ghost4.bounceOff(edges[1]); 
  ghost4.bounceOff(edges[2]); 
  ghost4.bounceOff(edges[3]);

  if(keyDown(DOWN_ARROW)){
     //var sound1;
     player.y=player.y+60; 
     sound1.play();

   }

  if(keyDown(UP_ARROW)){
    player.y=player.y-60;
    sound2.play(); 
   }

   if(keyDown(RIGHT_ARROW)){
    player.x=player.x+60;
    sound3.play(); 
   }

   if(keyDown(LEFT_ARROW)){
    player.x=player.x-60;
    sound4.play(); 
   }

   if(player.isTouching(ghost1)||player.isTouching(ghost2)||player.isTouching(ghost3)||player.isTouching(ghost4)){
     life=life-1;
     player.x=55;
     player.y=85;
     sound4.play();
   }

  /* if(player.isTouching(fruitGroup)){
     life=life+1;
     fruitGroup.destroyEach();
   }*/

   if(player.isTouching(fruit2)){
    life=life+1;
    //player.depth=player.depth+100;
    fruit2.visible=false;
    //player.x=player.x+60
    fruit2.x=fruit2.x+200
  }

  if(player.isTouching(fruit3)){
    life=life+1;
   fruit3.visible=false;
   fruit3.x=fruit3.x+400
   player.x=player.x+60
   //player.depth=player.depth+100;
  }

  if(player.isTouching(carrot1)){
    life=life+1;
    carrot1.visible=false;
    carrot1.x=carrot1.x+1000;
    player.x=player.x+60
    //player.depth=player.depth+100;
  }

  if(player.isTouching(carrot2)){
    life=life+1;
    carrot2.visible=false;
    carrot2.x=carrot2.x+1000;
    player.x=player.x+60
    //player.depth=player.depth+100;
  }

  if(player.isTouching(carrot3)){
    life=life+1;
    carrot3.visible=false;
    player.x=player.x+60
    carrot3.x=carrot3.x+1000;
    //player.depth=player.depth+100;
  }

  if(player.isTouching(prize)){
    //ghostGroup.destroyEach();
    //fruitGroup.destroyEach();
    ghost1.visible=false;
    ghost2.visible=false;
    ghost3.visible=false;
    ghost4.visible=false;
    player.visible=false;
    fruit1.visible=false;
    fruit2.visible=false;
    fruit3.visible=false;
    carrot1.visible=false;
    carrot2.visible=false;
    carrot3.visible=false;
    player.visible=false;
    prize.visible=false;
    win.visible=true;
    sound5.play();
  }

   player.collide(edges);

   if(life===0){
     gameState=0;
   }
}

if(gameState===0){
  //ghostGroup.destroyEach();
  //fruitGroup.destroyEach();
  player.visible=false;
  fruit1.visible=false;
  fruit2.visible=false;
  fruit3.visible=false;
  carrot1.visible=false;
  carrot2.visible=false;
  carrot3.visible=false;
  ghost1.visible=false;
  ghost2.visible=false;
  ghost3.visible=false;
  ghost4.visible=false;
  player.visible=false;
  prize.visible=false;
  gameover.visible=true;
  reset1.visible=true;
  sound6.play();

  
}

  if(mousePressedOver(reset1)){
    gameState=1;
     reset();
 }

  drawSprites();

  fill("white");
  textSize(25);
  text("Life : "+life,610,20);

}

function reset() {
  gameState=1;
  ghost1.velocityX=-25;
  
  ghost2.velocityY=-25;
  
  ghost3.velocityX=25;
  
  ghost4.velocityY=25;

  ghost1.visible=true;
  ghost2.visible=true;
  ghost3.visible=true;
  ghost4.visible=true;
  player.visible=true;
  fruit1.visible=true;
  fruit2.visible=true;
  fruit2.x=522;
  fruit2.y=87;
  fruit3.visible=true;
  fruit3.x=171;
  fruit3.y=783;
  carrot1.visible=true;
  carrot1.x=288;
  carrot1.y=319;
  carrot2.visible=true;
  carrot2.x=522;
  carrot2.y=319;
  carrot3.visible=true;
  carrot3.x=522;
  carrot3.y=551;
  player.visible=true;
  prize.visible=true;
  gameover.visible=false;
  reset1.visible=false

  life=3



}

/*function spawnghost() {
  for(var i=50;i<390;i=i+400)
 if(World.frameCount%180===0){
   var ghost = createSprite(350,i,15,15);
   ghost.velocityX = -20;
   ghost.bounceOff(edges[0]);
   ghost.bounceOff(edges[1]); 
   ghost.bounceOff(edges[2]); 
   ghost.bounceOff(edges[3]);
   //ghostX = randomNumber(171,640);
   ghost.y = Math.round(random(203,900));
   /*ghost.lifetime=100;
   ghostGroup.add(ghost);*/
   /*var rand =Math.round(random(1,4));
   switch(rand){
     case 1: ghost.addImage(ghost_1);
     break ;
     case 2: ghost.addImage(ghost_2);
     break ;
     case 3: ghost.addImage(ghost_3);
     break ;
     case 4: ghost.addImage(ghost_4);
     break ;
     
     default : break ;
    } 
    ghost.scale = 0.19;

    //ghost.lifetime = 100; 
    ghostGroup.add(ghost);
  }
}

/*function spawnfruits() {
  for(var i=50;i<390;i=i+400)
  if (frameCount % 180 === 0) {
    var fruit = createSprite(350,i,10,10);
    fruit.y = Math.round(random(203,900));
    var rand =Math.round(random(1,4));
   switch(rand){
     case 1: fruit.addImage(fruit_1);
     break ;
     case 2: fruit.addImage(carrot_1);
     break ;
     case 3: fruit.addImage(fruit_1);
     break ;
     case 4: fruit.addImage(carrot_1);
     break ;
     
     default : break ;
    } 
    
    fruit.scale = 0.12;
    fruit.velocityX = -20;
    fruit.lifetime = 100;
    //fruit.depth = trex.depth;
    //trex.depth = trex.depth + 1;
    fruitGroup.add(fruit);
  }
  
}*/
