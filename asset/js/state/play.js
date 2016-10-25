var playState = function (game) {
    var map, layer, player, cursors, camera, c;
    var facing,weapon,fireButton;
    this.create = function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        map = game.add.tilemap('level1');
        map.addTilesetImage('tiles-1', 'tiles-1');
        layer = map.createLayer('lever1');
        map.setCollisionByExclusion([13, 14, 15, 16, 17, 46, 47, 48, 49, 50, 51]);
        layer.resizeWorld();

        game.physics.arcade.gravity.y = 100;
        player = game.add.sprite(64, 64, 'dude', 4);
        game.physics.enable(player, Phaser.Physics.ARCADE);
        player.body.bounce.y = 0.2;
        player.body.collideWorldBounds = true;
        player.body.drag.set(200);

        player.animations.add('left', [0, 1, 2, 3], 10, true);
        player.animations.add('right', [5, 6, 7, 8], 10, true);
        player.animations.add('turn', [4], 50, true);

        camera = game.camera;
        camera.follow(player);
        game.input.onDown.add(function () {
            camera.flash('0xff00ff', 500, true);//闪光灯
            camera.shake(0.005, 500, false, Phaser.Camera.SHAKE_BOTH, true);
        });

        var graphics = game.add.graphics(0, 0);
        graphics.beginFill('0x000000');
        c = graphics.drawCircle(player.x, player.y, 150);
        game.world.mask = c;

        weapon = game.add.weapon(1,'bullet');
        weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
        weapon.bulletAngleOffset = 0;
        weapon.bulletSpeed = 400;
        weapon.trackSprite(player, 14, 0);

        cursors = game.input.keyboard.createCursorKeys();
        fireButton =  this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    }

    this.update = function () {
        game.physics.arcade.collide(player, layer);
        if (cursors.left.isDown) {
            player.body.velocity.x = -150;
            player.animations.play('left');
            if (facing != 'left') {
                facing = 'left';
            }
        } else if (cursors.right.isDown) {
            player.body.velocity.x = 150;
            player.animations.play('right');
            if (facing != 'right') {
                facing = 'right';
            }
        } else if (cursors.up.isDown) {
            player.body.velocity.y = -150;
            player.animations.play('right');
            if (facing != 'right') {
                facing = 'right';
            }
        } else if (cursors.down.isDown) {
            player.body.velocity.y = 150;
            player.animations.play('right');
            if (facing != 'right') {
                facing = 'right';
            }
        } else {
            if (player.body.velocity.x == 0 && player.body.velocity.y == 0) {
                player.animations.stop();
                if (facing == 'left') {
                    player.animations.play('turn');
                    //player.frame = 4;
                }
                else if (facing == 'right') {
                    player.animations.play('turn');
                    //player.frame = 4;
                }
            }
        }
        if (fireButton.isDown)
        {
            weapon.fire();
        }
        c.x=player.x-40;
        c.y=player.y-30;
    }
}