export default class StatsPopup {
    constructor(scene, stats) {
        this.scene = scene;
        this.stats = stats;
        this.createGraphics();
    }

    createGraphics() {
        this.popup = this.scene.add.graphics()
        .setScrollFactor(0)
        .fillStyle(0x000000, 0.5)
        .fillRect((this.scene.sys.game.config.width - 800) / 2, (this.scene.sys.game.config.height - 600) / 2, 800, 600);

        this.title = this.scene.add.text(this.scene.cameras.main.centerX, this.scene.cameras.main.centerY - 200,'Level complete', {
            font: '46px Arial',
            fill: '#FAFAD2'
        }).setOrigin(0.5)
        .setScrollFactor(0);

        this.time = this.scene.add.text(this.scene.cameras.main.centerX, this.scene.cameras.main.centerY - 50,`Time total: ${this.stats.time.toFixed(2)}`, {
            font: '46px Arial',
            fill: '#FAFAD2'
        }).setOrigin(0.5)
        .setScrollFactor(0);

        this.timeBestLap = this.scene.add.text(this.scene.cameras.main.centerX, this.scene.cameras.main.centerY + 50,`Time best lap: ${this.stats.timeBestLap.toFixed(2)}`, {
            font: '46px Arial',
            fill: '#FAFAD2'
        }).setOrigin(0.5)
        .setScrollFactor(0);
        
        this.text = this.scene.add.text(this.scene.cameras.main.centerX, this.scene.cameras.main.centerY + 200,'Tap to continue', {
            font: '46px Arial',
            fill: '#FAFAD2'
        }).setOrigin(0.5)
        .setScrollFactor(0);
        
        this.scene.input.once('pointerdown', () => {
            this.scene.scene.start('Game');
        });
    }
} 