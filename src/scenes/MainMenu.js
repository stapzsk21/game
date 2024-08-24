import { Scene } from 'phaser';
import Client from '../classes/client';

export class MainMenu extends Scene {
    constructor () {
        super('MainMenu');
    }

    create () {
        this.createBackground();
        this.createButtons();
        this.setEvents();
    }

    createBackground() {
        this.add.image(0, 0, 'background').setOrigin(0);
    }
    
    createButtons() {
        const style = {
            font: '46px Arial',
            fill: '#fff',
            backgroundColor: 'black'
        }

        this.singlePlay = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY - 50,'Single Play', style)
        .setOrigin(0.5)
        .setScrollFactor(0)
        .setInteractive();

        this.twoPlayers = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY + 50,'Two Players', style)
        .setOrigin(0.5)
        .setScrollFactor(0)
        .setInteractive();
    }

    setEvents() {
        this.singlePlay.on('pointerdown', this.startGame, this);

        this.twoPlayers.on('pointerdown', this.requestGame, this);
    }

    startGame() {
        this.scene.start('Game', {client: this.client});
    }

    requestGame() {
        this.client = new Client();

        this.client.init();

        this.client.on('game', this.startGame, this);
    }
}
