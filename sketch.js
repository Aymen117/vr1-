
var dog, happyDog;
var database;
var foodS, foodStock;
function preload()
{
  dogImg = loadImage("images/d.png");
  happyDogImg = loadImage("images/d1.png");
}

function setup() {
  createCanvas(500,500);
  dog=createSprite(250,250);
  dog.addImage(happyDogImg);
  dog.scale=0.5;
  database = firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock)
}


function draw() {  
  background(46, 139, 87);
  textSize(20);
 text("food"+ foodS,200,50);
  if(keyWentDown(UP_ARROW))
  {
    writeStock(foodS);
    dog.addImage(dogImg);
  }
  if(keyWentUp(UP_ARROW))
  {
    dog.addImage(happyDogImg);
    
  }
  drawSprites();


}
function readStock(data)
{
foodS = data.val();
}
function writeStock(x)
{
  if (x<=0)
  {
x = 0;
  }else{
    x=x-1;
  }
  database.ref('/').update
  ({
    Food:x
  })
}
