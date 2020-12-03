
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,grd;
var boxes=[];
var ob=[];
var go=true;

function setup() {
 createCanvas(400,400);
 
 engine = Engine.create();
 world = engine.world;
 var st={
   isStatic:true
 }
 
 ground = Bodies.rectangle(200,height-10,400,20,st);
 World.add(world,ground);
 grd=ground.position;

 ob.push(new obst(120,100,200,20,0.2));
 ob.push(new obst(280,200,200,20,-0.2)); 
 ob.push(new obst(120,300,200,20,0.2)); 
 ob.push(new obst(390,200,20,360,0));
 ob.push(new obst(10,200,20,360,0));
 
}

function cre(){
  boxes.push(new Box(50,-10,random(5,15),random(5,15)));
}

function draw() {
  background(50); 
  Engine.update(engine);
  if(frameCount%5===0){
    if(go){
    cre();
   } 
  }
  rectMode(CENTER);
  fill("red");
  rect(grd.x,grd.y,400,20);
  //rect(box1.position.x,box1.position.y,100,20);
  //box1.show();
  for(var i =0; i<boxes.length;i++){
   boxes[i].show();
  }
  for(var j=0; j<ob.length;j++){
    ob[j].show();
   }
  if(boxes.length>200){
    go=false;
  } 
}

