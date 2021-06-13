var starImg,bgImg;
var star, starBody;
var fairy;
var js;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    fairy1=loadImage("images/fairy.png");
	fairy2=loadAnimation("images/fairyImage1.png","images/fairyImage2.png")
	js=loadSound("sound/JoyMusic.mp3");
	//load animation for fairy here
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
    js.play();
	//create fairy sprite and add animation for fairy
fairy3=createSprite(130,520);
fairy3.addAnimation("fairy2",fairy2);
fairy3.scale=0.5

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);
 
  if(star.y>470 &&starBody.position.y>470){
	Matter.Body.setStatic(starBody,true); 
}
  //write code to stop star in the hand of fairy

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	if (keyCode === RIGHT_ARROW) {
		fairy3.x+=10;
	}
	
	if (keyCode === LEFT_ARROW) {
		fairy3.x-=10;
	}
	//writw code to move fairy left and right
	
}
