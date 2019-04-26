import Phaser from "phaser";
import Player from "./models/Player";
import World from "./models/World";

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
    preload: preload,
    create: create
  }
};

const game = new Phaser.Game(config);

const player = new Player();
const world = new World();


function preload() { 
  world.preload(this);
  player.preload(this);
}

function create() {
  world.create(this);
  player.create(this);
  this.physics.add.collider(player.getPlayer(), world.getPlatforms());
}
