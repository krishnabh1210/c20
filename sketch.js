var garden,gardenImg;
var cat,catRunning,catSitting,catCollided;
var rat,ratCollide,rat_beforeCollision,ratEating;

function preload() {
    //load the images here
catRunning=loadAnimation("cat2.png","cat3.png");
catSitting=loadImage("cat1.png");
catCollided=loadImage("cat4.png"); 

gardenImg=loadImage("garden.png");


rat_beforeCollision=loadAnimation("mouse2.png","mouse3.png");

ratCollide=loadImage("mouse4.png");

ratEating=loadImage("mouse1.png");


}

function setup(){
    createCanvas(1000,800);
    ground =createSprite(400,300,20,90);
    ground.addImage(gardenImg);
    ground.scale=1;
cat=createSprite(600,530,30,30);
cat.addAnimation("moving", catRunning);
cat.scale=0.1;

rat=createSprite(250,520,20,20);
rat.addAnimation("moving",rat_beforeCollision);
rat.scale=0.1;
}


function draw() {

    background(25);
    //Write condition here to evalute if tom and jerry collide


keyPressed();
    drawSprites();

    if(cat.x-rat.x<(cat.width-rat.width)/2){
    
        cat.addImage("collide",catCollided);
        cat.changeImage("collide");
        
        rat.addImage("beat",ratCollide);
        rat.changeImage("beat");
        cat.velocityX=0;
        }
        
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){


    cat.velocityX=-5;
    
}

}
