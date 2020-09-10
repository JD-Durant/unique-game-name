import "phaser";
export class actualGame extends Phaser.Scene {constructor(){super("game");}
  create(){
    var background =  this.add.image(0, 0, "backGround").setOrigin(0,0).setScale(2);
    this.scene.launch("keyDetector") //launches a scene in the background, this is how i will carry out my game calculations
  }
}