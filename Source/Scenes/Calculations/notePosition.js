import "phaser";
import {note1} from '../game'
export class notePosition extends Phaser.Scene {constructor(){super("notes");}
  recordNote(note) {
    var position = note.y;
    //console.log(position);
  };

  export inPosition(note, key) {
    console.log("Command Launched")
  };

  update(){
   // this.recordNote(note1);
  };
}