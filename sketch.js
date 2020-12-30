var bullet , wall , thickness ; 
var speed , weight  ; 


function setup() {
  createCanvas(1600,400);

  thickness = random(22 , 83) ;

  speed = random(133 , 231) ;
  weight = random(30 , 52) ; 


  bullet = createSprite(10, 200, 60, 10);
  bullet.shapeColor = "blue" 


  wall = createSprite(1200 , 200 , thickness , height/2) ;
  wall.shapeColor = "white" ;

}

function draw() {
  background("black");    

  bullet.velocityX = speed ;


  if(hasCollided(bullet,wall)){
   
     bullet.velocityX = 0 ;
   
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness) ;
  
  if(damage > 10){
    wall.shapeColor = "red" ;

    fill("white") ;
    textSize(24) ;
    text("Your Wall Has Been Tested And Certified As" , 200 , 200) ;
    text("Re Construct Your Wall To Be" , 280 , 250) ;

    stroke("green") ;
    fill("green") ;
    textSize(24) ;
    text("Safe" , 601 , 250) ;

    stroke("red") ;
    fill("red") ;
    textSize(24) ;
    text("Damaged" , 676 , 201) ;
    
  }
   
  if(damage < 10){
    wall.shapeColor = "green" ; 

    fill("white") ;
    textSize(24) ;
    text("Your Wall Has Been Tested And Certified As" , 200 , 200) ;
    
    
    stroke("green") ;
    fill("green") ;
    textSize(24) ;
    text("Safe" , 676 , 200) ;
    }
 }
     
 stroke("yellow") ;
 fill("yellow") ;
 textSize(30) ;
 text("BULLETS AND WALLS" , 600 , 50) ;
     
  drawSprites();
}

function hasCollided(lbullet , lwall){
   
  var bulletRightEdge = lbullet.x + lbullet.width ;
  var wallLeftEdge = lwall.x ;

    if(bulletRightEdge >= wallLeftEdge){
    {
      return true
    }
 }
      return false ;

}
