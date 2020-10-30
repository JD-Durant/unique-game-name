export class endGame extends Phaser.Scene {constructor(){super("gameOver");}
create() {
  var background =  this.add.image(0, 0, "backGround").setOrigin(0,0).setScale(2);
  var endText = this.add.image(400, 500, "gameover");
  }
}