var king,guard;
var game;
var ground;
var gameState=0;
function setup() {
 createCanvas(4*displayWidth,displayHeight);
 game = new Game();
 king = new Player();

 ground = createSprite(displayWidth*2,displayHeight-50,4*displayWidth,20);
 
 guard = new Guards();

}

function draw() {
  background("yellow");
  if(gameState===1){
    game.play();
  }
  if(gameState===0){
    game.start();
  }
  drawSprites();
}