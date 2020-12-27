
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground;
// array declaration
var particles = [];
var plinkos = [];
var divisions = [];

// creating division height
var divisionHeight = 300;

function setup() {
  createCanvas(680,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(800 , 800 , 2000 , 30);
  //loops

  for(var k =0;k<=width;k=k+80){
    divisions.push(new Division(k,700,10,170));
 }
  for(var j = 40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75));
  }

  for(var j = 15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175));
  }
  for(var j = 40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,275));
  }
  for(var j = 15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,375));
  }

  console.log(frameCount);

  Engine.run(engine);
}

function draw() {
  background(232,164,164);  
  ground.display();
if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10,width/2+10),5,5));

}
for(var p=0;p<plinkos.length;p++){
  plinkos[p].display();

}
for(var q=0;q<divisions.length;q++){
  divisions[q].display();

}
for(var r=0;r<particles.length;r++){
  particles[r].display();

}

  drawSprites();
}