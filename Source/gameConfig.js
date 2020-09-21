import "phaser";
import { sceneMenu } from './Scenes/mainMenu';
import { preLoad } from './Scenes/preLoader';
import { actualGame } from './Scenes/game';
import { keys } from './Scenes/Calculations/keyDetector';
import { notePosition } from './Scenes/Calculations/notePosition';

export var config = {
  type : Phaser.AUTO,
  height: 915,
  width: 1890,  //very random but works well
  bakgroundColor: 0x000000,
  scene: [preLoad, sceneMenu, actualGame, keys, notePosition]
}