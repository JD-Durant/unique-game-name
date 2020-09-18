import "phaser";
export class actualGame extends Phaser.Scene {constructor(){super("game");}
  create(){
    var background =  this.add.image(0, 0, "backGround").setOrigin(0,0).setScale(2);
    this.scene.launch("keyDetector") //launches a scene in the background, this is how i will carry out any key detection

    var grid = this.add.image(950, 455, "gameGrid").setScale(0.85);

    var note1 = this.add.image(798, 100, "note1").setScale(0.4);
    var note2 = this.add.image(898, 100, "note2").setScale(0.4);
    var note3 = this.add.image(998, 100, "note2").setScale(0.4);
    var note4 = this.add.image(1098, 100, "note1").setScale(0.4);
  }
}