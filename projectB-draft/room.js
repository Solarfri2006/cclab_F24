let clickables = []
let audios = []
let images = []
let roomBG
let bed
let piano
let table
let books
let lights
let player
let cassette1
function preload(){
  roomBG = loadImage("images/room2.jpg")
  bed = loadImage("images/Furniture_of_America_Hemps_Traditional_Wood_Poster_Bed__Queen__Brown-removebg-preview.png")
  piano = loadImage("images/casa-removebg-preview.png")
  table = loadImage("images/Square_Kang_Table_with_Cabriole_Legs-removebg-preview.png")
  books = loadImage("images/stacked_books.png")
  lights = loadImage("images/Vintage_Art_Deco_Saturn_Brass_Hanging_Light_Frosted_Star_Glass_Shade_Lamp-removebg-preview.png")
  player = loadImage("images/9_Best_Cassette_Players__Reviews___Guide-removebg-preview.png")

  images.push(loadImage("images/cassette1-removebg-preview.png"))
  images.push(loadImage("images/cassette2-removebg-preview.png"))
  images.push(loadImage("images/cassette3-removebg-preview.png"))
  images.push(loadImage("images/cassette4-removebg-preview.png"))
  images.push(loadImage("images/cassette5-removebg-preview.png"))


}

class Clickable {
  constructor(img, x, y, w, h, audio){
    this.img = img
    this.x = x
    this.y = y
    this.w = w
    this.h = h 
    this.audio = audio
  }

  display(){
    image(this.img, this.x, this.y, this.w, this.h)
  }

  isClicked(){
    this.clicked = mouseX > this.x && mouseX < this.x+this.w && mouseY > this.y && mouseY < this.y+this.h
  }
}

function setup() {
    let canvas=createCanvas(windowWidth, windowHeight);
    canvas.id("p5-canvas")
    canvas.parent("room-container")
    
  }

  
  function draw() {
    
    image(roomBG, 0, 0, windowWidth, windowHeight)
    filter(POSTERIZE,8)
    image(bed, windowWidth * 0.1, windowHeight * 0.35, windowWidth * 0.4, windowHeight * 0.6)
    image(piano, windowWidth * 0.7, windowHeight * 0.2, windowWidth * 0.4, windowHeight * 0.6)
    image(table, windowWidth * 0.5, windowHeight * 0.65, windowWidth * 0.25, windowHeight * 0.5)
    image(books, windowWidth * 0.5, windowHeight * 0.35, windowWidth * 0.2, windowHeight * 0.4)
    image(lights, windowWidth * 0.5, -windowHeight*0.05, windowWidth * 0.15, windowHeight * 0.3)
    image(player, windowWidth * 0.65, windowHeight*0.7, windowWidth * 0.07, windowHeight * 0.15)
  
  
  
  
  }

  function windowResized(){
    resizeCanvas(windowWidth, windowHeight)
  }