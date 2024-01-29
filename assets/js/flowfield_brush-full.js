let SIM_STEP = 0.1;

let SLIDER_BRUSH_RADIUS;
let SLIDER_BRUSH_PARTICLES;
let SLIDER_FIELD_STABILITY;

let particleSystem;
let flowField

let backgroundDraw;
let fieldMove;


let PARTICLE_MAX_SPEED = 6;
let PARTICLE_MASS = 0.1;
let PARTICLE_RADIUS = 3;
let PARTICLE_TTL = 300;

let _numParticles;

let color1 = 0;
let color2 = 250;

function setup() {
  print(document.body.clientWidth-300);
  createCanvas(windowWidth, windowHeight);

  colorPick();

  background(0);

  colorMode(HSB);

  SLIDER_BRUSH_PARTICLES = document.getElementById('density');
  SLIDER_BRUSH_RADIUS = document.getElementById('radius');
  SLIDER_FIELD_STABILITY = document.getElementById('stability');

  _numParticles = 0;
  let grid_size = 20;
  let inc = parseFloat(SLIDER_FIELD_STABILITY.value);
  let Zinc = 0.003;
  let F_mag = 0.6;
  let max_angle = 4 * PI;
  flowField = new FlowField(grid_size, inc, Zinc, F_mag, max_angle);

  particleSystem = new ParticleSystem(flowField);

}

function draw() {

  if (backgroundDraw) {
    background(0);
  }

  stroke(0);
  fill(255, 0, 0);

  flowField.update();

  particleSystem.run();

  if (backgroundDraw) {
    printInfo();
    stroke(255);
    noFill();
    circle(mouseX, mouseY, SLIDER_BRUSH_RADIUS.value * 2);
  }
}

function drawVectors(draw) {
  backgroundDraw = draw;
  setup();
}

function flowFieldMove(move) {
  fieldMove = move;
}

function printInfo() {

  textSize(25);
  textStyle(BOLD);
  fill(0);
  text(floor(frameRate()), 20, 30);
}

function keyPressed() {
  if (key == "p" || key == "P") {
    particleSystem.addRandomParticle();
  }
}

function mousePressed() {
  addParticles();
}

function mouseDragged() {
  addParticles();
}

function addParticles() {
  if (mouseX > 0)
  {
    let origin = createVector(width, height / 2);
    let pos = createVector(mouseX, mouseY);
    let vel = createVector((pos.x - origin.x), (pos.y - origin.y));
    let c = color(random(color1, color2), 70, map(noise(millis()), 0, 1, 0, 100));
    let offset;
    for (let i = 0; i < SLIDER_BRUSH_PARTICLES.value; i++) {
      offset = createVector(random(-1, 1), random(-1, 1)).normalize().mult(random(SLIDER_BRUSH_RADIUS.value));
      particleSystem.addParticle(createVector(mouseX + offset.x, mouseY + offset.y), createVector(), c, PARTICLE_TTL / random(1, 10));
    }
  }
}



class Particle {

  constructor(particleSystem, initPos, initVel, maxSpeed, mass, radius, color, TTL) {
    this.pos = initPos;
    this.vel = initVel;
    this.maxSpeed = maxSpeed;
    this.acc = createVector(0.0, 0.0);
    this.F = createVector(0.0, 0.0);
    this.m = mass;
    this.r = radius;
    this.particleSystem = particleSystem;
    this.color = color;
    this.TTL = TTL;
  }

  run() {
    if (this.isDead())
      return;
    this.updateForce();
    // Simplectic Euler
    this.acc = p5.Vector.div(this.F, this.m);
    this.vel.add(p5.Vector.mult(this.acc, SIM_STEP));
    this.vel.limit(this.maxSpeed);
    this.pos.add(p5.Vector.mult(this.vel, SIM_STEP));

    if (this.pos.x < 0)
      this.pos.x = width;
    if (this.pos.x > width)
      this.pos.x = 0;
    if (this.pos.y < 0)
      this.pos.y = height;
    if (this.pos.y > height)
      this.pos.y = 0;

    this.TTL--;

    this.draw();
  }

  updateForce() {
    this.F = createVector();
    this.F.add(this.particleSystem.flowField.calculateForce(this.pos.x, this.pos.y));
  }

  draw() {
    this.color.setAlpha(map(this.TTL, PARTICLE_TTL, 0, 1, 0));
    stroke(this.color);
    fill(this.color);
    //Draw circle
    /*
    let radius = map(this.TTL, this.max_TTL, 0, this.r, 0);
    circle(this.pos.x, this.pos.y, radius);*/

    //Draw line
    push();
    strokeWeight(2);
    let velNorm = this.vel.copy();
    let size = map(this.TTL, PARTICLE_TTL, 0, 1, 0.5);
    velNorm.normalize().mult(15);
    translate(this.pos.x, this.pos.y);
    scale(size);
    line(0, 0, velNorm.x, velNorm.y);
    pop();
  }

  isDead() {
    if (this.TTL < 0.0)
      return true;
    else
      return false;
  }

}

class ParticleSystem {

  constructor(flowField) {
    this.flowField = flowField;
    this.particles = [];
  }

  addParticle(pos, vel, c, TTL) {
    // Código para añadir un cohete a la simulación
    this.particles.push(new Particle(this, pos, vel, PARTICLE_MAX_SPEED, PARTICLE_MASS, PARTICLE_RADIUS, c, TTL));
  }

  run() {
    for (let i = 0; i < this.particles.length; i++) {
      let p = this.particles[i];
      p.run();
    }
  }
}

class FlowField {

  constructor(grid_size, inc, Zinc, Fmag, m_ang) {
    this.grid_size = grid_size;
    this.cols = floor(width / this.grid_size);
    this.rows = floor(height / this.grid_size);
    this.flow_vectors = [];
    this.inc = inc;
    this.Zinc = Zinc;
    this.noiseZ = 0;
    this.Fmag = Fmag;
    this.max_angle = m_ang;
  }

  update() {
    let noiseY = 0;
    for (let y = 0; y <= this.rows; y++) {
      let noiseX = 0;
      for (let x = 0; x <= this.cols; x++) {
        let a = noise(noiseX, noiseY, this.noiseZ) * this.max_angle;
        this.flow_vectors[x + y * this.cols] = p5.Vector.fromAngle(a);
        strokeWeight(2);
        stroke(100);
        if (backgroundDraw) {
          push();
          translate(x * this.grid_size, y * this.grid_size);
          rotate(this.flow_vectors[x + y * this.cols].heading());
          line(0, 0, this.grid_size, 0);
          pop();
        }
        noiseX += this.inc;
      }
      noiseY += this.inc;
    }
    if (fieldMove)
      this.noiseZ += this.Zinc;
  }

  calculateForce(x, y) {
    if (x >= 0 && x <= width && y >= 0 && y <= height) {

      let fx = floor(x / this.grid_size);
      let fy = floor(y / this.grid_size);
      let F = this.flow_vectors[fx + fy * this.cols];
      F.normalize().mult(this.Fmag);
      return F;
    }
  }

}


function colorPick(value1, value2) {
  if (value1 != null)
    color1 = parseInt(value1);
  document.getElementById('colorBox1').style.backgroundColor = `hsl(${color1}, 100%, 50%)`;
  document.getElementById('mySlider1').value = color1;
  
  if (value2 != null)
  color2 = parseInt(value2);
  document.getElementById('colorBox2').style.backgroundColor = `hsl(${color2}, 100%, 50%)`;
  document.getElementById('mySlider2').value = color2;
};

// Add the window onload function
/*
window.onload = function() {
  var canvas = document.getElementById('p5-canvas');
  function resizeCanvas() {
    canvas.style.width = window.innerWidth;
    canvas.style.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
};*/

window.onload = function() {
  document.getElementById('settings-toggle').addEventListener('click', function() {
    var settings = document.getElementById('settings');
    if (settings.style.transform === 'translateX(-100%)'){
      settings.style.transform = 'translateX(0%)';
    } else {
      settings.style.transform = 'translateX(-100%)';
    } 
  });
};

window.addEventListener('load', function() {
  document.addEventListener('touchmove', function(e) {
    e.preventDefault();
  }, { passive: false });
});