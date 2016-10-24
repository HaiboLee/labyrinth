var loadState = function (game) {
    this.init = function () {
        game.scale.pageAlignHorizontally=true;//水平居中
    }
    this.preload = function () {
        game.load.tilemap('level1','asset/json/map.json',null,Phaser.TILED_JSON);
        game.load.image('tiles-1', 'asset/img/tiles-1.png');
    }
    this.create = function () {
        game.state.start('play');
    }
}