/*
 * Location toolbar language module
 *
 * Collection of location toolbar commands
 */

var session = require('../session'),
    utils = require('../utils'),
    id = 0;

function createToolbar(callback) {

    var toolbarContainer = window.document.createElement('div');

    toolbarContainer.innerHTML = '<p style="color: white; margin: 10px; display: inline-block;font-size:1.2em">Location</p>' +
                                    '<input type="text" style="margin: 10px; display: inline-block;flex:1">' +
                                    '<button style="z-index: 1; margin: 10px; display: inline-block;">Set Location</button>';

    toolbarContainer.setAttribute('id', 'toolbar-container-' + id);
    toolbarContainer.style.position = 'absolute';
    toolbarContainer.style.height = '60px';
    toolbarContainer.style.background = 'gray';
    toolbarContainer.style.width = '100%';
    toolbarContainer.style.textAlign = 'center';
    toolbarContainer.style.display = 'flex';
    toolbarContainer.style.flexDirection = 'row';
    toolbarContainer.style.alignItems = 'center';

    window.document.getElementById('uiDisplay').appendChild(toolbarContainer);
    id++;

    toolbarContainer.querySelector('button').onclick = function () {
        callback(toolbarContainer.querySelector('input').value);
    };

}

function reset() {
    for (var i = 0; i <= id; i++) {
        var el = document.getElementById('toolbar-container-' + i);
        if (el) {
            document.getElementById('htmlDisplay').removeChild(el);
        }
    }
    id = 0;
}

module.exports = {
    createToolbar: createToolbar,
    reset: reset
};