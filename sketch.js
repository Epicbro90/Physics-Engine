const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var ground,ball;
function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  ground = Bodies.rectangle(200,300,200,20,ground_options);
  World.add(world,ground);
  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
  console.log(ground);
  var ground_options = {
    isStatic:true
  }
  var ball_options = {
    restitution:1.0
  }
}

function draw() {
  background(0,0,0); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}