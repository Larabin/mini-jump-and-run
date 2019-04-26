import charImg from "./../assets/dude.png";

export default class Player{

    constructor() {
        this.sprite;        
    }

    preload(base) {
        base.load.spritesheet('char', charImg, { frameWidth: 32, frameHeight: 48 } );        
    }

    create(base) {        
        this.sprite = base.physics.add.sprite(100, 450, 'char');
        this.sprite.setBounce(0.2);
        this.sprite.setCollideWorldBounds(true);
        this.sprite.body.setGravityY(300);
        
        base.anims.create({
            key: 'left',
            frames: base.anims.generateFrameNumbers('char', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
        
        base.anims.create({
            key: 'turn',
            frames: [ { key: 'char', frame: 4 } ],
            frameRate: 20
        });
        
        base.anims.create({
            key: 'right',
            frames: base.anims.generateFrameNumbers('char', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
    }   

    getPlayer(){
        return this.sprite;
    }

}