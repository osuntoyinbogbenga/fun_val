const noBtn = document.getElementById("noBtn");
const buttons = document.querySelector(".buttons");

// Move the "No" button randomly every 300ms
function moveNoBtn() {
  const area = buttons.getBoundingClientRect();
  const maxX = area.width - noBtn.offsetWidth;
  const maxY = area.height - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// Continuous movement
setInterval(moveNoBtn, 300);

function yesClicked() {
  document.body.innerHTML = `
    <div class="success">
      <div class="big-emoji">😘💖</div>
      <h1>I knew you’d say yes!</h1>
      <p class="hint">Happy Valentine’s Day 💌</p>
      <button onclick="sendHug()" class="yes">Send a Hug 🤗</button>
      <p class="credit">💌 by Gbenga</p>
    </div>
  `;
  
  // Start floating hearts
  createHearts();
}

// Optional "hug" button interaction
function sendHug() {
  alert("🤗 HUG SENT! Love is in the air!");
}

// Create hearts animation
function createHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "💖";
    
    // Random horizontal start
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = (10 + Math.random() * 30) + "px";
    
    document.body.appendChild(heart);

    // Remove after animation
    setTimeout(() => {
      heart.remove();
    }, 3000);
  }, 300);
}
