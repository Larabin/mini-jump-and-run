import Phaser from "phaser";
import * as Scene from "./Scene";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 300 },
        debug: false
    }
  },
  scene: {
    preload: Scene.preload,
    create: Scene.create,
    update: Scene.update
  }
};

const game = new Phaser.Game(config);