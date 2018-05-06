var jsonHandler = require('./jsonHandler');
var rxService = require('../dataServices/rxService');
var playerSubject = rxService.getPlayerSubject();
var self = module.exports = {
    createPlayer: function (playerName, socket, socketid) {
        jsonHandler.createPlayer(function (hand) {
            playerSubject.next({
                data: {
                    "playerName": playerName,
                    "playerId": socketid,
                    "hand": hand,
                    "isJudge": false, // Do we still need this field? I think the currentJudge in display is good enough?
                    "score": 0
                },
                socket: socket
            });
        }, socketid);
    }
};