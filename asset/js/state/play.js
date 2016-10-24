var playState = function (game) {
    var map,layer;
    this.create = function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        map = game.add.tilemap('level1',16,16);
        map.addTilesetImage('tiles-1','tiles-1');
        layer = map.createLayer('lever1');
        //layer.resizeWorld();

    }
}