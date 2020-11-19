
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var dustbinwall1;
var dustbinwall2;
var dustbinwall3;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

  var options = {
    'isStatic': true,
    'density':1000,
    'friction':100
  }
	
	//Create the Bodies Here.
 ball = new Ball(200,200,30);
ground = new Ground(600,650,1200,20);
dustbinwall1 = new Bin(900,600,10,100,options)
dustbinwall2 = new Bin(750,600,10,100,options)
dustbinwall3 = new Bin(825,600,125,10,options)
	Engine.run(engine);
  
}


function draw() {
	background("grey")
  rectMode(CENTER);
  ground.display();
  ball.display();
  dustbinwall1.display();
  dustbinwall2.display();
  dustbinwall3.display(); 
  
}

function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
    Matter.Body.applyForce(ball.body,ball.body.position,{x:50,y:-50})

    }
}

