let NUM_OF_PARTICLES = 15; // Decide the initial number of particles.

let spiders = [];

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("p5-canvas-container");
  colorMode(HSB)

  // generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    spiders.push(new Spider(random(width), 0));
  }
}

function draw() {
  background(38, 60, 100);
  // update and display
  for (let i = 0; i < spiders.length; i++) {
    spiders[i].update();
    spiders[i].display();
    spiders[i].checkPosition()
    for (let j=spiders.length - 1; j >= 0; j--){
      if (spiders[i].break == true){
        spiders.splice(i,1)
        spiders.push(new Spider(random(width),0))
      }
    }
  }
}


class Spider {
  // constructor function
  constructor(startX, startY) {
    // properties (variables): particle's characteristics
    this.x = startX;
    this.y = startY;
    this.dia = random(10, 50);
    this.angle = random(PI)
    this.speed = random(0.1, 2)
    this.h = random(360)
    this.break = false
  }
  // methods (functions): particle's behaviors
  update() {
    // (add) 

    this.y += this.speed
  }
  display() {
    push();

    translate(this.x, this.y);

    

    //create the spider silk
    push()
    colorMode(HSB)
    for (let i=0; i<spiders.length; i++){
      stroke(this.h, 60, 100)
      strokeWeight(this.dia/15)
      line(0,-this.y , 0, 0)
    }
    pop()

    let oscVal = sin(frameCount*this.angle*0.05)*0.3

    //create the spider legs
    push()
    for (let i=0; i<PI/3; i+= PI/12){
      stroke(0)
      strokeWeight(3)
      push()
      rotate(-i + oscVal)
      line(0, 0, -4*this.dia/5, 0)
      push()
      translate(-4*this.dia/5,0)
      line(0,0,-3,3)
      pop()
      pop()
  
      }
    pop()

    push()
    for (let i=0; i<PI/3; i+= PI/12){
      stroke(0)
      strokeWeight(3)
      push()
      rotate(i + oscVal)
      line(0, 0, 4*this.dia/5, 0)
      push()
      translate(4*this.dia/5,0)
      line(0,0,3,3)
      pop()
      pop()
  
      }
    pop()

    //create the spider bodies
    noStroke()
    fill(0)
    circle(0, 0, this.dia);
    noStroke()
    fill(360)
    circle(-this.dia/8, 0, this.dia/3)//the spider eyes
    circle(this.dia/8, 0, this.dia/3)
    fill(0)
    circle(-this.dia/8, 0, this.dia/5)
    circle(this.dia/8, 0, this.dia/5)



    pop();
  }

  checkPosition(){
    if (this.y >= height){
      this.break = true
    }
  }
}


