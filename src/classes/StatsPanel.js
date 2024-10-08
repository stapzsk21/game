export default class StatsPanel {
    constructor(scene, stats) {
        this.scene = scene;
        this.stats = stats;
        this.create();
    }

    create() {
        const style = {
            fill: 'white',
            font: '20px CurseCasual',
            backgroundColor: 'black',
        };

        this.laps = this.scene.add.text(10, 10, "Laps: 1/3", style).setScrollFactor(0);
        this.time = this.scene.add.text(10, 50, "Time: 0", style).setScrollFactor(0);
        this.timeLap = this.scene.add.text(10, 90, "Lap time: 0", style).setScrollFactor(0);
        this.timeBestLap = this.scene.add.text(10, 130, "Best lap time: 0", style).setScrollFactor(0);
    }

    render() {
        this.laps.setText(`Laps: ${this.stats.lap}/${this.stats.laps}`);
        this.time.setText(`Time: ${this.stats.time.toFixed(2)}`);
        this.timeLap.setText(`Lap time: ${this.stats.timeLap.toFixed(2)}`);
        this.timeBestLap.setText(`Best lap time: ${this.stats.timeBestLap.toFixed(2)}`);
    }
} 