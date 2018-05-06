var board = require('../board.js');
var socketService = require('../dataServices/socketService');
module.exports = {
    onMessage: function (data, socketId) {
        socketService.emit('message', {from: board.getPlayerName(socketId), msg: data});
    }
};