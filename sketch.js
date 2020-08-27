
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,ground1,bucket1,bucket2,bucket3, dustbinImage;

function preload(){

	dustbinImage = loadImage('dustbingreen.png');
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(100,600);
	ground1 = new Ground(790,685,1600,30);
	bucket1 = new Bucket(640,650,250,20);
	bucket2 = new Bucket(775,500,20,270);
	bucket3 = new Bucket(505,500,20,270);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  //displaying the bodies
  ground1.display();
  image(dustbinImage, 500, 370, 280, 270);
  bucket1.display();
  bucket2.display();
  bucket3.display();
  paper1.display();

  Body.setStatic(bucket1.body, true);
  Body.setStatic(bucket2.body, true);
  Body.setStatic(bucket3.body, true);

  drawSprites();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:340,y:-340});

	}

}

