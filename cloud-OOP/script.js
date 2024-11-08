let x, y;
let cloud;
let cloud2;

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent("p5-container");
    x = width/2;
    y = height/2;
    cloud = new Cloud(random(width), 0, 100); //Cloud is a class
    cloud2 = new Cloud(random(width), 0, 100)
    
}

function draw() {
    background(100,50);
    //cloud(x, y, 100)
    cloud.show();
    // cloud.move()
    cloud2.show()
}

// function cloud(u, v, s){
//     push()
//     translate(u,v)
//     noStroke()
//     //maincircle
//     circle(0, 0, 100)
//     //circles around
//     for (let a=0; a<PI*2; a+=PI/6){
//         push()
//         rotate(a)
//         circle(s*0.5,0,s*0.5)
//         pop()
//     }
//     //face
//     fill(0)
//     circle(-s*0.3, 0, s*0.05)
//     circle(s*0.3, 0, s*0.05)
//     arc(0,0,s*0.3,s*0.3,0,PI)
//     pop()
// }

// function move(){
//     y = height*noise(frameCount*0.01)

// }

class Cloud{
    constructor(u,v,s){
        this.x = u;
        this.y = v;
        this.s = s;
        this.speed = random(0.005, 0.01)
        this.h = random(0,360)
    }
    
    show(){
        push()
        colorMode(HSB)
        translate(this.x,this.y)
        noStroke()
        fill(this.h, 10, 100)
        //maincircle
        circle(0, 0, this.s)
        //circles around
        for (let a=0; a<PI*2; a+=PI/6){
            push()
            rotate(a)
            circle(this.s*0.5,0,this.s*0.5)
            pop()
        }
        //face
        fill(0)
        circle(-this.s*0.3, 0, this.s*0.05)
        circle(this.s*0.3, 0, this.s*0.05)
        arc(0,0,this.s*0.3,this.s*0.3,0,PI)
        pop()

        this.y = height*noise(frameCount*this.speed)
    }

    // move(){
        
    // }
}