let nameField
let messageField
let noteX
let noteY
function setup() {
  let canvas = createCanvas(400, 400);
  canvas.id("p5-canvas")
    canvas.parent("p5-container")
  colorMode(HSB)
  background(random(100), 100, 100);
  nameField = createInput('')
  nameField.attribute('placeholder','Insert your name here')
  nameField.position(100, 100)
  nameField.size(150)
  
  
  messageField = createInput('')
  messageField.attribute('placeholder','Leave a loving message to others here!')
  messageField.position(100, 150)
  messageField.size(250)
}

function draw() {
  let name = nameField.value()
  let message = messageField.value()
  textSize(10)
  textWrap(WORD)
  text("My name is "+ name, 90,90, 100)
  text("The message I want to send out is: "+message, 100, 200, 200)
}
