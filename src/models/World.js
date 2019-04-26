import groundImg from "./../assets/platform.png";
import skyImg from "./../assets/sky.png";

export default class World {

    constructor() {
        this.platforms;
    }

    preload(base) {
        base.load.image('sky', skyImg);
        base.load.image('ground', groundImg);
    }

    create(base) {
        base.add.image(400, 300, 'sky');  

        this.platforms = base.physics.add.staticGroup();
        this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();
        this.platforms.create(600, 400, 'ground');
        this.platforms.create(50, 250, 'ground');
        this.platforms.create(750, 220, 'ground');
    }

    getPlatforms() {
        return this.platforms;
    }

}