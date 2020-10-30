const Engine = Matter.Engine;//engine is like universe
const World = Matter.World;//world like the Earth inside universe
const Bodies = Matter.Bodies;// bodies are objects on the Earth
var engine1, world1;
var box1, box2, ground;



function setup() {
  createCanvas(800,400);
  engine1 = Engine.create();//create engine1
  world1 = engine1.world;//create world1 inside engine1
  box1 = new Box(200, 300, 50, 50);
  box2 = new Box(240, 100, 50, 100);
  ground = new Ground(200, 400, 400, 20);
}

function draw() {
  background(255,255,255); 
 Engine.update(engine1);//start the engine1
 box1.display();
 box2.display();
 ground.display();
  drawSprites();
}