import "phaser";
var note1, note2, note3, note4;
var score = 0
var scoreText
export { note1, note2, note3, note4};
import {moveNote} from './Calculations/notePosition'

export function changeScore(scoreChange) { score = scoreChange };

export class actualGame extends Phaser.Scene {constructor(){super("game");}
  create(){
    var background =  this.add.image(0, 0, "backGround").setOrigin(0,0).setScale(2);
    scoreText = this.add.text(10, 0, "Score : " + score, { fontFamily: 'Arial', fontSize: 64, color: 'black' })
    this.scene.launch("keyDetector"); //launches a scene in the background, this is how i will carry out any key detection
    var grid = this.add.image(950, 475, "gameGrid").setScale(0.9);
    note1 = this.add.image(800, -20, "note1").setScale(0.41); //it just works ok.
    note2 = this.add.image(900, -20, "note2").setScale(0.41);
    note3 = this.add.image(1000, -20, "note2").setScale(0.41);
    note4 = this.add.image(1100, -20, "note1").setScale(0.41);
  };

  update() {
    moveNote(note1, 10);
    moveNote(note2, 8);
    moveNote(note3, 6);
    moveNote(note4, 11);
    scoreText.setText("Score : " + score)
  };
};
