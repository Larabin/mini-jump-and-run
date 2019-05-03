export default class Score {

    constructor(scene) {
        this.scene = scene;
        this.score = 0;
        this.scoreText;
    }

    create() {
        this.scoreText = this.scene.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });
    }

    increment() {
        this.score += 10;
        this.scoreText.setText('Score: ' + this.score);
    }
}