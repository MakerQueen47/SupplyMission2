var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	red1boxSprite=createSprite(width/2, height-55, 200,20);
	red1boxSprite.shapeColor=color("red");

	red2boxSprite=createSprite(width/2-100, height-95, 20,100);
	red2boxSprite.shapeColor=color("red");

	red3boxSprite=createSprite(width/2+100, height-95, 20,100);
	red3boxSprite.shapeColor=color("red");


	engine = Engine.create();
	world = engine.world;

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 red1box = Bodies.rectangle(width/2, height-55, 200,20, {isStatic:true} );
	 World.add(world, red1box);
	 
	 red2box = Bodies.rectangle(width/2-100, height-95, 20,100, {isStatic:true} );
	 World.add(world, red2box);
	 
	 red3box = Bodies.rectangle(width/2+100, height-95, 20,100, {isStatic:true} );
 	World.add(world, red3box);

	 packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	 World.add(world, packageBody);

	Engine.run(engine);

	console.log(packageBody);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  keyPressed();

  drawSprites();
 
}

function keyPressed() {
 if (keyDown("down")) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Body.setStatic (packageBody, false);

	
  }
}



