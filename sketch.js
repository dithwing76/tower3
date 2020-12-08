const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var score = 0
function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground1 = new Ground(580,350,210,20);
    ground2 = new Ground(1000, 300, 150, 20);

    box1 = new Box(670,320,30,40);
    box2 = new Box(640,320,30,40);
    box3 = new Box(610,320,30,40);
    box4 = new Box(580,320,30,40);
    box5 = new Box(550,320,30,40);
    box6 = new Box(520,320,30,40);
    box7 = new Box(490,320,30,40);

    box8 = new Box(640,280,30,40);
    box9 = new Box(610,280,30,40);
    box10 = new Box(580,280,30,40);
    box11= new Box(550,280,30,40);
    box12= new Box(520,280,30,40);

    box13 = new Box(610,240,30,40);
    box14 = new Box(580,240,30,40);
    box15= new Box(550,240,30,40);

    box16 = new Box(580,200,30,40);
    

    box8x = new Box(1060,270,30,40);
    box9x = new Box(1030,270,30,40);
    box10x = new Box(1000,270,30,40);
    box11x= new Box(970,270,30,40);
    box12x= new Box(940,270,30,40);

    box13x = new Box(1030,230,30,40);
    box14x = new Box(1000,230,30,40);
    box15x = new Box(970,230,30,40);

    box16x = new Box(1000,190,30,40);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:250});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    box13.display();
    box14.display();
    box15.display();

    box16.display();


    box8x.display();
    box9x.display();
    box10x.display();
    box11x.display();
    box12x.display();

    box13x.display();
    box14x.display();
    box15x.display();

    box16x.display();

    box1.Score();
    box2.Score();
    box3.Score();
    box4.Score();
    box5.Score();
    box6.Score();
    box7.Score();
    box8.Score()
    box9.Score();
    box10.Score();
    box11.Score();
    box12.Score();
    box13.Score();
    box14.Score();
    box15.Score();
    box16.Score();

    box8x.Score()
    box9x.Score();
    box10x.Score();
    box11x.Score();
    box12x.Score();
    box13x.Score();
    box14x.Score();
    box15x.Score();
    box16x.Score();

    ground1.display();
    bird.display();
    ground2.display();
    //log6.display();
    slingshot.display();  
    text("Press space to reload",50,50)  
    text("Score:"+score,50,65) 
    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if (keyCode === 32){    
    slingshot.attach(bird.body);
    }
}


