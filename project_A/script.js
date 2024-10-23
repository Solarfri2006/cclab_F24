let s = 30;
let groupX;
let groupY;
let wingAngle = 0;
let oscillationAngle = 0;

let debrisX;
let debrisY;
let showDebris = false;

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.id("p5-canvas")
  canvas.parent("p5-canvas-container")
  colorMode(HSB);
  groupX = width / 2;
  groupY = height / 2;
}

function draw() {
  background(260, 100, 70);

  for (let i = 0; i < 10; i++) {
    let x1 = random(width / 5);
    let y1 = height - random(20, 200);
    let r = random(2, 60);
    stroke(random(0, 360), random(0, 100), random(0, 100));
    strokeWeight(random(3, 10));
    fill(random(340, 360), 65, random(97, 140));
    square(x1, y1, r);
  }

  for (let i = 0; i < 20; i++) {
    let x1 = random((3 * width) / 5, width);
    let y1 = height - random(40, 400);
    let r = random(10, 70);
    stroke(random(255), random(255), random(255));
    strokeWeight(random(3, 10));
    fill(random(340, 360), 65, random(97, 140));
    square(x1, y1, r);
  }

  for (let i = 0; i < 30; i++) {
    let x3 = random(200, 300);
    let y3 = random(height);
    r1 = random(1, 100);
    noFill();
    stroke(random(85, 140), random(50, 100), 55);
    strokeWeight(random(0, 5));
    circle(x3, y3, r1);
  }

  for (let i = 0; i < 10; i++) {
    let x4 = random(450, 500);
    let y4 = random(height);
    r2 = random(1, 50);
    noFill();
    stroke(360);
    strokeWeight(1, 10);
    circle(x4, y4, r2);
  }

  if (keyIsPressed) {
    generateDebris();
    showDebris = true;
  }

  if (showDebris) {
    drawDebris();
  }

  if (showDebris) {
    let dx = debrisX - groupX;
    let dy = debrisY - groupY;
    let distDN = dist(debrisX, debrisY, groupX, groupY);

    if (distDN > 10) {
      groupX += (dx / distDN) * 7;
      groupY += (dy / distDN) * 7;
    } else {
      showDebris = false;
    }
  } else {
    if (mouseIsPressed) {
      groupX = lerp(groupX, mouseX, 0.05);
      groupY = lerp(groupY, mouseY, 0.05);
    } else {
      // Apply oscillation for gliding back and forth motion
      let oscillationX = 30 * sin(oscillationAngle);
      let oscillationY = 20 * cos(oscillationAngle);
      oscillationAngle += 0.05;
      groupX += noise(0.05 * frameCount) * oscillationX * 0.5;
      groupY += noise(0.05 * frameCount) * oscillationY * 0.5;

      groupX = constrain(groupX, 0, width + 100);
      groupY = constrain(groupY, 0, height + 100);
    }
  }

  wingAngle = (PI / 6) * sin(frameCount * 0.1);

  drawNeon(groupX, groupY);
}

function drawNeon(x, y) {
  push();
  translate(x, y);

  // Body
  noStroke();
  fill(random(55, 180), 50, 100);
  circle(0, 0, 120);

  // Eyes
  fill(0);
  arc(-15, -20, 80, 65, PI / 4, PI + PI / 4);
  arc(15, -20, 80, 65, PI + HALF_PI + PI / 4, HALF_PI + PI / 4);

  noStroke();
  fill(46, 97, 91);
  circle(-15, -5, 30); // Left eye
  circle(15, -5, 30); // Right eye

  // Pupils
  fill(0);
  circle(-15, -5, 10); // Left pupil
  circle(15, -5, 10); // Right pupil

  // Beak
  fill(45, 100, 20);
  triangle(-5, 0, 5, 0, 0, 30);

  // Flapping wings
  drawFlappingWings();

  pop();
}

function drawFlappingWings() {
  // Left wing
  push();
  translate(-10, 0);
  rotate(wingAngle);
  fill(random(55, 180), 70, 100);
  triangle(-150, 70, -90, -20, -50, 0);
  pop();

  // Right wing
  push();
  translate(10, 0);
  rotate(-wingAngle);
  fill(random(55, 180), 70, 100);
  triangle(150, 70, 90, -20, 50, 0);
  pop();
}

function generateDebris() {
  debrisX = random(0, width);
  debrisY = random(0, height);
}

function drawDebris() {
  stroke(random(0, 10));
  fill(random(0, 360));
  triangle(
    debrisX,
    debrisY,
    debrisX + random(-40, 40),
    debrisY + random(-40, 40),
    debrisX + random(-40, 40),
    debrisY + random(-40, 40)
  );
}
