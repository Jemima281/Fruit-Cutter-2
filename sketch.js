const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope, fruitImg;
var fruit_con;
var rabbit 
var rabbitImg
var background, backgroundImg
var buttonImg, button
function preload(){
  fruitImg = loadImage("melon.png")
  rabbitImg = loadImage("Rabbit-01.png")
  backgroundImg = loadImage("background.png")
  buttonImg = loadImage("button.png")
}

function setup() 
{
  createCanvas(500,700);

  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

 

  rabbit = createSprite(250,600,100,100)
  rabbit.addImage("Rabbit", rabbitImg)
  rabbit.scale = 0.2
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)

  button =createImg('button.png' )
  button.position(220,30);
  button.size(50,50)
  button.mouseClicked(drop)
  
}

function draw() 
{
  background(51);
  imageMode(CENTER)
  image(backgroundImg,width/2,height/2, 500,700)
  rope.show();
  image(fruitImg,fruit.position.x,fruit.position.y,75,75);
  Engine.update(engine);
  ground.show();
 drawSprites()
   
}

function drop(){
  
  rope.break()
  fruit_con.detach()
  fruit_con = null
}