var car, wall,thickness;
var bullet,speed, weight;
var deformation;
var damage;


function setup() {
  createCanvas(800,400);
 car = createSprite(50, 200, 50, 50);
 wall = createSprite(1200,200,thickness,height/2);

  speed = random(23,55);
  weight = random(32,52);
 thickness= random(22,83);
}

function draw() {
  background("white");  
 car.velocityX =speed;


 if(wall.x-car.x < (car.width+wall.width)/2)
 {
   car.velocityX=0;
   var deformation=0.5 * weight * speed * speed/22500;
   if(deformation>180)
   {
     car.shapeColor=color("red");
   }

   if(deformation<180 && deformation>100)
   {
     car.shapeColor=color("green");
   }

   if(deformation<100)
   {
     car.shapeColor=color("blue");
   }
 }
 
 function hasCollided(bullet, wall)
 {

bulletRightEdge=bullet.x +bullet.width;
wallLeftEdge=wall.x;
if (bulletRightEdge>=wallLeftEdge)
{
  return true
}
  return false;
 }
 
 if(hasCollided(bullet,wall))
 {
   bullet.velocityX=0;
   var damage=0.5 *weight *speed*speed/(thickness*thickness*thickness);


   if(damage>10)
   {
     wall.shapeColor=color(255,0,0);

   }
   if(damage<10)
   {
     wall.shapeColor=color(0,255,0);
   }
 }
 
 
 
 


  drawSprites();
}