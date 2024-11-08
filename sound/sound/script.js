let mySound;
let mic
//add another sound my creating another variable
// function preload(){
// mySound = loadSound("assets/song.mp3")
// }

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent("p5-container");
    //mySound.loop();
    mic = new p5.AudioIn()
    mic.start()
  }
  
  function draw() {
    background(220);
    let level = mic.getLevel()
    textSize(30)
    text(level,width/2,height/2)
    let s = map(level, 0, 1, 0, 10*width)
    circle(width/2, height/2, s)
  }

// function mousePressed(){
//     circle(mouseX,mouseY,100)
//     if(mySound.isPlaying()==false){
//     mySound.play()
//     }else{
//         mySound.pause()
//     }
// }