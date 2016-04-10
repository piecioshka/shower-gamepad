(function (root) {
    'use strict';

    // @see: https://www.npmjs.com/package/gamepad-api
    var Gamepad = root.Gamepad;

    // @see: https://www.npmjs.com/package/shower-core
    var shower = root.shower;

    if (!Gamepad) {
        throw new ReferenceError('"Gamepad" library is required');
    }

    if (!shower) {
        throw new ReferenceError('"shower" library is required');
    }

    // Joysticks

    Gamepad.on('joystick:left', function (direction) {
        if (direction.left) {
            shower.prev();
        } else if (direction.right) {
            shower.next();
        }
    });

    Gamepad.on('joystick:right', function (direction) {
        if (direction.left) {
            shower.prev();
        } else if (direction.right) {
            shower.next();
        }
    });

    // Arrows

    Gamepad.on('arrow:right', function () {
        shower.next();
    });

    Gamepad.on('arrow:left', function () {
        shower.prev();
    });

    // Shapes

    Gamepad.on('shape:circle', function () {
        shower.next();
    });

    Gamepad.on('shape:square', function () {
        shower.prev();
    });
}(this));
