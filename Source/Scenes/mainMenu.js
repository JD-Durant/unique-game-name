import "phaser";
export class sceneMenu extends Phaser.Scene {
  constructor(){
    super("mainMenu");
  }

  create(){
    var background =  this.add.image(0, 0, "mainmenu.png");
    background.setOrigin(0,0);
  }
}