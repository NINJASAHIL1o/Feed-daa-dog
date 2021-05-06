//Create variables here
var dog , happyDog , database , foodS , foodStock;
var happyDogI , sadDogI;

function preload()
{
	
  sadDogI = loadImage("images/dogImg.png") 
  happyDogI = loadImage("images/dogImg1.png") 
  
}

function setup() {
	createCanvas(500 , 500);

  database = firebase.database();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  dog=createSprite(250,250);
  dog.addImage(sadDogI);
  dog.scale=0.5;
  
}


function draw() {  
  background(36,139,87);

  if(keyDown(UP_ARROW)){

    writeStock(foodS);
    dog.addImage(happyDogI)

  }

  drawSprites();
  //add styles here

  fill("white")
  textSize
  text("Food Remaining:"+foodS,100,30);

}

function readStock(data){
  
  foodS=data.val();

}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({

    Food:x

  })

}


























