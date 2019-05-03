import Phaser from "phaser";
import starImg from "../assets/images/star.png";
import bombImg from "../assets/images/bomb.png";
import explosionImg from "../assets/images/explosion.png";
import coinWav from "../assets/audio/coin.wav";
import slamWav from "../assets/audio/slam.wav";

export default class Items {

    constructor(scene) {
        this.scene = scene;
        this.stars;
        this.bombs;
    }

    preload() {
        this.scene.load.image('star', starImg);
        this.scene.load.image('bomb', bombImg);
        this.scene.load.spritesheet('explosion', explosionImg, { frameWidth: 96, frameHeight: 96 } );
        this.scene.load.audio('coin', coinWav);
        this.scene.load.audio('slam', slamWav);
    }

    create() {
        // create stardust
        this.stars = this.scene.physics.add.group({
            key: 'star',
            repeat: 11,
            setXY: { x: 12, y: 0, stepX: 70 }
        });
        this.stars.children.iterate((child) => child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8)));
        // create some bombs
        this.bombs = this.scene.physics.add.group();                
    }

    recreateStars() {
        this.stars.children.iterate((child) => child.enableBody(true, child.x, 0, true, true));
    }

    createBomb(player) {
        let x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
        let bomb = this.bombs.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
    }

    collectStar(player) {
        this.scene.sound.play('coin');
        if (this.hasNoActiveStarsLeft()) {
            this.recreateStars();
            this.createBomb(player);
        }
    }    

    hasNoActiveStarsLeft() {
        return this.stars.countActive(true) === 0;
    }

    hitBomb(player,bomb) {
        this.bombs.scene.sound.play('slam');
        bomb.disableBody(true, true);
        let explosion = this.scene.physics.add.sprite(bomb.x, bomb.y, 'explosion');

        this.scene.anims.create({
            key: 'explosion',
            frames: this.scene.anims.generateFrameNumbers('explosion', { start: 0, end: 11 }),
            frameRate: 10            
        });

        explosion.anims.play('explosion', true);
    }

    getStars() {
        return this.stars;
    }

    getBombs(){
        return this.bombs;
    }
}