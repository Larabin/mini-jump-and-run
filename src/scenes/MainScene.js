import Phaser from "phaser";
import Player from "../components/Player";
import World from "../components/World";
import Items from "../components/Items";
import Score from "../components/Score";

export default class MainScene extends Phaser.Scene {

    constructor() {
        super({
            key: "MainScene"
        });

        this.player = new Player(this);
        this.world = new World(this);
        this.items = new Items(this);
        this.score = new Score(this);

        this.gameOver = false;
    }
    // parent scene functions    
    init(params) {
        // not needed at the moment
        // is called when the scene starts
    }

    preload() {         
        this.world.preload();
        this.player.preload();
        this.items.preload();
    }

    create() {
        this.world.create();
        this.player.create();
        this.items.create();
        this.score.create();    
    
        // collider collection
        this.physics.add.collider(this.player.getSprite(), this.world.getPlatforms());
        this.physics.add.collider(this.items.getStars(), this.world.getPlatforms());
        this.physics.add.collider(this.items.getBombs(), this.world.getPlatforms());    
        this.physics.add.collider(this.player.getSprite(), this.items.getBombs(), this.hitBomb, null, this);
        this.physics.add.overlap(this.player.getSprite(), this.items.getStars(), this.collectStar , null, this);
    }

    update(time) {    
        this.player.update(this);
    } 

    // specific game functions
    collectStar(player, star) {
        star.disableBody(true, true);        
        this.score.increment();
        this.items.collectStar(player);    
    }

    hitBomb (player, bomb) {
        this.physics.pause();
        player.setTint(0xff0000);
        player.anims.play('turn');
        this.items.hitBomb(player, bomb); 
        this.gameOver = true;
    }
}