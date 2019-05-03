import Phaser from "phaser";
import StartScene from "./scenes/StartScene";
import NeoScene from "./scenes/NeoScene";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 300 },
        debug: false
    }
  },
  scene: [StartScene,NeoScene]  
};

const game = new Phaser.Game(config);