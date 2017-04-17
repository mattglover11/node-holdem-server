# node-holdem-server

A Texas Holdem game server that currently runs as a simulation. In the future this may evolve to either focus on multiplayer RTC, similulation only or as the basis for machine learning experimentation.

When running the server, a game will be created with between 2 and 20 players who are each assigned a name randomly from a name pool. The simulation currenly deals the "hole cards", the flop, the turn and finally the river card. Once all cards a dealt, each hand is evaluated and compared and then the winner(s) is announced.

The server currently uses a "timer" function to progress game play. Depending on the direction the project takes, this might be driven by user input, by custom coded "player bots" communicating directly with the server, or by internal game player functions only.

## Motivation

This project was developed with the sole intention for me to learn Node JS while I took a 12 hour sea-voyage with limited internet connectivity!


## Installation

Clone the repo:
```
git clone git@github.com:mattyglover/node-holdem-server.git
cd node-holdem-server
```

Run the simulation:
```
node server.js
```

Example simulation output:
```
node server.js 




----------------------------------------------------------------
 Real Holdem: v0.0.1
 Table ID: f49aa1c3-efb0-41c1-aa5b-c80728946677
 Game ID: 2a6fe7d8-8007-4737-9344-088ea8be43ff



 Starting Game
----------------------------------------------------------------

Eleanora has been dealt Two of Spades
Maximo has been dealt Nine of Spades
Rochel has been dealt Five of Clubs
Rosco has been dealt Seven of Diamonds
Karon has been dealt King of Clubs
Cary has been dealt Three of Diamonds
Yuk has been dealt Four of Spades
Ross has been dealt Nine of Diamonds
Crista has been dealt Jack of Diamonds
Mae has been dealt Ace of Diamonds
Geoffrey has been dealt Three of Hearts
Beth has been dealt Six of Spades
Eleanora has been dealt Ten of Hearts
Maximo has been dealt Eight of Diamonds
Rochel has been dealt Nine of Clubs
Rosco has been dealt Jack of Clubs
Karon has been dealt Three of Clubs
Cary has been dealt Queen of Clubs
Yuk has been dealt Eight of Spades
Ross has been dealt Four of Clubs
Crista has been dealt Six of Clubs
Mae has been dealt Two of Hearts
Geoffrey has been dealt Jack of Hearts
Beth has been dealt Seven of Spades


Reviewing Player Hands:

Player Eleanora's cards: 2s,Th
Player Eleanora's hand is 10 High

Player Maximo's cards: 9s,8d
Player Maximo's hand is 9 High

Player Rochel's cards: 5c,9c
Player Rochel's hand is 9 High

Player Rosco's cards: 7d,Jc
Player Rosco's hand is J High

Player Karon's cards: Kc,3c
Player Karon's hand is K High

Player Cary's cards: 3d,Qc
Player Cary's hand is Q High

Player Yuk's cards: 4s,8s
Player Yuk's hand is 8 High

Player Ross's cards: 9d,4c
Player Ross's hand is 9 High

Player Crista's cards: Jd,6c
Player Crista's hand is J High

Player Mae's cards: Ad,2h
Player Mae's hand is A High

Player Geoffrey's cards: 3h,Jh
Player Geoffrey's hand is J High

Player Beth's cards: 6s,7s
Player Beth's hand is 7 High

Holdem #1 flop card 1 is Jack of Spades
Holdem #1 flop card 2 is Six of Diamonds
Holdem #1 flop card 3 is Ace of Spades
Holdem #1 card 4 is Two of Diamonds


Reviewing Player Hands:

Player Eleanora's cards: Js,6d,As,2d,2s,Th
Player Eleanora's hand is Pair, 2's

Player Maximo's cards: Js,6d,As,2d,9s,8d
Player Maximo's hand is A High

Player Rochel's cards: Js,6d,As,2d,5c,9c
Player Rochel's hand is A High

Player Rosco's cards: Js,6d,As,2d,7d,Jc
Player Rosco's hand is Pair, J's

Player Karon's cards: Js,6d,As,2d,Kc,3c
Player Karon's hand is A High

Player Cary's cards: Js,6d,As,2d,3d,Qc
Player Cary's hand is A High

Player Yuk's cards: Js,6d,As,2d,4s,8s
Player Yuk's hand is A High

Player Ross's cards: Js,6d,As,2d,9d,4c
Player Ross's hand is A High

Player Crista's cards: Js,6d,As,2d,Jd,6c
Player Crista's hand is Two Pair, J's & 6's

Player Mae's cards: Js,6d,As,2d,Ad,2h
Player Mae's hand is Two Pair, A's & 2's

Player Geoffrey's cards: Js,6d,As,2d,3h,Jh
Player Geoffrey's hand is Pair, J's

Player Beth's cards: Js,6d,As,2d,6s,7s
Player Beth's hand is Pair, 6's

Holdem #1 card 5 is King of Hearts


Reviewing Player Hands:

Player Eleanora's cards: Js,6d,As,2d,Kh,2s,Th
Player Eleanora's hand is Pair, 2's

Player Maximo's cards: Js,6d,As,2d,Kh,9s,8d
Player Maximo's hand is A High

Player Rochel's cards: Js,6d,As,2d,Kh,5c,9c
Player Rochel's hand is A High

Player Rosco's cards: Js,6d,As,2d,Kh,7d,Jc
Player Rosco's hand is Pair, J's

Player Karon's cards: Js,6d,As,2d,Kh,Kc,3c
Player Karon's hand is Pair, K's

Player Cary's cards: Js,6d,As,2d,Kh,3d,Qc
Player Cary's hand is A High

Player Yuk's cards: Js,6d,As,2d,Kh,4s,8s
Player Yuk's hand is A High

Player Ross's cards: Js,6d,As,2d,Kh,9d,4c
Player Ross's hand is A High

Player Crista's cards: Js,6d,As,2d,Kh,Jd,6c
Player Crista's hand is Two Pair, J's & 6's

Player Mae's cards: Js,6d,As,2d,Kh,Ad,2h
Player Mae's hand is Two Pair, A's & 2's

Player Geoffrey's cards: Js,6d,As,2d,Kh,3h,Jh
Player Geoffrey's hand is Pair, J's

Player Beth's cards: Js,6d,As,2d,Kh,6s,7s
Player Beth's hand is Pair, 6's





----------------------------------------------------------------
 Real Holdem: v0.0.1
 Table ID: f49aa1c3-efb0-41c1-aa5b-c80728946677
 Game ID: 2a6fe7d8-8007-4737-9344-088ea8be43ff



 Finishing Game
----------------------------------------------------------------



Reviewing Player Hands:

Player Eleanora's cards: Js,6d,As,2d,Kh,2s,Th
Player Eleanora's hand is Pair, 2's

Player Maximo's cards: Js,6d,As,2d,Kh,9s,8d
Player Maximo's hand is A High

Player Rochel's cards: Js,6d,As,2d,Kh,5c,9c
Player Rochel's hand is A High

Player Rosco's cards: Js,6d,As,2d,Kh,7d,Jc
Player Rosco's hand is Pair, J's

Player Karon's cards: Js,6d,As,2d,Kh,Kc,3c
Player Karon's hand is Pair, K's

Player Cary's cards: Js,6d,As,2d,Kh,3d,Qc
Player Cary's hand is A High

Player Yuk's cards: Js,6d,As,2d,Kh,4s,8s
Player Yuk's hand is A High

Player Ross's cards: Js,6d,As,2d,Kh,9d,4c
Player Ross's hand is A High

Player Crista's cards: Js,6d,As,2d,Kh,Jd,6c
Player Crista's hand is Two Pair, J's & 6's

Player Mae's cards: Js,6d,As,2d,Kh,Ad,2h
Player Mae's hand is Two Pair, A's & 2's

Player Geoffrey's cards: Js,6d,As,2d,Kh,3h,Jh
Player Geoffrey's hand is Pair, J's

Player Beth's cards: Js,6d,As,2d,Kh,6s,7s
Player Beth's hand is Pair, 6's

There are 1 winner(s)
Winning hand is Two Pair, A's & 2's
Player Mae wins with Two Pair, A's & 2's
```


## Contributors

Matt Glover, Spark Eleven. matt@sparkeleven.com.au.


## License

This project is distributed under Apache License 2.0