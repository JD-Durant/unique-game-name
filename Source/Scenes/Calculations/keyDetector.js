import "phaser";
import {note1, note2, note3, note4} from '../game'
import { inPosition } from './notePosition';
export class keys extends Phaser.Scene {constructor(){super("keyDetector");}
  create(){
    var keyD = this.input.keyboard.addKey('D');
    keyD.on('down', () => inPosition(note1, "keyD"));
    var keyF = this.input.keyboard.addKey('F');
    keyF.on('down', () => inPosition(note2, "keyF"));
    var keyJ = this.input.keyboard.addKey('J');
    keyJ.on('down', () => inPosition(note3, "keyJ"));
    var keyK = this.input.keyboard.addKey('K');
    keyK.on('down', () => inPosition(note4, "keyK"));
  };
}