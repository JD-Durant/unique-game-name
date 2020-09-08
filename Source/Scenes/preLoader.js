import "phaser";
export class preLoad extends Phaser.Scene {
  constructor(){
    super("Loader");
  }

  preload(){
    this.load.image("menuBG", 'https://cdn.jsdelivr.net/gh/IProDurant/js-yaf8nf@IProDurant-patch-1/assets/images/Background%20Asset.png')
  }
}