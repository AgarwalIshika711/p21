var bullet,wall;
var speed,weight;
var thickness
function setup(){

  creeateCanvas(1600,400);
  
  speed=random(223,321)

  weight=random(30,52);

  thickness = random(22,83);


  bullet = createSprite(50,200,80,10);
  bullet.shapeColor = "white";
  
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80);

}
function draw(){
    
  background(255,255,255); 
  bullet.velocityX = speed;
    
  if(wall.x-bullet.x<bullet.width/2+wall.width/2){
    bullet.velocityX = 0;
    var damage =( 0.5 * weight * speed * speed)/(thickness^3);
    
    if(damage<10){
      wall.shapeColor = "green";
    }
    if(damage>10){
      wall.shapeColor = "red";
    }
 
  }
  drawSprites();
}
