import "phaser";
export class sceneMenu extends Phaser.Scene {
  constructor(){
    super("mainMenu");
  }

  create(){
    var background =  this.add.image(0, 0, "menuBG").setOrigin(0,0);

    var playButton = this.add.image(950, 250, "playButton").setScale(0.6).setInteractive();
    playButton.on('pointerdown', () => { console.log("It works") }); //change this when other scenes are set up

    var settings = this.add.image(950, 450, 'settingsButton').setScale(0.9).setInteractive(); //dont know why the scales are different but they match
    settings.on('pointerdown', () => { console.log("Also works")} ); //also change
  }
}