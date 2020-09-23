import "phaser";
import {note1} from '../game'
export function inPosition(note, key)
export class notePosition extends Phaser.Scene {constructor(){super("notes");}
  recordNote(note) {
    var position = note.y;
    //console.log(position);
  };

  inPosition(note, key) {
    console.log("Command Launched")
  };

  update(){
   // this.recordNote(note1);
  };
}