import Player from "./models/Player";
import World from "./models/World";
import Items from "./models/Items";
import Score from "./Score";


class Scene {

    constructor() {
        this.player = new Player();
        this.world = new World();
        this.items = new Items();
        this.score = new Score();

        this.gameOver = false;
    }

}

const scene = new Scene();


// global functions
export function preload() {         
    scene.world.preload(this);
    scene.player.preload(this);
    scene.items.preload(this);
}
  
export function create() {
    scene.world.create(this);
    scene.player.create(this);
    scene.items.create(this);
    scene.score.create(this);    

    // collider collection
    this.physics.add.collider(scene.player.getSprite(), scene.world.getPlatforms());
    this.physics.add.collider(scene.items.getStars(), scene.world.getPlatforms());
    this.physics.add.collider(scene.items.getBombs(), scene.world.getPlatforms());    
    this.physics.add.collider(scene.player.getSprite(), scene.items.getBombs(), hitBomb, null, this);
    this.physics.add.overlap(scene.player.getSprite(), scene.items.getStars(), collectStar , null, this);
}
  
export function update() {    
    scene.player.update(this);
} 

// private functions
function collectStar(player, star) {
    star.disableBody(true, true);        
    scene.score.increment();
    scene.items.collectStar(player);    
}

function hitBomb (player, bomb) {
    this.physics.pause();
    player.setTint(0xff0000);
    player.anims.play('turn');
    scene.gameOver = true;
}