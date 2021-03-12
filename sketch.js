const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var myEngine, myWorld;

var bg;
var Ground1;
var Hero1;
var fly1;
var monster1;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12;

function preload() {

bg = loadImage("GamingBackground.png");

}

function setup() {
  createCanvas(1355, 625);
 
  myEngine = Engine.create();
  myWorld = myEngine.world;

 Ground1 = new Ground(0, 550, 1800, 25);
 Hero1 = new Hero(200, 200, 150, 150 );
 fly1 = new Fly(Hero1.body, {x: 300, y: 50});
 monster1 = new Monster(700, 500, 150 ,150);

 block1 = new Block(580, 500, 50, 50);
 block2 = new Block(530, 500, 50, 50);
 block3 = new Block(480, 500, 50, 50);
 block4 = new Block(480, 460, 50, 50);
 block5 = new Block(530, 460, 50, 50);
 block6 = new Block(580, 460, 50, 50);
 block7 = new Block(480, 420, 50, 50);
 block8 = new Block(530, 420, 50, 50);
 block9 = new Block(580, 420, 50, 50);
 block10 = new Block(480, 380, 50, 50);
 block11 = new Block(530, 380, 50, 50);
 block12 = new Block(580, 380, 50, 50);
}

function draw() {
  background(bg);
  Engine.update(myEngine);

 Ground1.show();
 Hero1.display();
 fly1.display();
 monster1.display();

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
 

}

function mouseDragged(){

  Matter.Body.setPosition( Hero1.body, { x: mouseX, y: mouseY});

}
