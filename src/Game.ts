/*
* 程序入口
*/
class Game{
    private hero:Role;
   constructor(){
        Laya.init(400,852,Laya.WebGL);
        var bg:BackGround=new BackGround();
        Laya.stage.addChild(bg);
        Laya.loader.load("res/atlas/war.atlas",Laya.Handler.create(this,this.onLoaded),null,Laya.Loader.ATLAS);
   }
   onLoaded():void{
       this.hero=new Role();
       this.hero.pos(200,500);
       Laya.stage.addChild(this.hero);
       Laya.stage.on(Laya.Event.MOUSE_MOVE,this,this.onMouseMove);
   }
   onMouseMove():void{
       this.hero.pos(Laya.stage.mouseX,Laya.stage.mouseY);
   }
}

//启动游戏
new Game();