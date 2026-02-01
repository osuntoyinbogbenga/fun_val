const noBtn = document.getElementById("noBtn");
const buttons = document.querySelector(".buttons");

noBtn.addEventListener("mouseenter", () => {
  const area = buttons.getBoundingClientRect();

  const maxX = area.width - noBtn.offsetWidth;
  const maxY = area.height - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

function yesClicked() {
  document.body.innerHTML = `
    <div class="success">
      <div class="big-emoji">😌</div>
      <h1>I knew you’d say yes</h1>
    </div>
  `;
}
