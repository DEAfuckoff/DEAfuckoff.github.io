const numberOfBitcoin = 30;
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const bitcoinImage = new Image();
bitcoinImage.src = "bitcoin.png";

const bitcoins = [];
for (let i = 0; i < numberOfBitcoin; i++) {
  bitcoins.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 50 + 50,
    speed: Math.random() * 2 + 1
  });
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  bitcoins.forEach(bitcoin => {
    context.drawImage(bitcoinImage, bitcoin.x, bitcoin.y, bitcoin.size, bitcoin.size);
    bitcoin.y += bitcoin.speed;
    if (bitcoin.y > canvas.height) {
      bitcoin.y = 0 - bitcoin.size;
      bitcoin.x = Math.random() * canvas.width;
    }
  });
}

anime({
  duration: Infinity,
  update: draw
});
