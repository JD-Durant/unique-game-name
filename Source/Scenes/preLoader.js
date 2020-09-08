import "phaser";
export class preLoad extends Phaser.Scene {
  constructor(){
    super("Loader");
  }

  preload(){
    this.load.image("menuBG", '')
  }
}