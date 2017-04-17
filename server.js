'use strict';


var uuid = require('node-uuid');
var Shuffle = require('shuffle');
var srand = require('srand'); //https://github.com/isaacs/node-srand (npm install srand)
srand.seed(Date.now());
var gameTable = require("./table.js");
var holdem = require("./holdem.js");
var player = require("./player.js");

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

    var cardDeck = Shuffle.shuffle({random: function(){ return srand.random(); }});
    var t1 = new gameTable(uuid.v4(), 'Holdem #1', cardDeck);
    var holdemGame = new holdem(t1);
    var playerCount = randomIntFromInterval(2,(namePool.length-1)-0);

    t1.cardGame = holdemGame;
    holdemGame.ID = uuid.v4();

    var playerSet=[];
    for (var index=0; index<playerCount; index++) {
        var nameIndex = randomIntFromInterval(0,namePool.length-1);
        playerSet.push(new player(namePool[nameIndex]));
        namePool.splice(nameIndex,1);
    }
    t1.players = playerSet;
    t1.cardGame.startGame();
}

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

init();

