var dog, happyDog, database, foodS, foodStock;
var dogha;
var database;
var button1, button2;
var fedTime, lastFed;
var foodObj;

function preload()
{
  dogha = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup(){
  createCanvas(500, 500);
  dog = createSprite(250,350,20,20);
  dog.addImage(dogha);
  dog.scale = 0.3;

  foodObj = new Food(20,20,20,20);
  feed=createButton("Feed the dog");
  feed. position(700,95);
  feed . mousePressed ( feedDog) ;

  addFood=createButton("Add Food") ;
  addFood . position(800, 95);
  addFood . mousePressed(addFoods) ;

  database = firebase.database();
  foodStock = database.ref("Food");
  foodStock.on("value", function(data){
    foodS = data.val();
  })
  fedTime=database. ref("FeedTime");
  fedTime.on("value", function(data){
  lastFed=data. val()})
  fill(255, 255, 254);
  textSize(15);
  
  if(lastFed>=12){
    text("Last Feed : "+ lastFedx12 + " PM", 350,30);
  }
  else if(lastFed==0){
    text("Last Feed : 12 AM" , 350, 30);
  }else{
    text("Last Feed : "+ lastFed + " AM", 350, 30);
  }
}

function draw() {  
  background(46, 139, 87);
  foodObj.display();
  drawSprites();
  textSize(20);
  fill("black");
  text("Food left : " + foodS,170,200);
}

function writeStock(x){
  x = x - 1;
  console.log(x);database.ref(' / ').update({
    Food : x
  })
  if(x<=0){
    x = 0;
  }
  else{
  }
}

function addFood(){
  foodS++;
  database. ref('/ ').update({
  Food : foods
  })
}

function feedDog(){
  dog.addImage (happyDog);
  foodobj.updateFoodStock(foodobj.getFoodStock()-1);
  database.ref(' / ').update({
  Food : foodobj.getFoodStock(),
  FeedTime : hour()
  })
}