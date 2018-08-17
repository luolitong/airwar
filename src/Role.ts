/*
*角色类;
*/
class Role extends Laya.Sprite{
    private body:Laya.Animation;
    private type:string;
    private camp:number;
    private hp:number;
    private speed:number;
    private hitRadius:number;
    constructor(){
        super();
        this.init();
    }
    init():void{
        Laya.Animation.createFrames(["war/hero_fly1.png","war/hero_fly2.png"],"hero_fly");
        Laya.Animation.createFrames(["war/hero_down1.png","war/hero_down2.png",
        "war/hero_down3.png","war/hero_down4.png"],"hero_down");
        this.body=new Laya.Animation();
        this.addChild(this.body);
        this.playAction("hero_down");
    }
    playAction(action):void{
        this.body.play(0,true,action);
        var bound:Laya.Rectangle=this.body.getBounds();
        this.body.pos(-bound.width/2,-bound.height/2);
    }
}