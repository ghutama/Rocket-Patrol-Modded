/*******************************************************************
 * Jeremy Dahlberg & Giandra Hutama
 * Points breakdown:
 *  - new, faster, more expensive spaceship type    (20 points)
 *  - simultaneous two-player mode                  (30 points)
 *  - UI and artwork rework to not sci-fi           (60 points)
 *    TOTAL                                         (110 points)
******************************************************************/



let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard variables
let keyF, keyR, keyLEFT, keyRIGHT, keyD, keyA, keySPACE;