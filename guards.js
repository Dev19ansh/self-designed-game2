class Guards{
    constructor(){
        for(var i=1;i<=10;i++){
            this.guard = createSprite(displayWidth*(2/5)*(i),ground.y-15,50,10);
        }
    }
}