var movingRect,fixedRect;//global declaration

function setup(){
	createCanvas(600,600);
	//create the objects
	movingRect=createSprite(10,10,20,100);
	fixedRect=createSprite(300,300,40,200);
	movingRect.debug=true;
	fixedRect.debug=true;
}
function draw(){
	background("white");
	fill("red");
	text("Moving rectangle position:   ("+movingRect.x+","+movingRect.y+")",20,120);
  	text("Fixed rectangle position:     ("+fixedRect.x+","+fixedRect.y+")",20,160);
  	fill("black")
  	text("Gap betweem them....",20,200)
  	text("Horizontal:"+(movingRect.x-fixedRect.x),20,240);
  	text("Vertical:"+(movingRect.y-fixedRect.y),20,280);
  	text(fixedRect.width,fixedRect.x,(fixedRect.y-fixedRect.height/2-5));
  	text(fixedRect.height,(fixedRect.x-fixedRect.width/2-25),fixedRect.y);

  	text(movingRect.width,movingRect.x,(movingRect.y-movingRect.height/2-5));
  	text(movingRect.height,(movingRect.x-movingRect.width/2-25),movingRect.y);
	movingRect.x=World.mouseX;
	movingRect.y=World.mouseY;
	if (fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
		movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
		fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 &&
		movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
   ) {
      movingRect.shapeColor="red";
  	  fixedRect.shapeColor="red";
	}
	else {
	  movingRect.shapeColor="green";
  	  fixedRect.shapeColor="green";  
	}
	drawSprites();
}