let NUM_OF_PARTICLES = 15; // Decide the initial number of particles.

let particles = [];

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("p5-canvas-container");
  colorMode(HSB)

  // generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles.push(new Particle(random(width), 0));
  }
}

function draw() {
  background(38, 60, 100);
  // update and display
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].display();
    particles[i].checkPosition()
    for (let j=particles.length - 1; j >= 0; j--){
      if (particles[i].break == true){
        particles.splice(i,1)
        particles.push(new Particle(random(width),0))
      }
    }
  }
}


class Particle {
  // constructor function
  constructor(startX, startY) {
    // properties (variables): particle's characteristics
    this.x = startX;
    this.y = startY;
    this.dia = random(10, 50);
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
    for (let i=0; i<particles.length; i++){
      stroke(this.h, 60, 100)
      strokeWeight(this.dia/15)
      line(0,-this.y , 0, 0)
    }
    pop()

    //create the spider legs
    push()
    for (let i=0; i<PI/3; i+= PI/12){
      stroke(0)
      strokeWeight(3)
      push()
      rotate(-i)
      line(0, 0, -4*this.dia/5, 0)
      pop()
  
      }
    pop()

    push()
    for (let i=0; i<PI/3; i+= PI/12){
      stroke(0)
      strokeWeight(3)
      push()
      rotate(i)
      line(0, 0, 4*this.dia/5, 0)
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