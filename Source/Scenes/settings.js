
export class settings extends Phaser.Scene {constructor(){super("settings");}
create(){
  var background =  this.add.image(0, 0, "backGround").setOrigin(0,0).setScale(2);
  var menuButton = this.add.image(950, 650, "menuButton").setScale(0.6).setInteractive();
  menuButton.on('pointerdown', () => this.scene.start("mainMenu"));
  }
}