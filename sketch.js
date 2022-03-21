
var bg;
var snow,snowImg;

function preload(){
  bg = loadImage("snow3.jpg");
  snowImg = loadImage("snow4.webp");
}

function setup() {
var canvas = createCanvas(800,400);

}

function draw() {
  background(bg); 
  createSnow(); 
  drawSprites();
}
function createSnow(){
  if(frameCount%10===0){
  snow = createSprite(random(0,800), 0, 100, 100);
  snow.velocityX =-5;
  snow.velocityY =5;
  snow.addImage(snowImg);
  snow.scale = 0.1;
  }
}