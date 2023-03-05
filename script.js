var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var img = new Image();
img.src = "bitcoin.png";
var particles = [];

function Particle() {
  this.x = Math.random() * canvas.width;
  this.y = 0;
  this.vx = -2 + Math.random() * 4;
  this.vy = 4 + Math.random() * 4;
  this.gravity = 0.2;
}

Particle.prototype.draw = function() {
  ctx.drawImage(img, this.x, this.y, 50, 50);
};

Particle.prototype.update = function() {
  this.x += this.vx;
  this.y += this.vy;
  this.vy += this.gravity;

  if (this.y > canvas.height) {
    this.y = 0;
    this.vy = 4 + Math.random() * 4;
  }
};

for (var i = 0; i < 50; i++) {
  particles.push(new Particle());
}

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < particles.length; i++) {
    particles[i].draw();
    particles[i].update();
  }
  requestAnimationFrame(loop);
}

loop();
