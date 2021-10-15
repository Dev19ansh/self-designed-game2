class Game{
    constructor(){
        this.storyButton = createSprite(displayWidth/2,50,20,10);
        this.startButton = createSprite(displayWidth/2,displayHeight/2,20,10); 
    }
start(){
    
    
    if(mousePressedOver(this.startButton)){
        gameState=1;
    }
    if(mousePressedOver(this.storyButton)){
        text("gamestory",displayWidth/2,displayHeight/2);
    }
    
}
play(){
    this.storyButton.visible=false;
    this.startButton.visible=false;
    king.player.visible=true;
    
    if(keyDown("left")){
        king.moveLeft();
    }
    if(keyDown("right")){
        king.moveRight();
    }
    if(keyDown("space")){
        king.Jump();
    }
    king.gravity();
    king.player.collide(ground);
    camera.position.x=king.player.x;
}
}