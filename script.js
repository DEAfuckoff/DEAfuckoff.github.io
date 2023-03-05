var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var img = new Image();
img.src = "bitcoin.png";
var particles = [];

function createParticle() {
  var particle = document.createElement("div");
  particle.style.position = "absolute";
  particle.style.top = "0";
  particle.style.left = Math.random() * window.innerWidth + "px";
  particle.style.width = "50px";
  particle.style.height = "50px";
  particle.style.backgroundImage = "url('bitcoin.png')";
  particle.style.backgroundSize = "contain";
  particle.style.backgroundRepeat = "no-repeat";
  document.body.appendChild(particle);
  particles.push(particle);
}

function animateParticle(particle) {
  anime({
    targets: particle,
    translateY: [
      { value: window.innerHeight, duration: 2000, easing: "linear" },
    ],
    rotate: {
      value: 360,
      duration: 1000,
      easing: "easeInOutSine",
    },
    complete: function(anim) {
      particle.parentNode.removeChild(particle);
    },
  });
}

setInterval(function() {
  createParticle();
  animateParticle(particles[particles.length - 1]);
}, 100);
