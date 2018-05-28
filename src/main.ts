import 'phaser';
import { GameScene } from './scenes/GameScene';

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: [GameScene]
};

var game = new Phaser.Game(config);
