import "phaser";
export class keys extends Phaser.Scene {constructor(){super("keyDetector");}

  create(){
    var keyD = this.input.keyboard.addKey('D');
    keyD.on('down', function (event){console.log("d has been pressed")});
    }

  update(){
    
  }
}