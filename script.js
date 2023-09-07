const container = document.querySelector("#container");
const color = ["#e74c3c", "#8e44ad", "#e67e22", "#2ecc71"];

const SQUARE = 200;

for (let i = 0; i < SQUARE; i++) {
  const squares = document.createElement("div");
  squares.classList.add("squares");

  squares.addEventListener("mouseover", () => setColor(squares));
  squares.addEventListener("mouseout", () => removeColor(squares));
  container.appendChild(squares);
}
function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  return color[Math.floor(Math.random() * color.length)];
}
