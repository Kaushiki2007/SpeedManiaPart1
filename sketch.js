var canvas;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var runner1, runner2, runner3;
var winner1, winner2, winner3;
var track, runner1_img, runner2_img, runner3_img;

function preload(){
 track = loadImage("../Images/Racing Track.jpg");
 runner1_img=loadImage("../Images/Running1.jpg");
 runner2_img=loadImage("../Images/Running2.jpg");
 runner3_img=loadImage("../Images/Running3.jpg");
 winner1 = loadImage("Images/Winning1.jpg");
 winner2 = loadImage("Images/Winning2.jpg");
 winner3 = loadImage("Images/Winning3.jpg");

}

function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
 
}

function draw() {
  background(255);
  console.log(gameState);
  if(playerCount === 3){
    game.update(1);
  }
  if(gameState === 1){
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
 
}

