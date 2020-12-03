
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,grd;
var boxes=[];

function setup() {
 createCanvas(400,400);
 
 engine = Engine.create();
 world = engine.world;
 
 ground = Bodies.rectangle(200,height-10,400,20,{isStatic:true});
 World.add(world,ground);
 
  grd=ground.position;
  Engine.run(engine);
}

function keyPressed(){
  //  console.log("hi");
   boxes.push(new Box(mouseX,mouseY,15,15));
}

function draw() {
  background(50); 
  rectMode(CENTER);
  rect(grd.x,grd.y,400,20);
  for(var i =0; i<boxes.length;i++){
   boxes[i].show();
  }
}

