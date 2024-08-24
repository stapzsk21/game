import { Scene } from 'phaser';
import LoadingBar from '../classes/LoadingBar';
import tilesetPng from '../../public/assets/tileset.png';
import tilesetJson from '../../public/assets/tilemap.json';

import objectsPng from '../../public/assets/objects.png';
import objectsJson from '../../public/assets/objects.json';

export class Preloader extends Scene
{
    constructor ()
    {
        super('Preloader');
    }

    preload ()
    {
        this.add.sprite(0, 0, 'background').setOrigin(0, 0);
        
        this.loadingBar = new LoadingBar(this);

        this.load.spritesheet('tileset', tilesetPng, {frameWidth: 64, frameHeight: 64});
        this.load.tilemapTiledJSON('tilemap', tilesetJson);

        this.load.atlas('objects', objectsPng, objectsJson);
    }

    create ()
    {
        this.scene.start('MainMenu');
    }
}
