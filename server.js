'use strict';


var uuid = require('node-uuid');
var Shuffle = require('shuffle');
var srand = require('srand'); //https://github.com/isaacs/node-srand (npm install srand)
srand.seed(Date.now());
var gameTableClass = require("./table.js");
var holdemClass = require("./holdem.js");
var playerClass = require("./player.js");

var namePool = [
    "Phyllis",
    "Maryann",
    "Beth",
    "Maximo",
    "Rochel",
    "Forrest",
    "Eleanora",
    "Yuk",
    "Crista",
    "Deanne",
    "Geoffrey",
    "Rosco",
    "Sheila",
    "Ross",
    "Whitley",
    "Cary",
    "Gloria",
    "Karon",
    "Donetta",
    "Mae",
];

function init() {

    // the game is made up of a table, which needs an instance of a game to be assigned to it, players,
    // and as many decks of cards required by the game being assigned to it
    var cardDeck = Shuffle.shuffle({random: function(){ return srand.random(); }});
    var gameTable = new gameTableClass(uuid.v4(), 'Holdem #1', cardDeck); // a table needs a unique ID (for session purposes), a name and a deck of cards
    var holdemGame = new holdemClass(gameTable); // create and instance of a game and give it a reference to the table to which it is being assigned
    var playerCount = randomIntFromInterval(2,(namePool.length-1)-0); // simulate 2 to x players

    gameTable.cardGame = holdemGame;  // Texas Holdem is the main game - but the architecture should allow for other game types to be assigned to a table
    holdemGame.ID = uuid.v4(); // Assign a unique identified to this game, which will essentially be for auditing purposes

    var playerSet=[];
    for (var index=0; index<playerCount; index++) {
        var nameIndex = randomIntFromInterval(0,namePool.length-1);
        playerSet.push(new playerClass(namePool[nameIndex]));
        namePool.splice(nameIndex,1);
    }
    gameTable.players = playerSet;
    gameTable.cardGame.startGame(); // the GAME instance controls the game activity at a table.
}

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

init();

