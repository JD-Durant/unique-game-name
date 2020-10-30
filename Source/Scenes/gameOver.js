export class endGame extends Phaser.Scene {constructor(){super("gameOver");}
create() {
  var background =  this.add.image(0, 0, "backGround").setOrigin(0,0).setScale(2);
  var endText = this.add.image(450, 300, "gameover");
  var menuButton = this.add.image(1550, 175, "menuButton").setScale(0.6).setInteractive();
  menuButton.on('pointerdown', () => this.scene.start("mainMenu"));
  var settings = this.add.image(1550, 375, 'settingsButton').setScale(0.9).setInteractive(); //dont know why the scales are different but they match
  settings.on('pointerdown', () => console.log("Also works")); //also change
  }
}