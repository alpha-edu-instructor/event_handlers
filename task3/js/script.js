const colors = [
  { hex: "#FF5733", name: "Красно-оранжевый" },
  { hex: "#33FFBD", name: "Мятный" },
  { hex: "#FF33F6", name: "Розовый" },
  { hex: "#337BFF", name: "Синий" },
  { hex: "#FFB533", name: "Персиковый" },
  { hex: "#75FF33", name: "Салатовый" },
  { hex: "#8D33FF", name: "Фиолетовый" },
  { hex: "#33FFF5", name: "Бирюзовый" },
  { hex: "#FFC300", name: "Желтый" },
  { hex: "#C70039", name: "Темно-красный" }
];

const button = document.getElementById("change");
const text = document.getElementById("color");

function changeBg() {
  const index = Math.floor(Math.random() * colors.length);
  const currentColor = color[index];
  text.textContent = `Текущий текст: ${currentColor.name}`;
  document.body.style.background = currentColor.hex;
}

button.addEventListener("click", changeBg);