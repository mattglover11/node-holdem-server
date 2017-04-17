/**
 * Created by mattyglover on 16/04/2017.
 */
'use strict';


module.exports = Player;

function Player(name) {

    this.name = "Player";
    if (name)
        this.name = name;

    this.cards = [];
    this.hand = [];

};

Player.prototype.getName = function() {
    return this.name;
}
