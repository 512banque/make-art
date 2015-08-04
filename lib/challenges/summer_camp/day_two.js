var palette = require('../language/modules/palette.json'),
    generate = require('./util/generate');

module.exports = {
    id          : 'day_two',
    title       : 'TBD',
    description : 'TBD',
    startAt     : 0,
    summerCamp  : true,
    steps       : generate.fromSequence([
        [
            'Today is a beautiful day - **type** `background lightblue`',
            'background lightblue',
            [
                [ 'background', { color: palette.lightblue } ]
            ]
        ],
        [
            'Set the stroke to 0, to avoid drawing lines - **type** `stroke 0`',
            'stroke 0',
            [
                [ 'stroke-width', { 'width': 0 } ]
            ]
        ],
        [
            'Move the cursor where the sun will be - **type** `moveTo 400, 50`',
            'moveTo 400, 50',
            [
                [ 'move-to', { dx: 400, dy: 50 } ]
            ]
        ],
        [
            'Set the `color` of the sun `yellow`',
            'color yellow',
            [
                [ 'color', { color: palette.yellow } ]
            ]
        ],
        [
            'Draw the sun with a circle - **type** `circle 40`',
            'circle 40',
            [
                [ 'ellipse', { rx: 40, isCircle: true } ]
            ]
        ],
        [
            'There is one cloud in the horizon. - **type** `moveTo 440, 80`',
            'moveTo 440, 80',
            [
                [ 'move-to', { dx: 440, dy: 80 } ]
            ]
        ],
        [
            'Set the `color` of the cloud `white`',
            'color white',
            [
                [ 'color', { color: palette.white } ]
            ]
        ],
        [
            'Draw the cloud with an ellipse - **type** `ellipse 60, 20`',
            'ellipse 60, 20',
            [
                [ 'ellipse', { rx: 60, ry: 20 } ]
            ]
        ],
        [
            'The lake has a beautiful `aquamarine` `color` this morning',
            'color aquamarine',
            [
                [ 'color', { color: palette.aquamarine } ]
            ]
        ],
        [
            'Move the cursor where the lake is - **type** `moveTo 0, 190`',
            'moveTo 0, 190',
            [
                [ 'move-to', { dx: 0, dy: 190 } ]
            ]
        ],
        [
            'Draw the lake using a simple rectangle - **type** `rectangle 500, 310`',
            'rectangle 500, 150',
            [
                [ 'rectangle', { width: 500, height: 310 } ]
            ]
        ],
        [
            'Set the `color` to `green` for the grass',
            'color green',
            [
                [ 'color', { color: palette.green } ]
            ]
        ],
        [
            'Move the cursor before drawing the grass - **type** `moveTo 250, 700`',
            'moveTo 250, 700',
            [
                [ 'move-to', { dx: 250, dy: 700 } ]
            ]
        ],
        [
            'Draw the camp site with a circle - **type** `circle 500`',
            'circle 500',
            [
                [ 'ellipse', { rx: 500, isCircle: true } ]
            ]
        ],
        [
            'Looking a bit empty, let\'s draw a tree - **type** `moveTo 120, 300`',
            'moveTo 120, 300',
            [
                [ 'move-to', { dx: 120, dy: 300 } ]
            ]
        ],
        [
            'Set the `color` of the trunk to `brown`',
            'color brown',
            [
                [ 'color', { color: palette.brown } ]
            ]
        ],
        [
            'Draw the trunk of the tree using a rectangle - **type** `rectangle 15, 100`',
            'rectangle 15, 100',
            [
                [ 'rectangle', { width: 15, height: 100 } ]
            ]
        ],
        [
            'Now place the foliage of the tree - **type** `moveTo 8, -120`',
            'moveTo 8, -120',
            [
                [ 'move-to', { dx: 8, dy: -120 } ]
            ]
        ],
        [
            'Set the `color` to `darkgreen`',
            'color darkgreen',
            [
                [ 'color', { color: palette.darkgreen } ]
            ]
        ],
        [
            'Draw the foliage with a triangle using `polygon` - **type** `polygon 0, 0, -40, 160, 40, 160`',
            'polygon 0, 0, 150, -200, 300, 0',
            [
                [ 'polygon', { points: [
                    { x: 0, y: 0 },
                    { x: -40, y: 160 },
                    { x: 40, y: 160 }
                ] } ]
            ]
        ],
    ])
};