var note1, note2, note3, note4;
var score = 0;
var scoreText;
var health = 100;
var healthText;
export { note1, note2, note3, note4};
import { song } from './Maps/firstMap';
import { moveNote } from './Calculations/notePosition';

export function changeScore(scoreChange) { score += scoreChange };
export function changeHealth(healthChange) { health += healthChange };

export class actualGame extends Phaser.Scene {constructor(){super("game");}
  create(){
    var background =  this.add.image(0, 0, "backGround").setOrigin(0,0).setScale(2);
    scoreText = this.add.text(10, 0, "Score : " + score, { fontFamily: 'Verdana', fontSize: 64, color: 'black' });
    healthText = this.add.text(10, 60, "Health : " + health, { fontFamily: 'Verdana', fontSize: 64, color: 'black' });
    this.scene.launch("keyDetector"); //launches a scene in the background, this is how i will carry out any key detection
    var grid = this.add.image(950, 475, "gameGrid").setScale(0.9);
    note1 = this.add.image(800, -20, "note1").setScale(0.41); //it just works ok.
    note2 = this.add.image(900, -20, "note2").setScale(0.41);
    note3 = this.add.image(1000, -20, "note2").setScale(0.41);
    note4 = this.add.image(1100, -20, "note1").setScale(0.41);
  };

  update() {
    moveNote(note1, 11);
    moveNote(note2, 4);
    moveNote(note3, 9);
    moveNote(note4, 7);
    scoreText.setText("Score : " + score);
    healthText.setText("Health : " + health);
    //song();
  };
};