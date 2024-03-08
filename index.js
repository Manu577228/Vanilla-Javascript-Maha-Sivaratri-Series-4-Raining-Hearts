function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "💛";
  document.body.appendChild(heart);

  const startLeft = Math.random() * window.innerWidth;
  const duration = Math.random() * 2 + 3;

  heart.style.left = `${startLeft}px`;
  heart.style.animation = `fall ${duration}s linear infinite`;

  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

function createHeartRain() {
  setInterval(createHeart, 300);
}

createHeartRain();
