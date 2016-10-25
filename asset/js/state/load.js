var loadState = function (game) {
    this.init = function () {
        game.scale.pageAlignHorizontally=true;//水平居中
    }
    this.preload = function () {
        game.load.tilemap('level1',null,mapJson,Phaser.Tilemap.EAST);
        game.load.image('tiles-1', 'asset/img/tiles-1.png');
        game.load.spritesheet('dude','asset/img/dude.png',32,48);
        game.load.image('bullet','asset/img/bullet.png');
    }
    this.create = function () {
        game.state.start('play');
    }
}