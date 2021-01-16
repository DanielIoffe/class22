const Engine= Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies


var engine, world, object,ground

function setup() {
  createCanvas(400,400);
  engine = Engine.create()
  world= engine.world

  var object_options= {

    restitution : 2
  }

  object= Bodies.circle(200,200,50,object_options)
  World.add(world,object)

  var options = {
    isStatic :true
  }

  ground=Bodies.rectangle(200,390,200,20,options)
  World.add(world,ground)

  console.log(object)

  


}

function draw() {
  background(0);  
  Engine.update(engine);
  ellipseMode(RADIUS)
  ellipse(object.position.x,object.position.y,50,50)

  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20)
 
}