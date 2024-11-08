/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new Skelekat(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class Skelekat {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;

    // add properties for your dancer here:
    this.originaly = startY
    this.m = 0;

    this.armAngle1 = 0;
    this.armAngle2 = 0;
    this.noiseVal = 0;
    this.legAngle1 = 0;
    this.legAngle2 = 0;
    
    // this.mic = new p5.AudioIn();
    // this.mic.start();
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    this.oscVal = sin(frameCount * 0.35);
    this.oscVal2 = sin(frameCount * 0.1)
    this.noiseVal = noise(frameCount* 0.01)
    this.armAngle1 = map(this.oscVal, 0, 1, PI / 4, PI / 3);
    this.armAngle2 = map(this.oscVal, 0, 1, PI / 80, PI / 10);
    this.legAngle1 = map(this.oscVal2, 0, 1, 0, PI/10)
    this.legAngle2 = map(this.oscVal2, 0, 1, PI/4, PI/2)

    this.m += this.noiseVal;
    if (this.m > 5) {
      this.m = -this.m;
    }
    
    
    // this.level = this.mic.getLevel();
    // this.jump = map(this.level, 0, 1, 0, 20);
    // this.y = this.originaly - this.jump;


  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    colorMode(HSB);
    
    //draw the limbs
    
    for (let i=0; i<40; i+=10){
      let h =2*i + i*sin(frameCount*0.1)
      rect(-22, h*0.3-5, 20, 5)
    }
    
    for (let i=0; i<40; i+=10){
      let h =2*i + i*cos(frameCount*0.1)
      rect(2, h*0.3-5, 20, 5)
    }
    
    
    //draw the joints & legs
    //draw right leg
    strokeWeight(3)
    push()
    fill(255);
    rotate(this.legAngle1)
    rect(-26, 18, 25, 15);
    rect(-17, 30, 8, 25);
    push()
    translate(-17,55)
    rotate(-this.legAngle1)
    rect(0, 0, 8, 37);
    circle(3, 0, 13);
    pop()
    pop()
    
    //draw left leg
    push()
    rotate(this.legAngle2)
    rect(1, 18, 25, 15);
    rect(10, 30, 8, 25);
    push()
    translate(10,55)
    rotate(-this.legAngle2)
    rect(0, 0, 8, 35);
    circle(3, 0, 13);
    pop()
    pop()
    

    //draw the joints & arms
    stroke(255);

    push();
    fill(255)
    rotate(this.armAngle1);
    strokeWeight(1);
    arc(-25, -5, 15, 15, PI / 2, PI + PI / 2);
    strokeWeight(6);
    line(-35, 0, -50, 20);
    push();
    translate(-50, 20);
    rotate(this.armAngle1);
    line(0, 0, -30, 0);
    pop();
    pop();

    push();
    fill(255)
    rotate(this.armAngle2);
    strokeWeight(1);
    arc(25, -5, 15, 15, PI + PI / 2, PI / 2);
    strokeWeight(6);
    line(30, 0, 50, 20);
    push();
    translate(50, 20);
    rotate(this.armAngle2);
    line(0, 0, 30, 0);
    pop();
    pop();

    //draw the head
    push();
    fill(255);
    translate(this.m, -40);
    ellipse(0, 0, 50, 35); //draw head
    //draw ears
    triangle(-25, -5, -5, -17, -25, -40);
    triangle(25, -5, 5, -17, 25, -40);
    //draw neck
    stroke(0)
    strokeWeight(1)
    rect(-5, 20, 10, 5);
    rect(-5, 28, 10, 5);
    fill(0);
    //draw eyes
    circle(-10, 5, 13);
    circle(10, 5, 16);
    stroke(60,random(0,80),100) //draw aura
    strokeWeight(3)
    ellipse(0,-40, 30,10)
    pop();
    
    
    //draw the heart
    push()
    noStroke()
    fill(0,100,80)
    arc(-5, 5, 10, 10, PI, PI * 2)
    arc(5, 5, 10, 10, PI, PI * 2)
    triangle(-10, 5, 10, 5, 0, 15)
    pop()

    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    // this.drawReferenceShapes()

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/