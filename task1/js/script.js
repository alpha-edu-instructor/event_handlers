const incButton = document.querySelector("#inc");
const decButton = document.querySelector("#dec");
const count = document.querySelector("#count");

let num = 0;

function updateCount() {
  count.textContent = num;
}

function decrease() {
  num--;
  updateCount()
}

function increase() {
  num++;
  updateCount()
}

decButton.addEventListener("click", decrease);
incButton.addEventListener("click", increase);
updateCount()