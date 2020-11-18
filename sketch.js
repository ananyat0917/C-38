var database, gameState, playerCount, form, game, player, allPlayers, car1, car2, car3, car4, carArray;

function setup(){
  database = firebase.database();
  createCanvas(displayWidth-300,displayHeight-300);

  gameState = 0;
  game = new Game();
  game.getGameState();
  game.start();
}

function draw(){
  background("white");
  if(playerCount === 4){
    game.updateGameState(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}