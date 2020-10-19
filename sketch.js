
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bottom,left,right;
var ground,bin;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bin=new Bin();
	
ground=new Ground(600,790,1200,20);
paper=new Paper(100,780,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  bin.display();
  ground.display();
paper.display();
 
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-20});
	 }
   }


