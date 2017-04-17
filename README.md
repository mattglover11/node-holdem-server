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


## Contributors

Matt Glover, Spark Eleven. matt@sparkeleven.com.au.


## License

This project is distributed under Apache License 2.0