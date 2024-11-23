let bubbles = []
// let n = 30
function setup() {
    let canvas = createCanvas(300, 600);
    canvas.parent("p5-container");
    for(let i=0; i<30; i++){
        bubbles[i] = new Bubble()
    }
}

function draw() {
    background(0,0,255);
    for(let i=0; i<30; i++){
        bubbles[i].update()
        bubbles[i].display()
        bubbles[i].putBack()
    }
}

function mousePressed(){
    bubbles.push(new Bubble(mouseX, mouseY))
}

class Bubble{
    constructor(){
        this.x = x
        this.y = y
        this.d = random(5, 50)
        this.speed = map(this.d, 5, 50, 2, 0.5)
        this.osc = new p5.TriOsc()
        this.envelope = new p5.Env()
        // set attackTime, decayTime, sustainRatio, releaseTime
        this.envelope.setADSR(0.001, 0.5, 0.1, 0.5);

        // set attackLevel, releaseLevel
        this.envelope.setRange(1, 0);
    }

    update(){
        this.y -= this.speed
    }

    display(){
        noStroke()
        fill(255, 100)
        circle(this.x, this.y, this.d)
    }

    putBack(){
        if (this.y < this.d/2){
            this.osc.start()
            let freq = map(this.d, 5, 50, 2000, 100)
            this.osc.freq(freq)
            this.envelope.play(osc, 0, 0.1);
            this.y = random(height+this.d, 2*height)
        }
    }
}