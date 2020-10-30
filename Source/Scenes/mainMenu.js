export class sceneMenu extends Phaser.Scene {constructor(){super("mainMenu");}
  create(){
    var background =  this.add.image(0, 0, "backGround").setOrigin(0,0).setScale(2);
    var endText = this.add.image(400, 450, "title");
    var playButton = this.add.image(950, 250, "playButton").setScale(0.6).setInteractive();
    playButton.on('pointerdown', () => this.scene.start("game"));
    var settings = this.add.image(950, 450, 'settingsButton').setScale(0.9).setInteractive();
    settings.on('pointerdown', () => this.scene.start("settings"));
    var exit = this.add.image(950, 650, 'exitButton').setScale(0.9).setInteractive();
    exit.on('pointerdown', () => window.close());
  };
};