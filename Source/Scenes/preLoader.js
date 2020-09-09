import "phaser";
export class preLoad extends Phaser.Scene {constructor(){super("Loader");}

  preload(){
    this.load.image("menuBG", 'https://cdn.jsdelivr.net/gh/IProDurant/js-yaf8nf@IProDurant-patch-1/assets/images/Background%20Asset.png');

    this.load.image("playButton", "https://cdn.jsdelivr.net/gh/IProDurant/js-yaf8nf@IProDurant-patch-1/assets/images/playoff.png");
    this.load.image("returnButton", "https://cdn.jsdelivr.net/gh/IProDurant/js-yaf8nf@IProDurant-patch-1/assets/images/exitoff.png");
    this.load.image("settingsButton", "https://cdn.jsdelivr.net/gh/IProDurant/js-yaf8nf@IProDurant-patch-1/assets/images/Settingsbutton.png")
    this.load.image("exitButton", "https://cdn.jsdelivr.net/gh/IProDurant/js-yaf8nf@IProDurant-patch-1/assets/images/exitoff.png")
  }

  create() {
    this.add.text(20, 20, "Loading");
    this.scene.start("mainMenu");
  }

}