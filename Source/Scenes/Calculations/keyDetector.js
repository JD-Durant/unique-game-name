import "phaser";
import {inPosition} from './notePosition'
import {note1} from '../game'
export class keys extends Phaser.Scene {constructor(){super("keyDetector");}
  create(){
    var keyD = this.input.keyboard.addKey('D');
    keyD.on('down', () => console.log("D has been pressed"));
    inPosition(note1, keyD)
    var keyF = this.input.keyboard.addKey('F');
    keyF.on('down', () => console.log("F has been pressed"));
    var keyJ = this.input.keyboard.addKey('J');
    keyJ.on('down', () => console.log("J has been pressed"));
    var keyK = this.input.keyboard.addKey('K');
    keyK.on('down', () => console.log("K has been pressed"));
  }
  update(){
  }
}