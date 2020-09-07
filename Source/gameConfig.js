import "phaser";

import { sceneMenu } from './Scenes/mainMenu';

export var config = {
  type : Phaser.AUTO,
  height: 915,
  width: 1890,
  bakgroundColor: 0x000000,
  scene: [sceneMenu]
}