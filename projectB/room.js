let clickables = []
let audios = []
let clickableImages = []
let roomBG
let bed
let piano
let table
let books
let lights
let player
let carpet
let sunflowers
let frida
let stickyNotes
let isAudioPlaying = false
function preload(){
  roomBG = loadImage("images/room2.jpg")
  bed = loadImage("images/Furniture_of_America_Hemps_Traditional_Wood_Poster_Bed__Queen__Brown-removebg-preview.png")
  piano = loadImage("images/casa-removebg-preview.png")
  table = loadImage("images/Square_Kang_Table_with_Cabriole_Legs-removebg-preview.png")
  books = loadImage("images/stacked_books.png")
  lights = loadImage("images/Vintage_Art_Deco_Saturn_Brass_Hanging_Light_Frosted_Star_Glass_Shade_Lamp-removebg-preview.png")
  player = loadImage("images/9_Best_Cassette_Players__Reviews___Guide-removebg-preview.png")
  carpet = loadImage("images/sun-rug-under-bed.png")
  sunflowers = loadImage("images/vangogh-sunflowers.png")
  frida = loadImage("images/tree-of-hope-removebg-preview.png")
  stickyNotes = loadImage("images/sticky_note_wall-removebg-preview.png")
  

  audios.push(loadSound("audio/My-Love-Mine-All-Mine.mp3"))
  audios.push(loadSound("audio/Keep-Breathing.mp3"))
  audios.push(loadSound("audio/Life-Is.mp3"))
  audios.push(loadSound("audio/Both-Sides-Now.mp3"))
  audios.push(loadSound("audio/Let-It-Be.mp3"))

  audios.push(loadSound("audio/SylviaPlath.mp3"))
  audios.push(loadSound("audio/pillow-narrative.m4a"))
  audios.push(loadSound("audio/Diary-narrative.m4a"))
  audios.push(loadSound("audio/Mobilephone-narrative.mp3"))



  clickableImages.push(loadImage("images/cassette1-removebg-preview.png")) //0
  clickableImages.push(loadImage("images/cassette2-removebg-preview.png")) //1
  clickableImages.push(loadImage("images/cassette3-removebg-preview.png")) //2
  clickableImages.push(loadImage("images/cassette4-removebg-preview.png")) //3
  clickableImages.push(loadImage("images/cassette5-removebg-preview.png")) //4

  clickableImages.push(loadImage("images/slyvia_plath_collected_poems-removebg-preview.png")) //5
  clickableImages.push(loadImage("images/Faded_Turkish_Decorative_Pillow-removebg-preview.png")) //6
  clickableImages.push(loadImage("images/diary.png"))//7
  clickableImages.push(loadImage("images/mobilePhone.png")) //8

  

}

class Clickable {
  constructor(x, y, w, h, img, audio){
    this.x = x
    this.y = y
    this.w = w
    this.h = h 
    this.img = img
    this.audio = audio
  }

  display(){
    image(this.img, this.x, this.y, this.w, this.h)
  }

  clicked(){
    return (mouseX > this.x && mouseX < this.x+this.w && mouseY > this.y && mouseY < this.y+this.h)
  }

  playAudio(){
      if (this.audio.isPlaying()){
        this.audio.pause()
        isAudioPlaying = false
      } else {
        this.audio.play()
        isAudioPlaying = true
    }
  }

}





function setup() {
    let canvas=createCanvas(windowWidth, windowHeight);
    canvas.id("p5-canvas")
    canvas.parent("room-container")

    clickables.push(new Clickable(windowWidth*0.6, windowHeight*0.8, windowWidth*0.02, windowHeight*0.05, clickableImages[0], audios[0]))
    clickables.push(new Clickable(windowWidth*0.55, windowHeight*0.8, windowWidth*0.03, windowHeight*0.05, clickableImages[1], audios[1]))
    clickables.push(new Clickable(windowWidth*0.58, windowHeight*0.8, windowWidth*0.01, windowHeight*0.04, clickableImages[2], audios[2]))
    clickables.push(new Clickable(windowWidth*0.6, windowHeight*0.85, windowWidth*0.04, windowHeight*0.05, clickableImages[3], audios[3]))
    clickables.push(new Clickable(windowWidth*0.6, windowHeight*0.75, windowWidth*0.015, windowHeight*0.05, clickableImages[4], audios[4]))

    clickables.push(new Clickable(windowWidth*0.6, windowHeight*0.5, windowWidth*0.06, windowHeight*0.1, clickableImages[5], audios[5])) //sylviaplath
    clickables.push(new Clickable(windowWidth*0.15, windowHeight*0.5, windowWidth*0.15, windowHeight*0.2, clickableImages[6], audios[6])) //pillow
    clickables.push(new Clickable(windowWidth*0.2, windowHeight*0.85, windowWidth*0.06, windowHeight*0.07, clickableImages[7], audios[7])) //mobile phone
    clickables.push(new Clickable(windowWidth*0.35, windowHeight*0.6, windowWidth*0.03, windowHeight*0.06, clickableImages[8], audios[8])) //diary

    

  }

  
  function draw() {
    
    image(roomBG, 0, 0, windowWidth, windowHeight)
    filter(POSTERIZE,8)
    image(carpet, windowWidth * 0.05, windowHeight*0.65, windowWidth * 0.6, windowHeight * 0.3)
    image(bed, windowWidth * 0.1, windowHeight * 0.35, windowWidth * 0.4, windowHeight * 0.6)
    image(stickyNotes, windowWidth*0.15, windowHeight*0.1, windowWidth*0.2, windowHeight*0.4)
    image(piano, windowWidth * 0.7, windowHeight * 0.2, windowWidth * 0.4, windowHeight * 0.6)
    image(table, windowWidth * 0.5, windowHeight * 0.65, windowWidth * 0.25, windowHeight * 0.5)
    image(books, windowWidth * 0.5, windowHeight * 0.35, windowWidth * 0.2, windowHeight * 0.4)
    image(lights, windowWidth * 0.5, -windowHeight*0.05, windowWidth * 0.15, windowHeight * 0.3)
    image(player, windowWidth * 0.65, windowHeight*0.7, windowWidth * 0.07, windowHeight * 0.15)
    image(sunflowers, windowWidth * 0.85, windowHeight*0.35, windowWidth * 0.07,windowHeight * 0.15)
    image(frida, windowWidth*0.7, windowHeight*0.2, windowWidth*0.1, windowHeight*0.25)
    

    for(clickable of clickables){
      clickable.display()
    }

    leaveStickyNote()
  
  }

  function mousePressed(){
    for (let clickable of clickables){
      if (clickable.clicked()){
        clickable.playAudio()
      }
    }

  }

  function leaveStickyNote(){
    let x = windowWidth*0.15
    let y = windowHeight*0.1
    let w = windowWidth*0.2
    let h = windowHeight*0.4
    image(stickyNotes, windowWidth*0.15, windowHeight*0.1, windowWidth*0.2, windowHeight*0.4)
    if (mouseIsPressed && mouseX > x && mouseX < x+w && mouseY > y && mouseY < y+h){
      window.open("https://solarfri2006.github.io/cclab_F24/projectB-Stickynotes/", "_blank", "width:600, height:800")
    }
  }

  function windowResized(){
    resizeCanvas(windowWidth, windowHeight)
  }