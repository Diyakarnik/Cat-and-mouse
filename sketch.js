var cat, catImg1,catImg2,catImg3;
var mouse, mouseImg1,mouseImg2;
var gardenImg;
function preload() {
    //load the images here
    catImg1=loadAnimation("images/cat1.png");
    catImg2=loadAnimation("images/cat2.png", "images/cat3.png") 
    catImg3=loadAnimation("images/cat4.png");
    mouseImg1=loadAnimation("images/mouse1.png");
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseImg3=loadAnimation("images/mouse4.png")
    gardenImg=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   cat=createSprite(780,650);
   cat.addAnimation("meowCat",catImg1);
   cat.scale=0.2;
   mouse=createSprite(150,600);
   mouse.addAnimation("Mouse",mouseImg3);
   mouse.scale=0.25;
}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX=0;
        cat.x=300;
        cat.addAnimation("catHappy",catImg3);
        cat.changeAnimation("catHappy");
        mouse.addAnimation("mouseHappy",mouseImg1);
        mouse.changeAnimation("mouseHappy");
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    cat.velocityX=-5;
  mouse.addAnimation("mouseTeasing",mouseImg2);
  mouse.changeAnimation("mouseTeasing");
  mouse.frameDelay=25;
  cat.addAnimation("catmoving",catImg2);
  cat.changeAnimation("catmoving");
}

}
