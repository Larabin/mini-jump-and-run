import Phaser from "phaser";
import NeoScene from "./NeoScene";

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
  scene: [NeoScene]  
};

const game = new Phaser.Game(config);