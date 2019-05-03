import Phaser from "phaser";
import World from "../components/World";

export default class StartScene extends Phaser.Scene {
    
    constructor() {
        super({
            key: "StartScene"
        });
        
        this.world = new World(this);

        this.title = Phaser.GameObjects.Text;
        this.hint = Phaser.GameObjects.Text;
    }

    preload() {         
        this.world.preload();        
    }

    create() {   
        this.world.create();
        this.title = this.add.text(150, 200, 'Neo Run', { fontSize: '128px', fill: '#000' });
        this.hint = this.add.text(300, 350, 'Click to start', { fontSize: '24px', fill: '#000' });
        this.input.on('pointerdown', (pointer) => this.scene.start("NeoScene"));
    }
};