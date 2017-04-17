/**
 * Created by mattyglover on 16/04/2017.
 */

'use strict';

var Hand = require('pokersolver').Hand;

var timeoutPeriod = 1000;



module.exports = Holdem;

function Holdem(gameTable) {

    this.STATUS_RESET = "reset";
    this.STATUS_HOLE = "hold";
    this.STATUS_FLOP = "flop";
    this.STATUS_TURN = "turn";
    this.STATUS_RIVER = "river";

    this.ID = 0;
    this.gameTable = null;
    this.version = "0.0.1";
    this.dealer = 1;
    this.status = this.STATUS_RESET;

    if (gameTable)
        this.gameTable = gameTable;

};


Holdem.prototype.startGame = function() {

    //reset the table
    this.gameTable.reset();

    //reset the card deck
    var deck = this.gameTable.cardDeck;
    deck.reset();
    deck.shuffle();


    console.log("\n\n\n");
    console.log("----------------------------------------------------------------");
    console.log(" Real Holdem: v"+ this.version);
    console.log(" Table ID: "+ this.gameTable.ID);
    console.log(" Game ID: "+ this.ID);
    console.log("\n\n");
    console.log(" Starting Game");
    console.log("----------------------------------------------------------------");
    console.log("");

    // Deal two cards to each player
    var cardCount=0;
    if (this.gameTable.players.length > 0) {

        for (cardCount=1; cardCount<=2; cardCount++) {

            this.gameTable.players.forEach( function(item, index) {

                var card = deck.draw();
                item.hand.push(card);
                console.log(item.getName() + " has been dealt " + card.toString());

            }, deck);

        }

    };

    this.status = this.STATUS_HOLE;
    this.solveHands(this, true);

    this.checkGameState(this);

    // setTimeout(this.checkGameState, timeoutPeriod, this);

}

Holdem.prototype.checkGameState = function (gameObject) {

    if (gameObject.gameTable.hand.length == 0) {
        gameObject.flop();
        gameObject.status = this.STATUS_FLOP;
        // gameObject.checkGameState(gameObject);
        setTimeout(gameObject.checkGameState, timeoutPeriod, gameObject);
    }
    else if (gameObject.gameTable.hand.length == 3) {
        gameObject.playCard(gameObject);
        // gameObject.checkGameState(gameObject);
        setTimeout(gameObject.checkGameState, timeoutPeriod, gameObject);
    }
    else if (gameObject.gameTable.hand.length == 4) {
        gameObject.playCard(gameObject);
        // gameObject.checkGameState(gameObject);
        setTimeout(gameObject.checkGameState, timeoutPeriod, gameObject);
    }
    else if (gameObject.gameTable.hand.length > 4) {
        gameObject.finishGame(gameObject);
        // setTimeout(gameObject.finishGame, timeoutPeriod, gameObject);
    }

};


Holdem.prototype.flop = function() {

    for (var cardCount=1; cardCount<=3; cardCount++) {
        var card = this.gameTable.cardDeck.draw();
        this.gameTable.hand.push(card);
        console.log(this.gameTable.getName() + " flop card " + cardCount + " is " + card.toString());
    }

};


Holdem.prototype.playCard = function(gameObject) {

    var card = gameObject.gameTable.cardDeck.draw();
    gameObject.gameTable.hand.push(card);
    if (gameObject.gameTable.hand.length == 4) {
        gameObject.status == gameObject.STATUS_TURN;
    }
    else if (gameObject.gameTable.hand.length >= 5) {
        gameObject.status == gameObject.STATUS_RIVER;
    }
    console.log(gameObject.gameTable.getName() + " card " + gameObject.gameTable.hand.length + " is " + card.toString());

    gameObject.solveHands(gameObject, true);
};


Holdem.prototype.finishGame = function(gameObject) {


    if (gameObject.gameTable.hand.length > 4) {

        console.log("\n\n\n");
        console.log("----------------------------------------------------------------");
        console.log(" Real Holdem: v"+ this.version);
        console.log(" Table ID: "+ this.gameTable.ID);
        console.log(" Game ID: "+ this.ID);
        console.log("\n\n");
        console.log(" Finishing Game");
        console.log("----------------------------------------------------------------");
        console.log("");
    };


    var playerHands = this.solveHands(gameObject, true);

    // console.log("Player hands:");
    // console.log(playerHands);

    var winnerHands = Hand.winners(playerHands);
    console.log("There are " + winnerHands.length + " winner(s)");
    var winningHand = winnerHands[0];
    console.log("Winning hand is " + winningHand.descr);
    // console.log(winner);

    gameObject.getWinningPlayers(gameObject, winnerHands);

}

Holdem.prototype.getCardCode = function(card) {
    if (card.sort < 10) {
        return card.sort + card.suit.toLowerCase().charAt(0);
    }
    else if (card.sort == 10) {
        return "T" + card.suit.toLowerCase().charAt(0);
    }
    else {
        return card.description.toUpperCase().charAt(0) + card.suit.toLowerCase().charAt(0);
    }
}


Holdem.prototype.solveHands = function (gameObject, showResults) {

    console.log("\n\nReviewing Player Hands:\n")
    var tableHand = [];
    gameObject.gameTable.hand.forEach( function (card, index) {
        tableHand.push(gameObject.getCardCode(card));
    }, gameObject, tableHand);

    var playerHands = [];
    gameObject.gameTable.players.forEach( function(item, index) {

        var compositeHand = tableHand.slice();
        item.hand.forEach( function (card, index) {
            compositeHand.push(gameObject.getCardCode(card));
        }, gameObject, compositeHand);

        console.log("Player " + item.getName() + "'s cards: " + compositeHand);
        // console.log(compositeHand);

        var hand = Hand.solve(compositeHand);
        item.solvedHand = hand;
        console.log("Player " + item.getName() + "'s hand is " + hand.descr + "\n");
        playerHands.push(hand);
    }, gameObject, tableHand);

    return playerHands;

}

Holdem.prototype.getWinningPlayers = function(gameObject, winnerHands) {

    // find the winning players

    var winningPlayers=[];
    winnerHands.forEach( function (winningHand, index) {

        gameObject.gameTable.players.forEach( function (player, index) {
            if (player.solvedHand === winningHand) {
                winningPlayers.push(player);
                console.log("Player " + player.getName() + " wins with " + winningHand.descr);
            }
        }, winningHand);

    });
    return winningPlayers;

}