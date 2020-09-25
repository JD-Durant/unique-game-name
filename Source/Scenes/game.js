import "phaser";
var note1, note2, note3, note4;
export { note1, note2, note3, note4 };
import {moveNote} from './Calculations/notePosition'
export class actualGame extends Phaser.Scene {constructor(){super("game");}
  create(){
    var background =  this.add.image(0, 0, "backGround").setOrigin(0,0).setScale(2);
    this.scene.launch("keyDetector"); //launches a scene in the background, this is how i will carry out any key detection
    var grid = this.add.image(950, 475, "gameGrid").setScale(0.9);
    note1 = this.add.image(800, -25, "note1").setScale(0.41); //it just works ok.
    note2 = this.add.image(900, -25, "note2").setScale(0.41);
    note3 = this.add.image(1000, -25, "note2").setScale(0.41);
    note4 = this.add.image(1100, -25, "note1").setScale(0.41);
  }

  /*moveNote(note, speed) {
    note.y += speed;        //updates the note position, requiring the specific note and then the speed at which the note will be travelling
    if (note.y > 850);
      note.y = -25;
  };*/

  update() {
    moveNote(note1, 13);
    moveNote(note2, 5);
    moveNote(note3, 6);
    moveNote(note4, 9);
  };
}