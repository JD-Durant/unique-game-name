var finalScoreText;
var finalScore = 0;
export function changeFinalScore(scoreChange) { finalScore += scoreChange };
export class endGame extends Phaser.Scene {constructor(){super("gameOver");}
create() {
  var background =  this.add.image(0, 0, "backGround").setOrigin(0,0).setScale(2);
  var endText = this.add.image(450, 300, "gameover");
  finalScoreText = this.add.text(50, 700, "Final Score : " + finalScore, { fontFamily: 'Verdana', fontSize: 64, color: 'black' });
  var menuButton = this.add.image(1550, 175, "menuButton").setScale(0.6).setInteractive();
  menuButton.on('pointerdown', () => this.scene.start("mainMenu"));
  var settings = this.add.image(1550, 375, 'settingsButton').setInteractive();
  settings.on('pointerdown', () => this.scene.start("settings"));
  var reset = this.add.image(1550, 575, 'resetButton').setScale(0.6).setInteractive();
  reset.on('pointerdown', () => this.scene.start("game"));
  finalScore = 0; //This resets the score after dispalying it, ready for the next end screen
  }
}

