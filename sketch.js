var car,wall;
var speed,weight;
function setup() {
  createCanvas(800*2,400);
  speed = random(55,90)
  weight = random(400,1100);
  wall = createSprite(1100,200,60,height/2);
  car = createSprite(50,200,50,50);
 
  car.velocityX = speed;
  deformation = 0.5*speed*speed*weight/22500;
}

function draw() {
  background(0);  
  if(car.isTouching(wall)){
    car.velocityX = 0;
    if(deformation>180){
      car.shapeColor = "red"
    }else if(deformation<100){
      car.shapeColor = "green"
    }else if(deformation>100&&deformation<180){
      car.shapeColor = "yellow"
    }
  }
  drawSprites();
}