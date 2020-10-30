export class preLoad extends Phaser.Scene {constructor(){super("Loader");}
  preload(){
    this.load.image("backGround", 'https://cdn.jsdelivr.net/gh/IProDurant/unique-game-name@master/Assets/images/backgroundVersion13.png');
    this.load.image("playButton", "https://cdn.jsdelivr.net/gh/IProDurant/js-yaf8nf@IProDurant-patch-1/assets/images/playoff.png");
    this.load.image("returnButton", "https://cdn.jsdelivr.net/gh/IProDurant/js-yaf8nf@IProDurant-patch-1/assets/images/exitoff.png");
    this.load.image("settingsButton", "https://cdn.jsdelivr.net/gh/IProDurant/js-yaf8nf@IProDurant-patch-1/assets/images/Settingsbutton.png");
    this.load.image("exitButton", "https://cdn.jsdelivr.net/gh/IProDurant/js-yaf8nf@IProDurant-patch-1/assets/images/exitoff.png");
    this.load.image("gameGrid", "https://cdn.jsdelivr.net/gh/IProDurant/unique-game-name@master/Assets/images/maniaGrid.jpg");
    this.load.image("note1", "https://cdn.jsdelivr.net/gh/IProDurant/unique-game-name@master/Assets/images/mania-note2H.png");
    this.load.image("note2", "https://cdn.jsdelivr.net/gh/IProDurant/unique-game-name@master/Assets/images/mania-note1H.png");
    this.load.image("gameover", "https://cdn.jsdelivr.net/gh/IProDurant/unique-game-name@master/Assets/images/gameOver.png");
    this.load.image("menuButton", "https://cdn.jsdelivr.net/gh/IProDurant/unique-game-name@master/Assets/images/menuButton.png");
    this.load.image("resetButton", "https://cdn.jsdelivr.net/gh/IProDurant/unique-game-name@master/Assets/images/resetButton.png");
    this.load.image("title", "https://cdn.jsdelivr.net/gh/IProDurant/unique-game-name@master/Assets/images/gameTitle.png")
  };
  create(){
    this.scene.start("mainMenu");
  };
};