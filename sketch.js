const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var dog;
var database;
var food;
var foodStock;
var foodx;
var position;
var pos;
var feedTime, current_time;

var feed, add;

var bottle;
var pox = 0;

var feed_time_database;
var time;

var gameState, gameState_database;
// function preload()
// {

// }

function setup() {

  createCanvas(1000, 700);

  engine = Engine.create();
  world = engine.world;


  // feedTime = hour();
  // database = firebase.database();
  database = firebase.database();

  bottle = new Food();

  dog = new Dog(width / 2, height / 2);
  Engine.run(engine);


  foodStock = database.ref("food");
  foodStock.on("value", readData);

  gameState_database = database.ref('gameState');
  gameState_database.on("value", function (data) {

    gameState = data.val();

  })

  feed_time_database = database.ref("feedTime/feedTime");
  feed_time_database.on("value", readTime);

  feed = createButton("Feed the dog");
  feed.position(500, 20);
  feed.mousePressed((food) => {

    if (foodx <= 0) {
      foodx = 0;

    } else {
      foodx = foodx - 1;
    }

    database.ref("/").update({ food: foodx });
    updateTime();

  });


  add = createButton("Add food");
  add.position(430, 20);
  add.mousePressed((food) => {

    foodx++;

    database.ref("/").update({
      food: foodx
    })

  });




}

function draw() {
  // resizeCanvas(windowWidth, windowHeight);

  rectMode(CENTER);
  background(46, 148, 87);

  dog.keyPressed();
  current_time = hour();

  // console.log(gameState);

  dog.display();

  fill("yellow")
  noStroke();
  textSize(20);
  text("Food Left " + food, 600, 37);
  // text("last fed " + time, 200, 37);



  bottle.display();
  drawSprites();

  if (gameState != "hungry") {
    feed.hide();
    add.hide();
  } else {
    feed.show();
    add.show();
  }

  // console.log(current_time);


  if (current_time === time + 1) {

    dog.garden();
    updateState("garden");

  } else if (current_time === time + 2) {

    dog.bedroom();
    updateState("bedroom");

  } else if (current_time > time + 2 && current_time <= time + 4) {

    dog.washroom();
    updateState("washroom");

  } else {
    updateState("hungry");

  }



  // console.log(current_time);
  // console.log(time);
  // console.log(hour());


  fill("yellow")
  noStroke();
  textSize(20);

  if (time >= 12) {
    text("Last Feed : " + time % 12 + " PM", 200, 37);
  }
  else if (time == 0) {
    text("Last Feed : 12 AM", 200, 37);
  }
  else {
    text("Last Feed : " + time + " AM", 200, 37);
  }
}




function move(xoff, yoff) {
  dog.body.position.x = dog.body.position.x + xoff;
  dog.body.position.y = dog.body.position.y + yoff;

}



function readData(data) {
  food = data.val();
  foodx = food;

}

function readTime(data) {
  time = data.val();

}

function updateTime() {
  database.ref("feedTime").update({ feedTime: hour() });
}

function updateState(gameState) {

  database.ref('/').update({
    gameState: gameState
  })

}
