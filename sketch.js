const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
	ground = new Ground(400,680,800,20);
	block1 =  new block(620,520,30,30);
	block2 =  new block(650,500,30,30);
    block3 =  new block(600,550,30,30);
    block4 =  new block(600,550,30,30);
    block5 = new block(600,550,30,30);
    block6 = new block(600,550,30,30);
    block7 = new block(600,550,30,30);
    block8 = new block(600,550,30,30);
    block9 = new block(600,550,30,30);
    block10 = new block(600,550,30,30);
    block11 = new block(600,550,30,30);
    block12 = new block(600,550,30,30);
    block13 = new block(600,550,30,30);
    block14 = new block(600,550,30,30);
    block15 = new block(600,550,30,30);
    block16 = new block(600,550,30,30);
    polygon = new Polygon(100,600,50,50)
	sling = new SlingShot(polygon.body,{x:100,y:400})
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(255);
  
  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  polygon.display();
  sling.display();

  drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}
