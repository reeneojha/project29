const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20;
var ground;
var platform;
var polyImg,polygon;
var sling1;

function preload(){
    polyImg=loadImage("polygon.png");

}

function setup(){
    var canvas= createCanvas(1400,600);

    engine= Engine.create();
    world= engine.world;


    b1= new Block(1090,362,40,40);
    b2= new Block(1130,362,40,40);
    b3= new Block(1170,362,40,40);
    b4= new Block(1210,362,40,40);
    b5= new Block(1250,362,40,40);
    b6= new Block(1290,362,40,40);

    b7= new Block(1110,322,40,40);
    b8= new Block(1150,322,40,40);
    b9= new Block(1190,322,40,40);
    b10= new Block(1230,322,40,40);
    b11= new Block(1270,322,40,40);

    b12= new Block(1130,282,40,40);
    b13= new Block(1170,282,40,40);
    b14= new Block(1210,282,40,40);
    b15= new Block(1250,282,40,40);

    b16= new Block(1150,242,40,40);
    b17= new Block(1190,242,40,40);
    b18= new Block(1230,242,40,40);

    b19= new Block(1170,202,40,40);
    b20= new Block(1210,202,40,40);

    ground= new Ground(700,height-20,1400,10);
    platform= new Ground(1200,390,300,10);

    polygon= Bodies.circle(200,200,40);
    World.add(world,polygon);

    sling1= new Slingshot(polygon,{x:120,y:200});
}

function draw(){
    background(0);
    //Engine.update(engine);

    //ground.display();
    //platform.display();

    b1.display();
    b2.display();
    b3.display();
    b4.display(); 
    b5.display();  
    b6.display(); 
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    b17.display();
    b18.display();
    b19.display();
    b20.display();

    platform.display();
    ground.display();

    imageMode(CENTER);
    image(polyImg,polygon.position.x,polygon.position.y,60,60);

    sling1.display();
    Engine.update(engine);

}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    sling1.fly();
}

function detectCollision(){
    if(polygon.isTouching(b1)){
        Matter.Body.setStatic(b1,false);
    }
}