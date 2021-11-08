var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //crear fondo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  //crear arco para disparar las flechas
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
}

function draw() {
 background(0);
  //mover el fondo
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //mover el arco
  bow.y = World.mouseY
  
   //liberar la flecha al presionar la barra espaciadora
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //cambiar el valor de los globos aleatorios a 4 
  var select_balloon = Math.round(random(50,350),40,20,20);
  
  if (World.frameCount % 100 == 0) {
   switch(select_balloon){
    case 1:redBalloon//llama a redballoon (globo rojo)
    break;
    case 2:blueBalloon//llama a blueballoon (globo azul)
    break;
    case 3:greenBalloon//llama a greenballoon (globo verde)
    break;
    case 4:pinkBalloon//llama a pinkballoon (globo rosa)
break;

  }}
  
  drawSprites();
}                      


//crear flechas para el arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;

}

function blueBalloon() {
  var blue = createSprite(0,math.round(random(25, 350)),10,10); 
  blue.addImage(blue_balloonImage)
  blue.velocityX = 2;
  blue.scale = 0.1;
  blue.lifetime = 150;
}
function greenBalloon() {
  var green = createSprite(0,math.round(random(25, 350)),10,10); 
  green.addImage(green_balloonImage)
  green.velocityX = 4;
  green.scale = 0.1;
  green.lifetime = 150;
  
}
function pinkBalloon() {
  var pink = createSprite(0,math.round(random(25, 350)),10,10); 
  pink.addImage(pink_balloonImage)
  pink.velocityX = 1;
  pink.scale = 0.1;
  pink.lifetime = 150;
}