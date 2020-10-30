var rec1 , rec2, edges;

function setup() {
  createCanvas(800,400);
  rec1 =createSprite(400, 200, 50, 50);
  rec2 =createSprite(600,200,50,50)
  rec1.shapeColor="green"
  rec2.shapeColor="green"
  rec1.debug= true
  rec2.debug= true
  rec1.velocityX=2
  rec1.velocityY=3
  edges= createEdgeSprites()
}

function draw() {
  background(255,255,255);
  rec1.bounceOff(edges)  
rec2.y= mouseY
rec2.x=mouseX
if(rec2.x-rec1.x<rec2.width/2+rec1.width/2&&
  rec1.x-rec2.x<rec1.width/2+rec2.width/2&&
  rec2.y-rec1.y<rec2.height/2+rec1.height/2&&
  rec1.y-rec2.y<rec1.height/2+rec2.height/2){
    rec1.shapeColor= "red"
    rec2.shapeColor= "red"
    rec1.velocityX=-1*rec1.velocityX
    rec1.velocityY=-1*rec1.velocityY
    console.log(rec1.velocityX)
  }else{
    rec1.shapeColor= "green"
    rec2.shapeColor= "green"
  }


  drawSprites();
}