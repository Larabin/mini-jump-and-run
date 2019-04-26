import starImg from "./assets/star.png";
import bombImg from "./assets/bomb.png";


export default class Item {

    constructor() {

    }

    preload(base) {
        base.load.image('star', starImg);
        base.load.image('bomb', bombImg);
    }

    create(base) {

    }
}