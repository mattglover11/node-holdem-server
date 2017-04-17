/**
 * Created by mattyglover on 16/04/2017.
 */
'use strict';


module.exports = Table;

function Table(ID, tableName, cardDeck, cardGame, maxPlayers) {

    this.ID = 0;
    this.cardDeck = null;
    this.name = "Generic Table";
    this.maxPlayers = 6;
    this.cardGame = null;
    this.players = null;
    this.hand = [];

    if (ID)
        this.ID = ID;
    if (tableName)
        this.name = tableName;
    if (cardDeck)
        this.cardDeck = cardDeck;
    if (maxPlayers)
        this.maxPlayers = maxPlayers;
    if (cardGame) {
        this.cardGame = cardGame;
    }

};

Table.prototype.getName = function() {
    return this.name;
};

Table.prototype.reset = function () {

    this.hand = [];

};

