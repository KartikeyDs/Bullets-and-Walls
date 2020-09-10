var bullet,wall,weight,speed,thickness;

function setup() {
var canvas = createCanvas(1400,400)
speed = random(223,321);
weight = random(30,52);
thickness = random(22,83)
bullet = createSprite(50,200,40,25);
bullet.shapeColor = color(255,255,255)

//bullet.debug = "true";
wall = createSprite(1300,200,thickness,height/2);
wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0,0,0); 

   bullet.velocityX = speed;
  
  if (collide(bullet,wall)) {

    bullet.velocityX = 0;

    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
    wall.shapeColor = color(255,0,0)
  }

  if (damage<10){
    wall.shapeColor = color(0,255,0);
  }

    }

drawSprites();
  }

  function collide(wall,bullet) {
    if(bullet.x-wall.x<bullet.width+wall.width) {
      bullet.velocityX = 0;
      return true
  }
  else {
  
    return false
  }
    }
  