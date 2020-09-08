import "phaser";
export class sceneMenu extends Phaser.Scene {
  constructor(){
    super("mainMenu");
  }

  create(){
    var background =  this.add.image(0, 0, "menuBG");
    background.setOrigin(0,0);

    var playButton = this.add.image(950, 250, "playButton").setScale(0.6).setInteractive();
    //playButton.setScale(0.6);  trims off a line of code by adding it above
    //playButton.setInteractive();
    playButton.on('pointerdown', () => { console.log("It works") }); //change this when other scenes are set up
  }
}