/*
* 程序入口
*/
var Game = /** @class */ (function () {
    function Game() {
        Laya.init(400, 852, Laya.WebGL);
        var bg = new BackGround();
        Laya.stage.addChild(bg);
        Laya.loader.load("res/atlas/war.atlas", Laya.Handler.create(this, this.onLoaded), null, Laya.Loader.ATLAS);
    }
    Game.prototype.onLoaded = function () {
        this.hero = new Role();
        this.hero.pos(200, 500);
        Laya.stage.addChild(this.hero);
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
    };
    Game.prototype.onMouseMove = function () {
        this.hero.pos(Laya.stage.mouseX, Laya.stage.mouseY);
    };
    return Game;
}());
//启动游戏
new Game();
//# sourceMappingURL=Game.js.map