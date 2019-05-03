import groundImg from "./../assets/images/platform.png";
import skyImg from "./../assets/images/sky.png";

export default class World {

    constructor(scene) {        
        this.scene = scene;
        this.platforms;
    }

    preload() {
        this.scene.load.image('sky', skyImg);
        this.scene.load.image('ground', groundImg);
    }

    create() {
        this.scene.add.image(400, 300, 'sky');  

        this.platforms = this.scene.physics.add.staticGroup();
        this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();
        this.platforms.create(600, 400, 'ground');
        this.platforms.create(50, 250, 'ground');
        this.platforms.create(750, 220, 'ground');
    }

    getPlatforms() {
        return this.platforms;
    }

}