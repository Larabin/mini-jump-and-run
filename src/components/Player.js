import charImg from "./../assets/dude.png";
export default class Player{

    constructor(scene) {
        this.scene = scene;
        this.sprite; 
        this.cursors;       
    }

    preload() {
        this.scene.load.spritesheet('char', charImg, { frameWidth: 32, frameHeight: 48 } );        
    }

    create() {
        this.cursors = this.scene.input.keyboard.createCursorKeys();        
        this.sprite = this.scene.physics.add.sprite(100, 450, 'char');
        this.sprite.setBounce(0.2);
        this.sprite.setCollideWorldBounds(true);
        this.sprite.body.setGravityY(300);
        
        this.scene.anims.create({
            key: 'left',
            frames: this.scene.anims.generateFrameNumbers('char', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
        
        this.scene.anims.create({
            key: 'turn',
            frames: [ { key: 'char', frame: 4 } ],
            frameRate: 20
        });
        
        this.scene.anims.create({
            key: 'right',
            frames: this.scene.anims.generateFrameNumbers('char', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
    }   

    update() {
        if (this.cursors.left.isDown) {
            this.sprite.setVelocityX(-160);
            this.sprite.anims.play('left', true);
        }
        else if (this.cursors.right.isDown) {
            this.sprite.setVelocityX(160);
            this.sprite.anims.play('right', true);
        }
        else {
            this.sprite.setVelocityX(0);
            this.sprite.anims.play('turn');
        }

        if (this.cursors.up.isDown && this.sprite.body.touching.down){
            this.sprite.setVelocityY(-500);
        }
    }

    getSprite(){
        return this.sprite;
    }

}